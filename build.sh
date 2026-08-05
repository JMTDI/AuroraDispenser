#
# SPDX-FileCopyrightText: 2024-2025 Aurora OSS
# SPDX-License-Identifier: GPL-3.0-or-later
#

# /bin/bash

# Cleanup
sh cleanup.sh

# Install dependencies
npm install

# Write accounts.txt from env var, if provided
if [ -n "$ACCOUNTS_TXT" ]; then
  mkdir -p resources
  # Converts literal \n sequences to real newlines (for env UIs that don't
  # support multi-line values), then appends a trailing newline.
  printf '%b\n' "$ACCOUNTS_TXT" > resources/accounts.txt
  echo "Wrote resources/accounts.txt from ACCOUNTS_TXT env var"
else
  echo "WARNING: ACCOUNTS_TXT env var not set, resources/accounts.txt not created"
fi

# app.js reads resources/blocked_ips.txt unconditionally at startup;
# create it empty if it doesn't already exist in the repo.
mkdir -p resources
if [ ! -f resources/blocked_ips.txt ]; then
  touch resources/blocked_ips.txt
  echo "Created empty resources/blocked_ips.txt"
fi

# Build
npx tsc -p .

cp -r resources dist/

echo "Build complete"