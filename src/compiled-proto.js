/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GooglePlay = (function() {

    /**
     * Namespace GooglePlay.
     * @exports GooglePlay
     * @namespace
     */
    var GooglePlay = {};

    GooglePlay.DeviceConfigurationProto = (function() {

        /**
         * Properties of a DeviceConfigurationProto.
         * @memberof GooglePlay
         * @interface IDeviceConfigurationProto
         * @property {number|null} [touchScreen] DeviceConfigurationProto touchScreen
         * @property {number|null} [keyboard] DeviceConfigurationProto keyboard
         * @property {number|null} [navigation] DeviceConfigurationProto navigation
         * @property {number|null} [screenLayout] DeviceConfigurationProto screenLayout
         * @property {boolean|null} [hasHardKeyboard] DeviceConfigurationProto hasHardKeyboard
         * @property {boolean|null} [hasFiveWayNavigation] DeviceConfigurationProto hasFiveWayNavigation
         * @property {number|null} [screenDensity] DeviceConfigurationProto screenDensity
         * @property {number|null} [glEsVersion] DeviceConfigurationProto glEsVersion
         * @property {Array.<string>|null} [systemSharedLibrary] DeviceConfigurationProto systemSharedLibrary
         * @property {Array.<string>|null} [systemAvailableFeature] DeviceConfigurationProto systemAvailableFeature
         * @property {Array.<string>|null} [nativePlatform] DeviceConfigurationProto nativePlatform
         * @property {number|null} [screenWidth] DeviceConfigurationProto screenWidth
         * @property {number|null} [screenHeight] DeviceConfigurationProto screenHeight
         * @property {Array.<string>|null} [systemSupportedLocale] DeviceConfigurationProto systemSupportedLocale
         * @property {Array.<string>|null} [glExtension] DeviceConfigurationProto glExtension
         * @property {number|null} [deviceClass] DeviceConfigurationProto deviceClass
         * @property {number|null} [maxApkDownloadSizeMb] DeviceConfigurationProto maxApkDownloadSizeMb
         * @property {number|null} [smallestScreenWidthDP] DeviceConfigurationProto smallestScreenWidthDP
         * @property {number|null} [lowRamDevice] DeviceConfigurationProto lowRamDevice
         * @property {number|Long|null} [totalMemoryBytes] DeviceConfigurationProto totalMemoryBytes
         * @property {number|null} [maxNumOf_CPUCores] DeviceConfigurationProto maxNumOf_CPUCores
         * @property {Array.<GooglePlay.IDeviceFeature>|null} [deviceFeature] DeviceConfigurationProto deviceFeature
         * @property {number|null} [unknown28] DeviceConfigurationProto unknown28
         * @property {number|null} [unknown30] DeviceConfigurationProto unknown30
         */

        /**
         * Constructs a new DeviceConfigurationProto.
         * @memberof GooglePlay
         * @classdesc Represents a DeviceConfigurationProto.
         * @implements IDeviceConfigurationProto
         * @constructor
         * @param {GooglePlay.IDeviceConfigurationProto=} [properties] Properties to set
         */
        function DeviceConfigurationProto(properties) {
            this.systemSharedLibrary = [];
            this.systemAvailableFeature = [];
            this.nativePlatform = [];
            this.systemSupportedLocale = [];
            this.glExtension = [];
            this.deviceFeature = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceConfigurationProto touchScreen.
         * @member {number} touchScreen
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.touchScreen = 0;

        /**
         * DeviceConfigurationProto keyboard.
         * @member {number} keyboard
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.keyboard = 0;

        /**
         * DeviceConfigurationProto navigation.
         * @member {number} navigation
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.navigation = 0;

        /**
         * DeviceConfigurationProto screenLayout.
         * @member {number} screenLayout
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.screenLayout = 0;

        /**
         * DeviceConfigurationProto hasHardKeyboard.
         * @member {boolean} hasHardKeyboard
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.hasHardKeyboard = false;

        /**
         * DeviceConfigurationProto hasFiveWayNavigation.
         * @member {boolean} hasFiveWayNavigation
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.hasFiveWayNavigation = false;

        /**
         * DeviceConfigurationProto screenDensity.
         * @member {number} screenDensity
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.screenDensity = 0;

        /**
         * DeviceConfigurationProto glEsVersion.
         * @member {number} glEsVersion
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.glEsVersion = 0;

        /**
         * DeviceConfigurationProto systemSharedLibrary.
         * @member {Array.<string>} systemSharedLibrary
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.systemSharedLibrary = $util.emptyArray;

        /**
         * DeviceConfigurationProto systemAvailableFeature.
         * @member {Array.<string>} systemAvailableFeature
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.systemAvailableFeature = $util.emptyArray;

        /**
         * DeviceConfigurationProto nativePlatform.
         * @member {Array.<string>} nativePlatform
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.nativePlatform = $util.emptyArray;

        /**
         * DeviceConfigurationProto screenWidth.
         * @member {number} screenWidth
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.screenWidth = 0;

        /**
         * DeviceConfigurationProto screenHeight.
         * @member {number} screenHeight
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.screenHeight = 0;

        /**
         * DeviceConfigurationProto systemSupportedLocale.
         * @member {Array.<string>} systemSupportedLocale
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.systemSupportedLocale = $util.emptyArray;

        /**
         * DeviceConfigurationProto glExtension.
         * @member {Array.<string>} glExtension
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.glExtension = $util.emptyArray;

        /**
         * DeviceConfigurationProto deviceClass.
         * @member {number} deviceClass
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.deviceClass = 0;

        /**
         * DeviceConfigurationProto maxApkDownloadSizeMb.
         * @member {number} maxApkDownloadSizeMb
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.maxApkDownloadSizeMb = 50;

        /**
         * DeviceConfigurationProto smallestScreenWidthDP.
         * @member {number} smallestScreenWidthDP
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.smallestScreenWidthDP = 0;

        /**
         * DeviceConfigurationProto lowRamDevice.
         * @member {number} lowRamDevice
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.lowRamDevice = 0;

        /**
         * DeviceConfigurationProto totalMemoryBytes.
         * @member {number|Long} totalMemoryBytes
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.totalMemoryBytes = $util.Long ? $util.Long.fromBits(-234962944,1,false) : 8354971648;

        /**
         * DeviceConfigurationProto maxNumOf_CPUCores.
         * @member {number} maxNumOf_CPUCores
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.maxNumOf_CPUCores = 8;

        /**
         * DeviceConfigurationProto deviceFeature.
         * @member {Array.<GooglePlay.IDeviceFeature>} deviceFeature
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.deviceFeature = $util.emptyArray;

        /**
         * DeviceConfigurationProto unknown28.
         * @member {number} unknown28
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.unknown28 = 0;

        /**
         * DeviceConfigurationProto unknown30.
         * @member {number} unknown30
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         */
        DeviceConfigurationProto.prototype.unknown30 = 4;

        /**
         * Creates a new DeviceConfigurationProto instance using the specified properties.
         * @function create
         * @memberof GooglePlay.DeviceConfigurationProto
         * @static
         * @param {GooglePlay.IDeviceConfigurationProto=} [properties] Properties to set
         * @returns {GooglePlay.DeviceConfigurationProto} DeviceConfigurationProto instance
         */
        DeviceConfigurationProto.create = function create(properties) {
            return new DeviceConfigurationProto(properties);
        };

        /**
         * Encodes the specified DeviceConfigurationProto message. Does not implicitly {@link GooglePlay.DeviceConfigurationProto.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.DeviceConfigurationProto
         * @static
         * @param {GooglePlay.IDeviceConfigurationProto} message DeviceConfigurationProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceConfigurationProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.touchScreen != null && Object.hasOwnProperty.call(message, "touchScreen"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.touchScreen);
            if (message.keyboard != null && Object.hasOwnProperty.call(message, "keyboard"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.keyboard);
            if (message.navigation != null && Object.hasOwnProperty.call(message, "navigation"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.navigation);
            if (message.screenLayout != null && Object.hasOwnProperty.call(message, "screenLayout"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.screenLayout);
            if (message.hasHardKeyboard != null && Object.hasOwnProperty.call(message, "hasHardKeyboard"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.hasHardKeyboard);
            if (message.hasFiveWayNavigation != null && Object.hasOwnProperty.call(message, "hasFiveWayNavigation"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.hasFiveWayNavigation);
            if (message.screenDensity != null && Object.hasOwnProperty.call(message, "screenDensity"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.screenDensity);
            if (message.glEsVersion != null && Object.hasOwnProperty.call(message, "glEsVersion"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.glEsVersion);
            if (message.systemSharedLibrary != null && message.systemSharedLibrary.length)
                for (var i = 0; i < message.systemSharedLibrary.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.systemSharedLibrary[i]);
            if (message.systemAvailableFeature != null && message.systemAvailableFeature.length)
                for (var i = 0; i < message.systemAvailableFeature.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.systemAvailableFeature[i]);
            if (message.nativePlatform != null && message.nativePlatform.length)
                for (var i = 0; i < message.nativePlatform.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.nativePlatform[i]);
            if (message.screenWidth != null && Object.hasOwnProperty.call(message, "screenWidth"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.screenWidth);
            if (message.screenHeight != null && Object.hasOwnProperty.call(message, "screenHeight"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.screenHeight);
            if (message.systemSupportedLocale != null && message.systemSupportedLocale.length)
                for (var i = 0; i < message.systemSupportedLocale.length; ++i)
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.systemSupportedLocale[i]);
            if (message.glExtension != null && message.glExtension.length)
                for (var i = 0; i < message.glExtension.length; ++i)
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.glExtension[i]);
            if (message.deviceClass != null && Object.hasOwnProperty.call(message, "deviceClass"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.deviceClass);
            if (message.maxApkDownloadSizeMb != null && Object.hasOwnProperty.call(message, "maxApkDownloadSizeMb"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.maxApkDownloadSizeMb);
            if (message.smallestScreenWidthDP != null && Object.hasOwnProperty.call(message, "smallestScreenWidthDP"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.smallestScreenWidthDP);
            if (message.lowRamDevice != null && Object.hasOwnProperty.call(message, "lowRamDevice"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.lowRamDevice);
            if (message.totalMemoryBytes != null && Object.hasOwnProperty.call(message, "totalMemoryBytes"))
                writer.uint32(/* id 20, wireType 0 =*/160).int64(message.totalMemoryBytes);
            if (message.maxNumOf_CPUCores != null && Object.hasOwnProperty.call(message, "maxNumOf_CPUCores"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.maxNumOf_CPUCores);
            if (message.deviceFeature != null && message.deviceFeature.length)
                for (var i = 0; i < message.deviceFeature.length; ++i)
                    $root.GooglePlay.DeviceFeature.encode(message.deviceFeature[i], writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.unknown28 != null && Object.hasOwnProperty.call(message, "unknown28"))
                writer.uint32(/* id 28, wireType 0 =*/224).int32(message.unknown28);
            if (message.unknown30 != null && Object.hasOwnProperty.call(message, "unknown30"))
                writer.uint32(/* id 30, wireType 0 =*/240).int32(message.unknown30);
            return writer;
        };

        /**
         * Encodes the specified DeviceConfigurationProto message, length delimited. Does not implicitly {@link GooglePlay.DeviceConfigurationProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.DeviceConfigurationProto
         * @static
         * @param {GooglePlay.IDeviceConfigurationProto} message DeviceConfigurationProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceConfigurationProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceConfigurationProto message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.DeviceConfigurationProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.DeviceConfigurationProto} DeviceConfigurationProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceConfigurationProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.DeviceConfigurationProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.touchScreen = reader.int32();
                        break;
                    }
                case 2: {
                        message.keyboard = reader.int32();
                        break;
                    }
                case 3: {
                        message.navigation = reader.int32();
                        break;
                    }
                case 4: {
                        message.screenLayout = reader.int32();
                        break;
                    }
                case 5: {
                        message.hasHardKeyboard = reader.bool();
                        break;
                    }
                case 6: {
                        message.hasFiveWayNavigation = reader.bool();
                        break;
                    }
                case 7: {
                        message.screenDensity = reader.int32();
                        break;
                    }
                case 8: {
                        message.glEsVersion = reader.int32();
                        break;
                    }
                case 9: {
                        if (!(message.systemSharedLibrary && message.systemSharedLibrary.length))
                            message.systemSharedLibrary = [];
                        message.systemSharedLibrary.push(reader.string());
                        break;
                    }
                case 10: {
                        if (!(message.systemAvailableFeature && message.systemAvailableFeature.length))
                            message.systemAvailableFeature = [];
                        message.systemAvailableFeature.push(reader.string());
                        break;
                    }
                case 11: {
                        if (!(message.nativePlatform && message.nativePlatform.length))
                            message.nativePlatform = [];
                        message.nativePlatform.push(reader.string());
                        break;
                    }
                case 12: {
                        message.screenWidth = reader.int32();
                        break;
                    }
                case 13: {
                        message.screenHeight = reader.int32();
                        break;
                    }
                case 14: {
                        if (!(message.systemSupportedLocale && message.systemSupportedLocale.length))
                            message.systemSupportedLocale = [];
                        message.systemSupportedLocale.push(reader.string());
                        break;
                    }
                case 15: {
                        if (!(message.glExtension && message.glExtension.length))
                            message.glExtension = [];
                        message.glExtension.push(reader.string());
                        break;
                    }
                case 16: {
                        message.deviceClass = reader.int32();
                        break;
                    }
                case 17: {
                        message.maxApkDownloadSizeMb = reader.int32();
                        break;
                    }
                case 18: {
                        message.smallestScreenWidthDP = reader.int32();
                        break;
                    }
                case 19: {
                        message.lowRamDevice = reader.int32();
                        break;
                    }
                case 20: {
                        message.totalMemoryBytes = reader.int64();
                        break;
                    }
                case 21: {
                        message.maxNumOf_CPUCores = reader.int32();
                        break;
                    }
                case 26: {
                        if (!(message.deviceFeature && message.deviceFeature.length))
                            message.deviceFeature = [];
                        message.deviceFeature.push($root.GooglePlay.DeviceFeature.decode(reader, reader.uint32()));
                        break;
                    }
                case 28: {
                        message.unknown28 = reader.int32();
                        break;
                    }
                case 30: {
                        message.unknown30 = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceConfigurationProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.DeviceConfigurationProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.DeviceConfigurationProto} DeviceConfigurationProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceConfigurationProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceConfigurationProto message.
         * @function verify
         * @memberof GooglePlay.DeviceConfigurationProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceConfigurationProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.touchScreen != null && message.hasOwnProperty("touchScreen"))
                if (!$util.isInteger(message.touchScreen))
                    return "touchScreen: integer expected";
            if (message.keyboard != null && message.hasOwnProperty("keyboard"))
                if (!$util.isInteger(message.keyboard))
                    return "keyboard: integer expected";
            if (message.navigation != null && message.hasOwnProperty("navigation"))
                if (!$util.isInteger(message.navigation))
                    return "navigation: integer expected";
            if (message.screenLayout != null && message.hasOwnProperty("screenLayout"))
                if (!$util.isInteger(message.screenLayout))
                    return "screenLayout: integer expected";
            if (message.hasHardKeyboard != null && message.hasOwnProperty("hasHardKeyboard"))
                if (typeof message.hasHardKeyboard !== "boolean")
                    return "hasHardKeyboard: boolean expected";
            if (message.hasFiveWayNavigation != null && message.hasOwnProperty("hasFiveWayNavigation"))
                if (typeof message.hasFiveWayNavigation !== "boolean")
                    return "hasFiveWayNavigation: boolean expected";
            if (message.screenDensity != null && message.hasOwnProperty("screenDensity"))
                if (!$util.isInteger(message.screenDensity))
                    return "screenDensity: integer expected";
            if (message.glEsVersion != null && message.hasOwnProperty("glEsVersion"))
                if (!$util.isInteger(message.glEsVersion))
                    return "glEsVersion: integer expected";
            if (message.systemSharedLibrary != null && message.hasOwnProperty("systemSharedLibrary")) {
                if (!Array.isArray(message.systemSharedLibrary))
                    return "systemSharedLibrary: array expected";
                for (var i = 0; i < message.systemSharedLibrary.length; ++i)
                    if (!$util.isString(message.systemSharedLibrary[i]))
                        return "systemSharedLibrary: string[] expected";
            }
            if (message.systemAvailableFeature != null && message.hasOwnProperty("systemAvailableFeature")) {
                if (!Array.isArray(message.systemAvailableFeature))
                    return "systemAvailableFeature: array expected";
                for (var i = 0; i < message.systemAvailableFeature.length; ++i)
                    if (!$util.isString(message.systemAvailableFeature[i]))
                        return "systemAvailableFeature: string[] expected";
            }
            if (message.nativePlatform != null && message.hasOwnProperty("nativePlatform")) {
                if (!Array.isArray(message.nativePlatform))
                    return "nativePlatform: array expected";
                for (var i = 0; i < message.nativePlatform.length; ++i)
                    if (!$util.isString(message.nativePlatform[i]))
                        return "nativePlatform: string[] expected";
            }
            if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
                if (!$util.isInteger(message.screenWidth))
                    return "screenWidth: integer expected";
            if (message.screenHeight != null && message.hasOwnProperty("screenHeight"))
                if (!$util.isInteger(message.screenHeight))
                    return "screenHeight: integer expected";
            if (message.systemSupportedLocale != null && message.hasOwnProperty("systemSupportedLocale")) {
                if (!Array.isArray(message.systemSupportedLocale))
                    return "systemSupportedLocale: array expected";
                for (var i = 0; i < message.systemSupportedLocale.length; ++i)
                    if (!$util.isString(message.systemSupportedLocale[i]))
                        return "systemSupportedLocale: string[] expected";
            }
            if (message.glExtension != null && message.hasOwnProperty("glExtension")) {
                if (!Array.isArray(message.glExtension))
                    return "glExtension: array expected";
                for (var i = 0; i < message.glExtension.length; ++i)
                    if (!$util.isString(message.glExtension[i]))
                        return "glExtension: string[] expected";
            }
            if (message.deviceClass != null && message.hasOwnProperty("deviceClass"))
                if (!$util.isInteger(message.deviceClass))
                    return "deviceClass: integer expected";
            if (message.maxApkDownloadSizeMb != null && message.hasOwnProperty("maxApkDownloadSizeMb"))
                if (!$util.isInteger(message.maxApkDownloadSizeMb))
                    return "maxApkDownloadSizeMb: integer expected";
            if (message.smallestScreenWidthDP != null && message.hasOwnProperty("smallestScreenWidthDP"))
                if (!$util.isInteger(message.smallestScreenWidthDP))
                    return "smallestScreenWidthDP: integer expected";
            if (message.lowRamDevice != null && message.hasOwnProperty("lowRamDevice"))
                if (!$util.isInteger(message.lowRamDevice))
                    return "lowRamDevice: integer expected";
            if (message.totalMemoryBytes != null && message.hasOwnProperty("totalMemoryBytes"))
                if (!$util.isInteger(message.totalMemoryBytes) && !(message.totalMemoryBytes && $util.isInteger(message.totalMemoryBytes.low) && $util.isInteger(message.totalMemoryBytes.high)))
                    return "totalMemoryBytes: integer|Long expected";
            if (message.maxNumOf_CPUCores != null && message.hasOwnProperty("maxNumOf_CPUCores"))
                if (!$util.isInteger(message.maxNumOf_CPUCores))
                    return "maxNumOf_CPUCores: integer expected";
            if (message.deviceFeature != null && message.hasOwnProperty("deviceFeature")) {
                if (!Array.isArray(message.deviceFeature))
                    return "deviceFeature: array expected";
                for (var i = 0; i < message.deviceFeature.length; ++i) {
                    var error = $root.GooglePlay.DeviceFeature.verify(message.deviceFeature[i]);
                    if (error)
                        return "deviceFeature." + error;
                }
            }
            if (message.unknown28 != null && message.hasOwnProperty("unknown28"))
                if (!$util.isInteger(message.unknown28))
                    return "unknown28: integer expected";
            if (message.unknown30 != null && message.hasOwnProperty("unknown30"))
                if (!$util.isInteger(message.unknown30))
                    return "unknown30: integer expected";
            return null;
        };

        /**
         * Creates a DeviceConfigurationProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.DeviceConfigurationProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.DeviceConfigurationProto} DeviceConfigurationProto
         */
        DeviceConfigurationProto.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.DeviceConfigurationProto)
                return object;
            var message = new $root.GooglePlay.DeviceConfigurationProto();
            if (object.touchScreen != null)
                message.touchScreen = object.touchScreen | 0;
            if (object.keyboard != null)
                message.keyboard = object.keyboard | 0;
            if (object.navigation != null)
                message.navigation = object.navigation | 0;
            if (object.screenLayout != null)
                message.screenLayout = object.screenLayout | 0;
            if (object.hasHardKeyboard != null)
                message.hasHardKeyboard = Boolean(object.hasHardKeyboard);
            if (object.hasFiveWayNavigation != null)
                message.hasFiveWayNavigation = Boolean(object.hasFiveWayNavigation);
            if (object.screenDensity != null)
                message.screenDensity = object.screenDensity | 0;
            if (object.glEsVersion != null)
                message.glEsVersion = object.glEsVersion | 0;
            if (object.systemSharedLibrary) {
                if (!Array.isArray(object.systemSharedLibrary))
                    throw TypeError(".GooglePlay.DeviceConfigurationProto.systemSharedLibrary: array expected");
                message.systemSharedLibrary = [];
                for (var i = 0; i < object.systemSharedLibrary.length; ++i)
                    message.systemSharedLibrary[i] = String(object.systemSharedLibrary[i]);
            }
            if (object.systemAvailableFeature) {
                if (!Array.isArray(object.systemAvailableFeature))
                    throw TypeError(".GooglePlay.DeviceConfigurationProto.systemAvailableFeature: array expected");
                message.systemAvailableFeature = [];
                for (var i = 0; i < object.systemAvailableFeature.length; ++i)
                    message.systemAvailableFeature[i] = String(object.systemAvailableFeature[i]);
            }
            if (object.nativePlatform) {
                if (!Array.isArray(object.nativePlatform))
                    throw TypeError(".GooglePlay.DeviceConfigurationProto.nativePlatform: array expected");
                message.nativePlatform = [];
                for (var i = 0; i < object.nativePlatform.length; ++i)
                    message.nativePlatform[i] = String(object.nativePlatform[i]);
            }
            if (object.screenWidth != null)
                message.screenWidth = object.screenWidth | 0;
            if (object.screenHeight != null)
                message.screenHeight = object.screenHeight | 0;
            if (object.systemSupportedLocale) {
                if (!Array.isArray(object.systemSupportedLocale))
                    throw TypeError(".GooglePlay.DeviceConfigurationProto.systemSupportedLocale: array expected");
                message.systemSupportedLocale = [];
                for (var i = 0; i < object.systemSupportedLocale.length; ++i)
                    message.systemSupportedLocale[i] = String(object.systemSupportedLocale[i]);
            }
            if (object.glExtension) {
                if (!Array.isArray(object.glExtension))
                    throw TypeError(".GooglePlay.DeviceConfigurationProto.glExtension: array expected");
                message.glExtension = [];
                for (var i = 0; i < object.glExtension.length; ++i)
                    message.glExtension[i] = String(object.glExtension[i]);
            }
            if (object.deviceClass != null)
                message.deviceClass = object.deviceClass | 0;
            if (object.maxApkDownloadSizeMb != null)
                message.maxApkDownloadSizeMb = object.maxApkDownloadSizeMb | 0;
            if (object.smallestScreenWidthDP != null)
                message.smallestScreenWidthDP = object.smallestScreenWidthDP | 0;
            if (object.lowRamDevice != null)
                message.lowRamDevice = object.lowRamDevice | 0;
            if (object.totalMemoryBytes != null)
                if ($util.Long)
                    (message.totalMemoryBytes = $util.Long.fromValue(object.totalMemoryBytes)).unsigned = false;
                else if (typeof object.totalMemoryBytes === "string")
                    message.totalMemoryBytes = parseInt(object.totalMemoryBytes, 10);
                else if (typeof object.totalMemoryBytes === "number")
                    message.totalMemoryBytes = object.totalMemoryBytes;
                else if (typeof object.totalMemoryBytes === "object")
                    message.totalMemoryBytes = new $util.LongBits(object.totalMemoryBytes.low >>> 0, object.totalMemoryBytes.high >>> 0).toNumber();
            if (object.maxNumOf_CPUCores != null)
                message.maxNumOf_CPUCores = object.maxNumOf_CPUCores | 0;
            if (object.deviceFeature) {
                if (!Array.isArray(object.deviceFeature))
                    throw TypeError(".GooglePlay.DeviceConfigurationProto.deviceFeature: array expected");
                message.deviceFeature = [];
                for (var i = 0; i < object.deviceFeature.length; ++i) {
                    if (typeof object.deviceFeature[i] !== "object")
                        throw TypeError(".GooglePlay.DeviceConfigurationProto.deviceFeature: object expected");
                    message.deviceFeature[i] = $root.GooglePlay.DeviceFeature.fromObject(object.deviceFeature[i]);
                }
            }
            if (object.unknown28 != null)
                message.unknown28 = object.unknown28 | 0;
            if (object.unknown30 != null)
                message.unknown30 = object.unknown30 | 0;
            return message;
        };

        /**
         * Creates a plain object from a DeviceConfigurationProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.DeviceConfigurationProto
         * @static
         * @param {GooglePlay.DeviceConfigurationProto} message DeviceConfigurationProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceConfigurationProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.systemSharedLibrary = [];
                object.systemAvailableFeature = [];
                object.nativePlatform = [];
                object.systemSupportedLocale = [];
                object.glExtension = [];
                object.deviceFeature = [];
            }
            if (options.defaults) {
                object.touchScreen = 0;
                object.keyboard = 0;
                object.navigation = 0;
                object.screenLayout = 0;
                object.hasHardKeyboard = false;
                object.hasFiveWayNavigation = false;
                object.screenDensity = 0;
                object.glEsVersion = 0;
                object.screenWidth = 0;
                object.screenHeight = 0;
                object.deviceClass = 0;
                object.maxApkDownloadSizeMb = 50;
                object.smallestScreenWidthDP = 0;
                object.lowRamDevice = 0;
                if ($util.Long) {
                    var long = new $util.Long(-234962944, 1, false);
                    object.totalMemoryBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalMemoryBytes = options.longs === String ? "8354971648" : 8354971648;
                object.maxNumOf_CPUCores = 8;
                object.unknown28 = 0;
                object.unknown30 = 4;
            }
            if (message.touchScreen != null && message.hasOwnProperty("touchScreen"))
                object.touchScreen = message.touchScreen;
            if (message.keyboard != null && message.hasOwnProperty("keyboard"))
                object.keyboard = message.keyboard;
            if (message.navigation != null && message.hasOwnProperty("navigation"))
                object.navigation = message.navigation;
            if (message.screenLayout != null && message.hasOwnProperty("screenLayout"))
                object.screenLayout = message.screenLayout;
            if (message.hasHardKeyboard != null && message.hasOwnProperty("hasHardKeyboard"))
                object.hasHardKeyboard = message.hasHardKeyboard;
            if (message.hasFiveWayNavigation != null && message.hasOwnProperty("hasFiveWayNavigation"))
                object.hasFiveWayNavigation = message.hasFiveWayNavigation;
            if (message.screenDensity != null && message.hasOwnProperty("screenDensity"))
                object.screenDensity = message.screenDensity;
            if (message.glEsVersion != null && message.hasOwnProperty("glEsVersion"))
                object.glEsVersion = message.glEsVersion;
            if (message.systemSharedLibrary && message.systemSharedLibrary.length) {
                object.systemSharedLibrary = [];
                for (var j = 0; j < message.systemSharedLibrary.length; ++j)
                    object.systemSharedLibrary[j] = message.systemSharedLibrary[j];
            }
            if (message.systemAvailableFeature && message.systemAvailableFeature.length) {
                object.systemAvailableFeature = [];
                for (var j = 0; j < message.systemAvailableFeature.length; ++j)
                    object.systemAvailableFeature[j] = message.systemAvailableFeature[j];
            }
            if (message.nativePlatform && message.nativePlatform.length) {
                object.nativePlatform = [];
                for (var j = 0; j < message.nativePlatform.length; ++j)
                    object.nativePlatform[j] = message.nativePlatform[j];
            }
            if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
                object.screenWidth = message.screenWidth;
            if (message.screenHeight != null && message.hasOwnProperty("screenHeight"))
                object.screenHeight = message.screenHeight;
            if (message.systemSupportedLocale && message.systemSupportedLocale.length) {
                object.systemSupportedLocale = [];
                for (var j = 0; j < message.systemSupportedLocale.length; ++j)
                    object.systemSupportedLocale[j] = message.systemSupportedLocale[j];
            }
            if (message.glExtension && message.glExtension.length) {
                object.glExtension = [];
                for (var j = 0; j < message.glExtension.length; ++j)
                    object.glExtension[j] = message.glExtension[j];
            }
            if (message.deviceClass != null && message.hasOwnProperty("deviceClass"))
                object.deviceClass = message.deviceClass;
            if (message.maxApkDownloadSizeMb != null && message.hasOwnProperty("maxApkDownloadSizeMb"))
                object.maxApkDownloadSizeMb = message.maxApkDownloadSizeMb;
            if (message.smallestScreenWidthDP != null && message.hasOwnProperty("smallestScreenWidthDP"))
                object.smallestScreenWidthDP = message.smallestScreenWidthDP;
            if (message.lowRamDevice != null && message.hasOwnProperty("lowRamDevice"))
                object.lowRamDevice = message.lowRamDevice;
            if (message.totalMemoryBytes != null && message.hasOwnProperty("totalMemoryBytes"))
                if (typeof message.totalMemoryBytes === "number")
                    object.totalMemoryBytes = options.longs === String ? String(message.totalMemoryBytes) : message.totalMemoryBytes;
                else
                    object.totalMemoryBytes = options.longs === String ? $util.Long.prototype.toString.call(message.totalMemoryBytes) : options.longs === Number ? new $util.LongBits(message.totalMemoryBytes.low >>> 0, message.totalMemoryBytes.high >>> 0).toNumber() : message.totalMemoryBytes;
            if (message.maxNumOf_CPUCores != null && message.hasOwnProperty("maxNumOf_CPUCores"))
                object.maxNumOf_CPUCores = message.maxNumOf_CPUCores;
            if (message.deviceFeature && message.deviceFeature.length) {
                object.deviceFeature = [];
                for (var j = 0; j < message.deviceFeature.length; ++j)
                    object.deviceFeature[j] = $root.GooglePlay.DeviceFeature.toObject(message.deviceFeature[j], options);
            }
            if (message.unknown28 != null && message.hasOwnProperty("unknown28"))
                object.unknown28 = message.unknown28;
            if (message.unknown30 != null && message.hasOwnProperty("unknown30"))
                object.unknown30 = message.unknown30;
            return object;
        };

        /**
         * Converts this DeviceConfigurationProto to JSON.
         * @function toJSON
         * @memberof GooglePlay.DeviceConfigurationProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceConfigurationProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeviceConfigurationProto
         * @function getTypeUrl
         * @memberof GooglePlay.DeviceConfigurationProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceConfigurationProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.DeviceConfigurationProto";
        };

        return DeviceConfigurationProto;
    })();

    GooglePlay.DeviceFeature = (function() {

        /**
         * Properties of a DeviceFeature.
         * @memberof GooglePlay
         * @interface IDeviceFeature
         * @property {string|null} [name] DeviceFeature name
         * @property {number|null} [value] DeviceFeature value
         */

        /**
         * Constructs a new DeviceFeature.
         * @memberof GooglePlay
         * @classdesc Represents a DeviceFeature.
         * @implements IDeviceFeature
         * @constructor
         * @param {GooglePlay.IDeviceFeature=} [properties] Properties to set
         */
        function DeviceFeature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceFeature name.
         * @member {string} name
         * @memberof GooglePlay.DeviceFeature
         * @instance
         */
        DeviceFeature.prototype.name = "";

        /**
         * DeviceFeature value.
         * @member {number} value
         * @memberof GooglePlay.DeviceFeature
         * @instance
         */
        DeviceFeature.prototype.value = 0;

        /**
         * Creates a new DeviceFeature instance using the specified properties.
         * @function create
         * @memberof GooglePlay.DeviceFeature
         * @static
         * @param {GooglePlay.IDeviceFeature=} [properties] Properties to set
         * @returns {GooglePlay.DeviceFeature} DeviceFeature instance
         */
        DeviceFeature.create = function create(properties) {
            return new DeviceFeature(properties);
        };

        /**
         * Encodes the specified DeviceFeature message. Does not implicitly {@link GooglePlay.DeviceFeature.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.DeviceFeature
         * @static
         * @param {GooglePlay.IDeviceFeature} message DeviceFeature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceFeature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified DeviceFeature message, length delimited. Does not implicitly {@link GooglePlay.DeviceFeature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.DeviceFeature
         * @static
         * @param {GooglePlay.IDeviceFeature} message DeviceFeature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceFeature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceFeature message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.DeviceFeature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.DeviceFeature} DeviceFeature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceFeature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.DeviceFeature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceFeature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.DeviceFeature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.DeviceFeature} DeviceFeature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceFeature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceFeature message.
         * @function verify
         * @memberof GooglePlay.DeviceFeature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceFeature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates a DeviceFeature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.DeviceFeature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.DeviceFeature} DeviceFeature
         */
        DeviceFeature.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.DeviceFeature)
                return object;
            var message = new $root.GooglePlay.DeviceFeature();
            if (object.name != null)
                message.name = String(object.name);
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from a DeviceFeature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.DeviceFeature
         * @static
         * @param {GooglePlay.DeviceFeature} message DeviceFeature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceFeature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.value = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this DeviceFeature to JSON.
         * @function toJSON
         * @memberof GooglePlay.DeviceFeature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceFeature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeviceFeature
         * @function getTypeUrl
         * @memberof GooglePlay.DeviceFeature
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceFeature.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.DeviceFeature";
        };

        return DeviceFeature;
    })();

    GooglePlay.CorpusMetadata = (function() {

        /**
         * Properties of a CorpusMetadata.
         * @memberof GooglePlay
         * @interface ICorpusMetadata
         * @property {number|null} [backend] CorpusMetadata backend
         * @property {string|null} [name] CorpusMetadata name
         * @property {string|null} [landingUrl] CorpusMetadata landingUrl
         * @property {string|null} [libraryName] CorpusMetadata libraryName
         * @property {string|null} [recsWidgetUrl] CorpusMetadata recsWidgetUrl
         * @property {string|null} [shopName] CorpusMetadata shopName
         */

        /**
         * Constructs a new CorpusMetadata.
         * @memberof GooglePlay
         * @classdesc Represents a CorpusMetadata.
         * @implements ICorpusMetadata
         * @constructor
         * @param {GooglePlay.ICorpusMetadata=} [properties] Properties to set
         */
        function CorpusMetadata(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CorpusMetadata backend.
         * @member {number} backend
         * @memberof GooglePlay.CorpusMetadata
         * @instance
         */
        CorpusMetadata.prototype.backend = 0;

        /**
         * CorpusMetadata name.
         * @member {string} name
         * @memberof GooglePlay.CorpusMetadata
         * @instance
         */
        CorpusMetadata.prototype.name = "";

        /**
         * CorpusMetadata landingUrl.
         * @member {string} landingUrl
         * @memberof GooglePlay.CorpusMetadata
         * @instance
         */
        CorpusMetadata.prototype.landingUrl = "";

        /**
         * CorpusMetadata libraryName.
         * @member {string} libraryName
         * @memberof GooglePlay.CorpusMetadata
         * @instance
         */
        CorpusMetadata.prototype.libraryName = "";

        /**
         * CorpusMetadata recsWidgetUrl.
         * @member {string} recsWidgetUrl
         * @memberof GooglePlay.CorpusMetadata
         * @instance
         */
        CorpusMetadata.prototype.recsWidgetUrl = "";

        /**
         * CorpusMetadata shopName.
         * @member {string} shopName
         * @memberof GooglePlay.CorpusMetadata
         * @instance
         */
        CorpusMetadata.prototype.shopName = "";

        /**
         * Creates a new CorpusMetadata instance using the specified properties.
         * @function create
         * @memberof GooglePlay.CorpusMetadata
         * @static
         * @param {GooglePlay.ICorpusMetadata=} [properties] Properties to set
         * @returns {GooglePlay.CorpusMetadata} CorpusMetadata instance
         */
        CorpusMetadata.create = function create(properties) {
            return new CorpusMetadata(properties);
        };

        /**
         * Encodes the specified CorpusMetadata message. Does not implicitly {@link GooglePlay.CorpusMetadata.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.CorpusMetadata
         * @static
         * @param {GooglePlay.ICorpusMetadata} message CorpusMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CorpusMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.backend != null && Object.hasOwnProperty.call(message, "backend"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.backend);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.landingUrl != null && Object.hasOwnProperty.call(message, "landingUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.landingUrl);
            if (message.libraryName != null && Object.hasOwnProperty.call(message, "libraryName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.libraryName);
            if (message.recsWidgetUrl != null && Object.hasOwnProperty.call(message, "recsWidgetUrl"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.recsWidgetUrl);
            if (message.shopName != null && Object.hasOwnProperty.call(message, "shopName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.shopName);
            return writer;
        };

        /**
         * Encodes the specified CorpusMetadata message, length delimited. Does not implicitly {@link GooglePlay.CorpusMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.CorpusMetadata
         * @static
         * @param {GooglePlay.ICorpusMetadata} message CorpusMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CorpusMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CorpusMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.CorpusMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.CorpusMetadata} CorpusMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CorpusMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.CorpusMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.backend = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.landingUrl = reader.string();
                        break;
                    }
                case 4: {
                        message.libraryName = reader.string();
                        break;
                    }
                case 6: {
                        message.recsWidgetUrl = reader.string();
                        break;
                    }
                case 7: {
                        message.shopName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CorpusMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.CorpusMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.CorpusMetadata} CorpusMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CorpusMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CorpusMetadata message.
         * @function verify
         * @memberof GooglePlay.CorpusMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CorpusMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.backend != null && message.hasOwnProperty("backend"))
                if (!$util.isInteger(message.backend))
                    return "backend: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.landingUrl != null && message.hasOwnProperty("landingUrl"))
                if (!$util.isString(message.landingUrl))
                    return "landingUrl: string expected";
            if (message.libraryName != null && message.hasOwnProperty("libraryName"))
                if (!$util.isString(message.libraryName))
                    return "libraryName: string expected";
            if (message.recsWidgetUrl != null && message.hasOwnProperty("recsWidgetUrl"))
                if (!$util.isString(message.recsWidgetUrl))
                    return "recsWidgetUrl: string expected";
            if (message.shopName != null && message.hasOwnProperty("shopName"))
                if (!$util.isString(message.shopName))
                    return "shopName: string expected";
            return null;
        };

        /**
         * Creates a CorpusMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.CorpusMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.CorpusMetadata} CorpusMetadata
         */
        CorpusMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.CorpusMetadata)
                return object;
            var message = new $root.GooglePlay.CorpusMetadata();
            if (object.backend != null)
                message.backend = object.backend | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.landingUrl != null)
                message.landingUrl = String(object.landingUrl);
            if (object.libraryName != null)
                message.libraryName = String(object.libraryName);
            if (object.recsWidgetUrl != null)
                message.recsWidgetUrl = String(object.recsWidgetUrl);
            if (object.shopName != null)
                message.shopName = String(object.shopName);
            return message;
        };

        /**
         * Creates a plain object from a CorpusMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.CorpusMetadata
         * @static
         * @param {GooglePlay.CorpusMetadata} message CorpusMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CorpusMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.backend = 0;
                object.name = "";
                object.landingUrl = "";
                object.libraryName = "";
                object.recsWidgetUrl = "";
                object.shopName = "";
            }
            if (message.backend != null && message.hasOwnProperty("backend"))
                object.backend = message.backend;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.landingUrl != null && message.hasOwnProperty("landingUrl"))
                object.landingUrl = message.landingUrl;
            if (message.libraryName != null && message.hasOwnProperty("libraryName"))
                object.libraryName = message.libraryName;
            if (message.recsWidgetUrl != null && message.hasOwnProperty("recsWidgetUrl"))
                object.recsWidgetUrl = message.recsWidgetUrl;
            if (message.shopName != null && message.hasOwnProperty("shopName"))
                object.shopName = message.shopName;
            return object;
        };

        /**
         * Converts this CorpusMetadata to JSON.
         * @function toJSON
         * @memberof GooglePlay.CorpusMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CorpusMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CorpusMetadata
         * @function getTypeUrl
         * @memberof GooglePlay.CorpusMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CorpusMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.CorpusMetadata";
        };

        return CorpusMetadata;
    })();

    GooglePlay.Experiments = (function() {

        /**
         * Properties of an Experiments.
         * @memberof GooglePlay
         * @interface IExperiments
         * @property {Array.<string>|null} [experimentId] Experiments experimentId
         */

        /**
         * Constructs a new Experiments.
         * @memberof GooglePlay
         * @classdesc Represents an Experiments.
         * @implements IExperiments
         * @constructor
         * @param {GooglePlay.IExperiments=} [properties] Properties to set
         */
        function Experiments(properties) {
            this.experimentId = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Experiments experimentId.
         * @member {Array.<string>} experimentId
         * @memberof GooglePlay.Experiments
         * @instance
         */
        Experiments.prototype.experimentId = $util.emptyArray;

        /**
         * Creates a new Experiments instance using the specified properties.
         * @function create
         * @memberof GooglePlay.Experiments
         * @static
         * @param {GooglePlay.IExperiments=} [properties] Properties to set
         * @returns {GooglePlay.Experiments} Experiments instance
         */
        Experiments.create = function create(properties) {
            return new Experiments(properties);
        };

        /**
         * Encodes the specified Experiments message. Does not implicitly {@link GooglePlay.Experiments.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.Experiments
         * @static
         * @param {GooglePlay.IExperiments} message Experiments message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Experiments.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.experimentId != null && message.experimentId.length)
                for (var i = 0; i < message.experimentId.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.experimentId[i]);
            return writer;
        };

        /**
         * Encodes the specified Experiments message, length delimited. Does not implicitly {@link GooglePlay.Experiments.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.Experiments
         * @static
         * @param {GooglePlay.IExperiments} message Experiments message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Experiments.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Experiments message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.Experiments
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.Experiments} Experiments
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Experiments.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.Experiments();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.experimentId && message.experimentId.length))
                            message.experimentId = [];
                        message.experimentId.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Experiments message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.Experiments
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.Experiments} Experiments
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Experiments.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Experiments message.
         * @function verify
         * @memberof GooglePlay.Experiments
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Experiments.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.experimentId != null && message.hasOwnProperty("experimentId")) {
                if (!Array.isArray(message.experimentId))
                    return "experimentId: array expected";
                for (var i = 0; i < message.experimentId.length; ++i)
                    if (!$util.isString(message.experimentId[i]))
                        return "experimentId: string[] expected";
            }
            return null;
        };

        /**
         * Creates an Experiments message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.Experiments
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.Experiments} Experiments
         */
        Experiments.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.Experiments)
                return object;
            var message = new $root.GooglePlay.Experiments();
            if (object.experimentId) {
                if (!Array.isArray(object.experimentId))
                    throw TypeError(".GooglePlay.Experiments.experimentId: array expected");
                message.experimentId = [];
                for (var i = 0; i < object.experimentId.length; ++i)
                    message.experimentId[i] = String(object.experimentId[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an Experiments message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.Experiments
         * @static
         * @param {GooglePlay.Experiments} message Experiments
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Experiments.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.experimentId = [];
            if (message.experimentId && message.experimentId.length) {
                object.experimentId = [];
                for (var j = 0; j < message.experimentId.length; ++j)
                    object.experimentId[j] = message.experimentId[j];
            }
            return object;
        };

        /**
         * Converts this Experiments to JSON.
         * @function toJSON
         * @memberof GooglePlay.Experiments
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Experiments.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Experiments
         * @function getTypeUrl
         * @memberof GooglePlay.Experiments
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Experiments.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.Experiments";
        };

        return Experiments;
    })();

    GooglePlay.SelfUpdateConfig = (function() {

        /**
         * Properties of a SelfUpdateConfig.
         * @memberof GooglePlay
         * @interface ISelfUpdateConfig
         * @property {number|null} [latestClientVersionCode] SelfUpdateConfig latestClientVersionCode
         */

        /**
         * Constructs a new SelfUpdateConfig.
         * @memberof GooglePlay
         * @classdesc Represents a SelfUpdateConfig.
         * @implements ISelfUpdateConfig
         * @constructor
         * @param {GooglePlay.ISelfUpdateConfig=} [properties] Properties to set
         */
        function SelfUpdateConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelfUpdateConfig latestClientVersionCode.
         * @member {number} latestClientVersionCode
         * @memberof GooglePlay.SelfUpdateConfig
         * @instance
         */
        SelfUpdateConfig.prototype.latestClientVersionCode = 0;

        /**
         * Creates a new SelfUpdateConfig instance using the specified properties.
         * @function create
         * @memberof GooglePlay.SelfUpdateConfig
         * @static
         * @param {GooglePlay.ISelfUpdateConfig=} [properties] Properties to set
         * @returns {GooglePlay.SelfUpdateConfig} SelfUpdateConfig instance
         */
        SelfUpdateConfig.create = function create(properties) {
            return new SelfUpdateConfig(properties);
        };

        /**
         * Encodes the specified SelfUpdateConfig message. Does not implicitly {@link GooglePlay.SelfUpdateConfig.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.SelfUpdateConfig
         * @static
         * @param {GooglePlay.ISelfUpdateConfig} message SelfUpdateConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelfUpdateConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latestClientVersionCode != null && Object.hasOwnProperty.call(message, "latestClientVersionCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.latestClientVersionCode);
            return writer;
        };

        /**
         * Encodes the specified SelfUpdateConfig message, length delimited. Does not implicitly {@link GooglePlay.SelfUpdateConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.SelfUpdateConfig
         * @static
         * @param {GooglePlay.ISelfUpdateConfig} message SelfUpdateConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelfUpdateConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelfUpdateConfig message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.SelfUpdateConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.SelfUpdateConfig} SelfUpdateConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelfUpdateConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.SelfUpdateConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.latestClientVersionCode = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelfUpdateConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.SelfUpdateConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.SelfUpdateConfig} SelfUpdateConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelfUpdateConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelfUpdateConfig message.
         * @function verify
         * @memberof GooglePlay.SelfUpdateConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelfUpdateConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.latestClientVersionCode != null && message.hasOwnProperty("latestClientVersionCode"))
                if (!$util.isInteger(message.latestClientVersionCode))
                    return "latestClientVersionCode: integer expected";
            return null;
        };

        /**
         * Creates a SelfUpdateConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.SelfUpdateConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.SelfUpdateConfig} SelfUpdateConfig
         */
        SelfUpdateConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.SelfUpdateConfig)
                return object;
            var message = new $root.GooglePlay.SelfUpdateConfig();
            if (object.latestClientVersionCode != null)
                message.latestClientVersionCode = object.latestClientVersionCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a SelfUpdateConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.SelfUpdateConfig
         * @static
         * @param {GooglePlay.SelfUpdateConfig} message SelfUpdateConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelfUpdateConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.latestClientVersionCode = 0;
            if (message.latestClientVersionCode != null && message.hasOwnProperty("latestClientVersionCode"))
                object.latestClientVersionCode = message.latestClientVersionCode;
            return object;
        };

        /**
         * Converts this SelfUpdateConfig to JSON.
         * @function toJSON
         * @memberof GooglePlay.SelfUpdateConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelfUpdateConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelfUpdateConfig
         * @function getTypeUrl
         * @memberof GooglePlay.SelfUpdateConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelfUpdateConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.SelfUpdateConfig";
        };

        return SelfUpdateConfig;
    })();

    GooglePlay.TocResponse = (function() {

        /**
         * Properties of a TocResponse.
         * @memberof GooglePlay
         * @interface ITocResponse
         * @property {Array.<GooglePlay.ICorpusMetadata>|null} [corpus] TocResponse corpus
         * @property {number|null} [tosVersionDeprecated] TocResponse tosVersionDeprecated
         * @property {string|null} [tosContent] TocResponse tosContent
         * @property {string|null} [homeUrl] TocResponse homeUrl
         * @property {GooglePlay.IExperiments|null} [experiments] TocResponse experiments
         * @property {string|null} [tosCheckboxTextMarketingEmails] TocResponse tosCheckboxTextMarketingEmails
         * @property {string|null} [tosToken] TocResponse tosToken
         * @property {GooglePlay.IUserSettings|null} [userSettings] TocResponse userSettings
         * @property {string|null} [iconOverrideUrl] TocResponse iconOverrideUrl
         * @property {GooglePlay.ISelfUpdateConfig|null} [selfUpdateConfig] TocResponse selfUpdateConfig
         * @property {boolean|null} [requiresUploadDeviceConfig] TocResponse requiresUploadDeviceConfig
         * @property {string|null} [recsWidgetUrl] TocResponse recsWidgetUrl
         * @property {string|null} [socialHomeUrl] TocResponse socialHomeUrl
         * @property {boolean|null} [ageVerificationRequired] TocResponse ageVerificationRequired
         * @property {boolean|null} [gPlusSignupEnabled] TocResponse gPlusSignupEnabled
         * @property {boolean|null} [redeemEnabled] TocResponse redeemEnabled
         * @property {string|null} [helpUrl] TocResponse helpUrl
         * @property {number|null} [themeId] TocResponse themeId
         * @property {string|null} [entertainmentHomeUrl] TocResponse entertainmentHomeUrl
         * @property {string|null} [cookie] TocResponse cookie
         */

        /**
         * Constructs a new TocResponse.
         * @memberof GooglePlay
         * @classdesc Represents a TocResponse.
         * @implements ITocResponse
         * @constructor
         * @param {GooglePlay.ITocResponse=} [properties] Properties to set
         */
        function TocResponse(properties) {
            this.corpus = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TocResponse corpus.
         * @member {Array.<GooglePlay.ICorpusMetadata>} corpus
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.corpus = $util.emptyArray;

        /**
         * TocResponse tosVersionDeprecated.
         * @member {number} tosVersionDeprecated
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.tosVersionDeprecated = 0;

        /**
         * TocResponse tosContent.
         * @member {string} tosContent
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.tosContent = "";

        /**
         * TocResponse homeUrl.
         * @member {string} homeUrl
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.homeUrl = "";

        /**
         * TocResponse experiments.
         * @member {GooglePlay.IExperiments|null|undefined} experiments
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.experiments = null;

        /**
         * TocResponse tosCheckboxTextMarketingEmails.
         * @member {string} tosCheckboxTextMarketingEmails
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.tosCheckboxTextMarketingEmails = "";

        /**
         * TocResponse tosToken.
         * @member {string} tosToken
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.tosToken = "";

        /**
         * TocResponse userSettings.
         * @member {GooglePlay.IUserSettings|null|undefined} userSettings
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.userSettings = null;

        /**
         * TocResponse iconOverrideUrl.
         * @member {string} iconOverrideUrl
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.iconOverrideUrl = "";

        /**
         * TocResponse selfUpdateConfig.
         * @member {GooglePlay.ISelfUpdateConfig|null|undefined} selfUpdateConfig
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.selfUpdateConfig = null;

        /**
         * TocResponse requiresUploadDeviceConfig.
         * @member {boolean} requiresUploadDeviceConfig
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.requiresUploadDeviceConfig = false;

        /**
         * TocResponse recsWidgetUrl.
         * @member {string} recsWidgetUrl
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.recsWidgetUrl = "";

        /**
         * TocResponse socialHomeUrl.
         * @member {string} socialHomeUrl
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.socialHomeUrl = "";

        /**
         * TocResponse ageVerificationRequired.
         * @member {boolean} ageVerificationRequired
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.ageVerificationRequired = false;

        /**
         * TocResponse gPlusSignupEnabled.
         * @member {boolean} gPlusSignupEnabled
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.gPlusSignupEnabled = false;

        /**
         * TocResponse redeemEnabled.
         * @member {boolean} redeemEnabled
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.redeemEnabled = false;

        /**
         * TocResponse helpUrl.
         * @member {string} helpUrl
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.helpUrl = "";

        /**
         * TocResponse themeId.
         * @member {number} themeId
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.themeId = 0;

        /**
         * TocResponse entertainmentHomeUrl.
         * @member {string} entertainmentHomeUrl
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.entertainmentHomeUrl = "";

        /**
         * TocResponse cookie.
         * @member {string} cookie
         * @memberof GooglePlay.TocResponse
         * @instance
         */
        TocResponse.prototype.cookie = "";

        /**
         * Creates a new TocResponse instance using the specified properties.
         * @function create
         * @memberof GooglePlay.TocResponse
         * @static
         * @param {GooglePlay.ITocResponse=} [properties] Properties to set
         * @returns {GooglePlay.TocResponse} TocResponse instance
         */
        TocResponse.create = function create(properties) {
            return new TocResponse(properties);
        };

        /**
         * Encodes the specified TocResponse message. Does not implicitly {@link GooglePlay.TocResponse.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.TocResponse
         * @static
         * @param {GooglePlay.ITocResponse} message TocResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TocResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.corpus != null && message.corpus.length)
                for (var i = 0; i < message.corpus.length; ++i)
                    $root.GooglePlay.CorpusMetadata.encode(message.corpus[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tosVersionDeprecated != null && Object.hasOwnProperty.call(message, "tosVersionDeprecated"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tosVersionDeprecated);
            if (message.tosContent != null && Object.hasOwnProperty.call(message, "tosContent"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.tosContent);
            if (message.homeUrl != null && Object.hasOwnProperty.call(message, "homeUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.homeUrl);
            if (message.experiments != null && Object.hasOwnProperty.call(message, "experiments"))
                $root.GooglePlay.Experiments.encode(message.experiments, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.tosCheckboxTextMarketingEmails != null && Object.hasOwnProperty.call(message, "tosCheckboxTextMarketingEmails"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.tosCheckboxTextMarketingEmails);
            if (message.tosToken != null && Object.hasOwnProperty.call(message, "tosToken"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.tosToken);
            if (message.userSettings != null && Object.hasOwnProperty.call(message, "userSettings"))
                $root.GooglePlay.UserSettings.encode(message.userSettings, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.iconOverrideUrl != null && Object.hasOwnProperty.call(message, "iconOverrideUrl"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.iconOverrideUrl);
            if (message.selfUpdateConfig != null && Object.hasOwnProperty.call(message, "selfUpdateConfig"))
                $root.GooglePlay.SelfUpdateConfig.encode(message.selfUpdateConfig, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.requiresUploadDeviceConfig != null && Object.hasOwnProperty.call(message, "requiresUploadDeviceConfig"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.requiresUploadDeviceConfig);
            if (message.recsWidgetUrl != null && Object.hasOwnProperty.call(message, "recsWidgetUrl"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.recsWidgetUrl);
            if (message.socialHomeUrl != null && Object.hasOwnProperty.call(message, "socialHomeUrl"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.socialHomeUrl);
            if (message.ageVerificationRequired != null && Object.hasOwnProperty.call(message, "ageVerificationRequired"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ageVerificationRequired);
            if (message.gPlusSignupEnabled != null && Object.hasOwnProperty.call(message, "gPlusSignupEnabled"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.gPlusSignupEnabled);
            if (message.redeemEnabled != null && Object.hasOwnProperty.call(message, "redeemEnabled"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.redeemEnabled);
            if (message.helpUrl != null && Object.hasOwnProperty.call(message, "helpUrl"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.helpUrl);
            if (message.themeId != null && Object.hasOwnProperty.call(message, "themeId"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.themeId);
            if (message.entertainmentHomeUrl != null && Object.hasOwnProperty.call(message, "entertainmentHomeUrl"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.entertainmentHomeUrl);
            if (message.cookie != null && Object.hasOwnProperty.call(message, "cookie"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.cookie);
            return writer;
        };

        /**
         * Encodes the specified TocResponse message, length delimited. Does not implicitly {@link GooglePlay.TocResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.TocResponse
         * @static
         * @param {GooglePlay.ITocResponse} message TocResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TocResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TocResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.TocResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.TocResponse} TocResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TocResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.TocResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.corpus && message.corpus.length))
                            message.corpus = [];
                        message.corpus.push($root.GooglePlay.CorpusMetadata.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.tosVersionDeprecated = reader.int32();
                        break;
                    }
                case 3: {
                        message.tosContent = reader.string();
                        break;
                    }
                case 4: {
                        message.homeUrl = reader.string();
                        break;
                    }
                case 5: {
                        message.experiments = $root.GooglePlay.Experiments.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.tosCheckboxTextMarketingEmails = reader.string();
                        break;
                    }
                case 7: {
                        message.tosToken = reader.string();
                        break;
                    }
                case 8: {
                        message.userSettings = $root.GooglePlay.UserSettings.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.iconOverrideUrl = reader.string();
                        break;
                    }
                case 10: {
                        message.selfUpdateConfig = $root.GooglePlay.SelfUpdateConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.requiresUploadDeviceConfig = reader.bool();
                        break;
                    }
                case 13: {
                        message.recsWidgetUrl = reader.string();
                        break;
                    }
                case 15: {
                        message.socialHomeUrl = reader.string();
                        break;
                    }
                case 16: {
                        message.ageVerificationRequired = reader.bool();
                        break;
                    }
                case 17: {
                        message.gPlusSignupEnabled = reader.bool();
                        break;
                    }
                case 18: {
                        message.redeemEnabled = reader.bool();
                        break;
                    }
                case 19: {
                        message.helpUrl = reader.string();
                        break;
                    }
                case 20: {
                        message.themeId = reader.int32();
                        break;
                    }
                case 21: {
                        message.entertainmentHomeUrl = reader.string();
                        break;
                    }
                case 22: {
                        message.cookie = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TocResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.TocResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.TocResponse} TocResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TocResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TocResponse message.
         * @function verify
         * @memberof GooglePlay.TocResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TocResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.corpus != null && message.hasOwnProperty("corpus")) {
                if (!Array.isArray(message.corpus))
                    return "corpus: array expected";
                for (var i = 0; i < message.corpus.length; ++i) {
                    var error = $root.GooglePlay.CorpusMetadata.verify(message.corpus[i]);
                    if (error)
                        return "corpus." + error;
                }
            }
            if (message.tosVersionDeprecated != null && message.hasOwnProperty("tosVersionDeprecated"))
                if (!$util.isInteger(message.tosVersionDeprecated))
                    return "tosVersionDeprecated: integer expected";
            if (message.tosContent != null && message.hasOwnProperty("tosContent"))
                if (!$util.isString(message.tosContent))
                    return "tosContent: string expected";
            if (message.homeUrl != null && message.hasOwnProperty("homeUrl"))
                if (!$util.isString(message.homeUrl))
                    return "homeUrl: string expected";
            if (message.experiments != null && message.hasOwnProperty("experiments")) {
                var error = $root.GooglePlay.Experiments.verify(message.experiments);
                if (error)
                    return "experiments." + error;
            }
            if (message.tosCheckboxTextMarketingEmails != null && message.hasOwnProperty("tosCheckboxTextMarketingEmails"))
                if (!$util.isString(message.tosCheckboxTextMarketingEmails))
                    return "tosCheckboxTextMarketingEmails: string expected";
            if (message.tosToken != null && message.hasOwnProperty("tosToken"))
                if (!$util.isString(message.tosToken))
                    return "tosToken: string expected";
            if (message.userSettings != null && message.hasOwnProperty("userSettings")) {
                var error = $root.GooglePlay.UserSettings.verify(message.userSettings);
                if (error)
                    return "userSettings." + error;
            }
            if (message.iconOverrideUrl != null && message.hasOwnProperty("iconOverrideUrl"))
                if (!$util.isString(message.iconOverrideUrl))
                    return "iconOverrideUrl: string expected";
            if (message.selfUpdateConfig != null && message.hasOwnProperty("selfUpdateConfig")) {
                var error = $root.GooglePlay.SelfUpdateConfig.verify(message.selfUpdateConfig);
                if (error)
                    return "selfUpdateConfig." + error;
            }
            if (message.requiresUploadDeviceConfig != null && message.hasOwnProperty("requiresUploadDeviceConfig"))
                if (typeof message.requiresUploadDeviceConfig !== "boolean")
                    return "requiresUploadDeviceConfig: boolean expected";
            if (message.recsWidgetUrl != null && message.hasOwnProperty("recsWidgetUrl"))
                if (!$util.isString(message.recsWidgetUrl))
                    return "recsWidgetUrl: string expected";
            if (message.socialHomeUrl != null && message.hasOwnProperty("socialHomeUrl"))
                if (!$util.isString(message.socialHomeUrl))
                    return "socialHomeUrl: string expected";
            if (message.ageVerificationRequired != null && message.hasOwnProperty("ageVerificationRequired"))
                if (typeof message.ageVerificationRequired !== "boolean")
                    return "ageVerificationRequired: boolean expected";
            if (message.gPlusSignupEnabled != null && message.hasOwnProperty("gPlusSignupEnabled"))
                if (typeof message.gPlusSignupEnabled !== "boolean")
                    return "gPlusSignupEnabled: boolean expected";
            if (message.redeemEnabled != null && message.hasOwnProperty("redeemEnabled"))
                if (typeof message.redeemEnabled !== "boolean")
                    return "redeemEnabled: boolean expected";
            if (message.helpUrl != null && message.hasOwnProperty("helpUrl"))
                if (!$util.isString(message.helpUrl))
                    return "helpUrl: string expected";
            if (message.themeId != null && message.hasOwnProperty("themeId"))
                if (!$util.isInteger(message.themeId))
                    return "themeId: integer expected";
            if (message.entertainmentHomeUrl != null && message.hasOwnProperty("entertainmentHomeUrl"))
                if (!$util.isString(message.entertainmentHomeUrl))
                    return "entertainmentHomeUrl: string expected";
            if (message.cookie != null && message.hasOwnProperty("cookie"))
                if (!$util.isString(message.cookie))
                    return "cookie: string expected";
            return null;
        };

        /**
         * Creates a TocResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.TocResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.TocResponse} TocResponse
         */
        TocResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.TocResponse)
                return object;
            var message = new $root.GooglePlay.TocResponse();
            if (object.corpus) {
                if (!Array.isArray(object.corpus))
                    throw TypeError(".GooglePlay.TocResponse.corpus: array expected");
                message.corpus = [];
                for (var i = 0; i < object.corpus.length; ++i) {
                    if (typeof object.corpus[i] !== "object")
                        throw TypeError(".GooglePlay.TocResponse.corpus: object expected");
                    message.corpus[i] = $root.GooglePlay.CorpusMetadata.fromObject(object.corpus[i]);
                }
            }
            if (object.tosVersionDeprecated != null)
                message.tosVersionDeprecated = object.tosVersionDeprecated | 0;
            if (object.tosContent != null)
                message.tosContent = String(object.tosContent);
            if (object.homeUrl != null)
                message.homeUrl = String(object.homeUrl);
            if (object.experiments != null) {
                if (typeof object.experiments !== "object")
                    throw TypeError(".GooglePlay.TocResponse.experiments: object expected");
                message.experiments = $root.GooglePlay.Experiments.fromObject(object.experiments);
            }
            if (object.tosCheckboxTextMarketingEmails != null)
                message.tosCheckboxTextMarketingEmails = String(object.tosCheckboxTextMarketingEmails);
            if (object.tosToken != null)
                message.tosToken = String(object.tosToken);
            if (object.userSettings != null) {
                if (typeof object.userSettings !== "object")
                    throw TypeError(".GooglePlay.TocResponse.userSettings: object expected");
                message.userSettings = $root.GooglePlay.UserSettings.fromObject(object.userSettings);
            }
            if (object.iconOverrideUrl != null)
                message.iconOverrideUrl = String(object.iconOverrideUrl);
            if (object.selfUpdateConfig != null) {
                if (typeof object.selfUpdateConfig !== "object")
                    throw TypeError(".GooglePlay.TocResponse.selfUpdateConfig: object expected");
                message.selfUpdateConfig = $root.GooglePlay.SelfUpdateConfig.fromObject(object.selfUpdateConfig);
            }
            if (object.requiresUploadDeviceConfig != null)
                message.requiresUploadDeviceConfig = Boolean(object.requiresUploadDeviceConfig);
            if (object.recsWidgetUrl != null)
                message.recsWidgetUrl = String(object.recsWidgetUrl);
            if (object.socialHomeUrl != null)
                message.socialHomeUrl = String(object.socialHomeUrl);
            if (object.ageVerificationRequired != null)
                message.ageVerificationRequired = Boolean(object.ageVerificationRequired);
            if (object.gPlusSignupEnabled != null)
                message.gPlusSignupEnabled = Boolean(object.gPlusSignupEnabled);
            if (object.redeemEnabled != null)
                message.redeemEnabled = Boolean(object.redeemEnabled);
            if (object.helpUrl != null)
                message.helpUrl = String(object.helpUrl);
            if (object.themeId != null)
                message.themeId = object.themeId | 0;
            if (object.entertainmentHomeUrl != null)
                message.entertainmentHomeUrl = String(object.entertainmentHomeUrl);
            if (object.cookie != null)
                message.cookie = String(object.cookie);
            return message;
        };

        /**
         * Creates a plain object from a TocResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.TocResponse
         * @static
         * @param {GooglePlay.TocResponse} message TocResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TocResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.corpus = [];
            if (options.defaults) {
                object.tosVersionDeprecated = 0;
                object.tosContent = "";
                object.homeUrl = "";
                object.experiments = null;
                object.tosCheckboxTextMarketingEmails = "";
                object.tosToken = "";
                object.userSettings = null;
                object.iconOverrideUrl = "";
                object.selfUpdateConfig = null;
                object.requiresUploadDeviceConfig = false;
                object.recsWidgetUrl = "";
                object.socialHomeUrl = "";
                object.ageVerificationRequired = false;
                object.gPlusSignupEnabled = false;
                object.redeemEnabled = false;
                object.helpUrl = "";
                object.themeId = 0;
                object.entertainmentHomeUrl = "";
                object.cookie = "";
            }
            if (message.corpus && message.corpus.length) {
                object.corpus = [];
                for (var j = 0; j < message.corpus.length; ++j)
                    object.corpus[j] = $root.GooglePlay.CorpusMetadata.toObject(message.corpus[j], options);
            }
            if (message.tosVersionDeprecated != null && message.hasOwnProperty("tosVersionDeprecated"))
                object.tosVersionDeprecated = message.tosVersionDeprecated;
            if (message.tosContent != null && message.hasOwnProperty("tosContent"))
                object.tosContent = message.tosContent;
            if (message.homeUrl != null && message.hasOwnProperty("homeUrl"))
                object.homeUrl = message.homeUrl;
            if (message.experiments != null && message.hasOwnProperty("experiments"))
                object.experiments = $root.GooglePlay.Experiments.toObject(message.experiments, options);
            if (message.tosCheckboxTextMarketingEmails != null && message.hasOwnProperty("tosCheckboxTextMarketingEmails"))
                object.tosCheckboxTextMarketingEmails = message.tosCheckboxTextMarketingEmails;
            if (message.tosToken != null && message.hasOwnProperty("tosToken"))
                object.tosToken = message.tosToken;
            if (message.userSettings != null && message.hasOwnProperty("userSettings"))
                object.userSettings = $root.GooglePlay.UserSettings.toObject(message.userSettings, options);
            if (message.iconOverrideUrl != null && message.hasOwnProperty("iconOverrideUrl"))
                object.iconOverrideUrl = message.iconOverrideUrl;
            if (message.selfUpdateConfig != null && message.hasOwnProperty("selfUpdateConfig"))
                object.selfUpdateConfig = $root.GooglePlay.SelfUpdateConfig.toObject(message.selfUpdateConfig, options);
            if (message.requiresUploadDeviceConfig != null && message.hasOwnProperty("requiresUploadDeviceConfig"))
                object.requiresUploadDeviceConfig = message.requiresUploadDeviceConfig;
            if (message.recsWidgetUrl != null && message.hasOwnProperty("recsWidgetUrl"))
                object.recsWidgetUrl = message.recsWidgetUrl;
            if (message.socialHomeUrl != null && message.hasOwnProperty("socialHomeUrl"))
                object.socialHomeUrl = message.socialHomeUrl;
            if (message.ageVerificationRequired != null && message.hasOwnProperty("ageVerificationRequired"))
                object.ageVerificationRequired = message.ageVerificationRequired;
            if (message.gPlusSignupEnabled != null && message.hasOwnProperty("gPlusSignupEnabled"))
                object.gPlusSignupEnabled = message.gPlusSignupEnabled;
            if (message.redeemEnabled != null && message.hasOwnProperty("redeemEnabled"))
                object.redeemEnabled = message.redeemEnabled;
            if (message.helpUrl != null && message.hasOwnProperty("helpUrl"))
                object.helpUrl = message.helpUrl;
            if (message.themeId != null && message.hasOwnProperty("themeId"))
                object.themeId = message.themeId;
            if (message.entertainmentHomeUrl != null && message.hasOwnProperty("entertainmentHomeUrl"))
                object.entertainmentHomeUrl = message.entertainmentHomeUrl;
            if (message.cookie != null && message.hasOwnProperty("cookie"))
                object.cookie = message.cookie;
            return object;
        };

        /**
         * Converts this TocResponse to JSON.
         * @function toJSON
         * @memberof GooglePlay.TocResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TocResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TocResponse
         * @function getTypeUrl
         * @memberof GooglePlay.TocResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TocResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.TocResponse";
        };

        return TocResponse;
    })();

    GooglePlay.UserSettings = (function() {

        /**
         * Properties of a UserSettings.
         * @memberof GooglePlay
         * @interface IUserSettings
         * @property {boolean|null} [tosCheckboxMarketingEmailsOptedIn] UserSettings tosCheckboxMarketingEmailsOptedIn
         * @property {GooglePlay.IPrivacySetting|null} [privacySetting] UserSettings privacySetting
         */

        /**
         * Constructs a new UserSettings.
         * @memberof GooglePlay
         * @classdesc Represents a UserSettings.
         * @implements IUserSettings
         * @constructor
         * @param {GooglePlay.IUserSettings=} [properties] Properties to set
         */
        function UserSettings(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSettings tosCheckboxMarketingEmailsOptedIn.
         * @member {boolean} tosCheckboxMarketingEmailsOptedIn
         * @memberof GooglePlay.UserSettings
         * @instance
         */
        UserSettings.prototype.tosCheckboxMarketingEmailsOptedIn = false;

        /**
         * UserSettings privacySetting.
         * @member {GooglePlay.IPrivacySetting|null|undefined} privacySetting
         * @memberof GooglePlay.UserSettings
         * @instance
         */
        UserSettings.prototype.privacySetting = null;

        /**
         * Creates a new UserSettings instance using the specified properties.
         * @function create
         * @memberof GooglePlay.UserSettings
         * @static
         * @param {GooglePlay.IUserSettings=} [properties] Properties to set
         * @returns {GooglePlay.UserSettings} UserSettings instance
         */
        UserSettings.create = function create(properties) {
            return new UserSettings(properties);
        };

        /**
         * Encodes the specified UserSettings message. Does not implicitly {@link GooglePlay.UserSettings.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.UserSettings
         * @static
         * @param {GooglePlay.IUserSettings} message UserSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSettings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tosCheckboxMarketingEmailsOptedIn != null && Object.hasOwnProperty.call(message, "tosCheckboxMarketingEmailsOptedIn"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.tosCheckboxMarketingEmailsOptedIn);
            if (message.privacySetting != null && Object.hasOwnProperty.call(message, "privacySetting"))
                $root.GooglePlay.PrivacySetting.encode(message.privacySetting, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserSettings message, length delimited. Does not implicitly {@link GooglePlay.UserSettings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.UserSettings
         * @static
         * @param {GooglePlay.IUserSettings} message UserSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSettings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSettings message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.UserSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.UserSettings} UserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSettings.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.UserSettings();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tosCheckboxMarketingEmailsOptedIn = reader.bool();
                        break;
                    }
                case 2: {
                        message.privacySetting = $root.GooglePlay.PrivacySetting.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserSettings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.UserSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.UserSettings} UserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSettings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserSettings message.
         * @function verify
         * @memberof GooglePlay.UserSettings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSettings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tosCheckboxMarketingEmailsOptedIn != null && message.hasOwnProperty("tosCheckboxMarketingEmailsOptedIn"))
                if (typeof message.tosCheckboxMarketingEmailsOptedIn !== "boolean")
                    return "tosCheckboxMarketingEmailsOptedIn: boolean expected";
            if (message.privacySetting != null && message.hasOwnProperty("privacySetting")) {
                var error = $root.GooglePlay.PrivacySetting.verify(message.privacySetting);
                if (error)
                    return "privacySetting." + error;
            }
            return null;
        };

        /**
         * Creates a UserSettings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.UserSettings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.UserSettings} UserSettings
         */
        UserSettings.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.UserSettings)
                return object;
            var message = new $root.GooglePlay.UserSettings();
            if (object.tosCheckboxMarketingEmailsOptedIn != null)
                message.tosCheckboxMarketingEmailsOptedIn = Boolean(object.tosCheckboxMarketingEmailsOptedIn);
            if (object.privacySetting != null) {
                if (typeof object.privacySetting !== "object")
                    throw TypeError(".GooglePlay.UserSettings.privacySetting: object expected");
                message.privacySetting = $root.GooglePlay.PrivacySetting.fromObject(object.privacySetting);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserSettings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.UserSettings
         * @static
         * @param {GooglePlay.UserSettings} message UserSettings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSettings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tosCheckboxMarketingEmailsOptedIn = false;
                object.privacySetting = null;
            }
            if (message.tosCheckboxMarketingEmailsOptedIn != null && message.hasOwnProperty("tosCheckboxMarketingEmailsOptedIn"))
                object.tosCheckboxMarketingEmailsOptedIn = message.tosCheckboxMarketingEmailsOptedIn;
            if (message.privacySetting != null && message.hasOwnProperty("privacySetting"))
                object.privacySetting = $root.GooglePlay.PrivacySetting.toObject(message.privacySetting, options);
            return object;
        };

        /**
         * Converts this UserSettings to JSON.
         * @function toJSON
         * @memberof GooglePlay.UserSettings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSettings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserSettings
         * @function getTypeUrl
         * @memberof GooglePlay.UserSettings
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.UserSettings";
        };

        return UserSettings;
    })();

    GooglePlay.PrivacySetting = (function() {

        /**
         * Properties of a PrivacySetting.
         * @memberof GooglePlay
         * @interface IPrivacySetting
         * @property {number|null} [type] PrivacySetting type
         * @property {number|null} [currentStatus] PrivacySetting currentStatus
         * @property {boolean|null} [enabledByDefault] PrivacySetting enabledByDefault
         */

        /**
         * Constructs a new PrivacySetting.
         * @memberof GooglePlay
         * @classdesc Represents a PrivacySetting.
         * @implements IPrivacySetting
         * @constructor
         * @param {GooglePlay.IPrivacySetting=} [properties] Properties to set
         */
        function PrivacySetting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivacySetting type.
         * @member {number} type
         * @memberof GooglePlay.PrivacySetting
         * @instance
         */
        PrivacySetting.prototype.type = 0;

        /**
         * PrivacySetting currentStatus.
         * @member {number} currentStatus
         * @memberof GooglePlay.PrivacySetting
         * @instance
         */
        PrivacySetting.prototype.currentStatus = 0;

        /**
         * PrivacySetting enabledByDefault.
         * @member {boolean} enabledByDefault
         * @memberof GooglePlay.PrivacySetting
         * @instance
         */
        PrivacySetting.prototype.enabledByDefault = false;

        /**
         * Creates a new PrivacySetting instance using the specified properties.
         * @function create
         * @memberof GooglePlay.PrivacySetting
         * @static
         * @param {GooglePlay.IPrivacySetting=} [properties] Properties to set
         * @returns {GooglePlay.PrivacySetting} PrivacySetting instance
         */
        PrivacySetting.create = function create(properties) {
            return new PrivacySetting(properties);
        };

        /**
         * Encodes the specified PrivacySetting message. Does not implicitly {@link GooglePlay.PrivacySetting.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.PrivacySetting
         * @static
         * @param {GooglePlay.IPrivacySetting} message PrivacySetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivacySetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.currentStatus != null && Object.hasOwnProperty.call(message, "currentStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.currentStatus);
            if (message.enabledByDefault != null && Object.hasOwnProperty.call(message, "enabledByDefault"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enabledByDefault);
            return writer;
        };

        /**
         * Encodes the specified PrivacySetting message, length delimited. Does not implicitly {@link GooglePlay.PrivacySetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.PrivacySetting
         * @static
         * @param {GooglePlay.IPrivacySetting} message PrivacySetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivacySetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivacySetting message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.PrivacySetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.PrivacySetting} PrivacySetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivacySetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.PrivacySetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.currentStatus = reader.int32();
                        break;
                    }
                case 3: {
                        message.enabledByDefault = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivacySetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.PrivacySetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.PrivacySetting} PrivacySetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivacySetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrivacySetting message.
         * @function verify
         * @memberof GooglePlay.PrivacySetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrivacySetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.currentStatus != null && message.hasOwnProperty("currentStatus"))
                if (!$util.isInteger(message.currentStatus))
                    return "currentStatus: integer expected";
            if (message.enabledByDefault != null && message.hasOwnProperty("enabledByDefault"))
                if (typeof message.enabledByDefault !== "boolean")
                    return "enabledByDefault: boolean expected";
            return null;
        };

        /**
         * Creates a PrivacySetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.PrivacySetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.PrivacySetting} PrivacySetting
         */
        PrivacySetting.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.PrivacySetting)
                return object;
            var message = new $root.GooglePlay.PrivacySetting();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.currentStatus != null)
                message.currentStatus = object.currentStatus | 0;
            if (object.enabledByDefault != null)
                message.enabledByDefault = Boolean(object.enabledByDefault);
            return message;
        };

        /**
         * Creates a plain object from a PrivacySetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.PrivacySetting
         * @static
         * @param {GooglePlay.PrivacySetting} message PrivacySetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrivacySetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.currentStatus = 0;
                object.enabledByDefault = false;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.currentStatus != null && message.hasOwnProperty("currentStatus"))
                object.currentStatus = message.currentStatus;
            if (message.enabledByDefault != null && message.hasOwnProperty("enabledByDefault"))
                object.enabledByDefault = message.enabledByDefault;
            return object;
        };

        /**
         * Converts this PrivacySetting to JSON.
         * @function toJSON
         * @memberof GooglePlay.PrivacySetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrivacySetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PrivacySetting
         * @function getTypeUrl
         * @memberof GooglePlay.PrivacySetting
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrivacySetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.PrivacySetting";
        };

        return PrivacySetting;
    })();

    GooglePlay.Payload = (function() {

        /**
         * Properties of a Payload.
         * @memberof GooglePlay
         * @interface IPayload
         * @property {GooglePlay.ITocResponse|null} [tocResponse] Payload tocResponse
         * @property {GooglePlay.IAcceptTosResponse|null} [acceptTosResponse] Payload acceptTosResponse
         * @property {GooglePlay.IAndroidCheckinResponse|null} [androidCheckinResponse] Payload androidCheckinResponse
         * @property {GooglePlay.IUploadDeviceConfigResponse|null} [uploadDeviceConfigResponse] Payload uploadDeviceConfigResponse
         */

        /**
         * Constructs a new Payload.
         * @memberof GooglePlay
         * @classdesc Represents a Payload.
         * @implements IPayload
         * @constructor
         * @param {GooglePlay.IPayload=} [properties] Properties to set
         */
        function Payload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Payload tocResponse.
         * @member {GooglePlay.ITocResponse|null|undefined} tocResponse
         * @memberof GooglePlay.Payload
         * @instance
         */
        Payload.prototype.tocResponse = null;

        /**
         * Payload acceptTosResponse.
         * @member {GooglePlay.IAcceptTosResponse|null|undefined} acceptTosResponse
         * @memberof GooglePlay.Payload
         * @instance
         */
        Payload.prototype.acceptTosResponse = null;

        /**
         * Payload androidCheckinResponse.
         * @member {GooglePlay.IAndroidCheckinResponse|null|undefined} androidCheckinResponse
         * @memberof GooglePlay.Payload
         * @instance
         */
        Payload.prototype.androidCheckinResponse = null;

        /**
         * Payload uploadDeviceConfigResponse.
         * @member {GooglePlay.IUploadDeviceConfigResponse|null|undefined} uploadDeviceConfigResponse
         * @memberof GooglePlay.Payload
         * @instance
         */
        Payload.prototype.uploadDeviceConfigResponse = null;

        /**
         * Creates a new Payload instance using the specified properties.
         * @function create
         * @memberof GooglePlay.Payload
         * @static
         * @param {GooglePlay.IPayload=} [properties] Properties to set
         * @returns {GooglePlay.Payload} Payload instance
         */
        Payload.create = function create(properties) {
            return new Payload(properties);
        };

        /**
         * Encodes the specified Payload message. Does not implicitly {@link GooglePlay.Payload.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.Payload
         * @static
         * @param {GooglePlay.IPayload} message Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tocResponse != null && Object.hasOwnProperty.call(message, "tocResponse"))
                $root.GooglePlay.TocResponse.encode(message.tocResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.acceptTosResponse != null && Object.hasOwnProperty.call(message, "acceptTosResponse"))
                $root.GooglePlay.AcceptTosResponse.encode(message.acceptTosResponse, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.androidCheckinResponse != null && Object.hasOwnProperty.call(message, "androidCheckinResponse"))
                $root.GooglePlay.AndroidCheckinResponse.encode(message.androidCheckinResponse, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.uploadDeviceConfigResponse != null && Object.hasOwnProperty.call(message, "uploadDeviceConfigResponse"))
                $root.GooglePlay.UploadDeviceConfigResponse.encode(message.uploadDeviceConfigResponse, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Payload message, length delimited. Does not implicitly {@link GooglePlay.Payload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.Payload
         * @static
         * @param {GooglePlay.IPayload} message Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Payload message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.Payload} Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.Payload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 6: {
                        message.tocResponse = $root.GooglePlay.TocResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.acceptTosResponse = $root.GooglePlay.AcceptTosResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 26: {
                        message.androidCheckinResponse = $root.GooglePlay.AndroidCheckinResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 28: {
                        message.uploadDeviceConfigResponse = $root.GooglePlay.UploadDeviceConfigResponse.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Payload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.Payload} Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Payload message.
         * @function verify
         * @memberof GooglePlay.Payload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Payload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tocResponse != null && message.hasOwnProperty("tocResponse")) {
                var error = $root.GooglePlay.TocResponse.verify(message.tocResponse);
                if (error)
                    return "tocResponse." + error;
            }
            if (message.acceptTosResponse != null && message.hasOwnProperty("acceptTosResponse")) {
                var error = $root.GooglePlay.AcceptTosResponse.verify(message.acceptTosResponse);
                if (error)
                    return "acceptTosResponse." + error;
            }
            if (message.androidCheckinResponse != null && message.hasOwnProperty("androidCheckinResponse")) {
                var error = $root.GooglePlay.AndroidCheckinResponse.verify(message.androidCheckinResponse);
                if (error)
                    return "androidCheckinResponse." + error;
            }
            if (message.uploadDeviceConfigResponse != null && message.hasOwnProperty("uploadDeviceConfigResponse")) {
                var error = $root.GooglePlay.UploadDeviceConfigResponse.verify(message.uploadDeviceConfigResponse);
                if (error)
                    return "uploadDeviceConfigResponse." + error;
            }
            return null;
        };

        /**
         * Creates a Payload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.Payload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.Payload} Payload
         */
        Payload.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.Payload)
                return object;
            var message = new $root.GooglePlay.Payload();
            if (object.tocResponse != null) {
                if (typeof object.tocResponse !== "object")
                    throw TypeError(".GooglePlay.Payload.tocResponse: object expected");
                message.tocResponse = $root.GooglePlay.TocResponse.fromObject(object.tocResponse);
            }
            if (object.acceptTosResponse != null) {
                if (typeof object.acceptTosResponse !== "object")
                    throw TypeError(".GooglePlay.Payload.acceptTosResponse: object expected");
                message.acceptTosResponse = $root.GooglePlay.AcceptTosResponse.fromObject(object.acceptTosResponse);
            }
            if (object.androidCheckinResponse != null) {
                if (typeof object.androidCheckinResponse !== "object")
                    throw TypeError(".GooglePlay.Payload.androidCheckinResponse: object expected");
                message.androidCheckinResponse = $root.GooglePlay.AndroidCheckinResponse.fromObject(object.androidCheckinResponse);
            }
            if (object.uploadDeviceConfigResponse != null) {
                if (typeof object.uploadDeviceConfigResponse !== "object")
                    throw TypeError(".GooglePlay.Payload.uploadDeviceConfigResponse: object expected");
                message.uploadDeviceConfigResponse = $root.GooglePlay.UploadDeviceConfigResponse.fromObject(object.uploadDeviceConfigResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a Payload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.Payload
         * @static
         * @param {GooglePlay.Payload} message Payload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Payload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tocResponse = null;
                object.acceptTosResponse = null;
                object.androidCheckinResponse = null;
                object.uploadDeviceConfigResponse = null;
            }
            if (message.tocResponse != null && message.hasOwnProperty("tocResponse"))
                object.tocResponse = $root.GooglePlay.TocResponse.toObject(message.tocResponse, options);
            if (message.acceptTosResponse != null && message.hasOwnProperty("acceptTosResponse"))
                object.acceptTosResponse = $root.GooglePlay.AcceptTosResponse.toObject(message.acceptTosResponse, options);
            if (message.androidCheckinResponse != null && message.hasOwnProperty("androidCheckinResponse"))
                object.androidCheckinResponse = $root.GooglePlay.AndroidCheckinResponse.toObject(message.androidCheckinResponse, options);
            if (message.uploadDeviceConfigResponse != null && message.hasOwnProperty("uploadDeviceConfigResponse"))
                object.uploadDeviceConfigResponse = $root.GooglePlay.UploadDeviceConfigResponse.toObject(message.uploadDeviceConfigResponse, options);
            return object;
        };

        /**
         * Converts this Payload to JSON.
         * @function toJSON
         * @memberof GooglePlay.Payload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Payload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Payload
         * @function getTypeUrl
         * @memberof GooglePlay.Payload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Payload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.Payload";
        };

        return Payload;
    })();

    GooglePlay.AcceptTosResponse = (function() {

        /**
         * Properties of an AcceptTosResponse.
         * @memberof GooglePlay
         * @interface IAcceptTosResponse
         */

        /**
         * Constructs a new AcceptTosResponse.
         * @memberof GooglePlay
         * @classdesc Represents an AcceptTosResponse.
         * @implements IAcceptTosResponse
         * @constructor
         * @param {GooglePlay.IAcceptTosResponse=} [properties] Properties to set
         */
        function AcceptTosResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AcceptTosResponse instance using the specified properties.
         * @function create
         * @memberof GooglePlay.AcceptTosResponse
         * @static
         * @param {GooglePlay.IAcceptTosResponse=} [properties] Properties to set
         * @returns {GooglePlay.AcceptTosResponse} AcceptTosResponse instance
         */
        AcceptTosResponse.create = function create(properties) {
            return new AcceptTosResponse(properties);
        };

        /**
         * Encodes the specified AcceptTosResponse message. Does not implicitly {@link GooglePlay.AcceptTosResponse.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.AcceptTosResponse
         * @static
         * @param {GooglePlay.IAcceptTosResponse} message AcceptTosResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptTosResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified AcceptTosResponse message, length delimited. Does not implicitly {@link GooglePlay.AcceptTosResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.AcceptTosResponse
         * @static
         * @param {GooglePlay.IAcceptTosResponse} message AcceptTosResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptTosResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcceptTosResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.AcceptTosResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.AcceptTosResponse} AcceptTosResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptTosResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.AcceptTosResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AcceptTosResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.AcceptTosResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.AcceptTosResponse} AcceptTosResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptTosResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcceptTosResponse message.
         * @function verify
         * @memberof GooglePlay.AcceptTosResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcceptTosResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an AcceptTosResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.AcceptTosResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.AcceptTosResponse} AcceptTosResponse
         */
        AcceptTosResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.AcceptTosResponse)
                return object;
            return new $root.GooglePlay.AcceptTosResponse();
        };

        /**
         * Creates a plain object from an AcceptTosResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.AcceptTosResponse
         * @static
         * @param {GooglePlay.AcceptTosResponse} message AcceptTosResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcceptTosResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this AcceptTosResponse to JSON.
         * @function toJSON
         * @memberof GooglePlay.AcceptTosResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcceptTosResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AcceptTosResponse
         * @function getTypeUrl
         * @memberof GooglePlay.AcceptTosResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AcceptTosResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.AcceptTosResponse";
        };

        return AcceptTosResponse;
    })();

    GooglePlay.PreFetch = (function() {

        /**
         * Properties of a PreFetch.
         * @memberof GooglePlay
         * @interface IPreFetch
         * @property {string|null} [url] PreFetch url
         * @property {GooglePlay.IResponseWrapper|null} [response] PreFetch response
         * @property {string|null} [etag] PreFetch etag
         * @property {number|Long|null} [ttl] PreFetch ttl
         * @property {number|Long|null} [softTtl] PreFetch softTtl
         */

        /**
         * Constructs a new PreFetch.
         * @memberof GooglePlay
         * @classdesc Represents a PreFetch.
         * @implements IPreFetch
         * @constructor
         * @param {GooglePlay.IPreFetch=} [properties] Properties to set
         */
        function PreFetch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreFetch url.
         * @member {string} url
         * @memberof GooglePlay.PreFetch
         * @instance
         */
        PreFetch.prototype.url = "";

        /**
         * PreFetch response.
         * @member {GooglePlay.IResponseWrapper|null|undefined} response
         * @memberof GooglePlay.PreFetch
         * @instance
         */
        PreFetch.prototype.response = null;

        /**
         * PreFetch etag.
         * @member {string} etag
         * @memberof GooglePlay.PreFetch
         * @instance
         */
        PreFetch.prototype.etag = "";

        /**
         * PreFetch ttl.
         * @member {number|Long} ttl
         * @memberof GooglePlay.PreFetch
         * @instance
         */
        PreFetch.prototype.ttl = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PreFetch softTtl.
         * @member {number|Long} softTtl
         * @memberof GooglePlay.PreFetch
         * @instance
         */
        PreFetch.prototype.softTtl = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PreFetch instance using the specified properties.
         * @function create
         * @memberof GooglePlay.PreFetch
         * @static
         * @param {GooglePlay.IPreFetch=} [properties] Properties to set
         * @returns {GooglePlay.PreFetch} PreFetch instance
         */
        PreFetch.create = function create(properties) {
            return new PreFetch(properties);
        };

        /**
         * Encodes the specified PreFetch message. Does not implicitly {@link GooglePlay.PreFetch.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.PreFetch
         * @static
         * @param {GooglePlay.IPreFetch} message PreFetch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreFetch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                $root.GooglePlay.ResponseWrapper.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.etag != null && Object.hasOwnProperty.call(message, "etag"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.etag);
            if (message.ttl != null && Object.hasOwnProperty.call(message, "ttl"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.ttl);
            if (message.softTtl != null && Object.hasOwnProperty.call(message, "softTtl"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.softTtl);
            return writer;
        };

        /**
         * Encodes the specified PreFetch message, length delimited. Does not implicitly {@link GooglePlay.PreFetch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.PreFetch
         * @static
         * @param {GooglePlay.IPreFetch} message PreFetch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreFetch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreFetch message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.PreFetch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.PreFetch} PreFetch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreFetch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.PreFetch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                case 2: {
                        message.response = $root.GooglePlay.ResponseWrapper.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.etag = reader.string();
                        break;
                    }
                case 4: {
                        message.ttl = reader.int64();
                        break;
                    }
                case 5: {
                        message.softTtl = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PreFetch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.PreFetch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.PreFetch} PreFetch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreFetch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreFetch message.
         * @function verify
         * @memberof GooglePlay.PreFetch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreFetch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.response != null && message.hasOwnProperty("response")) {
                var error = $root.GooglePlay.ResponseWrapper.verify(message.response);
                if (error)
                    return "response." + error;
            }
            if (message.etag != null && message.hasOwnProperty("etag"))
                if (!$util.isString(message.etag))
                    return "etag: string expected";
            if (message.ttl != null && message.hasOwnProperty("ttl"))
                if (!$util.isInteger(message.ttl) && !(message.ttl && $util.isInteger(message.ttl.low) && $util.isInteger(message.ttl.high)))
                    return "ttl: integer|Long expected";
            if (message.softTtl != null && message.hasOwnProperty("softTtl"))
                if (!$util.isInteger(message.softTtl) && !(message.softTtl && $util.isInteger(message.softTtl.low) && $util.isInteger(message.softTtl.high)))
                    return "softTtl: integer|Long expected";
            return null;
        };

        /**
         * Creates a PreFetch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.PreFetch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.PreFetch} PreFetch
         */
        PreFetch.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.PreFetch)
                return object;
            var message = new $root.GooglePlay.PreFetch();
            if (object.url != null)
                message.url = String(object.url);
            if (object.response != null) {
                if (typeof object.response !== "object")
                    throw TypeError(".GooglePlay.PreFetch.response: object expected");
                message.response = $root.GooglePlay.ResponseWrapper.fromObject(object.response);
            }
            if (object.etag != null)
                message.etag = String(object.etag);
            if (object.ttl != null)
                if ($util.Long)
                    (message.ttl = $util.Long.fromValue(object.ttl)).unsigned = false;
                else if (typeof object.ttl === "string")
                    message.ttl = parseInt(object.ttl, 10);
                else if (typeof object.ttl === "number")
                    message.ttl = object.ttl;
                else if (typeof object.ttl === "object")
                    message.ttl = new $util.LongBits(object.ttl.low >>> 0, object.ttl.high >>> 0).toNumber();
            if (object.softTtl != null)
                if ($util.Long)
                    (message.softTtl = $util.Long.fromValue(object.softTtl)).unsigned = false;
                else if (typeof object.softTtl === "string")
                    message.softTtl = parseInt(object.softTtl, 10);
                else if (typeof object.softTtl === "number")
                    message.softTtl = object.softTtl;
                else if (typeof object.softTtl === "object")
                    message.softTtl = new $util.LongBits(object.softTtl.low >>> 0, object.softTtl.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PreFetch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.PreFetch
         * @static
         * @param {GooglePlay.PreFetch} message PreFetch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreFetch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.url = "";
                object.response = null;
                object.etag = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ttl = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ttl = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.softTtl = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.softTtl = options.longs === String ? "0" : 0;
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = $root.GooglePlay.ResponseWrapper.toObject(message.response, options);
            if (message.etag != null && message.hasOwnProperty("etag"))
                object.etag = message.etag;
            if (message.ttl != null && message.hasOwnProperty("ttl"))
                if (typeof message.ttl === "number")
                    object.ttl = options.longs === String ? String(message.ttl) : message.ttl;
                else
                    object.ttl = options.longs === String ? $util.Long.prototype.toString.call(message.ttl) : options.longs === Number ? new $util.LongBits(message.ttl.low >>> 0, message.ttl.high >>> 0).toNumber() : message.ttl;
            if (message.softTtl != null && message.hasOwnProperty("softTtl"))
                if (typeof message.softTtl === "number")
                    object.softTtl = options.longs === String ? String(message.softTtl) : message.softTtl;
                else
                    object.softTtl = options.longs === String ? $util.Long.prototype.toString.call(message.softTtl) : options.longs === Number ? new $util.LongBits(message.softTtl.low >>> 0, message.softTtl.high >>> 0).toNumber() : message.softTtl;
            return object;
        };

        /**
         * Converts this PreFetch to JSON.
         * @function toJSON
         * @memberof GooglePlay.PreFetch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreFetch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PreFetch
         * @function getTypeUrl
         * @memberof GooglePlay.PreFetch
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PreFetch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.PreFetch";
        };

        return PreFetch;
    })();

    GooglePlay.ServerMetadata = (function() {

        /**
         * Properties of a ServerMetadata.
         * @memberof GooglePlay
         * @interface IServerMetadata
         * @property {number|Long|null} [latencyMillis] ServerMetadata latencyMillis
         */

        /**
         * Constructs a new ServerMetadata.
         * @memberof GooglePlay
         * @classdesc Represents a ServerMetadata.
         * @implements IServerMetadata
         * @constructor
         * @param {GooglePlay.IServerMetadata=} [properties] Properties to set
         */
        function ServerMetadata(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerMetadata latencyMillis.
         * @member {number|Long} latencyMillis
         * @memberof GooglePlay.ServerMetadata
         * @instance
         */
        ServerMetadata.prototype.latencyMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ServerMetadata instance using the specified properties.
         * @function create
         * @memberof GooglePlay.ServerMetadata
         * @static
         * @param {GooglePlay.IServerMetadata=} [properties] Properties to set
         * @returns {GooglePlay.ServerMetadata} ServerMetadata instance
         */
        ServerMetadata.create = function create(properties) {
            return new ServerMetadata(properties);
        };

        /**
         * Encodes the specified ServerMetadata message. Does not implicitly {@link GooglePlay.ServerMetadata.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.ServerMetadata
         * @static
         * @param {GooglePlay.IServerMetadata} message ServerMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latencyMillis != null && Object.hasOwnProperty.call(message, "latencyMillis"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.latencyMillis);
            return writer;
        };

        /**
         * Encodes the specified ServerMetadata message, length delimited. Does not implicitly {@link GooglePlay.ServerMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.ServerMetadata
         * @static
         * @param {GooglePlay.IServerMetadata} message ServerMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.ServerMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.ServerMetadata} ServerMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.ServerMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.latencyMillis = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.ServerMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.ServerMetadata} ServerMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerMetadata message.
         * @function verify
         * @memberof GooglePlay.ServerMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.latencyMillis != null && message.hasOwnProperty("latencyMillis"))
                if (!$util.isInteger(message.latencyMillis) && !(message.latencyMillis && $util.isInteger(message.latencyMillis.low) && $util.isInteger(message.latencyMillis.high)))
                    return "latencyMillis: integer|Long expected";
            return null;
        };

        /**
         * Creates a ServerMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.ServerMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.ServerMetadata} ServerMetadata
         */
        ServerMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.ServerMetadata)
                return object;
            var message = new $root.GooglePlay.ServerMetadata();
            if (object.latencyMillis != null)
                if ($util.Long)
                    (message.latencyMillis = $util.Long.fromValue(object.latencyMillis)).unsigned = false;
                else if (typeof object.latencyMillis === "string")
                    message.latencyMillis = parseInt(object.latencyMillis, 10);
                else if (typeof object.latencyMillis === "number")
                    message.latencyMillis = object.latencyMillis;
                else if (typeof object.latencyMillis === "object")
                    message.latencyMillis = new $util.LongBits(object.latencyMillis.low >>> 0, object.latencyMillis.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ServerMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.ServerMetadata
         * @static
         * @param {GooglePlay.ServerMetadata} message ServerMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.latencyMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.latencyMillis = options.longs === String ? "0" : 0;
            if (message.latencyMillis != null && message.hasOwnProperty("latencyMillis"))
                if (typeof message.latencyMillis === "number")
                    object.latencyMillis = options.longs === String ? String(message.latencyMillis) : message.latencyMillis;
                else
                    object.latencyMillis = options.longs === String ? $util.Long.prototype.toString.call(message.latencyMillis) : options.longs === Number ? new $util.LongBits(message.latencyMillis.low >>> 0, message.latencyMillis.high >>> 0).toNumber() : message.latencyMillis;
            return object;
        };

        /**
         * Converts this ServerMetadata to JSON.
         * @function toJSON
         * @memberof GooglePlay.ServerMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerMetadata
         * @function getTypeUrl
         * @memberof GooglePlay.ServerMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.ServerMetadata";
        };

        return ServerMetadata;
    })();

    GooglePlay.Targets = (function() {

        /**
         * Properties of a Targets.
         * @memberof GooglePlay
         * @interface ITargets
         * @property {Array.<number|Long>|null} [targetId] Targets targetId
         * @property {Uint8Array|null} [signature] Targets signature
         */

        /**
         * Constructs a new Targets.
         * @memberof GooglePlay
         * @classdesc Represents a Targets.
         * @implements ITargets
         * @constructor
         * @param {GooglePlay.ITargets=} [properties] Properties to set
         */
        function Targets(properties) {
            this.targetId = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Targets targetId.
         * @member {Array.<number|Long>} targetId
         * @memberof GooglePlay.Targets
         * @instance
         */
        Targets.prototype.targetId = $util.emptyArray;

        /**
         * Targets signature.
         * @member {Uint8Array} signature
         * @memberof GooglePlay.Targets
         * @instance
         */
        Targets.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new Targets instance using the specified properties.
         * @function create
         * @memberof GooglePlay.Targets
         * @static
         * @param {GooglePlay.ITargets=} [properties] Properties to set
         * @returns {GooglePlay.Targets} Targets instance
         */
        Targets.create = function create(properties) {
            return new Targets(properties);
        };

        /**
         * Encodes the specified Targets message. Does not implicitly {@link GooglePlay.Targets.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.Targets
         * @static
         * @param {GooglePlay.ITargets} message Targets message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Targets.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetId != null && message.targetId.length)
                for (var i = 0; i < message.targetId.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.targetId[i]);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified Targets message, length delimited. Does not implicitly {@link GooglePlay.Targets.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.Targets
         * @static
         * @param {GooglePlay.ITargets} message Targets message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Targets.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Targets message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.Targets
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.Targets} Targets
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Targets.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.Targets();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.targetId && message.targetId.length))
                            message.targetId = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.targetId.push(reader.int64());
                        } else
                            message.targetId.push(reader.int64());
                        break;
                    }
                case 2: {
                        message.signature = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Targets message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.Targets
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.Targets} Targets
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Targets.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Targets message.
         * @function verify
         * @memberof GooglePlay.Targets
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Targets.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetId != null && message.hasOwnProperty("targetId")) {
                if (!Array.isArray(message.targetId))
                    return "targetId: array expected";
                for (var i = 0; i < message.targetId.length; ++i)
                    if (!$util.isInteger(message.targetId[i]) && !(message.targetId[i] && $util.isInteger(message.targetId[i].low) && $util.isInteger(message.targetId[i].high)))
                        return "targetId: integer|Long[] expected";
            }
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a Targets message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.Targets
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.Targets} Targets
         */
        Targets.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.Targets)
                return object;
            var message = new $root.GooglePlay.Targets();
            if (object.targetId) {
                if (!Array.isArray(object.targetId))
                    throw TypeError(".GooglePlay.Targets.targetId: array expected");
                message.targetId = [];
                for (var i = 0; i < object.targetId.length; ++i)
                    if ($util.Long)
                        (message.targetId[i] = $util.Long.fromValue(object.targetId[i])).unsigned = false;
                    else if (typeof object.targetId[i] === "string")
                        message.targetId[i] = parseInt(object.targetId[i], 10);
                    else if (typeof object.targetId[i] === "number")
                        message.targetId[i] = object.targetId[i];
                    else if (typeof object.targetId[i] === "object")
                        message.targetId[i] = new $util.LongBits(object.targetId[i].low >>> 0, object.targetId[i].high >>> 0).toNumber();
            }
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a Targets message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.Targets
         * @static
         * @param {GooglePlay.Targets} message Targets
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Targets.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.targetId = [];
            if (options.defaults)
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            if (message.targetId && message.targetId.length) {
                object.targetId = [];
                for (var j = 0; j < message.targetId.length; ++j)
                    if (typeof message.targetId[j] === "number")
                        object.targetId[j] = options.longs === String ? String(message.targetId[j]) : message.targetId[j];
                    else
                        object.targetId[j] = options.longs === String ? $util.Long.prototype.toString.call(message.targetId[j]) : options.longs === Number ? new $util.LongBits(message.targetId[j].low >>> 0, message.targetId[j].high >>> 0).toNumber() : message.targetId[j];
            }
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this Targets to JSON.
         * @function toJSON
         * @memberof GooglePlay.Targets
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Targets.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Targets
         * @function getTypeUrl
         * @memberof GooglePlay.Targets
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Targets.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.Targets";
        };

        return Targets;
    })();

    GooglePlay.ServerCookie = (function() {

        /**
         * Properties of a ServerCookie.
         * @memberof GooglePlay
         * @interface IServerCookie
         * @property {number|null} [type] ServerCookie type
         * @property {Uint8Array|null} [token] ServerCookie token
         */

        /**
         * Constructs a new ServerCookie.
         * @memberof GooglePlay
         * @classdesc Represents a ServerCookie.
         * @implements IServerCookie
         * @constructor
         * @param {GooglePlay.IServerCookie=} [properties] Properties to set
         */
        function ServerCookie(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerCookie type.
         * @member {number} type
         * @memberof GooglePlay.ServerCookie
         * @instance
         */
        ServerCookie.prototype.type = 0;

        /**
         * ServerCookie token.
         * @member {Uint8Array} token
         * @memberof GooglePlay.ServerCookie
         * @instance
         */
        ServerCookie.prototype.token = $util.newBuffer([]);

        /**
         * Creates a new ServerCookie instance using the specified properties.
         * @function create
         * @memberof GooglePlay.ServerCookie
         * @static
         * @param {GooglePlay.IServerCookie=} [properties] Properties to set
         * @returns {GooglePlay.ServerCookie} ServerCookie instance
         */
        ServerCookie.create = function create(properties) {
            return new ServerCookie(properties);
        };

        /**
         * Encodes the specified ServerCookie message. Does not implicitly {@link GooglePlay.ServerCookie.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.ServerCookie
         * @static
         * @param {GooglePlay.IServerCookie} message ServerCookie message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerCookie.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.token);
            return writer;
        };

        /**
         * Encodes the specified ServerCookie message, length delimited. Does not implicitly {@link GooglePlay.ServerCookie.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.ServerCookie
         * @static
         * @param {GooglePlay.IServerCookie} message ServerCookie message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerCookie.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerCookie message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.ServerCookie
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.ServerCookie} ServerCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerCookie.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.ServerCookie();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.token = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerCookie message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.ServerCookie
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.ServerCookie} ServerCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerCookie.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerCookie message.
         * @function verify
         * @memberof GooglePlay.ServerCookie
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerCookie.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            return null;
        };

        /**
         * Creates a ServerCookie message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.ServerCookie
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.ServerCookie} ServerCookie
         */
        ServerCookie.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.ServerCookie)
                return object;
            var message = new $root.GooglePlay.ServerCookie();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length >= 0)
                    message.token = object.token;
            return message;
        };

        /**
         * Creates a plain object from a ServerCookie message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.ServerCookie
         * @static
         * @param {GooglePlay.ServerCookie} message ServerCookie
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerCookie.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            return object;
        };

        /**
         * Converts this ServerCookie to JSON.
         * @function toJSON
         * @memberof GooglePlay.ServerCookie
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerCookie.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerCookie
         * @function getTypeUrl
         * @memberof GooglePlay.ServerCookie
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerCookie.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.ServerCookie";
        };

        return ServerCookie;
    })();

    GooglePlay.ServerCookies = (function() {

        /**
         * Properties of a ServerCookies.
         * @memberof GooglePlay
         * @interface IServerCookies
         * @property {Array.<GooglePlay.IServerCookie>|null} [serverCookie] ServerCookies serverCookie
         */

        /**
         * Constructs a new ServerCookies.
         * @memberof GooglePlay
         * @classdesc Represents a ServerCookies.
         * @implements IServerCookies
         * @constructor
         * @param {GooglePlay.IServerCookies=} [properties] Properties to set
         */
        function ServerCookies(properties) {
            this.serverCookie = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerCookies serverCookie.
         * @member {Array.<GooglePlay.IServerCookie>} serverCookie
         * @memberof GooglePlay.ServerCookies
         * @instance
         */
        ServerCookies.prototype.serverCookie = $util.emptyArray;

        /**
         * Creates a new ServerCookies instance using the specified properties.
         * @function create
         * @memberof GooglePlay.ServerCookies
         * @static
         * @param {GooglePlay.IServerCookies=} [properties] Properties to set
         * @returns {GooglePlay.ServerCookies} ServerCookies instance
         */
        ServerCookies.create = function create(properties) {
            return new ServerCookies(properties);
        };

        /**
         * Encodes the specified ServerCookies message. Does not implicitly {@link GooglePlay.ServerCookies.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.ServerCookies
         * @static
         * @param {GooglePlay.IServerCookies} message ServerCookies message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerCookies.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverCookie != null && message.serverCookie.length)
                for (var i = 0; i < message.serverCookie.length; ++i)
                    $root.GooglePlay.ServerCookie.encode(message.serverCookie[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServerCookies message, length delimited. Does not implicitly {@link GooglePlay.ServerCookies.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.ServerCookies
         * @static
         * @param {GooglePlay.IServerCookies} message ServerCookies message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerCookies.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerCookies message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.ServerCookies
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.ServerCookies} ServerCookies
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerCookies.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.ServerCookies();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.serverCookie && message.serverCookie.length))
                            message.serverCookie = [];
                        message.serverCookie.push($root.GooglePlay.ServerCookie.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerCookies message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.ServerCookies
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.ServerCookies} ServerCookies
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerCookies.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerCookies message.
         * @function verify
         * @memberof GooglePlay.ServerCookies
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerCookies.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverCookie != null && message.hasOwnProperty("serverCookie")) {
                if (!Array.isArray(message.serverCookie))
                    return "serverCookie: array expected";
                for (var i = 0; i < message.serverCookie.length; ++i) {
                    var error = $root.GooglePlay.ServerCookie.verify(message.serverCookie[i]);
                    if (error)
                        return "serverCookie." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServerCookies message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.ServerCookies
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.ServerCookies} ServerCookies
         */
        ServerCookies.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.ServerCookies)
                return object;
            var message = new $root.GooglePlay.ServerCookies();
            if (object.serverCookie) {
                if (!Array.isArray(object.serverCookie))
                    throw TypeError(".GooglePlay.ServerCookies.serverCookie: array expected");
                message.serverCookie = [];
                for (var i = 0; i < object.serverCookie.length; ++i) {
                    if (typeof object.serverCookie[i] !== "object")
                        throw TypeError(".GooglePlay.ServerCookies.serverCookie: object expected");
                    message.serverCookie[i] = $root.GooglePlay.ServerCookie.fromObject(object.serverCookie[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerCookies message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.ServerCookies
         * @static
         * @param {GooglePlay.ServerCookies} message ServerCookies
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerCookies.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.serverCookie = [];
            if (message.serverCookie && message.serverCookie.length) {
                object.serverCookie = [];
                for (var j = 0; j < message.serverCookie.length; ++j)
                    object.serverCookie[j] = $root.GooglePlay.ServerCookie.toObject(message.serverCookie[j], options);
            }
            return object;
        };

        /**
         * Converts this ServerCookies to JSON.
         * @function toJSON
         * @memberof GooglePlay.ServerCookies
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerCookies.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerCookies
         * @function getTypeUrl
         * @memberof GooglePlay.ServerCookies
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerCookies.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.ServerCookies";
        };

        return ServerCookies;
    })();

    GooglePlay.ResponseWrapper = (function() {

        /**
         * Properties of a ResponseWrapper.
         * @memberof GooglePlay
         * @interface IResponseWrapper
         * @property {GooglePlay.IPayload|null} [payload] ResponseWrapper payload
         * @property {Array.<GooglePlay.IPreFetch>|null} [preFetch] ResponseWrapper preFetch
         * @property {Uint8Array|null} [serverLogsCookie] ResponseWrapper serverLogsCookie
         */

        /**
         * Constructs a new ResponseWrapper.
         * @memberof GooglePlay
         * @classdesc Represents a ResponseWrapper.
         * @implements IResponseWrapper
         * @constructor
         * @param {GooglePlay.IResponseWrapper=} [properties] Properties to set
         */
        function ResponseWrapper(properties) {
            this.preFetch = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseWrapper payload.
         * @member {GooglePlay.IPayload|null|undefined} payload
         * @memberof GooglePlay.ResponseWrapper
         * @instance
         */
        ResponseWrapper.prototype.payload = null;

        /**
         * ResponseWrapper preFetch.
         * @member {Array.<GooglePlay.IPreFetch>} preFetch
         * @memberof GooglePlay.ResponseWrapper
         * @instance
         */
        ResponseWrapper.prototype.preFetch = $util.emptyArray;

        /**
         * ResponseWrapper serverLogsCookie.
         * @member {Uint8Array} serverLogsCookie
         * @memberof GooglePlay.ResponseWrapper
         * @instance
         */
        ResponseWrapper.prototype.serverLogsCookie = $util.newBuffer([]);

        /**
         * Creates a new ResponseWrapper instance using the specified properties.
         * @function create
         * @memberof GooglePlay.ResponseWrapper
         * @static
         * @param {GooglePlay.IResponseWrapper=} [properties] Properties to set
         * @returns {GooglePlay.ResponseWrapper} ResponseWrapper instance
         */
        ResponseWrapper.create = function create(properties) {
            return new ResponseWrapper(properties);
        };

        /**
         * Encodes the specified ResponseWrapper message. Does not implicitly {@link GooglePlay.ResponseWrapper.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.ResponseWrapper
         * @static
         * @param {GooglePlay.IResponseWrapper} message ResponseWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseWrapper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                $root.GooglePlay.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.preFetch != null && message.preFetch.length)
                for (var i = 0; i < message.preFetch.length; ++i)
                    $root.GooglePlay.PreFetch.encode(message.preFetch[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.serverLogsCookie != null && Object.hasOwnProperty.call(message, "serverLogsCookie"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.serverLogsCookie);
            return writer;
        };

        /**
         * Encodes the specified ResponseWrapper message, length delimited. Does not implicitly {@link GooglePlay.ResponseWrapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.ResponseWrapper
         * @static
         * @param {GooglePlay.IResponseWrapper} message ResponseWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseWrapper message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.ResponseWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.ResponseWrapper} ResponseWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseWrapper.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.ResponseWrapper();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.payload = $root.GooglePlay.Payload.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        if (!(message.preFetch && message.preFetch.length))
                            message.preFetch = [];
                        message.preFetch.push($root.GooglePlay.PreFetch.decode(reader, reader.uint32()));
                        break;
                    }
                case 9: {
                        message.serverLogsCookie = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseWrapper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.ResponseWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.ResponseWrapper} ResponseWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseWrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseWrapper message.
         * @function verify
         * @memberof GooglePlay.ResponseWrapper
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseWrapper.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                var error = $root.GooglePlay.Payload.verify(message.payload);
                if (error)
                    return "payload." + error;
            }
            if (message.preFetch != null && message.hasOwnProperty("preFetch")) {
                if (!Array.isArray(message.preFetch))
                    return "preFetch: array expected";
                for (var i = 0; i < message.preFetch.length; ++i) {
                    var error = $root.GooglePlay.PreFetch.verify(message.preFetch[i]);
                    if (error)
                        return "preFetch." + error;
                }
            }
            if (message.serverLogsCookie != null && message.hasOwnProperty("serverLogsCookie"))
                if (!(message.serverLogsCookie && typeof message.serverLogsCookie.length === "number" || $util.isString(message.serverLogsCookie)))
                    return "serverLogsCookie: buffer expected";
            return null;
        };

        /**
         * Creates a ResponseWrapper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.ResponseWrapper
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.ResponseWrapper} ResponseWrapper
         */
        ResponseWrapper.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.ResponseWrapper)
                return object;
            var message = new $root.GooglePlay.ResponseWrapper();
            if (object.payload != null) {
                if (typeof object.payload !== "object")
                    throw TypeError(".GooglePlay.ResponseWrapper.payload: object expected");
                message.payload = $root.GooglePlay.Payload.fromObject(object.payload);
            }
            if (object.preFetch) {
                if (!Array.isArray(object.preFetch))
                    throw TypeError(".GooglePlay.ResponseWrapper.preFetch: array expected");
                message.preFetch = [];
                for (var i = 0; i < object.preFetch.length; ++i) {
                    if (typeof object.preFetch[i] !== "object")
                        throw TypeError(".GooglePlay.ResponseWrapper.preFetch: object expected");
                    message.preFetch[i] = $root.GooglePlay.PreFetch.fromObject(object.preFetch[i]);
                }
            }
            if (object.serverLogsCookie != null)
                if (typeof object.serverLogsCookie === "string")
                    $util.base64.decode(object.serverLogsCookie, message.serverLogsCookie = $util.newBuffer($util.base64.length(object.serverLogsCookie)), 0);
                else if (object.serverLogsCookie.length >= 0)
                    message.serverLogsCookie = object.serverLogsCookie;
            return message;
        };

        /**
         * Creates a plain object from a ResponseWrapper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.ResponseWrapper
         * @static
         * @param {GooglePlay.ResponseWrapper} message ResponseWrapper
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseWrapper.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.preFetch = [];
            if (options.defaults) {
                object.payload = null;
                if (options.bytes === String)
                    object.serverLogsCookie = "";
                else {
                    object.serverLogsCookie = [];
                    if (options.bytes !== Array)
                        object.serverLogsCookie = $util.newBuffer(object.serverLogsCookie);
                }
            }
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = $root.GooglePlay.Payload.toObject(message.payload, options);
            if (message.preFetch && message.preFetch.length) {
                object.preFetch = [];
                for (var j = 0; j < message.preFetch.length; ++j)
                    object.preFetch[j] = $root.GooglePlay.PreFetch.toObject(message.preFetch[j], options);
            }
            if (message.serverLogsCookie != null && message.hasOwnProperty("serverLogsCookie"))
                object.serverLogsCookie = options.bytes === String ? $util.base64.encode(message.serverLogsCookie, 0, message.serverLogsCookie.length) : options.bytes === Array ? Array.prototype.slice.call(message.serverLogsCookie) : message.serverLogsCookie;
            return object;
        };

        /**
         * Converts this ResponseWrapper to JSON.
         * @function toJSON
         * @memberof GooglePlay.ResponseWrapper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResponseWrapper
         * @function getTypeUrl
         * @memberof GooglePlay.ResponseWrapper
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResponseWrapper.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.ResponseWrapper";
        };

        return ResponseWrapper;
    })();

    GooglePlay.ResponseWrapperApi = (function() {

        /**
         * Properties of a ResponseWrapperApi.
         * @memberof GooglePlay
         * @interface IResponseWrapperApi
         * @property {GooglePlay.IPayloadApi|null} [payload] ResponseWrapperApi payload
         */

        /**
         * Constructs a new ResponseWrapperApi.
         * @memberof GooglePlay
         * @classdesc Represents a ResponseWrapperApi.
         * @implements IResponseWrapperApi
         * @constructor
         * @param {GooglePlay.IResponseWrapperApi=} [properties] Properties to set
         */
        function ResponseWrapperApi(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseWrapperApi payload.
         * @member {GooglePlay.IPayloadApi|null|undefined} payload
         * @memberof GooglePlay.ResponseWrapperApi
         * @instance
         */
        ResponseWrapperApi.prototype.payload = null;

        /**
         * Creates a new ResponseWrapperApi instance using the specified properties.
         * @function create
         * @memberof GooglePlay.ResponseWrapperApi
         * @static
         * @param {GooglePlay.IResponseWrapperApi=} [properties] Properties to set
         * @returns {GooglePlay.ResponseWrapperApi} ResponseWrapperApi instance
         */
        ResponseWrapperApi.create = function create(properties) {
            return new ResponseWrapperApi(properties);
        };

        /**
         * Encodes the specified ResponseWrapperApi message. Does not implicitly {@link GooglePlay.ResponseWrapperApi.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.ResponseWrapperApi
         * @static
         * @param {GooglePlay.IResponseWrapperApi} message ResponseWrapperApi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseWrapperApi.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                $root.GooglePlay.PayloadApi.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseWrapperApi message, length delimited. Does not implicitly {@link GooglePlay.ResponseWrapperApi.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.ResponseWrapperApi
         * @static
         * @param {GooglePlay.IResponseWrapperApi} message ResponseWrapperApi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseWrapperApi.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseWrapperApi message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.ResponseWrapperApi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.ResponseWrapperApi} ResponseWrapperApi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseWrapperApi.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.ResponseWrapperApi();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.payload = $root.GooglePlay.PayloadApi.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseWrapperApi message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.ResponseWrapperApi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.ResponseWrapperApi} ResponseWrapperApi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseWrapperApi.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseWrapperApi message.
         * @function verify
         * @memberof GooglePlay.ResponseWrapperApi
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseWrapperApi.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                var error = $root.GooglePlay.PayloadApi.verify(message.payload);
                if (error)
                    return "payload." + error;
            }
            return null;
        };

        /**
         * Creates a ResponseWrapperApi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.ResponseWrapperApi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.ResponseWrapperApi} ResponseWrapperApi
         */
        ResponseWrapperApi.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.ResponseWrapperApi)
                return object;
            var message = new $root.GooglePlay.ResponseWrapperApi();
            if (object.payload != null) {
                if (typeof object.payload !== "object")
                    throw TypeError(".GooglePlay.ResponseWrapperApi.payload: object expected");
                message.payload = $root.GooglePlay.PayloadApi.fromObject(object.payload);
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseWrapperApi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.ResponseWrapperApi
         * @static
         * @param {GooglePlay.ResponseWrapperApi} message ResponseWrapperApi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseWrapperApi.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.payload = null;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = $root.GooglePlay.PayloadApi.toObject(message.payload, options);
            return object;
        };

        /**
         * Converts this ResponseWrapperApi to JSON.
         * @function toJSON
         * @memberof GooglePlay.ResponseWrapperApi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseWrapperApi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResponseWrapperApi
         * @function getTypeUrl
         * @memberof GooglePlay.ResponseWrapperApi
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResponseWrapperApi.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.ResponseWrapperApi";
        };

        return ResponseWrapperApi;
    })();

    GooglePlay.PayloadApi = (function() {

        /**
         * Properties of a PayloadApi.
         * @memberof GooglePlay
         * @interface IPayloadApi
         * @property {GooglePlay.IUserProfileResponse|null} [userProfileResponse] PayloadApi userProfileResponse
         */

        /**
         * Constructs a new PayloadApi.
         * @memberof GooglePlay
         * @classdesc Represents a PayloadApi.
         * @implements IPayloadApi
         * @constructor
         * @param {GooglePlay.IPayloadApi=} [properties] Properties to set
         */
        function PayloadApi(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PayloadApi userProfileResponse.
         * @member {GooglePlay.IUserProfileResponse|null|undefined} userProfileResponse
         * @memberof GooglePlay.PayloadApi
         * @instance
         */
        PayloadApi.prototype.userProfileResponse = null;

        /**
         * Creates a new PayloadApi instance using the specified properties.
         * @function create
         * @memberof GooglePlay.PayloadApi
         * @static
         * @param {GooglePlay.IPayloadApi=} [properties] Properties to set
         * @returns {GooglePlay.PayloadApi} PayloadApi instance
         */
        PayloadApi.create = function create(properties) {
            return new PayloadApi(properties);
        };

        /**
         * Encodes the specified PayloadApi message. Does not implicitly {@link GooglePlay.PayloadApi.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.PayloadApi
         * @static
         * @param {GooglePlay.IPayloadApi} message PayloadApi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayloadApi.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userProfileResponse != null && Object.hasOwnProperty.call(message, "userProfileResponse"))
                $root.GooglePlay.UserProfileResponse.encode(message.userProfileResponse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PayloadApi message, length delimited. Does not implicitly {@link GooglePlay.PayloadApi.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.PayloadApi
         * @static
         * @param {GooglePlay.IPayloadApi} message PayloadApi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayloadApi.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PayloadApi message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.PayloadApi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.PayloadApi} PayloadApi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayloadApi.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.PayloadApi();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 5: {
                        message.userProfileResponse = $root.GooglePlay.UserProfileResponse.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PayloadApi message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.PayloadApi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.PayloadApi} PayloadApi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayloadApi.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PayloadApi message.
         * @function verify
         * @memberof GooglePlay.PayloadApi
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PayloadApi.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userProfileResponse != null && message.hasOwnProperty("userProfileResponse")) {
                var error = $root.GooglePlay.UserProfileResponse.verify(message.userProfileResponse);
                if (error)
                    return "userProfileResponse." + error;
            }
            return null;
        };

        /**
         * Creates a PayloadApi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.PayloadApi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.PayloadApi} PayloadApi
         */
        PayloadApi.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.PayloadApi)
                return object;
            var message = new $root.GooglePlay.PayloadApi();
            if (object.userProfileResponse != null) {
                if (typeof object.userProfileResponse !== "object")
                    throw TypeError(".GooglePlay.PayloadApi.userProfileResponse: object expected");
                message.userProfileResponse = $root.GooglePlay.UserProfileResponse.fromObject(object.userProfileResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a PayloadApi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.PayloadApi
         * @static
         * @param {GooglePlay.PayloadApi} message PayloadApi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PayloadApi.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userProfileResponse = null;
            if (message.userProfileResponse != null && message.hasOwnProperty("userProfileResponse"))
                object.userProfileResponse = $root.GooglePlay.UserProfileResponse.toObject(message.userProfileResponse, options);
            return object;
        };

        /**
         * Converts this PayloadApi to JSON.
         * @function toJSON
         * @memberof GooglePlay.PayloadApi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PayloadApi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PayloadApi
         * @function getTypeUrl
         * @memberof GooglePlay.PayloadApi
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PayloadApi.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.PayloadApi";
        };

        return PayloadApi;
    })();

    GooglePlay.UserProfileResponse = (function() {

        /**
         * Properties of a UserProfileResponse.
         * @memberof GooglePlay
         * @interface IUserProfileResponse
         * @property {GooglePlay.IUserProfile|null} [userProfile] UserProfileResponse userProfile
         */

        /**
         * Constructs a new UserProfileResponse.
         * @memberof GooglePlay
         * @classdesc Represents a UserProfileResponse.
         * @implements IUserProfileResponse
         * @constructor
         * @param {GooglePlay.IUserProfileResponse=} [properties] Properties to set
         */
        function UserProfileResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserProfileResponse userProfile.
         * @member {GooglePlay.IUserProfile|null|undefined} userProfile
         * @memberof GooglePlay.UserProfileResponse
         * @instance
         */
        UserProfileResponse.prototype.userProfile = null;

        /**
         * Creates a new UserProfileResponse instance using the specified properties.
         * @function create
         * @memberof GooglePlay.UserProfileResponse
         * @static
         * @param {GooglePlay.IUserProfileResponse=} [properties] Properties to set
         * @returns {GooglePlay.UserProfileResponse} UserProfileResponse instance
         */
        UserProfileResponse.create = function create(properties) {
            return new UserProfileResponse(properties);
        };

        /**
         * Encodes the specified UserProfileResponse message. Does not implicitly {@link GooglePlay.UserProfileResponse.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.UserProfileResponse
         * @static
         * @param {GooglePlay.IUserProfileResponse} message UserProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserProfileResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userProfile != null && Object.hasOwnProperty.call(message, "userProfile"))
                $root.GooglePlay.UserProfile.encode(message.userProfile, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserProfileResponse message, length delimited. Does not implicitly {@link GooglePlay.UserProfileResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.UserProfileResponse
         * @static
         * @param {GooglePlay.IUserProfileResponse} message UserProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserProfileResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserProfileResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.UserProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.UserProfileResponse} UserProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserProfileResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.UserProfileResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userProfile = $root.GooglePlay.UserProfile.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserProfileResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.UserProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.UserProfileResponse} UserProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserProfileResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserProfileResponse message.
         * @function verify
         * @memberof GooglePlay.UserProfileResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserProfileResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userProfile != null && message.hasOwnProperty("userProfile")) {
                var error = $root.GooglePlay.UserProfile.verify(message.userProfile);
                if (error)
                    return "userProfile." + error;
            }
            return null;
        };

        /**
         * Creates a UserProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.UserProfileResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.UserProfileResponse} UserProfileResponse
         */
        UserProfileResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.UserProfileResponse)
                return object;
            var message = new $root.GooglePlay.UserProfileResponse();
            if (object.userProfile != null) {
                if (typeof object.userProfile !== "object")
                    throw TypeError(".GooglePlay.UserProfileResponse.userProfile: object expected");
                message.userProfile = $root.GooglePlay.UserProfile.fromObject(object.userProfile);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserProfileResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.UserProfileResponse
         * @static
         * @param {GooglePlay.UserProfileResponse} message UserProfileResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserProfileResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userProfile = null;
            if (message.userProfile != null && message.hasOwnProperty("userProfile"))
                object.userProfile = $root.GooglePlay.UserProfile.toObject(message.userProfile, options);
            return object;
        };

        /**
         * Converts this UserProfileResponse to JSON.
         * @function toJSON
         * @memberof GooglePlay.UserProfileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserProfileResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserProfileResponse
         * @function getTypeUrl
         * @memberof GooglePlay.UserProfileResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserProfileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.UserProfileResponse";
        };

        return UserProfileResponse;
    })();

    GooglePlay.Image = (function() {

        /**
         * Properties of an Image.
         * @memberof GooglePlay
         * @interface IImage
         * @property {number|null} [imageType] Image imageType
         * @property {GooglePlay.Image.IDimension|null} [dimension] Image dimension
         * @property {string|null} [imageUrl] Image imageUrl
         * @property {string|null} [altTextLocalized] Image altTextLocalized
         * @property {string|null} [secureUrl] Image secureUrl
         * @property {number|null} [positionInSequence] Image positionInSequence
         * @property {boolean|null} [supportsFifeUrlOptions] Image supportsFifeUrlOptions
         * @property {GooglePlay.Image.ICitation|null} [citation] Image citation
         * @property {number|null} [durationSeconds] Image durationSeconds
         * @property {string|null} [fillColorRGB] Image fillColorRGB
         * @property {boolean|null} [autogen] Image autogen
         * @property {string|null} [backgroundColorRgb] Image backgroundColorRgb
         * @property {number|null} [deviceClass] Image deviceClass
         * @property {boolean|null} [supportsFifeMonogramOption] Image supportsFifeMonogramOption
         * @property {string|null} [imageUrlAlt] Image imageUrlAlt
         */

        /**
         * Constructs a new Image.
         * @memberof GooglePlay
         * @classdesc Represents an Image.
         * @implements IImage
         * @constructor
         * @param {GooglePlay.IImage=} [properties] Properties to set
         */
        function Image(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Image imageType.
         * @member {number} imageType
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.imageType = 0;

        /**
         * Image dimension.
         * @member {GooglePlay.Image.IDimension|null|undefined} dimension
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.dimension = null;

        /**
         * Image imageUrl.
         * @member {string} imageUrl
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.imageUrl = "";

        /**
         * Image altTextLocalized.
         * @member {string} altTextLocalized
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.altTextLocalized = "";

        /**
         * Image secureUrl.
         * @member {string} secureUrl
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.secureUrl = "";

        /**
         * Image positionInSequence.
         * @member {number} positionInSequence
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.positionInSequence = 0;

        /**
         * Image supportsFifeUrlOptions.
         * @member {boolean} supportsFifeUrlOptions
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.supportsFifeUrlOptions = false;

        /**
         * Image citation.
         * @member {GooglePlay.Image.ICitation|null|undefined} citation
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.citation = null;

        /**
         * Image durationSeconds.
         * @member {number} durationSeconds
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.durationSeconds = 0;

        /**
         * Image fillColorRGB.
         * @member {string} fillColorRGB
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.fillColorRGB = "";

        /**
         * Image autogen.
         * @member {boolean} autogen
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.autogen = false;

        /**
         * Image backgroundColorRgb.
         * @member {string} backgroundColorRgb
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.backgroundColorRgb = "";

        /**
         * Image deviceClass.
         * @member {number} deviceClass
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.deviceClass = 0;

        /**
         * Image supportsFifeMonogramOption.
         * @member {boolean} supportsFifeMonogramOption
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.supportsFifeMonogramOption = false;

        /**
         * Image imageUrlAlt.
         * @member {string} imageUrlAlt
         * @memberof GooglePlay.Image
         * @instance
         */
        Image.prototype.imageUrlAlt = "";

        /**
         * Creates a new Image instance using the specified properties.
         * @function create
         * @memberof GooglePlay.Image
         * @static
         * @param {GooglePlay.IImage=} [properties] Properties to set
         * @returns {GooglePlay.Image} Image instance
         */
        Image.create = function create(properties) {
            return new Image(properties);
        };

        /**
         * Encodes the specified Image message. Does not implicitly {@link GooglePlay.Image.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.Image
         * @static
         * @param {GooglePlay.IImage} message Image message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Image.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.imageType != null && Object.hasOwnProperty.call(message, "imageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.imageType);
            if (message.dimension != null && Object.hasOwnProperty.call(message, "dimension"))
                $root.GooglePlay.Image.Dimension.encode(message.dimension, writer.uint32(/* id 2, wireType 3 =*/19)).uint32(/* id 2, wireType 4 =*/20);
            if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.imageUrl);
            if (message.altTextLocalized != null && Object.hasOwnProperty.call(message, "altTextLocalized"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.altTextLocalized);
            if (message.secureUrl != null && Object.hasOwnProperty.call(message, "secureUrl"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.secureUrl);
            if (message.positionInSequence != null && Object.hasOwnProperty.call(message, "positionInSequence"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.positionInSequence);
            if (message.supportsFifeUrlOptions != null && Object.hasOwnProperty.call(message, "supportsFifeUrlOptions"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.supportsFifeUrlOptions);
            if (message.citation != null && Object.hasOwnProperty.call(message, "citation"))
                $root.GooglePlay.Image.Citation.encode(message.citation, writer.uint32(/* id 10, wireType 3 =*/83)).uint32(/* id 10, wireType 4 =*/84);
            if (message.durationSeconds != null && Object.hasOwnProperty.call(message, "durationSeconds"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.durationSeconds);
            if (message.fillColorRGB != null && Object.hasOwnProperty.call(message, "fillColorRGB"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.fillColorRGB);
            if (message.autogen != null && Object.hasOwnProperty.call(message, "autogen"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.autogen);
            if (message.backgroundColorRgb != null && Object.hasOwnProperty.call(message, "backgroundColorRgb"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.backgroundColorRgb);
            if (message.deviceClass != null && Object.hasOwnProperty.call(message, "deviceClass"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.deviceClass);
            if (message.supportsFifeMonogramOption != null && Object.hasOwnProperty.call(message, "supportsFifeMonogramOption"))
                writer.uint32(/* id 22, wireType 0 =*/176).bool(message.supportsFifeMonogramOption);
            if (message.imageUrlAlt != null && Object.hasOwnProperty.call(message, "imageUrlAlt"))
                writer.uint32(/* id 28, wireType 2 =*/226).string(message.imageUrlAlt);
            return writer;
        };

        /**
         * Encodes the specified Image message, length delimited. Does not implicitly {@link GooglePlay.Image.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.Image
         * @static
         * @param {GooglePlay.IImage} message Image message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Image.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.Image
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.Image} Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Image.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.Image();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.imageType = reader.int32();
                        break;
                    }
                case 2: {
                        message.dimension = $root.GooglePlay.Image.Dimension.decode(reader);
                        break;
                    }
                case 5: {
                        message.imageUrl = reader.string();
                        break;
                    }
                case 6: {
                        message.altTextLocalized = reader.string();
                        break;
                    }
                case 7: {
                        message.secureUrl = reader.string();
                        break;
                    }
                case 8: {
                        message.positionInSequence = reader.int32();
                        break;
                    }
                case 9: {
                        message.supportsFifeUrlOptions = reader.bool();
                        break;
                    }
                case 10: {
                        message.citation = $root.GooglePlay.Image.Citation.decode(reader);
                        break;
                    }
                case 14: {
                        message.durationSeconds = reader.int32();
                        break;
                    }
                case 15: {
                        message.fillColorRGB = reader.string();
                        break;
                    }
                case 16: {
                        message.autogen = reader.bool();
                        break;
                    }
                case 19: {
                        message.backgroundColorRgb = reader.string();
                        break;
                    }
                case 21: {
                        message.deviceClass = reader.int32();
                        break;
                    }
                case 22: {
                        message.supportsFifeMonogramOption = reader.bool();
                        break;
                    }
                case 28: {
                        message.imageUrlAlt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Image message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.Image
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.Image} Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Image.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Image message.
         * @function verify
         * @memberof GooglePlay.Image
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Image.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.imageType != null && message.hasOwnProperty("imageType"))
                if (!$util.isInteger(message.imageType))
                    return "imageType: integer expected";
            if (message.dimension != null && message.hasOwnProperty("dimension")) {
                var error = $root.GooglePlay.Image.Dimension.verify(message.dimension);
                if (error)
                    return "dimension." + error;
            }
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            if (message.altTextLocalized != null && message.hasOwnProperty("altTextLocalized"))
                if (!$util.isString(message.altTextLocalized))
                    return "altTextLocalized: string expected";
            if (message.secureUrl != null && message.hasOwnProperty("secureUrl"))
                if (!$util.isString(message.secureUrl))
                    return "secureUrl: string expected";
            if (message.positionInSequence != null && message.hasOwnProperty("positionInSequence"))
                if (!$util.isInteger(message.positionInSequence))
                    return "positionInSequence: integer expected";
            if (message.supportsFifeUrlOptions != null && message.hasOwnProperty("supportsFifeUrlOptions"))
                if (typeof message.supportsFifeUrlOptions !== "boolean")
                    return "supportsFifeUrlOptions: boolean expected";
            if (message.citation != null && message.hasOwnProperty("citation")) {
                var error = $root.GooglePlay.Image.Citation.verify(message.citation);
                if (error)
                    return "citation." + error;
            }
            if (message.durationSeconds != null && message.hasOwnProperty("durationSeconds"))
                if (!$util.isInteger(message.durationSeconds))
                    return "durationSeconds: integer expected";
            if (message.fillColorRGB != null && message.hasOwnProperty("fillColorRGB"))
                if (!$util.isString(message.fillColorRGB))
                    return "fillColorRGB: string expected";
            if (message.autogen != null && message.hasOwnProperty("autogen"))
                if (typeof message.autogen !== "boolean")
                    return "autogen: boolean expected";
            if (message.backgroundColorRgb != null && message.hasOwnProperty("backgroundColorRgb"))
                if (!$util.isString(message.backgroundColorRgb))
                    return "backgroundColorRgb: string expected";
            if (message.deviceClass != null && message.hasOwnProperty("deviceClass"))
                if (!$util.isInteger(message.deviceClass))
                    return "deviceClass: integer expected";
            if (message.supportsFifeMonogramOption != null && message.hasOwnProperty("supportsFifeMonogramOption"))
                if (typeof message.supportsFifeMonogramOption !== "boolean")
                    return "supportsFifeMonogramOption: boolean expected";
            if (message.imageUrlAlt != null && message.hasOwnProperty("imageUrlAlt"))
                if (!$util.isString(message.imageUrlAlt))
                    return "imageUrlAlt: string expected";
            return null;
        };

        /**
         * Creates an Image message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.Image
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.Image} Image
         */
        Image.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.Image)
                return object;
            var message = new $root.GooglePlay.Image();
            if (object.imageType != null)
                message.imageType = object.imageType | 0;
            if (object.dimension != null) {
                if (typeof object.dimension !== "object")
                    throw TypeError(".GooglePlay.Image.dimension: object expected");
                message.dimension = $root.GooglePlay.Image.Dimension.fromObject(object.dimension);
            }
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            if (object.altTextLocalized != null)
                message.altTextLocalized = String(object.altTextLocalized);
            if (object.secureUrl != null)
                message.secureUrl = String(object.secureUrl);
            if (object.positionInSequence != null)
                message.positionInSequence = object.positionInSequence | 0;
            if (object.supportsFifeUrlOptions != null)
                message.supportsFifeUrlOptions = Boolean(object.supportsFifeUrlOptions);
            if (object.citation != null) {
                if (typeof object.citation !== "object")
                    throw TypeError(".GooglePlay.Image.citation: object expected");
                message.citation = $root.GooglePlay.Image.Citation.fromObject(object.citation);
            }
            if (object.durationSeconds != null)
                message.durationSeconds = object.durationSeconds | 0;
            if (object.fillColorRGB != null)
                message.fillColorRGB = String(object.fillColorRGB);
            if (object.autogen != null)
                message.autogen = Boolean(object.autogen);
            if (object.backgroundColorRgb != null)
                message.backgroundColorRgb = String(object.backgroundColorRgb);
            if (object.deviceClass != null)
                message.deviceClass = object.deviceClass | 0;
            if (object.supportsFifeMonogramOption != null)
                message.supportsFifeMonogramOption = Boolean(object.supportsFifeMonogramOption);
            if (object.imageUrlAlt != null)
                message.imageUrlAlt = String(object.imageUrlAlt);
            return message;
        };

        /**
         * Creates a plain object from an Image message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.Image
         * @static
         * @param {GooglePlay.Image} message Image
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Image.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.imageType = 0;
                object.dimension = null;
                object.imageUrl = "";
                object.altTextLocalized = "";
                object.secureUrl = "";
                object.positionInSequence = 0;
                object.supportsFifeUrlOptions = false;
                object.citation = null;
                object.durationSeconds = 0;
                object.fillColorRGB = "";
                object.autogen = false;
                object.backgroundColorRgb = "";
                object.deviceClass = 0;
                object.supportsFifeMonogramOption = false;
                object.imageUrlAlt = "";
            }
            if (message.imageType != null && message.hasOwnProperty("imageType"))
                object.imageType = message.imageType;
            if (message.dimension != null && message.hasOwnProperty("dimension"))
                object.dimension = $root.GooglePlay.Image.Dimension.toObject(message.dimension, options);
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            if (message.altTextLocalized != null && message.hasOwnProperty("altTextLocalized"))
                object.altTextLocalized = message.altTextLocalized;
            if (message.secureUrl != null && message.hasOwnProperty("secureUrl"))
                object.secureUrl = message.secureUrl;
            if (message.positionInSequence != null && message.hasOwnProperty("positionInSequence"))
                object.positionInSequence = message.positionInSequence;
            if (message.supportsFifeUrlOptions != null && message.hasOwnProperty("supportsFifeUrlOptions"))
                object.supportsFifeUrlOptions = message.supportsFifeUrlOptions;
            if (message.citation != null && message.hasOwnProperty("citation"))
                object.citation = $root.GooglePlay.Image.Citation.toObject(message.citation, options);
            if (message.durationSeconds != null && message.hasOwnProperty("durationSeconds"))
                object.durationSeconds = message.durationSeconds;
            if (message.fillColorRGB != null && message.hasOwnProperty("fillColorRGB"))
                object.fillColorRGB = message.fillColorRGB;
            if (message.autogen != null && message.hasOwnProperty("autogen"))
                object.autogen = message.autogen;
            if (message.backgroundColorRgb != null && message.hasOwnProperty("backgroundColorRgb"))
                object.backgroundColorRgb = message.backgroundColorRgb;
            if (message.deviceClass != null && message.hasOwnProperty("deviceClass"))
                object.deviceClass = message.deviceClass;
            if (message.supportsFifeMonogramOption != null && message.hasOwnProperty("supportsFifeMonogramOption"))
                object.supportsFifeMonogramOption = message.supportsFifeMonogramOption;
            if (message.imageUrlAlt != null && message.hasOwnProperty("imageUrlAlt"))
                object.imageUrlAlt = message.imageUrlAlt;
            return object;
        };

        /**
         * Converts this Image to JSON.
         * @function toJSON
         * @memberof GooglePlay.Image
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Image.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Image
         * @function getTypeUrl
         * @memberof GooglePlay.Image
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Image.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.Image";
        };

        Image.Dimension = (function() {

            /**
             * Properties of a Dimension.
             * @memberof GooglePlay.Image
             * @interface IDimension
             * @property {number|null} [width] Dimension width
             * @property {number|null} [height] Dimension height
             * @property {number|null} [aspectRatio] Dimension aspectRatio
             */

            /**
             * Constructs a new Dimension.
             * @memberof GooglePlay.Image
             * @classdesc Represents a Dimension.
             * @implements IDimension
             * @constructor
             * @param {GooglePlay.Image.IDimension=} [properties] Properties to set
             */
            function Dimension(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Dimension width.
             * @member {number} width
             * @memberof GooglePlay.Image.Dimension
             * @instance
             */
            Dimension.prototype.width = 0;

            /**
             * Dimension height.
             * @member {number} height
             * @memberof GooglePlay.Image.Dimension
             * @instance
             */
            Dimension.prototype.height = 0;

            /**
             * Dimension aspectRatio.
             * @member {number} aspectRatio
             * @memberof GooglePlay.Image.Dimension
             * @instance
             */
            Dimension.prototype.aspectRatio = 0;

            /**
             * Creates a new Dimension instance using the specified properties.
             * @function create
             * @memberof GooglePlay.Image.Dimension
             * @static
             * @param {GooglePlay.Image.IDimension=} [properties] Properties to set
             * @returns {GooglePlay.Image.Dimension} Dimension instance
             */
            Dimension.create = function create(properties) {
                return new Dimension(properties);
            };

            /**
             * Encodes the specified Dimension message. Does not implicitly {@link GooglePlay.Image.Dimension.verify|verify} messages.
             * @function encode
             * @memberof GooglePlay.Image.Dimension
             * @static
             * @param {GooglePlay.Image.IDimension} message Dimension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Dimension.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.width);
                if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.height);
                if (message.aspectRatio != null && Object.hasOwnProperty.call(message, "aspectRatio"))
                    writer.uint32(/* id 18, wireType 0 =*/144).int32(message.aspectRatio);
                return writer;
            };

            /**
             * Encodes the specified Dimension message, length delimited. Does not implicitly {@link GooglePlay.Image.Dimension.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GooglePlay.Image.Dimension
             * @static
             * @param {GooglePlay.Image.IDimension} message Dimension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Dimension.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Dimension message from the specified reader or buffer.
             * @function decode
             * @memberof GooglePlay.Image.Dimension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GooglePlay.Image.Dimension} Dimension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Dimension.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.Image.Dimension();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if ((tag & 7) === 4)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.width = reader.int32();
                            break;
                        }
                    case 4: {
                            message.height = reader.int32();
                            break;
                        }
                    case 18: {
                            message.aspectRatio = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Dimension message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GooglePlay.Image.Dimension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GooglePlay.Image.Dimension} Dimension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Dimension.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Dimension message.
             * @function verify
             * @memberof GooglePlay.Image.Dimension
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Dimension.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.width != null && message.hasOwnProperty("width"))
                    if (!$util.isInteger(message.width))
                        return "width: integer expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height))
                        return "height: integer expected";
                if (message.aspectRatio != null && message.hasOwnProperty("aspectRatio"))
                    if (!$util.isInteger(message.aspectRatio))
                        return "aspectRatio: integer expected";
                return null;
            };

            /**
             * Creates a Dimension message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GooglePlay.Image.Dimension
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GooglePlay.Image.Dimension} Dimension
             */
            Dimension.fromObject = function fromObject(object) {
                if (object instanceof $root.GooglePlay.Image.Dimension)
                    return object;
                var message = new $root.GooglePlay.Image.Dimension();
                if (object.width != null)
                    message.width = object.width | 0;
                if (object.height != null)
                    message.height = object.height | 0;
                if (object.aspectRatio != null)
                    message.aspectRatio = object.aspectRatio | 0;
                return message;
            };

            /**
             * Creates a plain object from a Dimension message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GooglePlay.Image.Dimension
             * @static
             * @param {GooglePlay.Image.Dimension} message Dimension
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Dimension.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.width = 0;
                    object.height = 0;
                    object.aspectRatio = 0;
                }
                if (message.width != null && message.hasOwnProperty("width"))
                    object.width = message.width;
                if (message.height != null && message.hasOwnProperty("height"))
                    object.height = message.height;
                if (message.aspectRatio != null && message.hasOwnProperty("aspectRatio"))
                    object.aspectRatio = message.aspectRatio;
                return object;
            };

            /**
             * Converts this Dimension to JSON.
             * @function toJSON
             * @memberof GooglePlay.Image.Dimension
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Dimension.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Dimension
             * @function getTypeUrl
             * @memberof GooglePlay.Image.Dimension
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Dimension.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/GooglePlay.Image.Dimension";
            };

            return Dimension;
        })();

        Image.Citation = (function() {

            /**
             * Properties of a Citation.
             * @memberof GooglePlay.Image
             * @interface ICitation
             * @property {string|null} [titleLocalized] Citation titleLocalized
             * @property {string|null} [url] Citation url
             */

            /**
             * Constructs a new Citation.
             * @memberof GooglePlay.Image
             * @classdesc Represents a Citation.
             * @implements ICitation
             * @constructor
             * @param {GooglePlay.Image.ICitation=} [properties] Properties to set
             */
            function Citation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Citation titleLocalized.
             * @member {string} titleLocalized
             * @memberof GooglePlay.Image.Citation
             * @instance
             */
            Citation.prototype.titleLocalized = "";

            /**
             * Citation url.
             * @member {string} url
             * @memberof GooglePlay.Image.Citation
             * @instance
             */
            Citation.prototype.url = "";

            /**
             * Creates a new Citation instance using the specified properties.
             * @function create
             * @memberof GooglePlay.Image.Citation
             * @static
             * @param {GooglePlay.Image.ICitation=} [properties] Properties to set
             * @returns {GooglePlay.Image.Citation} Citation instance
             */
            Citation.create = function create(properties) {
                return new Citation(properties);
            };

            /**
             * Encodes the specified Citation message. Does not implicitly {@link GooglePlay.Image.Citation.verify|verify} messages.
             * @function encode
             * @memberof GooglePlay.Image.Citation
             * @static
             * @param {GooglePlay.Image.ICitation} message Citation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Citation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.titleLocalized != null && Object.hasOwnProperty.call(message, "titleLocalized"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.titleLocalized);
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.url);
                return writer;
            };

            /**
             * Encodes the specified Citation message, length delimited. Does not implicitly {@link GooglePlay.Image.Citation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GooglePlay.Image.Citation
             * @static
             * @param {GooglePlay.Image.ICitation} message Citation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Citation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Citation message from the specified reader or buffer.
             * @function decode
             * @memberof GooglePlay.Image.Citation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GooglePlay.Image.Citation} Citation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Citation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.Image.Citation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if ((tag & 7) === 4)
                        break;
                    switch (tag >>> 3) {
                    case 11: {
                            message.titleLocalized = reader.string();
                            break;
                        }
                    case 12: {
                            message.url = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Citation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GooglePlay.Image.Citation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GooglePlay.Image.Citation} Citation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Citation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Citation message.
             * @function verify
             * @memberof GooglePlay.Image.Citation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Citation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.titleLocalized != null && message.hasOwnProperty("titleLocalized"))
                    if (!$util.isString(message.titleLocalized))
                        return "titleLocalized: string expected";
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                return null;
            };

            /**
             * Creates a Citation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GooglePlay.Image.Citation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GooglePlay.Image.Citation} Citation
             */
            Citation.fromObject = function fromObject(object) {
                if (object instanceof $root.GooglePlay.Image.Citation)
                    return object;
                var message = new $root.GooglePlay.Image.Citation();
                if (object.titleLocalized != null)
                    message.titleLocalized = String(object.titleLocalized);
                if (object.url != null)
                    message.url = String(object.url);
                return message;
            };

            /**
             * Creates a plain object from a Citation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GooglePlay.Image.Citation
             * @static
             * @param {GooglePlay.Image.Citation} message Citation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Citation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.titleLocalized = "";
                    object.url = "";
                }
                if (message.titleLocalized != null && message.hasOwnProperty("titleLocalized"))
                    object.titleLocalized = message.titleLocalized;
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                return object;
            };

            /**
             * Converts this Citation to JSON.
             * @function toJSON
             * @memberof GooglePlay.Image.Citation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Citation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Citation
             * @function getTypeUrl
             * @memberof GooglePlay.Image.Citation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Citation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/GooglePlay.Image.Citation";
            };

            return Citation;
        })();

        return Image;
    })();

    GooglePlay.UserProfile = (function() {

        /**
         * Properties of a UserProfile.
         * @memberof GooglePlay
         * @interface IUserProfile
         * @property {string|null} [profileId] UserProfile profileId
         * @property {string|null} [personId] UserProfile personId
         * @property {number|null} [profileType] UserProfile profileType
         * @property {number|null} [personType] UserProfile personType
         * @property {string|null} [name] UserProfile name
         * @property {Array.<GooglePlay.IImage>|null} [image] UserProfile image
         * @property {string|null} [profileUrl] UserProfile profileUrl
         * @property {string|null} [profileDescription] UserProfile profileDescription
         */

        /**
         * Constructs a new UserProfile.
         * @memberof GooglePlay
         * @classdesc Represents a UserProfile.
         * @implements IUserProfile
         * @constructor
         * @param {GooglePlay.IUserProfile=} [properties] Properties to set
         */
        function UserProfile(properties) {
            this.image = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserProfile profileId.
         * @member {string} profileId
         * @memberof GooglePlay.UserProfile
         * @instance
         */
        UserProfile.prototype.profileId = "";

        /**
         * UserProfile personId.
         * @member {string} personId
         * @memberof GooglePlay.UserProfile
         * @instance
         */
        UserProfile.prototype.personId = "";

        /**
         * UserProfile profileType.
         * @member {number} profileType
         * @memberof GooglePlay.UserProfile
         * @instance
         */
        UserProfile.prototype.profileType = 0;

        /**
         * UserProfile personType.
         * @member {number} personType
         * @memberof GooglePlay.UserProfile
         * @instance
         */
        UserProfile.prototype.personType = 0;

        /**
         * UserProfile name.
         * @member {string} name
         * @memberof GooglePlay.UserProfile
         * @instance
         */
        UserProfile.prototype.name = "";

        /**
         * UserProfile image.
         * @member {Array.<GooglePlay.IImage>} image
         * @memberof GooglePlay.UserProfile
         * @instance
         */
        UserProfile.prototype.image = $util.emptyArray;

        /**
         * UserProfile profileUrl.
         * @member {string} profileUrl
         * @memberof GooglePlay.UserProfile
         * @instance
         */
        UserProfile.prototype.profileUrl = "";

        /**
         * UserProfile profileDescription.
         * @member {string} profileDescription
         * @memberof GooglePlay.UserProfile
         * @instance
         */
        UserProfile.prototype.profileDescription = "";

        /**
         * Creates a new UserProfile instance using the specified properties.
         * @function create
         * @memberof GooglePlay.UserProfile
         * @static
         * @param {GooglePlay.IUserProfile=} [properties] Properties to set
         * @returns {GooglePlay.UserProfile} UserProfile instance
         */
        UserProfile.create = function create(properties) {
            return new UserProfile(properties);
        };

        /**
         * Encodes the specified UserProfile message. Does not implicitly {@link GooglePlay.UserProfile.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.UserProfile
         * @static
         * @param {GooglePlay.IUserProfile} message UserProfile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserProfile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.profileId != null && Object.hasOwnProperty.call(message, "profileId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.profileId);
            if (message.personId != null && Object.hasOwnProperty.call(message, "personId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.personId);
            if (message.profileType != null && Object.hasOwnProperty.call(message, "profileType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.profileType);
            if (message.personType != null && Object.hasOwnProperty.call(message, "personType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.personType);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
            if (message.image != null && message.image.length)
                for (var i = 0; i < message.image.length; ++i)
                    $root.GooglePlay.Image.encode(message.image[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.profileUrl != null && Object.hasOwnProperty.call(message, "profileUrl"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.profileUrl);
            if (message.profileDescription != null && Object.hasOwnProperty.call(message, "profileDescription"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.profileDescription);
            return writer;
        };

        /**
         * Encodes the specified UserProfile message, length delimited. Does not implicitly {@link GooglePlay.UserProfile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.UserProfile
         * @static
         * @param {GooglePlay.IUserProfile} message UserProfile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserProfile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserProfile message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.UserProfile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.UserProfile} UserProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserProfile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.UserProfile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.profileId = reader.string();
                        break;
                    }
                case 2: {
                        message.personId = reader.string();
                        break;
                    }
                case 3: {
                        message.profileType = reader.int32();
                        break;
                    }
                case 4: {
                        message.personType = reader.int32();
                        break;
                    }
                case 5: {
                        message.name = reader.string();
                        break;
                    }
                case 10: {
                        if (!(message.image && message.image.length))
                            message.image = [];
                        message.image.push($root.GooglePlay.Image.decode(reader, reader.uint32()));
                        break;
                    }
                case 19: {
                        message.profileUrl = reader.string();
                        break;
                    }
                case 22: {
                        message.profileDescription = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserProfile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.UserProfile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.UserProfile} UserProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserProfile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserProfile message.
         * @function verify
         * @memberof GooglePlay.UserProfile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserProfile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.profileId != null && message.hasOwnProperty("profileId"))
                if (!$util.isString(message.profileId))
                    return "profileId: string expected";
            if (message.personId != null && message.hasOwnProperty("personId"))
                if (!$util.isString(message.personId))
                    return "personId: string expected";
            if (message.profileType != null && message.hasOwnProperty("profileType"))
                if (!$util.isInteger(message.profileType))
                    return "profileType: integer expected";
            if (message.personType != null && message.hasOwnProperty("personType"))
                if (!$util.isInteger(message.personType))
                    return "personType: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.image != null && message.hasOwnProperty("image")) {
                if (!Array.isArray(message.image))
                    return "image: array expected";
                for (var i = 0; i < message.image.length; ++i) {
                    var error = $root.GooglePlay.Image.verify(message.image[i]);
                    if (error)
                        return "image." + error;
                }
            }
            if (message.profileUrl != null && message.hasOwnProperty("profileUrl"))
                if (!$util.isString(message.profileUrl))
                    return "profileUrl: string expected";
            if (message.profileDescription != null && message.hasOwnProperty("profileDescription"))
                if (!$util.isString(message.profileDescription))
                    return "profileDescription: string expected";
            return null;
        };

        /**
         * Creates a UserProfile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.UserProfile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.UserProfile} UserProfile
         */
        UserProfile.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.UserProfile)
                return object;
            var message = new $root.GooglePlay.UserProfile();
            if (object.profileId != null)
                message.profileId = String(object.profileId);
            if (object.personId != null)
                message.personId = String(object.personId);
            if (object.profileType != null)
                message.profileType = object.profileType | 0;
            if (object.personType != null)
                message.personType = object.personType | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.image) {
                if (!Array.isArray(object.image))
                    throw TypeError(".GooglePlay.UserProfile.image: array expected");
                message.image = [];
                for (var i = 0; i < object.image.length; ++i) {
                    if (typeof object.image[i] !== "object")
                        throw TypeError(".GooglePlay.UserProfile.image: object expected");
                    message.image[i] = $root.GooglePlay.Image.fromObject(object.image[i]);
                }
            }
            if (object.profileUrl != null)
                message.profileUrl = String(object.profileUrl);
            if (object.profileDescription != null)
                message.profileDescription = String(object.profileDescription);
            return message;
        };

        /**
         * Creates a plain object from a UserProfile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.UserProfile
         * @static
         * @param {GooglePlay.UserProfile} message UserProfile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserProfile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.image = [];
            if (options.defaults) {
                object.profileId = "";
                object.personId = "";
                object.profileType = 0;
                object.personType = 0;
                object.name = "";
                object.profileUrl = "";
                object.profileDescription = "";
            }
            if (message.profileId != null && message.hasOwnProperty("profileId"))
                object.profileId = message.profileId;
            if (message.personId != null && message.hasOwnProperty("personId"))
                object.personId = message.personId;
            if (message.profileType != null && message.hasOwnProperty("profileType"))
                object.profileType = message.profileType;
            if (message.personType != null && message.hasOwnProperty("personType"))
                object.personType = message.personType;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.image && message.image.length) {
                object.image = [];
                for (var j = 0; j < message.image.length; ++j)
                    object.image[j] = $root.GooglePlay.Image.toObject(message.image[j], options);
            }
            if (message.profileUrl != null && message.hasOwnProperty("profileUrl"))
                object.profileUrl = message.profileUrl;
            if (message.profileDescription != null && message.hasOwnProperty("profileDescription"))
                object.profileDescription = message.profileDescription;
            return object;
        };

        /**
         * Converts this UserProfile to JSON.
         * @function toJSON
         * @memberof GooglePlay.UserProfile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserProfile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserProfile
         * @function getTypeUrl
         * @memberof GooglePlay.UserProfile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserProfile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.UserProfile";
        };

        return UserProfile;
    })();

    GooglePlay.UploadDeviceConfigRequest = (function() {

        /**
         * Properties of an UploadDeviceConfigRequest.
         * @memberof GooglePlay
         * @interface IUploadDeviceConfigRequest
         * @property {GooglePlay.IDeviceConfigurationProto|null} [deviceConfiguration] UploadDeviceConfigRequest deviceConfiguration
         * @property {string|null} [manufacturer] UploadDeviceConfigRequest manufacturer
         * @property {string|null} [gcmRegistrationId] UploadDeviceConfigRequest gcmRegistrationId
         */

        /**
         * Constructs a new UploadDeviceConfigRequest.
         * @memberof GooglePlay
         * @classdesc Represents an UploadDeviceConfigRequest.
         * @implements IUploadDeviceConfigRequest
         * @constructor
         * @param {GooglePlay.IUploadDeviceConfigRequest=} [properties] Properties to set
         */
        function UploadDeviceConfigRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadDeviceConfigRequest deviceConfiguration.
         * @member {GooglePlay.IDeviceConfigurationProto|null|undefined} deviceConfiguration
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @instance
         */
        UploadDeviceConfigRequest.prototype.deviceConfiguration = null;

        /**
         * UploadDeviceConfigRequest manufacturer.
         * @member {string} manufacturer
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @instance
         */
        UploadDeviceConfigRequest.prototype.manufacturer = "";

        /**
         * UploadDeviceConfigRequest gcmRegistrationId.
         * @member {string} gcmRegistrationId
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @instance
         */
        UploadDeviceConfigRequest.prototype.gcmRegistrationId = "";

        /**
         * Creates a new UploadDeviceConfigRequest instance using the specified properties.
         * @function create
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @static
         * @param {GooglePlay.IUploadDeviceConfigRequest=} [properties] Properties to set
         * @returns {GooglePlay.UploadDeviceConfigRequest} UploadDeviceConfigRequest instance
         */
        UploadDeviceConfigRequest.create = function create(properties) {
            return new UploadDeviceConfigRequest(properties);
        };

        /**
         * Encodes the specified UploadDeviceConfigRequest message. Does not implicitly {@link GooglePlay.UploadDeviceConfigRequest.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @static
         * @param {GooglePlay.IUploadDeviceConfigRequest} message UploadDeviceConfigRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadDeviceConfigRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceConfiguration != null && Object.hasOwnProperty.call(message, "deviceConfiguration"))
                $root.GooglePlay.DeviceConfigurationProto.encode(message.deviceConfiguration, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.manufacturer != null && Object.hasOwnProperty.call(message, "manufacturer"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.manufacturer);
            if (message.gcmRegistrationId != null && Object.hasOwnProperty.call(message, "gcmRegistrationId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gcmRegistrationId);
            return writer;
        };

        /**
         * Encodes the specified UploadDeviceConfigRequest message, length delimited. Does not implicitly {@link GooglePlay.UploadDeviceConfigRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @static
         * @param {GooglePlay.IUploadDeviceConfigRequest} message UploadDeviceConfigRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadDeviceConfigRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadDeviceConfigRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.UploadDeviceConfigRequest} UploadDeviceConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadDeviceConfigRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.UploadDeviceConfigRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceConfiguration = $root.GooglePlay.DeviceConfigurationProto.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.manufacturer = reader.string();
                        break;
                    }
                case 3: {
                        message.gcmRegistrationId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadDeviceConfigRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.UploadDeviceConfigRequest} UploadDeviceConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadDeviceConfigRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadDeviceConfigRequest message.
         * @function verify
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadDeviceConfigRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceConfiguration != null && message.hasOwnProperty("deviceConfiguration")) {
                var error = $root.GooglePlay.DeviceConfigurationProto.verify(message.deviceConfiguration);
                if (error)
                    return "deviceConfiguration." + error;
            }
            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                if (!$util.isString(message.manufacturer))
                    return "manufacturer: string expected";
            if (message.gcmRegistrationId != null && message.hasOwnProperty("gcmRegistrationId"))
                if (!$util.isString(message.gcmRegistrationId))
                    return "gcmRegistrationId: string expected";
            return null;
        };

        /**
         * Creates an UploadDeviceConfigRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.UploadDeviceConfigRequest} UploadDeviceConfigRequest
         */
        UploadDeviceConfigRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.UploadDeviceConfigRequest)
                return object;
            var message = new $root.GooglePlay.UploadDeviceConfigRequest();
            if (object.deviceConfiguration != null) {
                if (typeof object.deviceConfiguration !== "object")
                    throw TypeError(".GooglePlay.UploadDeviceConfigRequest.deviceConfiguration: object expected");
                message.deviceConfiguration = $root.GooglePlay.DeviceConfigurationProto.fromObject(object.deviceConfiguration);
            }
            if (object.manufacturer != null)
                message.manufacturer = String(object.manufacturer);
            if (object.gcmRegistrationId != null)
                message.gcmRegistrationId = String(object.gcmRegistrationId);
            return message;
        };

        /**
         * Creates a plain object from an UploadDeviceConfigRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @static
         * @param {GooglePlay.UploadDeviceConfigRequest} message UploadDeviceConfigRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadDeviceConfigRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.deviceConfiguration = null;
                object.manufacturer = "";
                object.gcmRegistrationId = "";
            }
            if (message.deviceConfiguration != null && message.hasOwnProperty("deviceConfiguration"))
                object.deviceConfiguration = $root.GooglePlay.DeviceConfigurationProto.toObject(message.deviceConfiguration, options);
            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                object.manufacturer = message.manufacturer;
            if (message.gcmRegistrationId != null && message.hasOwnProperty("gcmRegistrationId"))
                object.gcmRegistrationId = message.gcmRegistrationId;
            return object;
        };

        /**
         * Converts this UploadDeviceConfigRequest to JSON.
         * @function toJSON
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadDeviceConfigRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadDeviceConfigRequest
         * @function getTypeUrl
         * @memberof GooglePlay.UploadDeviceConfigRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadDeviceConfigRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.UploadDeviceConfigRequest";
        };

        return UploadDeviceConfigRequest;
    })();

    GooglePlay.UploadDeviceConfigResponse = (function() {

        /**
         * Properties of an UploadDeviceConfigResponse.
         * @memberof GooglePlay
         * @interface IUploadDeviceConfigResponse
         * @property {string|null} [uploadDeviceConfigToken] UploadDeviceConfigResponse uploadDeviceConfigToken
         */

        /**
         * Constructs a new UploadDeviceConfigResponse.
         * @memberof GooglePlay
         * @classdesc Represents an UploadDeviceConfigResponse.
         * @implements IUploadDeviceConfigResponse
         * @constructor
         * @param {GooglePlay.IUploadDeviceConfigResponse=} [properties] Properties to set
         */
        function UploadDeviceConfigResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadDeviceConfigResponse uploadDeviceConfigToken.
         * @member {string} uploadDeviceConfigToken
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @instance
         */
        UploadDeviceConfigResponse.prototype.uploadDeviceConfigToken = "";

        /**
         * Creates a new UploadDeviceConfigResponse instance using the specified properties.
         * @function create
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @static
         * @param {GooglePlay.IUploadDeviceConfigResponse=} [properties] Properties to set
         * @returns {GooglePlay.UploadDeviceConfigResponse} UploadDeviceConfigResponse instance
         */
        UploadDeviceConfigResponse.create = function create(properties) {
            return new UploadDeviceConfigResponse(properties);
        };

        /**
         * Encodes the specified UploadDeviceConfigResponse message. Does not implicitly {@link GooglePlay.UploadDeviceConfigResponse.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @static
         * @param {GooglePlay.IUploadDeviceConfigResponse} message UploadDeviceConfigResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadDeviceConfigResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uploadDeviceConfigToken != null && Object.hasOwnProperty.call(message, "uploadDeviceConfigToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uploadDeviceConfigToken);
            return writer;
        };

        /**
         * Encodes the specified UploadDeviceConfigResponse message, length delimited. Does not implicitly {@link GooglePlay.UploadDeviceConfigResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @static
         * @param {GooglePlay.IUploadDeviceConfigResponse} message UploadDeviceConfigResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadDeviceConfigResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadDeviceConfigResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.UploadDeviceConfigResponse} UploadDeviceConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadDeviceConfigResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.UploadDeviceConfigResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uploadDeviceConfigToken = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadDeviceConfigResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.UploadDeviceConfigResponse} UploadDeviceConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadDeviceConfigResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadDeviceConfigResponse message.
         * @function verify
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadDeviceConfigResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uploadDeviceConfigToken != null && message.hasOwnProperty("uploadDeviceConfigToken"))
                if (!$util.isString(message.uploadDeviceConfigToken))
                    return "uploadDeviceConfigToken: string expected";
            return null;
        };

        /**
         * Creates an UploadDeviceConfigResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.UploadDeviceConfigResponse} UploadDeviceConfigResponse
         */
        UploadDeviceConfigResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.UploadDeviceConfigResponse)
                return object;
            var message = new $root.GooglePlay.UploadDeviceConfigResponse();
            if (object.uploadDeviceConfigToken != null)
                message.uploadDeviceConfigToken = String(object.uploadDeviceConfigToken);
            return message;
        };

        /**
         * Creates a plain object from an UploadDeviceConfigResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @static
         * @param {GooglePlay.UploadDeviceConfigResponse} message UploadDeviceConfigResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadDeviceConfigResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uploadDeviceConfigToken = "";
            if (message.uploadDeviceConfigToken != null && message.hasOwnProperty("uploadDeviceConfigToken"))
                object.uploadDeviceConfigToken = message.uploadDeviceConfigToken;
            return object;
        };

        /**
         * Converts this UploadDeviceConfigResponse to JSON.
         * @function toJSON
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadDeviceConfigResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadDeviceConfigResponse
         * @function getTypeUrl
         * @memberof GooglePlay.UploadDeviceConfigResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadDeviceConfigResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.UploadDeviceConfigResponse";
        };

        return UploadDeviceConfigResponse;
    })();

    GooglePlay.AndroidCheckinRequest = (function() {

        /**
         * Properties of an AndroidCheckinRequest.
         * @memberof GooglePlay
         * @interface IAndroidCheckinRequest
         * @property {string|null} [imei] AndroidCheckinRequest imei
         * @property {number|Long|null} [id] AndroidCheckinRequest id
         * @property {string|null} [digest] AndroidCheckinRequest digest
         * @property {GooglePlay.IAndroidCheckinProto|null} [checkin] AndroidCheckinRequest checkin
         * @property {string|null} [desiredBuild] AndroidCheckinRequest desiredBuild
         * @property {string|null} [locale] AndroidCheckinRequest locale
         * @property {number|Long|null} [loggingId] AndroidCheckinRequest loggingId
         * @property {string|null} [marketCheckin] AndroidCheckinRequest marketCheckin
         * @property {Array.<string>|null} [macAddr] AndroidCheckinRequest macAddr
         * @property {string|null} [meid] AndroidCheckinRequest meid
         * @property {Array.<string>|null} [accountCookie] AndroidCheckinRequest accountCookie
         * @property {string|null} [timeZone] AndroidCheckinRequest timeZone
         * @property {number|Long|null} [securityToken] AndroidCheckinRequest securityToken
         * @property {number|null} [version] AndroidCheckinRequest version
         * @property {Array.<string>|null} [otaCert] AndroidCheckinRequest otaCert
         * @property {string|null} [serialNumber] AndroidCheckinRequest serialNumber
         * @property {string|null} [esn] AndroidCheckinRequest esn
         * @property {GooglePlay.IDeviceConfigurationProto|null} [deviceConfiguration] AndroidCheckinRequest deviceConfiguration
         * @property {Array.<string>|null} [macAddrType] AndroidCheckinRequest macAddrType
         * @property {number|null} [fragment] AndroidCheckinRequest fragment
         * @property {string|null} [userName] AndroidCheckinRequest userName
         * @property {number|null} [userSerialNumber] AndroidCheckinRequest userSerialNumber
         */

        /**
         * Constructs a new AndroidCheckinRequest.
         * @memberof GooglePlay
         * @classdesc Represents an AndroidCheckinRequest.
         * @implements IAndroidCheckinRequest
         * @constructor
         * @param {GooglePlay.IAndroidCheckinRequest=} [properties] Properties to set
         */
        function AndroidCheckinRequest(properties) {
            this.macAddr = [];
            this.accountCookie = [];
            this.otaCert = [];
            this.macAddrType = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AndroidCheckinRequest imei.
         * @member {string} imei
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.imei = "";

        /**
         * AndroidCheckinRequest id.
         * @member {number|Long} id
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinRequest digest.
         * @member {string} digest
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.digest = "";

        /**
         * AndroidCheckinRequest checkin.
         * @member {GooglePlay.IAndroidCheckinProto|null|undefined} checkin
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.checkin = null;

        /**
         * AndroidCheckinRequest desiredBuild.
         * @member {string} desiredBuild
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.desiredBuild = "";

        /**
         * AndroidCheckinRequest locale.
         * @member {string} locale
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.locale = "";

        /**
         * AndroidCheckinRequest loggingId.
         * @member {number|Long} loggingId
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.loggingId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinRequest marketCheckin.
         * @member {string} marketCheckin
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.marketCheckin = "";

        /**
         * AndroidCheckinRequest macAddr.
         * @member {Array.<string>} macAddr
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.macAddr = $util.emptyArray;

        /**
         * AndroidCheckinRequest meid.
         * @member {string} meid
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.meid = "";

        /**
         * AndroidCheckinRequest accountCookie.
         * @member {Array.<string>} accountCookie
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.accountCookie = $util.emptyArray;

        /**
         * AndroidCheckinRequest timeZone.
         * @member {string} timeZone
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.timeZone = "";

        /**
         * AndroidCheckinRequest securityToken.
         * @member {number|Long} securityToken
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.securityToken = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinRequest version.
         * @member {number} version
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.version = 0;

        /**
         * AndroidCheckinRequest otaCert.
         * @member {Array.<string>} otaCert
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.otaCert = $util.emptyArray;

        /**
         * AndroidCheckinRequest serialNumber.
         * @member {string} serialNumber
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.serialNumber = "";

        /**
         * AndroidCheckinRequest esn.
         * @member {string} esn
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.esn = "";

        /**
         * AndroidCheckinRequest deviceConfiguration.
         * @member {GooglePlay.IDeviceConfigurationProto|null|undefined} deviceConfiguration
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.deviceConfiguration = null;

        /**
         * AndroidCheckinRequest macAddrType.
         * @member {Array.<string>} macAddrType
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.macAddrType = $util.emptyArray;

        /**
         * AndroidCheckinRequest fragment.
         * @member {number} fragment
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.fragment = 0;

        /**
         * AndroidCheckinRequest userName.
         * @member {string} userName
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.userName = "";

        /**
         * AndroidCheckinRequest userSerialNumber.
         * @member {number} userSerialNumber
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.userSerialNumber = 0;

        /**
         * Creates a new AndroidCheckinRequest instance using the specified properties.
         * @function create
         * @memberof GooglePlay.AndroidCheckinRequest
         * @static
         * @param {GooglePlay.IAndroidCheckinRequest=} [properties] Properties to set
         * @returns {GooglePlay.AndroidCheckinRequest} AndroidCheckinRequest instance
         */
        AndroidCheckinRequest.create = function create(properties) {
            return new AndroidCheckinRequest(properties);
        };

        /**
         * Encodes the specified AndroidCheckinRequest message. Does not implicitly {@link GooglePlay.AndroidCheckinRequest.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.AndroidCheckinRequest
         * @static
         * @param {GooglePlay.IAndroidCheckinRequest} message AndroidCheckinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.imei != null && Object.hasOwnProperty.call(message, "imei"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.imei);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.id);
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.digest);
            if (message.checkin != null && Object.hasOwnProperty.call(message, "checkin"))
                $root.GooglePlay.AndroidCheckinProto.encode(message.checkin, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.desiredBuild != null && Object.hasOwnProperty.call(message, "desiredBuild"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.desiredBuild);
            if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.locale);
            if (message.loggingId != null && Object.hasOwnProperty.call(message, "loggingId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.loggingId);
            if (message.marketCheckin != null && Object.hasOwnProperty.call(message, "marketCheckin"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.marketCheckin);
            if (message.macAddr != null && message.macAddr.length)
                for (var i = 0; i < message.macAddr.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.macAddr[i]);
            if (message.meid != null && Object.hasOwnProperty.call(message, "meid"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.meid);
            if (message.accountCookie != null && message.accountCookie.length)
                for (var i = 0; i < message.accountCookie.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.accountCookie[i]);
            if (message.timeZone != null && Object.hasOwnProperty.call(message, "timeZone"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.timeZone);
            if (message.securityToken != null && Object.hasOwnProperty.call(message, "securityToken"))
                writer.uint32(/* id 13, wireType 1 =*/105).fixed64(message.securityToken);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.version);
            if (message.otaCert != null && message.otaCert.length)
                for (var i = 0; i < message.otaCert.length; ++i)
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.otaCert[i]);
            if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.serialNumber);
            if (message.esn != null && Object.hasOwnProperty.call(message, "esn"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.esn);
            if (message.deviceConfiguration != null && Object.hasOwnProperty.call(message, "deviceConfiguration"))
                $root.GooglePlay.DeviceConfigurationProto.encode(message.deviceConfiguration, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.macAddrType != null && message.macAddrType.length)
                for (var i = 0; i < message.macAddrType.length; ++i)
                    writer.uint32(/* id 19, wireType 2 =*/154).string(message.macAddrType[i]);
            if (message.fragment != null && Object.hasOwnProperty.call(message, "fragment"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.fragment);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.userName);
            if (message.userSerialNumber != null && Object.hasOwnProperty.call(message, "userSerialNumber"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.userSerialNumber);
            return writer;
        };

        /**
         * Encodes the specified AndroidCheckinRequest message, length delimited. Does not implicitly {@link GooglePlay.AndroidCheckinRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.AndroidCheckinRequest
         * @static
         * @param {GooglePlay.IAndroidCheckinRequest} message AndroidCheckinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AndroidCheckinRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.AndroidCheckinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.AndroidCheckinRequest} AndroidCheckinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.AndroidCheckinRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.imei = reader.string();
                        break;
                    }
                case 2: {
                        message.id = reader.int64();
                        break;
                    }
                case 3: {
                        message.digest = reader.string();
                        break;
                    }
                case 4: {
                        message.checkin = $root.GooglePlay.AndroidCheckinProto.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.desiredBuild = reader.string();
                        break;
                    }
                case 6: {
                        message.locale = reader.string();
                        break;
                    }
                case 7: {
                        message.loggingId = reader.int64();
                        break;
                    }
                case 8: {
                        message.marketCheckin = reader.string();
                        break;
                    }
                case 9: {
                        if (!(message.macAddr && message.macAddr.length))
                            message.macAddr = [];
                        message.macAddr.push(reader.string());
                        break;
                    }
                case 10: {
                        message.meid = reader.string();
                        break;
                    }
                case 11: {
                        if (!(message.accountCookie && message.accountCookie.length))
                            message.accountCookie = [];
                        message.accountCookie.push(reader.string());
                        break;
                    }
                case 12: {
                        message.timeZone = reader.string();
                        break;
                    }
                case 13: {
                        message.securityToken = reader.fixed64();
                        break;
                    }
                case 14: {
                        message.version = reader.int32();
                        break;
                    }
                case 15: {
                        if (!(message.otaCert && message.otaCert.length))
                            message.otaCert = [];
                        message.otaCert.push(reader.string());
                        break;
                    }
                case 16: {
                        message.serialNumber = reader.string();
                        break;
                    }
                case 17: {
                        message.esn = reader.string();
                        break;
                    }
                case 18: {
                        message.deviceConfiguration = $root.GooglePlay.DeviceConfigurationProto.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        if (!(message.macAddrType && message.macAddrType.length))
                            message.macAddrType = [];
                        message.macAddrType.push(reader.string());
                        break;
                    }
                case 20: {
                        message.fragment = reader.int32();
                        break;
                    }
                case 21: {
                        message.userName = reader.string();
                        break;
                    }
                case 22: {
                        message.userSerialNumber = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AndroidCheckinRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.AndroidCheckinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.AndroidCheckinRequest} AndroidCheckinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AndroidCheckinRequest message.
         * @function verify
         * @memberof GooglePlay.AndroidCheckinRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AndroidCheckinRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.imei != null && message.hasOwnProperty("imei"))
                if (!$util.isString(message.imei))
                    return "imei: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (!$util.isString(message.digest))
                    return "digest: string expected";
            if (message.checkin != null && message.hasOwnProperty("checkin")) {
                var error = $root.GooglePlay.AndroidCheckinProto.verify(message.checkin);
                if (error)
                    return "checkin." + error;
            }
            if (message.desiredBuild != null && message.hasOwnProperty("desiredBuild"))
                if (!$util.isString(message.desiredBuild))
                    return "desiredBuild: string expected";
            if (message.locale != null && message.hasOwnProperty("locale"))
                if (!$util.isString(message.locale))
                    return "locale: string expected";
            if (message.loggingId != null && message.hasOwnProperty("loggingId"))
                if (!$util.isInteger(message.loggingId) && !(message.loggingId && $util.isInteger(message.loggingId.low) && $util.isInteger(message.loggingId.high)))
                    return "loggingId: integer|Long expected";
            if (message.marketCheckin != null && message.hasOwnProperty("marketCheckin"))
                if (!$util.isString(message.marketCheckin))
                    return "marketCheckin: string expected";
            if (message.macAddr != null && message.hasOwnProperty("macAddr")) {
                if (!Array.isArray(message.macAddr))
                    return "macAddr: array expected";
                for (var i = 0; i < message.macAddr.length; ++i)
                    if (!$util.isString(message.macAddr[i]))
                        return "macAddr: string[] expected";
            }
            if (message.meid != null && message.hasOwnProperty("meid"))
                if (!$util.isString(message.meid))
                    return "meid: string expected";
            if (message.accountCookie != null && message.hasOwnProperty("accountCookie")) {
                if (!Array.isArray(message.accountCookie))
                    return "accountCookie: array expected";
                for (var i = 0; i < message.accountCookie.length; ++i)
                    if (!$util.isString(message.accountCookie[i]))
                        return "accountCookie: string[] expected";
            }
            if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                if (!$util.isString(message.timeZone))
                    return "timeZone: string expected";
            if (message.securityToken != null && message.hasOwnProperty("securityToken"))
                if (!$util.isInteger(message.securityToken) && !(message.securityToken && $util.isInteger(message.securityToken.low) && $util.isInteger(message.securityToken.high)))
                    return "securityToken: integer|Long expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.otaCert != null && message.hasOwnProperty("otaCert")) {
                if (!Array.isArray(message.otaCert))
                    return "otaCert: array expected";
                for (var i = 0; i < message.otaCert.length; ++i)
                    if (!$util.isString(message.otaCert[i]))
                        return "otaCert: string[] expected";
            }
            if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                if (!$util.isString(message.serialNumber))
                    return "serialNumber: string expected";
            if (message.esn != null && message.hasOwnProperty("esn"))
                if (!$util.isString(message.esn))
                    return "esn: string expected";
            if (message.deviceConfiguration != null && message.hasOwnProperty("deviceConfiguration")) {
                var error = $root.GooglePlay.DeviceConfigurationProto.verify(message.deviceConfiguration);
                if (error)
                    return "deviceConfiguration." + error;
            }
            if (message.macAddrType != null && message.hasOwnProperty("macAddrType")) {
                if (!Array.isArray(message.macAddrType))
                    return "macAddrType: array expected";
                for (var i = 0; i < message.macAddrType.length; ++i)
                    if (!$util.isString(message.macAddrType[i]))
                        return "macAddrType: string[] expected";
            }
            if (message.fragment != null && message.hasOwnProperty("fragment"))
                if (!$util.isInteger(message.fragment))
                    return "fragment: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userSerialNumber != null && message.hasOwnProperty("userSerialNumber"))
                if (!$util.isInteger(message.userSerialNumber))
                    return "userSerialNumber: integer expected";
            return null;
        };

        /**
         * Creates an AndroidCheckinRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.AndroidCheckinRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.AndroidCheckinRequest} AndroidCheckinRequest
         */
        AndroidCheckinRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.AndroidCheckinRequest)
                return object;
            var message = new $root.GooglePlay.AndroidCheckinRequest();
            if (object.imei != null)
                message.imei = String(object.imei);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.digest != null)
                message.digest = String(object.digest);
            if (object.checkin != null) {
                if (typeof object.checkin !== "object")
                    throw TypeError(".GooglePlay.AndroidCheckinRequest.checkin: object expected");
                message.checkin = $root.GooglePlay.AndroidCheckinProto.fromObject(object.checkin);
            }
            if (object.desiredBuild != null)
                message.desiredBuild = String(object.desiredBuild);
            if (object.locale != null)
                message.locale = String(object.locale);
            if (object.loggingId != null)
                if ($util.Long)
                    (message.loggingId = $util.Long.fromValue(object.loggingId)).unsigned = false;
                else if (typeof object.loggingId === "string")
                    message.loggingId = parseInt(object.loggingId, 10);
                else if (typeof object.loggingId === "number")
                    message.loggingId = object.loggingId;
                else if (typeof object.loggingId === "object")
                    message.loggingId = new $util.LongBits(object.loggingId.low >>> 0, object.loggingId.high >>> 0).toNumber();
            if (object.marketCheckin != null)
                message.marketCheckin = String(object.marketCheckin);
            if (object.macAddr) {
                if (!Array.isArray(object.macAddr))
                    throw TypeError(".GooglePlay.AndroidCheckinRequest.macAddr: array expected");
                message.macAddr = [];
                for (var i = 0; i < object.macAddr.length; ++i)
                    message.macAddr[i] = String(object.macAddr[i]);
            }
            if (object.meid != null)
                message.meid = String(object.meid);
            if (object.accountCookie) {
                if (!Array.isArray(object.accountCookie))
                    throw TypeError(".GooglePlay.AndroidCheckinRequest.accountCookie: array expected");
                message.accountCookie = [];
                for (var i = 0; i < object.accountCookie.length; ++i)
                    message.accountCookie[i] = String(object.accountCookie[i]);
            }
            if (object.timeZone != null)
                message.timeZone = String(object.timeZone);
            if (object.securityToken != null)
                if ($util.Long)
                    (message.securityToken = $util.Long.fromValue(object.securityToken)).unsigned = false;
                else if (typeof object.securityToken === "string")
                    message.securityToken = parseInt(object.securityToken, 10);
                else if (typeof object.securityToken === "number")
                    message.securityToken = object.securityToken;
                else if (typeof object.securityToken === "object")
                    message.securityToken = new $util.LongBits(object.securityToken.low >>> 0, object.securityToken.high >>> 0).toNumber();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.otaCert) {
                if (!Array.isArray(object.otaCert))
                    throw TypeError(".GooglePlay.AndroidCheckinRequest.otaCert: array expected");
                message.otaCert = [];
                for (var i = 0; i < object.otaCert.length; ++i)
                    message.otaCert[i] = String(object.otaCert[i]);
            }
            if (object.serialNumber != null)
                message.serialNumber = String(object.serialNumber);
            if (object.esn != null)
                message.esn = String(object.esn);
            if (object.deviceConfiguration != null) {
                if (typeof object.deviceConfiguration !== "object")
                    throw TypeError(".GooglePlay.AndroidCheckinRequest.deviceConfiguration: object expected");
                message.deviceConfiguration = $root.GooglePlay.DeviceConfigurationProto.fromObject(object.deviceConfiguration);
            }
            if (object.macAddrType) {
                if (!Array.isArray(object.macAddrType))
                    throw TypeError(".GooglePlay.AndroidCheckinRequest.macAddrType: array expected");
                message.macAddrType = [];
                for (var i = 0; i < object.macAddrType.length; ++i)
                    message.macAddrType[i] = String(object.macAddrType[i]);
            }
            if (object.fragment != null)
                message.fragment = object.fragment | 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userSerialNumber != null)
                message.userSerialNumber = object.userSerialNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from an AndroidCheckinRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.AndroidCheckinRequest
         * @static
         * @param {GooglePlay.AndroidCheckinRequest} message AndroidCheckinRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AndroidCheckinRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.macAddr = [];
                object.accountCookie = [];
                object.otaCert = [];
                object.macAddrType = [];
            }
            if (options.defaults) {
                object.imei = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.digest = "";
                object.checkin = null;
                object.desiredBuild = "";
                object.locale = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.loggingId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.loggingId = options.longs === String ? "0" : 0;
                object.marketCheckin = "";
                object.meid = "";
                object.timeZone = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.securityToken = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.securityToken = options.longs === String ? "0" : 0;
                object.version = 0;
                object.serialNumber = "";
                object.esn = "";
                object.deviceConfiguration = null;
                object.fragment = 0;
                object.userName = "";
                object.userSerialNumber = 0;
            }
            if (message.imei != null && message.hasOwnProperty("imei"))
                object.imei = message.imei;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = message.digest;
            if (message.checkin != null && message.hasOwnProperty("checkin"))
                object.checkin = $root.GooglePlay.AndroidCheckinProto.toObject(message.checkin, options);
            if (message.desiredBuild != null && message.hasOwnProperty("desiredBuild"))
                object.desiredBuild = message.desiredBuild;
            if (message.locale != null && message.hasOwnProperty("locale"))
                object.locale = message.locale;
            if (message.loggingId != null && message.hasOwnProperty("loggingId"))
                if (typeof message.loggingId === "number")
                    object.loggingId = options.longs === String ? String(message.loggingId) : message.loggingId;
                else
                    object.loggingId = options.longs === String ? $util.Long.prototype.toString.call(message.loggingId) : options.longs === Number ? new $util.LongBits(message.loggingId.low >>> 0, message.loggingId.high >>> 0).toNumber() : message.loggingId;
            if (message.marketCheckin != null && message.hasOwnProperty("marketCheckin"))
                object.marketCheckin = message.marketCheckin;
            if (message.macAddr && message.macAddr.length) {
                object.macAddr = [];
                for (var j = 0; j < message.macAddr.length; ++j)
                    object.macAddr[j] = message.macAddr[j];
            }
            if (message.meid != null && message.hasOwnProperty("meid"))
                object.meid = message.meid;
            if (message.accountCookie && message.accountCookie.length) {
                object.accountCookie = [];
                for (var j = 0; j < message.accountCookie.length; ++j)
                    object.accountCookie[j] = message.accountCookie[j];
            }
            if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                object.timeZone = message.timeZone;
            if (message.securityToken != null && message.hasOwnProperty("securityToken"))
                if (typeof message.securityToken === "number")
                    object.securityToken = options.longs === String ? String(message.securityToken) : message.securityToken;
                else
                    object.securityToken = options.longs === String ? $util.Long.prototype.toString.call(message.securityToken) : options.longs === Number ? new $util.LongBits(message.securityToken.low >>> 0, message.securityToken.high >>> 0).toNumber() : message.securityToken;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.otaCert && message.otaCert.length) {
                object.otaCert = [];
                for (var j = 0; j < message.otaCert.length; ++j)
                    object.otaCert[j] = message.otaCert[j];
            }
            if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                object.serialNumber = message.serialNumber;
            if (message.esn != null && message.hasOwnProperty("esn"))
                object.esn = message.esn;
            if (message.deviceConfiguration != null && message.hasOwnProperty("deviceConfiguration"))
                object.deviceConfiguration = $root.GooglePlay.DeviceConfigurationProto.toObject(message.deviceConfiguration, options);
            if (message.macAddrType && message.macAddrType.length) {
                object.macAddrType = [];
                for (var j = 0; j < message.macAddrType.length; ++j)
                    object.macAddrType[j] = message.macAddrType[j];
            }
            if (message.fragment != null && message.hasOwnProperty("fragment"))
                object.fragment = message.fragment;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.userSerialNumber != null && message.hasOwnProperty("userSerialNumber"))
                object.userSerialNumber = message.userSerialNumber;
            return object;
        };

        /**
         * Converts this AndroidCheckinRequest to JSON.
         * @function toJSON
         * @memberof GooglePlay.AndroidCheckinRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AndroidCheckinRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AndroidCheckinRequest
         * @function getTypeUrl
         * @memberof GooglePlay.AndroidCheckinRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AndroidCheckinRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.AndroidCheckinRequest";
        };

        return AndroidCheckinRequest;
    })();

    GooglePlay.AndroidIntentProto = (function() {

        /**
         * Properties of an AndroidIntentProto.
         * @memberof GooglePlay
         * @interface IAndroidIntentProto
         * @property {string|null} [action] AndroidIntentProto action
         * @property {string|null} [dataUri] AndroidIntentProto dataUri
         * @property {string|null} [mimeType] AndroidIntentProto mimeType
         * @property {string|null} [javaClass] AndroidIntentProto javaClass
         * @property {Array.<GooglePlay.AndroidIntentProto.IExtra>|null} [extra] AndroidIntentProto extra
         */

        /**
         * Constructs a new AndroidIntentProto.
         * @memberof GooglePlay
         * @classdesc Represents an AndroidIntentProto.
         * @implements IAndroidIntentProto
         * @constructor
         * @param {GooglePlay.IAndroidIntentProto=} [properties] Properties to set
         */
        function AndroidIntentProto(properties) {
            this.extra = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AndroidIntentProto action.
         * @member {string} action
         * @memberof GooglePlay.AndroidIntentProto
         * @instance
         */
        AndroidIntentProto.prototype.action = "";

        /**
         * AndroidIntentProto dataUri.
         * @member {string} dataUri
         * @memberof GooglePlay.AndroidIntentProto
         * @instance
         */
        AndroidIntentProto.prototype.dataUri = "";

        /**
         * AndroidIntentProto mimeType.
         * @member {string} mimeType
         * @memberof GooglePlay.AndroidIntentProto
         * @instance
         */
        AndroidIntentProto.prototype.mimeType = "";

        /**
         * AndroidIntentProto javaClass.
         * @member {string} javaClass
         * @memberof GooglePlay.AndroidIntentProto
         * @instance
         */
        AndroidIntentProto.prototype.javaClass = "";

        /**
         * AndroidIntentProto extra.
         * @member {Array.<GooglePlay.AndroidIntentProto.IExtra>} extra
         * @memberof GooglePlay.AndroidIntentProto
         * @instance
         */
        AndroidIntentProto.prototype.extra = $util.emptyArray;

        /**
         * Creates a new AndroidIntentProto instance using the specified properties.
         * @function create
         * @memberof GooglePlay.AndroidIntentProto
         * @static
         * @param {GooglePlay.IAndroidIntentProto=} [properties] Properties to set
         * @returns {GooglePlay.AndroidIntentProto} AndroidIntentProto instance
         */
        AndroidIntentProto.create = function create(properties) {
            return new AndroidIntentProto(properties);
        };

        /**
         * Encodes the specified AndroidIntentProto message. Does not implicitly {@link GooglePlay.AndroidIntentProto.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.AndroidIntentProto
         * @static
         * @param {GooglePlay.IAndroidIntentProto} message AndroidIntentProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidIntentProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.action);
            if (message.dataUri != null && Object.hasOwnProperty.call(message, "dataUri"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.dataUri);
            if (message.mimeType != null && Object.hasOwnProperty.call(message, "mimeType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.mimeType);
            if (message.javaClass != null && Object.hasOwnProperty.call(message, "javaClass"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.javaClass);
            if (message.extra != null && message.extra.length)
                for (var i = 0; i < message.extra.length; ++i)
                    $root.GooglePlay.AndroidIntentProto.Extra.encode(message.extra[i], writer.uint32(/* id 5, wireType 3 =*/43)).uint32(/* id 5, wireType 4 =*/44);
            return writer;
        };

        /**
         * Encodes the specified AndroidIntentProto message, length delimited. Does not implicitly {@link GooglePlay.AndroidIntentProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.AndroidIntentProto
         * @static
         * @param {GooglePlay.IAndroidIntentProto} message AndroidIntentProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidIntentProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AndroidIntentProto message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.AndroidIntentProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.AndroidIntentProto} AndroidIntentProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidIntentProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.AndroidIntentProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.action = reader.string();
                        break;
                    }
                case 2: {
                        message.dataUri = reader.string();
                        break;
                    }
                case 3: {
                        message.mimeType = reader.string();
                        break;
                    }
                case 4: {
                        message.javaClass = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.extra && message.extra.length))
                            message.extra = [];
                        message.extra.push($root.GooglePlay.AndroidIntentProto.Extra.decode(reader));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AndroidIntentProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.AndroidIntentProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.AndroidIntentProto} AndroidIntentProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidIntentProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AndroidIntentProto message.
         * @function verify
         * @memberof GooglePlay.AndroidIntentProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AndroidIntentProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.dataUri != null && message.hasOwnProperty("dataUri"))
                if (!$util.isString(message.dataUri))
                    return "dataUri: string expected";
            if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                if (!$util.isString(message.mimeType))
                    return "mimeType: string expected";
            if (message.javaClass != null && message.hasOwnProperty("javaClass"))
                if (!$util.isString(message.javaClass))
                    return "javaClass: string expected";
            if (message.extra != null && message.hasOwnProperty("extra")) {
                if (!Array.isArray(message.extra))
                    return "extra: array expected";
                for (var i = 0; i < message.extra.length; ++i) {
                    var error = $root.GooglePlay.AndroidIntentProto.Extra.verify(message.extra[i]);
                    if (error)
                        return "extra." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AndroidIntentProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.AndroidIntentProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.AndroidIntentProto} AndroidIntentProto
         */
        AndroidIntentProto.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.AndroidIntentProto)
                return object;
            var message = new $root.GooglePlay.AndroidIntentProto();
            if (object.action != null)
                message.action = String(object.action);
            if (object.dataUri != null)
                message.dataUri = String(object.dataUri);
            if (object.mimeType != null)
                message.mimeType = String(object.mimeType);
            if (object.javaClass != null)
                message.javaClass = String(object.javaClass);
            if (object.extra) {
                if (!Array.isArray(object.extra))
                    throw TypeError(".GooglePlay.AndroidIntentProto.extra: array expected");
                message.extra = [];
                for (var i = 0; i < object.extra.length; ++i) {
                    if (typeof object.extra[i] !== "object")
                        throw TypeError(".GooglePlay.AndroidIntentProto.extra: object expected");
                    message.extra[i] = $root.GooglePlay.AndroidIntentProto.Extra.fromObject(object.extra[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AndroidIntentProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.AndroidIntentProto
         * @static
         * @param {GooglePlay.AndroidIntentProto} message AndroidIntentProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AndroidIntentProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.extra = [];
            if (options.defaults) {
                object.action = "";
                object.dataUri = "";
                object.mimeType = "";
                object.javaClass = "";
            }
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.dataUri != null && message.hasOwnProperty("dataUri"))
                object.dataUri = message.dataUri;
            if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                object.mimeType = message.mimeType;
            if (message.javaClass != null && message.hasOwnProperty("javaClass"))
                object.javaClass = message.javaClass;
            if (message.extra && message.extra.length) {
                object.extra = [];
                for (var j = 0; j < message.extra.length; ++j)
                    object.extra[j] = $root.GooglePlay.AndroidIntentProto.Extra.toObject(message.extra[j], options);
            }
            return object;
        };

        /**
         * Converts this AndroidIntentProto to JSON.
         * @function toJSON
         * @memberof GooglePlay.AndroidIntentProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AndroidIntentProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AndroidIntentProto
         * @function getTypeUrl
         * @memberof GooglePlay.AndroidIntentProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AndroidIntentProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.AndroidIntentProto";
        };

        AndroidIntentProto.Extra = (function() {

            /**
             * Properties of an Extra.
             * @memberof GooglePlay.AndroidIntentProto
             * @interface IExtra
             * @property {string|null} [name] Extra name
             * @property {string|null} [value] Extra value
             */

            /**
             * Constructs a new Extra.
             * @memberof GooglePlay.AndroidIntentProto
             * @classdesc Represents an Extra.
             * @implements IExtra
             * @constructor
             * @param {GooglePlay.AndroidIntentProto.IExtra=} [properties] Properties to set
             */
            function Extra(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Extra name.
             * @member {string} name
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @instance
             */
            Extra.prototype.name = "";

            /**
             * Extra value.
             * @member {string} value
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @instance
             */
            Extra.prototype.value = "";

            /**
             * Creates a new Extra instance using the specified properties.
             * @function create
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @static
             * @param {GooglePlay.AndroidIntentProto.IExtra=} [properties] Properties to set
             * @returns {GooglePlay.AndroidIntentProto.Extra} Extra instance
             */
            Extra.create = function create(properties) {
                return new Extra(properties);
            };

            /**
             * Encodes the specified Extra message. Does not implicitly {@link GooglePlay.AndroidIntentProto.Extra.verify|verify} messages.
             * @function encode
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @static
             * @param {GooglePlay.AndroidIntentProto.IExtra} message Extra message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Extra.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified Extra message, length delimited. Does not implicitly {@link GooglePlay.AndroidIntentProto.Extra.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @static
             * @param {GooglePlay.AndroidIntentProto.IExtra} message Extra message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Extra.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Extra message from the specified reader or buffer.
             * @function decode
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GooglePlay.AndroidIntentProto.Extra} Extra
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Extra.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.AndroidIntentProto.Extra();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if ((tag & 7) === 4)
                        break;
                    switch (tag >>> 3) {
                    case 6: {
                            message.name = reader.string();
                            break;
                        }
                    case 7: {
                            message.value = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Extra message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GooglePlay.AndroidIntentProto.Extra} Extra
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Extra.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Extra message.
             * @function verify
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Extra.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates an Extra message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GooglePlay.AndroidIntentProto.Extra} Extra
             */
            Extra.fromObject = function fromObject(object) {
                if (object instanceof $root.GooglePlay.AndroidIntentProto.Extra)
                    return object;
                var message = new $root.GooglePlay.AndroidIntentProto.Extra();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from an Extra message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @static
             * @param {GooglePlay.AndroidIntentProto.Extra} message Extra
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Extra.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.value = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Extra to JSON.
             * @function toJSON
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Extra.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Extra
             * @function getTypeUrl
             * @memberof GooglePlay.AndroidIntentProto.Extra
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Extra.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/GooglePlay.AndroidIntentProto.Extra";
            };

            return Extra;
        })();

        return AndroidIntentProto;
    })();

    GooglePlay.AndroidCheckinResponse = (function() {

        /**
         * Properties of an AndroidCheckinResponse.
         * @memberof GooglePlay
         * @interface IAndroidCheckinResponse
         * @property {boolean|null} [status] AndroidCheckinResponse status
         * @property {Array.<GooglePlay.IAndroidIntentProto>|null} [intent] AndroidCheckinResponse intent
         * @property {number|Long|null} [timeMsec] AndroidCheckinResponse timeMsec
         * @property {string|null} [digest] AndroidCheckinResponse digest
         * @property {Array.<GooglePlay.IGoogleServicesSetting>|null} [setting] AndroidCheckinResponse setting
         * @property {boolean|null} [marketOk] AndroidCheckinResponse marketOk
         * @property {number|Long|null} [androidId] AndroidCheckinResponse androidId
         * @property {number|Long|null} [securityToken] AndroidCheckinResponse securityToken
         * @property {boolean|null} [settingsDiff] AndroidCheckinResponse settingsDiff
         * @property {Array.<string>|null} [deleteSetting] AndroidCheckinResponse deleteSetting
         * @property {string|null} [deviceCheckinConsistencyToken] AndroidCheckinResponse deviceCheckinConsistencyToken
         */

        /**
         * Constructs a new AndroidCheckinResponse.
         * @memberof GooglePlay
         * @classdesc Represents an AndroidCheckinResponse.
         * @implements IAndroidCheckinResponse
         * @constructor
         * @param {GooglePlay.IAndroidCheckinResponse=} [properties] Properties to set
         */
        function AndroidCheckinResponse(properties) {
            this.intent = [];
            this.setting = [];
            this.deleteSetting = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AndroidCheckinResponse status.
         * @member {boolean} status
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.status = false;

        /**
         * AndroidCheckinResponse intent.
         * @member {Array.<GooglePlay.IAndroidIntentProto>} intent
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.intent = $util.emptyArray;

        /**
         * AndroidCheckinResponse timeMsec.
         * @member {number|Long} timeMsec
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.timeMsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinResponse digest.
         * @member {string} digest
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.digest = "";

        /**
         * AndroidCheckinResponse setting.
         * @member {Array.<GooglePlay.IGoogleServicesSetting>} setting
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.setting = $util.emptyArray;

        /**
         * AndroidCheckinResponse marketOk.
         * @member {boolean} marketOk
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.marketOk = false;

        /**
         * AndroidCheckinResponse androidId.
         * @member {number|Long} androidId
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.androidId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinResponse securityToken.
         * @member {number|Long} securityToken
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.securityToken = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinResponse settingsDiff.
         * @member {boolean} settingsDiff
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.settingsDiff = false;

        /**
         * AndroidCheckinResponse deleteSetting.
         * @member {Array.<string>} deleteSetting
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.deleteSetting = $util.emptyArray;

        /**
         * AndroidCheckinResponse deviceCheckinConsistencyToken.
         * @member {string} deviceCheckinConsistencyToken
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.deviceCheckinConsistencyToken = "";

        /**
         * Creates a new AndroidCheckinResponse instance using the specified properties.
         * @function create
         * @memberof GooglePlay.AndroidCheckinResponse
         * @static
         * @param {GooglePlay.IAndroidCheckinResponse=} [properties] Properties to set
         * @returns {GooglePlay.AndroidCheckinResponse} AndroidCheckinResponse instance
         */
        AndroidCheckinResponse.create = function create(properties) {
            return new AndroidCheckinResponse(properties);
        };

        /**
         * Encodes the specified AndroidCheckinResponse message. Does not implicitly {@link GooglePlay.AndroidCheckinResponse.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.AndroidCheckinResponse
         * @static
         * @param {GooglePlay.IAndroidCheckinResponse} message AndroidCheckinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
            if (message.intent != null && message.intent.length)
                for (var i = 0; i < message.intent.length; ++i)
                    $root.GooglePlay.AndroidIntentProto.encode(message.intent[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.timeMsec != null && Object.hasOwnProperty.call(message, "timeMsec"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timeMsec);
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.digest);
            if (message.setting != null && message.setting.length)
                for (var i = 0; i < message.setting.length; ++i)
                    $root.GooglePlay.GoogleServicesSetting.encode(message.setting[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.marketOk != null && Object.hasOwnProperty.call(message, "marketOk"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.marketOk);
            if (message.androidId != null && Object.hasOwnProperty.call(message, "androidId"))
                writer.uint32(/* id 7, wireType 1 =*/57).fixed64(message.androidId);
            if (message.securityToken != null && Object.hasOwnProperty.call(message, "securityToken"))
                writer.uint32(/* id 8, wireType 1 =*/65).fixed64(message.securityToken);
            if (message.settingsDiff != null && Object.hasOwnProperty.call(message, "settingsDiff"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.settingsDiff);
            if (message.deleteSetting != null && message.deleteSetting.length)
                for (var i = 0; i < message.deleteSetting.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.deleteSetting[i]);
            if (message.deviceCheckinConsistencyToken != null && Object.hasOwnProperty.call(message, "deviceCheckinConsistencyToken"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.deviceCheckinConsistencyToken);
            return writer;
        };

        /**
         * Encodes the specified AndroidCheckinResponse message, length delimited. Does not implicitly {@link GooglePlay.AndroidCheckinResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.AndroidCheckinResponse
         * @static
         * @param {GooglePlay.IAndroidCheckinResponse} message AndroidCheckinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AndroidCheckinResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.AndroidCheckinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.AndroidCheckinResponse} AndroidCheckinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.AndroidCheckinResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.bool();
                        break;
                    }
                case 2: {
                        if (!(message.intent && message.intent.length))
                            message.intent = [];
                        message.intent.push($root.GooglePlay.AndroidIntentProto.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.timeMsec = reader.int64();
                        break;
                    }
                case 4: {
                        message.digest = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.setting && message.setting.length))
                            message.setting = [];
                        message.setting.push($root.GooglePlay.GoogleServicesSetting.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.marketOk = reader.bool();
                        break;
                    }
                case 7: {
                        message.androidId = reader.fixed64();
                        break;
                    }
                case 8: {
                        message.securityToken = reader.fixed64();
                        break;
                    }
                case 9: {
                        message.settingsDiff = reader.bool();
                        break;
                    }
                case 10: {
                        if (!(message.deleteSetting && message.deleteSetting.length))
                            message.deleteSetting = [];
                        message.deleteSetting.push(reader.string());
                        break;
                    }
                case 12: {
                        message.deviceCheckinConsistencyToken = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AndroidCheckinResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.AndroidCheckinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.AndroidCheckinResponse} AndroidCheckinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AndroidCheckinResponse message.
         * @function verify
         * @memberof GooglePlay.AndroidCheckinResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AndroidCheckinResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status !== "boolean")
                    return "status: boolean expected";
            if (message.intent != null && message.hasOwnProperty("intent")) {
                if (!Array.isArray(message.intent))
                    return "intent: array expected";
                for (var i = 0; i < message.intent.length; ++i) {
                    var error = $root.GooglePlay.AndroidIntentProto.verify(message.intent[i]);
                    if (error)
                        return "intent." + error;
                }
            }
            if (message.timeMsec != null && message.hasOwnProperty("timeMsec"))
                if (!$util.isInteger(message.timeMsec) && !(message.timeMsec && $util.isInteger(message.timeMsec.low) && $util.isInteger(message.timeMsec.high)))
                    return "timeMsec: integer|Long expected";
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (!$util.isString(message.digest))
                    return "digest: string expected";
            if (message.setting != null && message.hasOwnProperty("setting")) {
                if (!Array.isArray(message.setting))
                    return "setting: array expected";
                for (var i = 0; i < message.setting.length; ++i) {
                    var error = $root.GooglePlay.GoogleServicesSetting.verify(message.setting[i]);
                    if (error)
                        return "setting." + error;
                }
            }
            if (message.marketOk != null && message.hasOwnProperty("marketOk"))
                if (typeof message.marketOk !== "boolean")
                    return "marketOk: boolean expected";
            if (message.androidId != null && message.hasOwnProperty("androidId"))
                if (!$util.isInteger(message.androidId) && !(message.androidId && $util.isInteger(message.androidId.low) && $util.isInteger(message.androidId.high)))
                    return "androidId: integer|Long expected";
            if (message.securityToken != null && message.hasOwnProperty("securityToken"))
                if (!$util.isInteger(message.securityToken) && !(message.securityToken && $util.isInteger(message.securityToken.low) && $util.isInteger(message.securityToken.high)))
                    return "securityToken: integer|Long expected";
            if (message.settingsDiff != null && message.hasOwnProperty("settingsDiff"))
                if (typeof message.settingsDiff !== "boolean")
                    return "settingsDiff: boolean expected";
            if (message.deleteSetting != null && message.hasOwnProperty("deleteSetting")) {
                if (!Array.isArray(message.deleteSetting))
                    return "deleteSetting: array expected";
                for (var i = 0; i < message.deleteSetting.length; ++i)
                    if (!$util.isString(message.deleteSetting[i]))
                        return "deleteSetting: string[] expected";
            }
            if (message.deviceCheckinConsistencyToken != null && message.hasOwnProperty("deviceCheckinConsistencyToken"))
                if (!$util.isString(message.deviceCheckinConsistencyToken))
                    return "deviceCheckinConsistencyToken: string expected";
            return null;
        };

        /**
         * Creates an AndroidCheckinResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.AndroidCheckinResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.AndroidCheckinResponse} AndroidCheckinResponse
         */
        AndroidCheckinResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.AndroidCheckinResponse)
                return object;
            var message = new $root.GooglePlay.AndroidCheckinResponse();
            if (object.status != null)
                message.status = Boolean(object.status);
            if (object.intent) {
                if (!Array.isArray(object.intent))
                    throw TypeError(".GooglePlay.AndroidCheckinResponse.intent: array expected");
                message.intent = [];
                for (var i = 0; i < object.intent.length; ++i) {
                    if (typeof object.intent[i] !== "object")
                        throw TypeError(".GooglePlay.AndroidCheckinResponse.intent: object expected");
                    message.intent[i] = $root.GooglePlay.AndroidIntentProto.fromObject(object.intent[i]);
                }
            }
            if (object.timeMsec != null)
                if ($util.Long)
                    (message.timeMsec = $util.Long.fromValue(object.timeMsec)).unsigned = false;
                else if (typeof object.timeMsec === "string")
                    message.timeMsec = parseInt(object.timeMsec, 10);
                else if (typeof object.timeMsec === "number")
                    message.timeMsec = object.timeMsec;
                else if (typeof object.timeMsec === "object")
                    message.timeMsec = new $util.LongBits(object.timeMsec.low >>> 0, object.timeMsec.high >>> 0).toNumber();
            if (object.digest != null)
                message.digest = String(object.digest);
            if (object.setting) {
                if (!Array.isArray(object.setting))
                    throw TypeError(".GooglePlay.AndroidCheckinResponse.setting: array expected");
                message.setting = [];
                for (var i = 0; i < object.setting.length; ++i) {
                    if (typeof object.setting[i] !== "object")
                        throw TypeError(".GooglePlay.AndroidCheckinResponse.setting: object expected");
                    message.setting[i] = $root.GooglePlay.GoogleServicesSetting.fromObject(object.setting[i]);
                }
            }
            if (object.marketOk != null)
                message.marketOk = Boolean(object.marketOk);
            if (object.androidId != null)
                if ($util.Long)
                    (message.androidId = $util.Long.fromValue(object.androidId)).unsigned = false;
                else if (typeof object.androidId === "string")
                    message.androidId = parseInt(object.androidId, 10);
                else if (typeof object.androidId === "number")
                    message.androidId = object.androidId;
                else if (typeof object.androidId === "object")
                    message.androidId = new $util.LongBits(object.androidId.low >>> 0, object.androidId.high >>> 0).toNumber();
            if (object.securityToken != null)
                if ($util.Long)
                    (message.securityToken = $util.Long.fromValue(object.securityToken)).unsigned = false;
                else if (typeof object.securityToken === "string")
                    message.securityToken = parseInt(object.securityToken, 10);
                else if (typeof object.securityToken === "number")
                    message.securityToken = object.securityToken;
                else if (typeof object.securityToken === "object")
                    message.securityToken = new $util.LongBits(object.securityToken.low >>> 0, object.securityToken.high >>> 0).toNumber();
            if (object.settingsDiff != null)
                message.settingsDiff = Boolean(object.settingsDiff);
            if (object.deleteSetting) {
                if (!Array.isArray(object.deleteSetting))
                    throw TypeError(".GooglePlay.AndroidCheckinResponse.deleteSetting: array expected");
                message.deleteSetting = [];
                for (var i = 0; i < object.deleteSetting.length; ++i)
                    message.deleteSetting[i] = String(object.deleteSetting[i]);
            }
            if (object.deviceCheckinConsistencyToken != null)
                message.deviceCheckinConsistencyToken = String(object.deviceCheckinConsistencyToken);
            return message;
        };

        /**
         * Creates a plain object from an AndroidCheckinResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.AndroidCheckinResponse
         * @static
         * @param {GooglePlay.AndroidCheckinResponse} message AndroidCheckinResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AndroidCheckinResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.intent = [];
                object.setting = [];
                object.deleteSetting = [];
            }
            if (options.defaults) {
                object.status = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeMsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeMsec = options.longs === String ? "0" : 0;
                object.digest = "";
                object.marketOk = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.androidId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.androidId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.securityToken = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.securityToken = options.longs === String ? "0" : 0;
                object.settingsDiff = false;
                object.deviceCheckinConsistencyToken = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.intent && message.intent.length) {
                object.intent = [];
                for (var j = 0; j < message.intent.length; ++j)
                    object.intent[j] = $root.GooglePlay.AndroidIntentProto.toObject(message.intent[j], options);
            }
            if (message.timeMsec != null && message.hasOwnProperty("timeMsec"))
                if (typeof message.timeMsec === "number")
                    object.timeMsec = options.longs === String ? String(message.timeMsec) : message.timeMsec;
                else
                    object.timeMsec = options.longs === String ? $util.Long.prototype.toString.call(message.timeMsec) : options.longs === Number ? new $util.LongBits(message.timeMsec.low >>> 0, message.timeMsec.high >>> 0).toNumber() : message.timeMsec;
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = message.digest;
            if (message.setting && message.setting.length) {
                object.setting = [];
                for (var j = 0; j < message.setting.length; ++j)
                    object.setting[j] = $root.GooglePlay.GoogleServicesSetting.toObject(message.setting[j], options);
            }
            if (message.marketOk != null && message.hasOwnProperty("marketOk"))
                object.marketOk = message.marketOk;
            if (message.androidId != null && message.hasOwnProperty("androidId"))
                if (typeof message.androidId === "number")
                    object.androidId = options.longs === String ? String(message.androidId) : message.androidId;
                else
                    object.androidId = options.longs === String ? $util.Long.prototype.toString.call(message.androidId) : options.longs === Number ? new $util.LongBits(message.androidId.low >>> 0, message.androidId.high >>> 0).toNumber() : message.androidId;
            if (message.securityToken != null && message.hasOwnProperty("securityToken"))
                if (typeof message.securityToken === "number")
                    object.securityToken = options.longs === String ? String(message.securityToken) : message.securityToken;
                else
                    object.securityToken = options.longs === String ? $util.Long.prototype.toString.call(message.securityToken) : options.longs === Number ? new $util.LongBits(message.securityToken.low >>> 0, message.securityToken.high >>> 0).toNumber() : message.securityToken;
            if (message.settingsDiff != null && message.hasOwnProperty("settingsDiff"))
                object.settingsDiff = message.settingsDiff;
            if (message.deleteSetting && message.deleteSetting.length) {
                object.deleteSetting = [];
                for (var j = 0; j < message.deleteSetting.length; ++j)
                    object.deleteSetting[j] = message.deleteSetting[j];
            }
            if (message.deviceCheckinConsistencyToken != null && message.hasOwnProperty("deviceCheckinConsistencyToken"))
                object.deviceCheckinConsistencyToken = message.deviceCheckinConsistencyToken;
            return object;
        };

        /**
         * Converts this AndroidCheckinResponse to JSON.
         * @function toJSON
         * @memberof GooglePlay.AndroidCheckinResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AndroidCheckinResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AndroidCheckinResponse
         * @function getTypeUrl
         * @memberof GooglePlay.AndroidCheckinResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AndroidCheckinResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.AndroidCheckinResponse";
        };

        return AndroidCheckinResponse;
    })();

    GooglePlay.AndroidEventProto = (function() {

        /**
         * Properties of an AndroidEventProto.
         * @memberof GooglePlay
         * @interface IAndroidEventProto
         * @property {string|null} [tag] AndroidEventProto tag
         * @property {string|null} [value] AndroidEventProto value
         * @property {number|Long|null} [timeMsec] AndroidEventProto timeMsec
         */

        /**
         * Constructs a new AndroidEventProto.
         * @memberof GooglePlay
         * @classdesc Represents an AndroidEventProto.
         * @implements IAndroidEventProto
         * @constructor
         * @param {GooglePlay.IAndroidEventProto=} [properties] Properties to set
         */
        function AndroidEventProto(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AndroidEventProto tag.
         * @member {string} tag
         * @memberof GooglePlay.AndroidEventProto
         * @instance
         */
        AndroidEventProto.prototype.tag = "";

        /**
         * AndroidEventProto value.
         * @member {string} value
         * @memberof GooglePlay.AndroidEventProto
         * @instance
         */
        AndroidEventProto.prototype.value = "";

        /**
         * AndroidEventProto timeMsec.
         * @member {number|Long} timeMsec
         * @memberof GooglePlay.AndroidEventProto
         * @instance
         */
        AndroidEventProto.prototype.timeMsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AndroidEventProto instance using the specified properties.
         * @function create
         * @memberof GooglePlay.AndroidEventProto
         * @static
         * @param {GooglePlay.IAndroidEventProto=} [properties] Properties to set
         * @returns {GooglePlay.AndroidEventProto} AndroidEventProto instance
         */
        AndroidEventProto.create = function create(properties) {
            return new AndroidEventProto(properties);
        };

        /**
         * Encodes the specified AndroidEventProto message. Does not implicitly {@link GooglePlay.AndroidEventProto.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.AndroidEventProto
         * @static
         * @param {GooglePlay.IAndroidEventProto} message AndroidEventProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidEventProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tag);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            if (message.timeMsec != null && Object.hasOwnProperty.call(message, "timeMsec"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timeMsec);
            return writer;
        };

        /**
         * Encodes the specified AndroidEventProto message, length delimited. Does not implicitly {@link GooglePlay.AndroidEventProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.AndroidEventProto
         * @static
         * @param {GooglePlay.IAndroidEventProto} message AndroidEventProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidEventProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AndroidEventProto message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.AndroidEventProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.AndroidEventProto} AndroidEventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidEventProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.AndroidEventProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tag = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.string();
                        break;
                    }
                case 3: {
                        message.timeMsec = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AndroidEventProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.AndroidEventProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.AndroidEventProto} AndroidEventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidEventProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AndroidEventProto message.
         * @function verify
         * @memberof GooglePlay.AndroidEventProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AndroidEventProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.timeMsec != null && message.hasOwnProperty("timeMsec"))
                if (!$util.isInteger(message.timeMsec) && !(message.timeMsec && $util.isInteger(message.timeMsec.low) && $util.isInteger(message.timeMsec.high)))
                    return "timeMsec: integer|Long expected";
            return null;
        };

        /**
         * Creates an AndroidEventProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.AndroidEventProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.AndroidEventProto} AndroidEventProto
         */
        AndroidEventProto.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.AndroidEventProto)
                return object;
            var message = new $root.GooglePlay.AndroidEventProto();
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.value != null)
                message.value = String(object.value);
            if (object.timeMsec != null)
                if ($util.Long)
                    (message.timeMsec = $util.Long.fromValue(object.timeMsec)).unsigned = false;
                else if (typeof object.timeMsec === "string")
                    message.timeMsec = parseInt(object.timeMsec, 10);
                else if (typeof object.timeMsec === "number")
                    message.timeMsec = object.timeMsec;
                else if (typeof object.timeMsec === "object")
                    message.timeMsec = new $util.LongBits(object.timeMsec.low >>> 0, object.timeMsec.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AndroidEventProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.AndroidEventProto
         * @static
         * @param {GooglePlay.AndroidEventProto} message AndroidEventProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AndroidEventProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tag = "";
                object.value = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeMsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeMsec = options.longs === String ? "0" : 0;
            }
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.timeMsec != null && message.hasOwnProperty("timeMsec"))
                if (typeof message.timeMsec === "number")
                    object.timeMsec = options.longs === String ? String(message.timeMsec) : message.timeMsec;
                else
                    object.timeMsec = options.longs === String ? $util.Long.prototype.toString.call(message.timeMsec) : options.longs === Number ? new $util.LongBits(message.timeMsec.low >>> 0, message.timeMsec.high >>> 0).toNumber() : message.timeMsec;
            return object;
        };

        /**
         * Converts this AndroidEventProto to JSON.
         * @function toJSON
         * @memberof GooglePlay.AndroidEventProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AndroidEventProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AndroidEventProto
         * @function getTypeUrl
         * @memberof GooglePlay.AndroidEventProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AndroidEventProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.AndroidEventProto";
        };

        return AndroidEventProto;
    })();

    GooglePlay.AndroidStatisticProto = (function() {

        /**
         * Properties of an AndroidStatisticProto.
         * @memberof GooglePlay
         * @interface IAndroidStatisticProto
         * @property {string|null} [tag] AndroidStatisticProto tag
         * @property {number|null} [count] AndroidStatisticProto count
         * @property {number|null} [sum] AndroidStatisticProto sum
         */

        /**
         * Constructs a new AndroidStatisticProto.
         * @memberof GooglePlay
         * @classdesc Represents an AndroidStatisticProto.
         * @implements IAndroidStatisticProto
         * @constructor
         * @param {GooglePlay.IAndroidStatisticProto=} [properties] Properties to set
         */
        function AndroidStatisticProto(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AndroidStatisticProto tag.
         * @member {string} tag
         * @memberof GooglePlay.AndroidStatisticProto
         * @instance
         */
        AndroidStatisticProto.prototype.tag = "";

        /**
         * AndroidStatisticProto count.
         * @member {number} count
         * @memberof GooglePlay.AndroidStatisticProto
         * @instance
         */
        AndroidStatisticProto.prototype.count = 0;

        /**
         * AndroidStatisticProto sum.
         * @member {number} sum
         * @memberof GooglePlay.AndroidStatisticProto
         * @instance
         */
        AndroidStatisticProto.prototype.sum = 0;

        /**
         * Creates a new AndroidStatisticProto instance using the specified properties.
         * @function create
         * @memberof GooglePlay.AndroidStatisticProto
         * @static
         * @param {GooglePlay.IAndroidStatisticProto=} [properties] Properties to set
         * @returns {GooglePlay.AndroidStatisticProto} AndroidStatisticProto instance
         */
        AndroidStatisticProto.create = function create(properties) {
            return new AndroidStatisticProto(properties);
        };

        /**
         * Encodes the specified AndroidStatisticProto message. Does not implicitly {@link GooglePlay.AndroidStatisticProto.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.AndroidStatisticProto
         * @static
         * @param {GooglePlay.IAndroidStatisticProto} message AndroidStatisticProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidStatisticProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tag);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.sum);
            return writer;
        };

        /**
         * Encodes the specified AndroidStatisticProto message, length delimited. Does not implicitly {@link GooglePlay.AndroidStatisticProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.AndroidStatisticProto
         * @static
         * @param {GooglePlay.IAndroidStatisticProto} message AndroidStatisticProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidStatisticProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AndroidStatisticProto message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.AndroidStatisticProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.AndroidStatisticProto} AndroidStatisticProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidStatisticProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.AndroidStatisticProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tag = reader.string();
                        break;
                    }
                case 2: {
                        message.count = reader.int32();
                        break;
                    }
                case 3: {
                        message.sum = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AndroidStatisticProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.AndroidStatisticProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.AndroidStatisticProto} AndroidStatisticProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidStatisticProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AndroidStatisticProto message.
         * @function verify
         * @memberof GooglePlay.AndroidStatisticProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AndroidStatisticProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.sum != null && message.hasOwnProperty("sum"))
                if (typeof message.sum !== "number")
                    return "sum: number expected";
            return null;
        };

        /**
         * Creates an AndroidStatisticProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.AndroidStatisticProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.AndroidStatisticProto} AndroidStatisticProto
         */
        AndroidStatisticProto.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.AndroidStatisticProto)
                return object;
            var message = new $root.GooglePlay.AndroidStatisticProto();
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.count != null)
                message.count = object.count | 0;
            if (object.sum != null)
                message.sum = Number(object.sum);
            return message;
        };

        /**
         * Creates a plain object from an AndroidStatisticProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.AndroidStatisticProto
         * @static
         * @param {GooglePlay.AndroidStatisticProto} message AndroidStatisticProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AndroidStatisticProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tag = "";
                object.count = 0;
                object.sum = 0;
            }
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.sum != null && message.hasOwnProperty("sum"))
                object.sum = options.json && !isFinite(message.sum) ? String(message.sum) : message.sum;
            return object;
        };

        /**
         * Converts this AndroidStatisticProto to JSON.
         * @function toJSON
         * @memberof GooglePlay.AndroidStatisticProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AndroidStatisticProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AndroidStatisticProto
         * @function getTypeUrl
         * @memberof GooglePlay.AndroidStatisticProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AndroidStatisticProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.AndroidStatisticProto";
        };

        return AndroidStatisticProto;
    })();

    GooglePlay.GoogleServicesSetting = (function() {

        /**
         * Properties of a GoogleServicesSetting.
         * @memberof GooglePlay
         * @interface IGoogleServicesSetting
         * @property {Uint8Array|null} [name] GoogleServicesSetting name
         * @property {Uint8Array|null} [value] GoogleServicesSetting value
         */

        /**
         * Constructs a new GoogleServicesSetting.
         * @memberof GooglePlay
         * @classdesc Represents a GoogleServicesSetting.
         * @implements IGoogleServicesSetting
         * @constructor
         * @param {GooglePlay.IGoogleServicesSetting=} [properties] Properties to set
         */
        function GoogleServicesSetting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GoogleServicesSetting name.
         * @member {Uint8Array} name
         * @memberof GooglePlay.GoogleServicesSetting
         * @instance
         */
        GoogleServicesSetting.prototype.name = $util.newBuffer([]);

        /**
         * GoogleServicesSetting value.
         * @member {Uint8Array} value
         * @memberof GooglePlay.GoogleServicesSetting
         * @instance
         */
        GoogleServicesSetting.prototype.value = $util.newBuffer([]);

        /**
         * Creates a new GoogleServicesSetting instance using the specified properties.
         * @function create
         * @memberof GooglePlay.GoogleServicesSetting
         * @static
         * @param {GooglePlay.IGoogleServicesSetting=} [properties] Properties to set
         * @returns {GooglePlay.GoogleServicesSetting} GoogleServicesSetting instance
         */
        GoogleServicesSetting.create = function create(properties) {
            return new GoogleServicesSetting(properties);
        };

        /**
         * Encodes the specified GoogleServicesSetting message. Does not implicitly {@link GooglePlay.GoogleServicesSetting.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.GoogleServicesSetting
         * @static
         * @param {GooglePlay.IGoogleServicesSetting} message GoogleServicesSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GoogleServicesSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.name);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
            return writer;
        };

        /**
         * Encodes the specified GoogleServicesSetting message, length delimited. Does not implicitly {@link GooglePlay.GoogleServicesSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.GoogleServicesSetting
         * @static
         * @param {GooglePlay.IGoogleServicesSetting} message GoogleServicesSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GoogleServicesSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GoogleServicesSetting message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.GoogleServicesSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.GoogleServicesSetting} GoogleServicesSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GoogleServicesSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.GoogleServicesSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.bytes();
                        break;
                    }
                case 2: {
                        message.value = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GoogleServicesSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.GoogleServicesSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.GoogleServicesSetting} GoogleServicesSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GoogleServicesSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GoogleServicesSetting message.
         * @function verify
         * @memberof GooglePlay.GoogleServicesSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GoogleServicesSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!(message.name && typeof message.name.length === "number" || $util.isString(message.name)))
                    return "name: buffer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            return null;
        };

        /**
         * Creates a GoogleServicesSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.GoogleServicesSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.GoogleServicesSetting} GoogleServicesSetting
         */
        GoogleServicesSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.GoogleServicesSetting)
                return object;
            var message = new $root.GooglePlay.GoogleServicesSetting();
            if (object.name != null)
                if (typeof object.name === "string")
                    $util.base64.decode(object.name, message.name = $util.newBuffer($util.base64.length(object.name)), 0);
                else if (object.name.length >= 0)
                    message.name = object.name;
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length >= 0)
                    message.value = object.value;
            return message;
        };

        /**
         * Creates a plain object from a GoogleServicesSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.GoogleServicesSetting
         * @static
         * @param {GooglePlay.GoogleServicesSetting} message GoogleServicesSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GoogleServicesSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.name = "";
                else {
                    object.name = [];
                    if (options.bytes !== Array)
                        object.name = $util.newBuffer(object.name);
                }
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = options.bytes === String ? $util.base64.encode(message.name, 0, message.name.length) : options.bytes === Array ? Array.prototype.slice.call(message.name) : message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            return object;
        };

        /**
         * Converts this GoogleServicesSetting to JSON.
         * @function toJSON
         * @memberof GooglePlay.GoogleServicesSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GoogleServicesSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GoogleServicesSetting
         * @function getTypeUrl
         * @memberof GooglePlay.GoogleServicesSetting
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GoogleServicesSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.GoogleServicesSetting";
        };

        return GoogleServicesSetting;
    })();

    GooglePlay.AndroidBuildProto = (function() {

        /**
         * Properties of an AndroidBuildProto.
         * @memberof GooglePlay
         * @interface IAndroidBuildProto
         * @property {string|null} [id] AndroidBuildProto id
         * @property {string|null} [product] AndroidBuildProto product
         * @property {string|null} [carrier] AndroidBuildProto carrier
         * @property {string|null} [radio] AndroidBuildProto radio
         * @property {string|null} [bootloader] AndroidBuildProto bootloader
         * @property {string|null} [client] AndroidBuildProto client
         * @property {number|Long|null} [timestamp] AndroidBuildProto timestamp
         * @property {number|null} [googleServices] AndroidBuildProto googleServices
         * @property {string|null} [device] AndroidBuildProto device
         * @property {number|null} [sdkVersion] AndroidBuildProto sdkVersion
         * @property {string|null} [model] AndroidBuildProto model
         * @property {string|null} [manufacturer] AndroidBuildProto manufacturer
         * @property {string|null} [buildProduct] AndroidBuildProto buildProduct
         * @property {boolean|null} [otaInstalled] AndroidBuildProto otaInstalled
         */

        /**
         * Constructs a new AndroidBuildProto.
         * @memberof GooglePlay
         * @classdesc Represents an AndroidBuildProto.
         * @implements IAndroidBuildProto
         * @constructor
         * @param {GooglePlay.IAndroidBuildProto=} [properties] Properties to set
         */
        function AndroidBuildProto(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AndroidBuildProto id.
         * @member {string} id
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.id = "";

        /**
         * AndroidBuildProto product.
         * @member {string} product
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.product = "";

        /**
         * AndroidBuildProto carrier.
         * @member {string} carrier
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.carrier = "";

        /**
         * AndroidBuildProto radio.
         * @member {string} radio
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.radio = "";

        /**
         * AndroidBuildProto bootloader.
         * @member {string} bootloader
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.bootloader = "";

        /**
         * AndroidBuildProto client.
         * @member {string} client
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.client = "";

        /**
         * AndroidBuildProto timestamp.
         * @member {number|Long} timestamp
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidBuildProto googleServices.
         * @member {number} googleServices
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.googleServices = 0;

        /**
         * AndroidBuildProto device.
         * @member {string} device
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.device = "";

        /**
         * AndroidBuildProto sdkVersion.
         * @member {number} sdkVersion
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.sdkVersion = 0;

        /**
         * AndroidBuildProto model.
         * @member {string} model
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.model = "";

        /**
         * AndroidBuildProto manufacturer.
         * @member {string} manufacturer
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.manufacturer = "";

        /**
         * AndroidBuildProto buildProduct.
         * @member {string} buildProduct
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.buildProduct = "";

        /**
         * AndroidBuildProto otaInstalled.
         * @member {boolean} otaInstalled
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         */
        AndroidBuildProto.prototype.otaInstalled = false;

        /**
         * Creates a new AndroidBuildProto instance using the specified properties.
         * @function create
         * @memberof GooglePlay.AndroidBuildProto
         * @static
         * @param {GooglePlay.IAndroidBuildProto=} [properties] Properties to set
         * @returns {GooglePlay.AndroidBuildProto} AndroidBuildProto instance
         */
        AndroidBuildProto.create = function create(properties) {
            return new AndroidBuildProto(properties);
        };

        /**
         * Encodes the specified AndroidBuildProto message. Does not implicitly {@link GooglePlay.AndroidBuildProto.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.AndroidBuildProto
         * @static
         * @param {GooglePlay.IAndroidBuildProto} message AndroidBuildProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidBuildProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.product != null && Object.hasOwnProperty.call(message, "product"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.product);
            if (message.carrier != null && Object.hasOwnProperty.call(message, "carrier"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.carrier);
            if (message.radio != null && Object.hasOwnProperty.call(message, "radio"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.radio);
            if (message.bootloader != null && Object.hasOwnProperty.call(message, "bootloader"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.bootloader);
            if (message.client != null && Object.hasOwnProperty.call(message, "client"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.client);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.timestamp);
            if (message.googleServices != null && Object.hasOwnProperty.call(message, "googleServices"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.googleServices);
            if (message.device != null && Object.hasOwnProperty.call(message, "device"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.device);
            if (message.sdkVersion != null && Object.hasOwnProperty.call(message, "sdkVersion"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.sdkVersion);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.model);
            if (message.manufacturer != null && Object.hasOwnProperty.call(message, "manufacturer"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.manufacturer);
            if (message.buildProduct != null && Object.hasOwnProperty.call(message, "buildProduct"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.buildProduct);
            if (message.otaInstalled != null && Object.hasOwnProperty.call(message, "otaInstalled"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.otaInstalled);
            return writer;
        };

        /**
         * Encodes the specified AndroidBuildProto message, length delimited. Does not implicitly {@link GooglePlay.AndroidBuildProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.AndroidBuildProto
         * @static
         * @param {GooglePlay.IAndroidBuildProto} message AndroidBuildProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidBuildProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AndroidBuildProto message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.AndroidBuildProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.AndroidBuildProto} AndroidBuildProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidBuildProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.AndroidBuildProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.product = reader.string();
                        break;
                    }
                case 3: {
                        message.carrier = reader.string();
                        break;
                    }
                case 4: {
                        message.radio = reader.string();
                        break;
                    }
                case 5: {
                        message.bootloader = reader.string();
                        break;
                    }
                case 6: {
                        message.client = reader.string();
                        break;
                    }
                case 7: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 8: {
                        message.googleServices = reader.int32();
                        break;
                    }
                case 9: {
                        message.device = reader.string();
                        break;
                    }
                case 10: {
                        message.sdkVersion = reader.int32();
                        break;
                    }
                case 11: {
                        message.model = reader.string();
                        break;
                    }
                case 12: {
                        message.manufacturer = reader.string();
                        break;
                    }
                case 13: {
                        message.buildProduct = reader.string();
                        break;
                    }
                case 14: {
                        message.otaInstalled = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AndroidBuildProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.AndroidBuildProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.AndroidBuildProto} AndroidBuildProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidBuildProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AndroidBuildProto message.
         * @function verify
         * @memberof GooglePlay.AndroidBuildProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AndroidBuildProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.product != null && message.hasOwnProperty("product"))
                if (!$util.isString(message.product))
                    return "product: string expected";
            if (message.carrier != null && message.hasOwnProperty("carrier"))
                if (!$util.isString(message.carrier))
                    return "carrier: string expected";
            if (message.radio != null && message.hasOwnProperty("radio"))
                if (!$util.isString(message.radio))
                    return "radio: string expected";
            if (message.bootloader != null && message.hasOwnProperty("bootloader"))
                if (!$util.isString(message.bootloader))
                    return "bootloader: string expected";
            if (message.client != null && message.hasOwnProperty("client"))
                if (!$util.isString(message.client))
                    return "client: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.googleServices != null && message.hasOwnProperty("googleServices"))
                if (!$util.isInteger(message.googleServices))
                    return "googleServices: integer expected";
            if (message.device != null && message.hasOwnProperty("device"))
                if (!$util.isString(message.device))
                    return "device: string expected";
            if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
                if (!$util.isInteger(message.sdkVersion))
                    return "sdkVersion: integer expected";
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isString(message.model))
                    return "model: string expected";
            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                if (!$util.isString(message.manufacturer))
                    return "manufacturer: string expected";
            if (message.buildProduct != null && message.hasOwnProperty("buildProduct"))
                if (!$util.isString(message.buildProduct))
                    return "buildProduct: string expected";
            if (message.otaInstalled != null && message.hasOwnProperty("otaInstalled"))
                if (typeof message.otaInstalled !== "boolean")
                    return "otaInstalled: boolean expected";
            return null;
        };

        /**
         * Creates an AndroidBuildProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.AndroidBuildProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.AndroidBuildProto} AndroidBuildProto
         */
        AndroidBuildProto.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.AndroidBuildProto)
                return object;
            var message = new $root.GooglePlay.AndroidBuildProto();
            if (object.id != null)
                message.id = String(object.id);
            if (object.product != null)
                message.product = String(object.product);
            if (object.carrier != null)
                message.carrier = String(object.carrier);
            if (object.radio != null)
                message.radio = String(object.radio);
            if (object.bootloader != null)
                message.bootloader = String(object.bootloader);
            if (object.client != null)
                message.client = String(object.client);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.googleServices != null)
                message.googleServices = object.googleServices | 0;
            if (object.device != null)
                message.device = String(object.device);
            if (object.sdkVersion != null)
                message.sdkVersion = object.sdkVersion | 0;
            if (object.model != null)
                message.model = String(object.model);
            if (object.manufacturer != null)
                message.manufacturer = String(object.manufacturer);
            if (object.buildProduct != null)
                message.buildProduct = String(object.buildProduct);
            if (object.otaInstalled != null)
                message.otaInstalled = Boolean(object.otaInstalled);
            return message;
        };

        /**
         * Creates a plain object from an AndroidBuildProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.AndroidBuildProto
         * @static
         * @param {GooglePlay.AndroidBuildProto} message AndroidBuildProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AndroidBuildProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.product = "";
                object.carrier = "";
                object.radio = "";
                object.bootloader = "";
                object.client = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.googleServices = 0;
                object.device = "";
                object.sdkVersion = 0;
                object.model = "";
                object.manufacturer = "";
                object.buildProduct = "";
                object.otaInstalled = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.product != null && message.hasOwnProperty("product"))
                object.product = message.product;
            if (message.carrier != null && message.hasOwnProperty("carrier"))
                object.carrier = message.carrier;
            if (message.radio != null && message.hasOwnProperty("radio"))
                object.radio = message.radio;
            if (message.bootloader != null && message.hasOwnProperty("bootloader"))
                object.bootloader = message.bootloader;
            if (message.client != null && message.hasOwnProperty("client"))
                object.client = message.client;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.googleServices != null && message.hasOwnProperty("googleServices"))
                object.googleServices = message.googleServices;
            if (message.device != null && message.hasOwnProperty("device"))
                object.device = message.device;
            if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
                object.sdkVersion = message.sdkVersion;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                object.manufacturer = message.manufacturer;
            if (message.buildProduct != null && message.hasOwnProperty("buildProduct"))
                object.buildProduct = message.buildProduct;
            if (message.otaInstalled != null && message.hasOwnProperty("otaInstalled"))
                object.otaInstalled = message.otaInstalled;
            return object;
        };

        /**
         * Converts this AndroidBuildProto to JSON.
         * @function toJSON
         * @memberof GooglePlay.AndroidBuildProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AndroidBuildProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AndroidBuildProto
         * @function getTypeUrl
         * @memberof GooglePlay.AndroidBuildProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AndroidBuildProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.AndroidBuildProto";
        };

        return AndroidBuildProto;
    })();

    GooglePlay.AndroidCheckinProto = (function() {

        /**
         * Properties of an AndroidCheckinProto.
         * @memberof GooglePlay
         * @interface IAndroidCheckinProto
         * @property {GooglePlay.IAndroidBuildProto|null} [build] AndroidCheckinProto build
         * @property {number|Long|null} [lastCheckinMsec] AndroidCheckinProto lastCheckinMsec
         * @property {Array.<GooglePlay.IAndroidEventProto>|null} [event] AndroidCheckinProto event
         * @property {Array.<GooglePlay.IAndroidStatisticProto>|null} [stat] AndroidCheckinProto stat
         * @property {Array.<string>|null} [requestedGroup] AndroidCheckinProto requestedGroup
         * @property {string|null} [cellOperator] AndroidCheckinProto cellOperator
         * @property {string|null} [simOperator] AndroidCheckinProto simOperator
         * @property {string|null} [roaming] AndroidCheckinProto roaming
         * @property {number|null} [userNumber] AndroidCheckinProto userNumber
         */

        /**
         * Constructs a new AndroidCheckinProto.
         * @memberof GooglePlay
         * @classdesc Represents an AndroidCheckinProto.
         * @implements IAndroidCheckinProto
         * @constructor
         * @param {GooglePlay.IAndroidCheckinProto=} [properties] Properties to set
         */
        function AndroidCheckinProto(properties) {
            this.event = [];
            this.stat = [];
            this.requestedGroup = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AndroidCheckinProto build.
         * @member {GooglePlay.IAndroidBuildProto|null|undefined} build
         * @memberof GooglePlay.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.build = null;

        /**
         * AndroidCheckinProto lastCheckinMsec.
         * @member {number|Long} lastCheckinMsec
         * @memberof GooglePlay.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.lastCheckinMsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinProto event.
         * @member {Array.<GooglePlay.IAndroidEventProto>} event
         * @memberof GooglePlay.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.event = $util.emptyArray;

        /**
         * AndroidCheckinProto stat.
         * @member {Array.<GooglePlay.IAndroidStatisticProto>} stat
         * @memberof GooglePlay.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.stat = $util.emptyArray;

        /**
         * AndroidCheckinProto requestedGroup.
         * @member {Array.<string>} requestedGroup
         * @memberof GooglePlay.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.requestedGroup = $util.emptyArray;

        /**
         * AndroidCheckinProto cellOperator.
         * @member {string} cellOperator
         * @memberof GooglePlay.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.cellOperator = "";

        /**
         * AndroidCheckinProto simOperator.
         * @member {string} simOperator
         * @memberof GooglePlay.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.simOperator = "";

        /**
         * AndroidCheckinProto roaming.
         * @member {string} roaming
         * @memberof GooglePlay.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.roaming = "";

        /**
         * AndroidCheckinProto userNumber.
         * @member {number} userNumber
         * @memberof GooglePlay.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.userNumber = 0;

        /**
         * Creates a new AndroidCheckinProto instance using the specified properties.
         * @function create
         * @memberof GooglePlay.AndroidCheckinProto
         * @static
         * @param {GooglePlay.IAndroidCheckinProto=} [properties] Properties to set
         * @returns {GooglePlay.AndroidCheckinProto} AndroidCheckinProto instance
         */
        AndroidCheckinProto.create = function create(properties) {
            return new AndroidCheckinProto(properties);
        };

        /**
         * Encodes the specified AndroidCheckinProto message. Does not implicitly {@link GooglePlay.AndroidCheckinProto.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.AndroidCheckinProto
         * @static
         * @param {GooglePlay.IAndroidCheckinProto} message AndroidCheckinProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.build != null && Object.hasOwnProperty.call(message, "build"))
                $root.GooglePlay.AndroidBuildProto.encode(message.build, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.lastCheckinMsec != null && Object.hasOwnProperty.call(message, "lastCheckinMsec"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lastCheckinMsec);
            if (message.event != null && message.event.length)
                for (var i = 0; i < message.event.length; ++i)
                    $root.GooglePlay.AndroidEventProto.encode(message.event[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.stat != null && message.stat.length)
                for (var i = 0; i < message.stat.length; ++i)
                    $root.GooglePlay.AndroidStatisticProto.encode(message.stat[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.requestedGroup != null && message.requestedGroup.length)
                for (var i = 0; i < message.requestedGroup.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.requestedGroup[i]);
            if (message.cellOperator != null && Object.hasOwnProperty.call(message, "cellOperator"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.cellOperator);
            if (message.simOperator != null && Object.hasOwnProperty.call(message, "simOperator"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.simOperator);
            if (message.roaming != null && Object.hasOwnProperty.call(message, "roaming"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.roaming);
            if (message.userNumber != null && Object.hasOwnProperty.call(message, "userNumber"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.userNumber);
            return writer;
        };

        /**
         * Encodes the specified AndroidCheckinProto message, length delimited. Does not implicitly {@link GooglePlay.AndroidCheckinProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.AndroidCheckinProto
         * @static
         * @param {GooglePlay.IAndroidCheckinProto} message AndroidCheckinProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AndroidCheckinProto message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.AndroidCheckinProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.AndroidCheckinProto} AndroidCheckinProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.AndroidCheckinProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.build = $root.GooglePlay.AndroidBuildProto.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.lastCheckinMsec = reader.int64();
                        break;
                    }
                case 3: {
                        if (!(message.event && message.event.length))
                            message.event = [];
                        message.event.push($root.GooglePlay.AndroidEventProto.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.stat && message.stat.length))
                            message.stat = [];
                        message.stat.push($root.GooglePlay.AndroidStatisticProto.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.requestedGroup && message.requestedGroup.length))
                            message.requestedGroup = [];
                        message.requestedGroup.push(reader.string());
                        break;
                    }
                case 6: {
                        message.cellOperator = reader.string();
                        break;
                    }
                case 7: {
                        message.simOperator = reader.string();
                        break;
                    }
                case 8: {
                        message.roaming = reader.string();
                        break;
                    }
                case 9: {
                        message.userNumber = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AndroidCheckinProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.AndroidCheckinProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.AndroidCheckinProto} AndroidCheckinProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AndroidCheckinProto message.
         * @function verify
         * @memberof GooglePlay.AndroidCheckinProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AndroidCheckinProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.build != null && message.hasOwnProperty("build")) {
                var error = $root.GooglePlay.AndroidBuildProto.verify(message.build);
                if (error)
                    return "build." + error;
            }
            if (message.lastCheckinMsec != null && message.hasOwnProperty("lastCheckinMsec"))
                if (!$util.isInteger(message.lastCheckinMsec) && !(message.lastCheckinMsec && $util.isInteger(message.lastCheckinMsec.low) && $util.isInteger(message.lastCheckinMsec.high)))
                    return "lastCheckinMsec: integer|Long expected";
            if (message.event != null && message.hasOwnProperty("event")) {
                if (!Array.isArray(message.event))
                    return "event: array expected";
                for (var i = 0; i < message.event.length; ++i) {
                    var error = $root.GooglePlay.AndroidEventProto.verify(message.event[i]);
                    if (error)
                        return "event." + error;
                }
            }
            if (message.stat != null && message.hasOwnProperty("stat")) {
                if (!Array.isArray(message.stat))
                    return "stat: array expected";
                for (var i = 0; i < message.stat.length; ++i) {
                    var error = $root.GooglePlay.AndroidStatisticProto.verify(message.stat[i]);
                    if (error)
                        return "stat." + error;
                }
            }
            if (message.requestedGroup != null && message.hasOwnProperty("requestedGroup")) {
                if (!Array.isArray(message.requestedGroup))
                    return "requestedGroup: array expected";
                for (var i = 0; i < message.requestedGroup.length; ++i)
                    if (!$util.isString(message.requestedGroup[i]))
                        return "requestedGroup: string[] expected";
            }
            if (message.cellOperator != null && message.hasOwnProperty("cellOperator"))
                if (!$util.isString(message.cellOperator))
                    return "cellOperator: string expected";
            if (message.simOperator != null && message.hasOwnProperty("simOperator"))
                if (!$util.isString(message.simOperator))
                    return "simOperator: string expected";
            if (message.roaming != null && message.hasOwnProperty("roaming"))
                if (!$util.isString(message.roaming))
                    return "roaming: string expected";
            if (message.userNumber != null && message.hasOwnProperty("userNumber"))
                if (!$util.isInteger(message.userNumber))
                    return "userNumber: integer expected";
            return null;
        };

        /**
         * Creates an AndroidCheckinProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.AndroidCheckinProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.AndroidCheckinProto} AndroidCheckinProto
         */
        AndroidCheckinProto.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.AndroidCheckinProto)
                return object;
            var message = new $root.GooglePlay.AndroidCheckinProto();
            if (object.build != null) {
                if (typeof object.build !== "object")
                    throw TypeError(".GooglePlay.AndroidCheckinProto.build: object expected");
                message.build = $root.GooglePlay.AndroidBuildProto.fromObject(object.build);
            }
            if (object.lastCheckinMsec != null)
                if ($util.Long)
                    (message.lastCheckinMsec = $util.Long.fromValue(object.lastCheckinMsec)).unsigned = false;
                else if (typeof object.lastCheckinMsec === "string")
                    message.lastCheckinMsec = parseInt(object.lastCheckinMsec, 10);
                else if (typeof object.lastCheckinMsec === "number")
                    message.lastCheckinMsec = object.lastCheckinMsec;
                else if (typeof object.lastCheckinMsec === "object")
                    message.lastCheckinMsec = new $util.LongBits(object.lastCheckinMsec.low >>> 0, object.lastCheckinMsec.high >>> 0).toNumber();
            if (object.event) {
                if (!Array.isArray(object.event))
                    throw TypeError(".GooglePlay.AndroidCheckinProto.event: array expected");
                message.event = [];
                for (var i = 0; i < object.event.length; ++i) {
                    if (typeof object.event[i] !== "object")
                        throw TypeError(".GooglePlay.AndroidCheckinProto.event: object expected");
                    message.event[i] = $root.GooglePlay.AndroidEventProto.fromObject(object.event[i]);
                }
            }
            if (object.stat) {
                if (!Array.isArray(object.stat))
                    throw TypeError(".GooglePlay.AndroidCheckinProto.stat: array expected");
                message.stat = [];
                for (var i = 0; i < object.stat.length; ++i) {
                    if (typeof object.stat[i] !== "object")
                        throw TypeError(".GooglePlay.AndroidCheckinProto.stat: object expected");
                    message.stat[i] = $root.GooglePlay.AndroidStatisticProto.fromObject(object.stat[i]);
                }
            }
            if (object.requestedGroup) {
                if (!Array.isArray(object.requestedGroup))
                    throw TypeError(".GooglePlay.AndroidCheckinProto.requestedGroup: array expected");
                message.requestedGroup = [];
                for (var i = 0; i < object.requestedGroup.length; ++i)
                    message.requestedGroup[i] = String(object.requestedGroup[i]);
            }
            if (object.cellOperator != null)
                message.cellOperator = String(object.cellOperator);
            if (object.simOperator != null)
                message.simOperator = String(object.simOperator);
            if (object.roaming != null)
                message.roaming = String(object.roaming);
            if (object.userNumber != null)
                message.userNumber = object.userNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from an AndroidCheckinProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.AndroidCheckinProto
         * @static
         * @param {GooglePlay.AndroidCheckinProto} message AndroidCheckinProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AndroidCheckinProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.event = [];
                object.stat = [];
                object.requestedGroup = [];
            }
            if (options.defaults) {
                object.build = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastCheckinMsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastCheckinMsec = options.longs === String ? "0" : 0;
                object.cellOperator = "";
                object.simOperator = "";
                object.roaming = "";
                object.userNumber = 0;
            }
            if (message.build != null && message.hasOwnProperty("build"))
                object.build = $root.GooglePlay.AndroidBuildProto.toObject(message.build, options);
            if (message.lastCheckinMsec != null && message.hasOwnProperty("lastCheckinMsec"))
                if (typeof message.lastCheckinMsec === "number")
                    object.lastCheckinMsec = options.longs === String ? String(message.lastCheckinMsec) : message.lastCheckinMsec;
                else
                    object.lastCheckinMsec = options.longs === String ? $util.Long.prototype.toString.call(message.lastCheckinMsec) : options.longs === Number ? new $util.LongBits(message.lastCheckinMsec.low >>> 0, message.lastCheckinMsec.high >>> 0).toNumber() : message.lastCheckinMsec;
            if (message.event && message.event.length) {
                object.event = [];
                for (var j = 0; j < message.event.length; ++j)
                    object.event[j] = $root.GooglePlay.AndroidEventProto.toObject(message.event[j], options);
            }
            if (message.stat && message.stat.length) {
                object.stat = [];
                for (var j = 0; j < message.stat.length; ++j)
                    object.stat[j] = $root.GooglePlay.AndroidStatisticProto.toObject(message.stat[j], options);
            }
            if (message.requestedGroup && message.requestedGroup.length) {
                object.requestedGroup = [];
                for (var j = 0; j < message.requestedGroup.length; ++j)
                    object.requestedGroup[j] = message.requestedGroup[j];
            }
            if (message.cellOperator != null && message.hasOwnProperty("cellOperator"))
                object.cellOperator = message.cellOperator;
            if (message.simOperator != null && message.hasOwnProperty("simOperator"))
                object.simOperator = message.simOperator;
            if (message.roaming != null && message.hasOwnProperty("roaming"))
                object.roaming = message.roaming;
            if (message.userNumber != null && message.hasOwnProperty("userNumber"))
                object.userNumber = message.userNumber;
            return object;
        };

        /**
         * Converts this AndroidCheckinProto to JSON.
         * @function toJSON
         * @memberof GooglePlay.AndroidCheckinProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AndroidCheckinProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AndroidCheckinProto
         * @function getTypeUrl
         * @memberof GooglePlay.AndroidCheckinProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AndroidCheckinProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.AndroidCheckinProto";
        };

        return AndroidCheckinProto;
    })();

    GooglePlay.PackageInfo = (function() {

        /**
         * Properties of a PackageInfo.
         * @memberof GooglePlay
         * @interface IPackageInfo
         * @property {string|null} [pkgName] PackageInfo pkgName
         * @property {number|null} [versionCode] PackageInfo versionCode
         */

        /**
         * Constructs a new PackageInfo.
         * @memberof GooglePlay
         * @classdesc Represents a PackageInfo.
         * @implements IPackageInfo
         * @constructor
         * @param {GooglePlay.IPackageInfo=} [properties] Properties to set
         */
        function PackageInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PackageInfo pkgName.
         * @member {string} pkgName
         * @memberof GooglePlay.PackageInfo
         * @instance
         */
        PackageInfo.prototype.pkgName = "";

        /**
         * PackageInfo versionCode.
         * @member {number} versionCode
         * @memberof GooglePlay.PackageInfo
         * @instance
         */
        PackageInfo.prototype.versionCode = 0;

        /**
         * Creates a new PackageInfo instance using the specified properties.
         * @function create
         * @memberof GooglePlay.PackageInfo
         * @static
         * @param {GooglePlay.IPackageInfo=} [properties] Properties to set
         * @returns {GooglePlay.PackageInfo} PackageInfo instance
         */
        PackageInfo.create = function create(properties) {
            return new PackageInfo(properties);
        };

        /**
         * Encodes the specified PackageInfo message. Does not implicitly {@link GooglePlay.PackageInfo.verify|verify} messages.
         * @function encode
         * @memberof GooglePlay.PackageInfo
         * @static
         * @param {GooglePlay.IPackageInfo} message PackageInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackageInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pkgName != null && Object.hasOwnProperty.call(message, "pkgName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.pkgName);
            if (message.versionCode != null && Object.hasOwnProperty.call(message, "versionCode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.versionCode);
            return writer;
        };

        /**
         * Encodes the specified PackageInfo message, length delimited. Does not implicitly {@link GooglePlay.PackageInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GooglePlay.PackageInfo
         * @static
         * @param {GooglePlay.IPackageInfo} message PackageInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PackageInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PackageInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GooglePlay.PackageInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GooglePlay.PackageInfo} PackageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackageInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GooglePlay.PackageInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pkgName = reader.string();
                        break;
                    }
                case 2: {
                        message.versionCode = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PackageInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GooglePlay.PackageInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GooglePlay.PackageInfo} PackageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PackageInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PackageInfo message.
         * @function verify
         * @memberof GooglePlay.PackageInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PackageInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pkgName != null && message.hasOwnProperty("pkgName"))
                if (!$util.isString(message.pkgName))
                    return "pkgName: string expected";
            if (message.versionCode != null && message.hasOwnProperty("versionCode"))
                if (!$util.isInteger(message.versionCode))
                    return "versionCode: integer expected";
            return null;
        };

        /**
         * Creates a PackageInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GooglePlay.PackageInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GooglePlay.PackageInfo} PackageInfo
         */
        PackageInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GooglePlay.PackageInfo)
                return object;
            var message = new $root.GooglePlay.PackageInfo();
            if (object.pkgName != null)
                message.pkgName = String(object.pkgName);
            if (object.versionCode != null)
                message.versionCode = object.versionCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a PackageInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GooglePlay.PackageInfo
         * @static
         * @param {GooglePlay.PackageInfo} message PackageInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PackageInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pkgName = "";
                object.versionCode = 0;
            }
            if (message.pkgName != null && message.hasOwnProperty("pkgName"))
                object.pkgName = message.pkgName;
            if (message.versionCode != null && message.hasOwnProperty("versionCode"))
                object.versionCode = message.versionCode;
            return object;
        };

        /**
         * Converts this PackageInfo to JSON.
         * @function toJSON
         * @memberof GooglePlay.PackageInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PackageInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PackageInfo
         * @function getTypeUrl
         * @memberof GooglePlay.PackageInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PackageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GooglePlay.PackageInfo";
        };

        return PackageInfo;
    })();

    return GooglePlay;
})();

module.exports = $root;
