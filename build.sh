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
  printf '%s\n' "$ACCOUNTS_TXT" > resources/accounts.txt
  echo "Wrote resources/accounts.txt from ACCOUNTS_TXT env var"
else
  echo "WARNING: ACCOUNTS_TXT env var not set, resources/accounts.txt not created"
fi

# Build
npx tsc -p .

cp -r resources dist/

echo "Build complete"