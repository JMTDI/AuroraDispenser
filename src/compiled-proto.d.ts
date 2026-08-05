import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace GooglePlay. */
export namespace GooglePlay {

    /** Properties of a DeviceConfigurationProto. */
    interface IDeviceConfigurationProto {

        /** DeviceConfigurationProto touchScreen */
        touchScreen?: (number|null);

        /** DeviceConfigurationProto keyboard */
        keyboard?: (number|null);

        /** DeviceConfigurationProto navigation */
        navigation?: (number|null);

        /** DeviceConfigurationProto screenLayout */
        screenLayout?: (number|null);

        /** DeviceConfigurationProto hasHardKeyboard */
        hasHardKeyboard?: (boolean|null);

        /** DeviceConfigurationProto hasFiveWayNavigation */
        hasFiveWayNavigation?: (boolean|null);

        /** DeviceConfigurationProto screenDensity */
        screenDensity?: (number|null);

        /** DeviceConfigurationProto glEsVersion */
        glEsVersion?: (number|null);

        /** DeviceConfigurationProto systemSharedLibrary */
        systemSharedLibrary?: (string[]|null);

        /** DeviceConfigurationProto systemAvailableFeature */
        systemAvailableFeature?: (string[]|null);

        /** DeviceConfigurationProto nativePlatform */
        nativePlatform?: (string[]|null);

        /** DeviceConfigurationProto screenWidth */
        screenWidth?: (number|null);

        /** DeviceConfigurationProto screenHeight */
        screenHeight?: (number|null);

        /** DeviceConfigurationProto systemSupportedLocale */
        systemSupportedLocale?: (string[]|null);

        /** DeviceConfigurationProto glExtension */
        glExtension?: (string[]|null);

        /** DeviceConfigurationProto deviceClass */
        deviceClass?: (number|null);

        /** DeviceConfigurationProto maxApkDownloadSizeMb */
        maxApkDownloadSizeMb?: (number|null);

        /** DeviceConfigurationProto smallestScreenWidthDP */
        smallestScreenWidthDP?: (number|null);

        /** DeviceConfigurationProto lowRamDevice */
        lowRamDevice?: (number|null);

        /** DeviceConfigurationProto totalMemoryBytes */
        totalMemoryBytes?: (number|Long|null);

        /** DeviceConfigurationProto maxNumOf_CPUCores */
        maxNumOf_CPUCores?: (number|null);

        /** DeviceConfigurationProto deviceFeature */
        deviceFeature?: (GooglePlay.IDeviceFeature[]|null);

        /** DeviceConfigurationProto unknown28 */
        unknown28?: (number|null);

        /** DeviceConfigurationProto unknown30 */
        unknown30?: (number|null);
    }

    /** Represents a DeviceConfigurationProto. */
    class DeviceConfigurationProto implements IDeviceConfigurationProto {

        /**
         * Constructs a new DeviceConfigurationProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IDeviceConfigurationProto);

        /** DeviceConfigurationProto touchScreen. */
        public touchScreen: number;

        /** DeviceConfigurationProto keyboard. */
        public keyboard: number;

        /** DeviceConfigurationProto navigation. */
        public navigation: number;

        /** DeviceConfigurationProto screenLayout. */
        public screenLayout: number;

        /** DeviceConfigurationProto hasHardKeyboard. */
        public hasHardKeyboard: boolean;

        /** DeviceConfigurationProto hasFiveWayNavigation. */
        public hasFiveWayNavigation: boolean;

        /** DeviceConfigurationProto screenDensity. */
        public screenDensity: number;

        /** DeviceConfigurationProto glEsVersion. */
        public glEsVersion: number;

        /** DeviceConfigurationProto systemSharedLibrary. */
        public systemSharedLibrary: string[];

        /** DeviceConfigurationProto systemAvailableFeature. */
        public systemAvailableFeature: string[];

        /** DeviceConfigurationProto nativePlatform. */
        public nativePlatform: string[];

        /** DeviceConfigurationProto screenWidth. */
        public screenWidth: number;

        /** DeviceConfigurationProto screenHeight. */
        public screenHeight: number;

        /** DeviceConfigurationProto systemSupportedLocale. */
        public systemSupportedLocale: string[];

        /** DeviceConfigurationProto glExtension. */
        public glExtension: string[];

        /** DeviceConfigurationProto deviceClass. */
        public deviceClass: number;

        /** DeviceConfigurationProto maxApkDownloadSizeMb. */
        public maxApkDownloadSizeMb: number;

        /** DeviceConfigurationProto smallestScreenWidthDP. */
        public smallestScreenWidthDP: number;

        /** DeviceConfigurationProto lowRamDevice. */
        public lowRamDevice: number;

        /** DeviceConfigurationProto totalMemoryBytes. */
        public totalMemoryBytes: (number|Long);

        /** DeviceConfigurationProto maxNumOf_CPUCores. */
        public maxNumOf_CPUCores: number;

        /** DeviceConfigurationProto deviceFeature. */
        public deviceFeature: GooglePlay.IDeviceFeature[];

        /** DeviceConfigurationProto unknown28. */
        public unknown28: number;

        /** DeviceConfigurationProto unknown30. */
        public unknown30: number;

        /**
         * Creates a new DeviceConfigurationProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceConfigurationProto instance
         */
        public static create(properties?: GooglePlay.IDeviceConfigurationProto): GooglePlay.DeviceConfigurationProto;

        /**
         * Encodes the specified DeviceConfigurationProto message. Does not implicitly {@link GooglePlay.DeviceConfigurationProto.verify|verify} messages.
         * @param message DeviceConfigurationProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IDeviceConfigurationProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceConfigurationProto message, length delimited. Does not implicitly {@link GooglePlay.DeviceConfigurationProto.verify|verify} messages.
         * @param message DeviceConfigurationProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IDeviceConfigurationProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceConfigurationProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceConfigurationProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.DeviceConfigurationProto;

        /**
         * Decodes a DeviceConfigurationProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceConfigurationProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.DeviceConfigurationProto;

        /**
         * Verifies a DeviceConfigurationProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceConfigurationProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceConfigurationProto
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.DeviceConfigurationProto;

        /**
         * Creates a plain object from a DeviceConfigurationProto message. Also converts values to other types if specified.
         * @param message DeviceConfigurationProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.DeviceConfigurationProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceConfigurationProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceConfigurationProto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeviceFeature. */
    interface IDeviceFeature {

        /** DeviceFeature name */
        name?: (string|null);

        /** DeviceFeature value */
        value?: (number|null);
    }

    /** Represents a DeviceFeature. */
    class DeviceFeature implements IDeviceFeature {

        /**
         * Constructs a new DeviceFeature.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IDeviceFeature);

        /** DeviceFeature name. */
        public name: string;

        /** DeviceFeature value. */
        public value: number;

        /**
         * Creates a new DeviceFeature instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceFeature instance
         */
        public static create(properties?: GooglePlay.IDeviceFeature): GooglePlay.DeviceFeature;

        /**
         * Encodes the specified DeviceFeature message. Does not implicitly {@link GooglePlay.DeviceFeature.verify|verify} messages.
         * @param message DeviceFeature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IDeviceFeature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceFeature message, length delimited. Does not implicitly {@link GooglePlay.DeviceFeature.verify|verify} messages.
         * @param message DeviceFeature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IDeviceFeature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceFeature message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceFeature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.DeviceFeature;

        /**
         * Decodes a DeviceFeature message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceFeature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.DeviceFeature;

        /**
         * Verifies a DeviceFeature message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceFeature message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceFeature
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.DeviceFeature;

        /**
         * Creates a plain object from a DeviceFeature message. Also converts values to other types if specified.
         * @param message DeviceFeature
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.DeviceFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceFeature to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceFeature
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CorpusMetadata. */
    interface ICorpusMetadata {

        /** CorpusMetadata backend */
        backend?: (number|null);

        /** CorpusMetadata name */
        name?: (string|null);

        /** CorpusMetadata landingUrl */
        landingUrl?: (string|null);

        /** CorpusMetadata libraryName */
        libraryName?: (string|null);

        /** CorpusMetadata recsWidgetUrl */
        recsWidgetUrl?: (string|null);

        /** CorpusMetadata shopName */
        shopName?: (string|null);
    }

    /** Represents a CorpusMetadata. */
    class CorpusMetadata implements ICorpusMetadata {

        /**
         * Constructs a new CorpusMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.ICorpusMetadata);

        /** CorpusMetadata backend. */
        public backend: number;

        /** CorpusMetadata name. */
        public name: string;

        /** CorpusMetadata landingUrl. */
        public landingUrl: string;

        /** CorpusMetadata libraryName. */
        public libraryName: string;

        /** CorpusMetadata recsWidgetUrl. */
        public recsWidgetUrl: string;

        /** CorpusMetadata shopName. */
        public shopName: string;

        /**
         * Creates a new CorpusMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CorpusMetadata instance
         */
        public static create(properties?: GooglePlay.ICorpusMetadata): GooglePlay.CorpusMetadata;

        /**
         * Encodes the specified CorpusMetadata message. Does not implicitly {@link GooglePlay.CorpusMetadata.verify|verify} messages.
         * @param message CorpusMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.ICorpusMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CorpusMetadata message, length delimited. Does not implicitly {@link GooglePlay.CorpusMetadata.verify|verify} messages.
         * @param message CorpusMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.ICorpusMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CorpusMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CorpusMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.CorpusMetadata;

        /**
         * Decodes a CorpusMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CorpusMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.CorpusMetadata;

        /**
         * Verifies a CorpusMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CorpusMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CorpusMetadata
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.CorpusMetadata;

        /**
         * Creates a plain object from a CorpusMetadata message. Also converts values to other types if specified.
         * @param message CorpusMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.CorpusMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CorpusMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CorpusMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Experiments. */
    interface IExperiments {

        /** Experiments experimentId */
        experimentId?: (string[]|null);
    }

    /** Represents an Experiments. */
    class Experiments implements IExperiments {

        /**
         * Constructs a new Experiments.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IExperiments);

        /** Experiments experimentId. */
        public experimentId: string[];

        /**
         * Creates a new Experiments instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Experiments instance
         */
        public static create(properties?: GooglePlay.IExperiments): GooglePlay.Experiments;

        /**
         * Encodes the specified Experiments message. Does not implicitly {@link GooglePlay.Experiments.verify|verify} messages.
         * @param message Experiments message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IExperiments, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Experiments message, length delimited. Does not implicitly {@link GooglePlay.Experiments.verify|verify} messages.
         * @param message Experiments message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IExperiments, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Experiments message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Experiments
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.Experiments;

        /**
         * Decodes an Experiments message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Experiments
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.Experiments;

        /**
         * Verifies an Experiments message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Experiments message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Experiments
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.Experiments;

        /**
         * Creates a plain object from an Experiments message. Also converts values to other types if specified.
         * @param message Experiments
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.Experiments, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Experiments to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Experiments
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SelfUpdateConfig. */
    interface ISelfUpdateConfig {

        /** SelfUpdateConfig latestClientVersionCode */
        latestClientVersionCode?: (number|null);
    }

    /** Represents a SelfUpdateConfig. */
    class SelfUpdateConfig implements ISelfUpdateConfig {

        /**
         * Constructs a new SelfUpdateConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.ISelfUpdateConfig);

        /** SelfUpdateConfig latestClientVersionCode. */
        public latestClientVersionCode: number;

        /**
         * Creates a new SelfUpdateConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SelfUpdateConfig instance
         */
        public static create(properties?: GooglePlay.ISelfUpdateConfig): GooglePlay.SelfUpdateConfig;

        /**
         * Encodes the specified SelfUpdateConfig message. Does not implicitly {@link GooglePlay.SelfUpdateConfig.verify|verify} messages.
         * @param message SelfUpdateConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.ISelfUpdateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SelfUpdateConfig message, length delimited. Does not implicitly {@link GooglePlay.SelfUpdateConfig.verify|verify} messages.
         * @param message SelfUpdateConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.ISelfUpdateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SelfUpdateConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SelfUpdateConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.SelfUpdateConfig;

        /**
         * Decodes a SelfUpdateConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SelfUpdateConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.SelfUpdateConfig;

        /**
         * Verifies a SelfUpdateConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SelfUpdateConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SelfUpdateConfig
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.SelfUpdateConfig;

        /**
         * Creates a plain object from a SelfUpdateConfig message. Also converts values to other types if specified.
         * @param message SelfUpdateConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.SelfUpdateConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SelfUpdateConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SelfUpdateConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TocResponse. */
    interface ITocResponse {

        /** TocResponse corpus */
        corpus?: (GooglePlay.ICorpusMetadata[]|null);

        /** TocResponse tosVersionDeprecated */
        tosVersionDeprecated?: (number|null);

        /** TocResponse tosContent */
        tosContent?: (string|null);

        /** TocResponse homeUrl */
        homeUrl?: (string|null);

        /** TocResponse experiments */
        experiments?: (GooglePlay.IExperiments|null);

        /** TocResponse tosCheckboxTextMarketingEmails */
        tosCheckboxTextMarketingEmails?: (string|null);

        /** TocResponse tosToken */
        tosToken?: (string|null);

        /** TocResponse userSettings */
        userSettings?: (GooglePlay.IUserSettings|null);

        /** TocResponse iconOverrideUrl */
        iconOverrideUrl?: (string|null);

        /** TocResponse selfUpdateConfig */
        selfUpdateConfig?: (GooglePlay.ISelfUpdateConfig|null);

        /** TocResponse requiresUploadDeviceConfig */
        requiresUploadDeviceConfig?: (boolean|null);

        /** TocResponse recsWidgetUrl */
        recsWidgetUrl?: (string|null);

        /** TocResponse socialHomeUrl */
        socialHomeUrl?: (string|null);

        /** TocResponse ageVerificationRequired */
        ageVerificationRequired?: (boolean|null);

        /** TocResponse gPlusSignupEnabled */
        gPlusSignupEnabled?: (boolean|null);

        /** TocResponse redeemEnabled */
        redeemEnabled?: (boolean|null);

        /** TocResponse helpUrl */
        helpUrl?: (string|null);

        /** TocResponse themeId */
        themeId?: (number|null);

        /** TocResponse entertainmentHomeUrl */
        entertainmentHomeUrl?: (string|null);

        /** TocResponse cookie */
        cookie?: (string|null);
    }

    /** Represents a TocResponse. */
    class TocResponse implements ITocResponse {

        /**
         * Constructs a new TocResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.ITocResponse);

        /** TocResponse corpus. */
        public corpus: GooglePlay.ICorpusMetadata[];

        /** TocResponse tosVersionDeprecated. */
        public tosVersionDeprecated: number;

        /** TocResponse tosContent. */
        public tosContent: string;

        /** TocResponse homeUrl. */
        public homeUrl: string;

        /** TocResponse experiments. */
        public experiments?: (GooglePlay.IExperiments|null);

        /** TocResponse tosCheckboxTextMarketingEmails. */
        public tosCheckboxTextMarketingEmails: string;

        /** TocResponse tosToken. */
        public tosToken: string;

        /** TocResponse userSettings. */
        public userSettings?: (GooglePlay.IUserSettings|null);

        /** TocResponse iconOverrideUrl. */
        public iconOverrideUrl: string;

        /** TocResponse selfUpdateConfig. */
        public selfUpdateConfig?: (GooglePlay.ISelfUpdateConfig|null);

        /** TocResponse requiresUploadDeviceConfig. */
        public requiresUploadDeviceConfig: boolean;

        /** TocResponse recsWidgetUrl. */
        public recsWidgetUrl: string;

        /** TocResponse socialHomeUrl. */
        public socialHomeUrl: string;

        /** TocResponse ageVerificationRequired. */
        public ageVerificationRequired: boolean;

        /** TocResponse gPlusSignupEnabled. */
        public gPlusSignupEnabled: boolean;

        /** TocResponse redeemEnabled. */
        public redeemEnabled: boolean;

        /** TocResponse helpUrl. */
        public helpUrl: string;

        /** TocResponse themeId. */
        public themeId: number;

        /** TocResponse entertainmentHomeUrl. */
        public entertainmentHomeUrl: string;

        /** TocResponse cookie. */
        public cookie: string;

        /**
         * Creates a new TocResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TocResponse instance
         */
        public static create(properties?: GooglePlay.ITocResponse): GooglePlay.TocResponse;

        /**
         * Encodes the specified TocResponse message. Does not implicitly {@link GooglePlay.TocResponse.verify|verify} messages.
         * @param message TocResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.ITocResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TocResponse message, length delimited. Does not implicitly {@link GooglePlay.TocResponse.verify|verify} messages.
         * @param message TocResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.ITocResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TocResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TocResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.TocResponse;

        /**
         * Decodes a TocResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TocResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.TocResponse;

        /**
         * Verifies a TocResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TocResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TocResponse
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.TocResponse;

        /**
         * Creates a plain object from a TocResponse message. Also converts values to other types if specified.
         * @param message TocResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.TocResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TocResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TocResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserSettings. */
    interface IUserSettings {

        /** UserSettings tosCheckboxMarketingEmailsOptedIn */
        tosCheckboxMarketingEmailsOptedIn?: (boolean|null);

        /** UserSettings privacySetting */
        privacySetting?: (GooglePlay.IPrivacySetting|null);
    }

    /** Represents a UserSettings. */
    class UserSettings implements IUserSettings {

        /**
         * Constructs a new UserSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IUserSettings);

        /** UserSettings tosCheckboxMarketingEmailsOptedIn. */
        public tosCheckboxMarketingEmailsOptedIn: boolean;

        /** UserSettings privacySetting. */
        public privacySetting?: (GooglePlay.IPrivacySetting|null);

        /**
         * Creates a new UserSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSettings instance
         */
        public static create(properties?: GooglePlay.IUserSettings): GooglePlay.UserSettings;

        /**
         * Encodes the specified UserSettings message. Does not implicitly {@link GooglePlay.UserSettings.verify|verify} messages.
         * @param message UserSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IUserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSettings message, length delimited. Does not implicitly {@link GooglePlay.UserSettings.verify|verify} messages.
         * @param message UserSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IUserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.UserSettings;

        /**
         * Decodes a UserSettings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.UserSettings;

        /**
         * Verifies a UserSettings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSettings
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.UserSettings;

        /**
         * Creates a plain object from a UserSettings message. Also converts values to other types if specified.
         * @param message UserSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.UserSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserSettings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PrivacySetting. */
    interface IPrivacySetting {

        /** PrivacySetting type */
        type?: (number|null);

        /** PrivacySetting currentStatus */
        currentStatus?: (number|null);

        /** PrivacySetting enabledByDefault */
        enabledByDefault?: (boolean|null);
    }

    /** Represents a PrivacySetting. */
    class PrivacySetting implements IPrivacySetting {

        /**
         * Constructs a new PrivacySetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IPrivacySetting);

        /** PrivacySetting type. */
        public type: number;

        /** PrivacySetting currentStatus. */
        public currentStatus: number;

        /** PrivacySetting enabledByDefault. */
        public enabledByDefault: boolean;

        /**
         * Creates a new PrivacySetting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivacySetting instance
         */
        public static create(properties?: GooglePlay.IPrivacySetting): GooglePlay.PrivacySetting;

        /**
         * Encodes the specified PrivacySetting message. Does not implicitly {@link GooglePlay.PrivacySetting.verify|verify} messages.
         * @param message PrivacySetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IPrivacySetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivacySetting message, length delimited. Does not implicitly {@link GooglePlay.PrivacySetting.verify|verify} messages.
         * @param message PrivacySetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IPrivacySetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivacySetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivacySetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.PrivacySetting;

        /**
         * Decodes a PrivacySetting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivacySetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.PrivacySetting;

        /**
         * Verifies a PrivacySetting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrivacySetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivacySetting
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.PrivacySetting;

        /**
         * Creates a plain object from a PrivacySetting message. Also converts values to other types if specified.
         * @param message PrivacySetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.PrivacySetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivacySetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PrivacySetting
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Payload. */
    interface IPayload {

        /** Payload tocResponse */
        tocResponse?: (GooglePlay.ITocResponse|null);

        /** Payload acceptTosResponse */
        acceptTosResponse?: (GooglePlay.IAcceptTosResponse|null);

        /** Payload androidCheckinResponse */
        androidCheckinResponse?: (GooglePlay.IAndroidCheckinResponse|null);

        /** Payload uploadDeviceConfigResponse */
        uploadDeviceConfigResponse?: (GooglePlay.IUploadDeviceConfigResponse|null);
    }

    /** Represents a Payload. */
    class Payload implements IPayload {

        /**
         * Constructs a new Payload.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IPayload);

        /** Payload tocResponse. */
        public tocResponse?: (GooglePlay.ITocResponse|null);

        /** Payload acceptTosResponse. */
        public acceptTosResponse?: (GooglePlay.IAcceptTosResponse|null);

        /** Payload androidCheckinResponse. */
        public androidCheckinResponse?: (GooglePlay.IAndroidCheckinResponse|null);

        /** Payload uploadDeviceConfigResponse. */
        public uploadDeviceConfigResponse?: (GooglePlay.IUploadDeviceConfigResponse|null);

        /**
         * Creates a new Payload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payload instance
         */
        public static create(properties?: GooglePlay.IPayload): GooglePlay.Payload;

        /**
         * Encodes the specified Payload message. Does not implicitly {@link GooglePlay.Payload.verify|verify} messages.
         * @param message Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payload message, length delimited. Does not implicitly {@link GooglePlay.Payload.verify|verify} messages.
         * @param message Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.Payload;

        /**
         * Decodes a Payload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.Payload;

        /**
         * Verifies a Payload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payload
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.Payload;

        /**
         * Creates a plain object from a Payload message. Also converts values to other types if specified.
         * @param message Payload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Payload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AcceptTosResponse. */
    interface IAcceptTosResponse {
    }

    /** Represents an AcceptTosResponse. */
    class AcceptTosResponse implements IAcceptTosResponse {

        /**
         * Constructs a new AcceptTosResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IAcceptTosResponse);

        /**
         * Creates a new AcceptTosResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AcceptTosResponse instance
         */
        public static create(properties?: GooglePlay.IAcceptTosResponse): GooglePlay.AcceptTosResponse;

        /**
         * Encodes the specified AcceptTosResponse message. Does not implicitly {@link GooglePlay.AcceptTosResponse.verify|verify} messages.
         * @param message AcceptTosResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IAcceptTosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AcceptTosResponse message, length delimited. Does not implicitly {@link GooglePlay.AcceptTosResponse.verify|verify} messages.
         * @param message AcceptTosResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IAcceptTosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AcceptTosResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AcceptTosResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.AcceptTosResponse;

        /**
         * Decodes an AcceptTosResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AcceptTosResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.AcceptTosResponse;

        /**
         * Verifies an AcceptTosResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AcceptTosResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AcceptTosResponse
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.AcceptTosResponse;

        /**
         * Creates a plain object from an AcceptTosResponse message. Also converts values to other types if specified.
         * @param message AcceptTosResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.AcceptTosResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AcceptTosResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AcceptTosResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PreFetch. */
    interface IPreFetch {

        /** PreFetch url */
        url?: (string|null);

        /** PreFetch response */
        response?: (GooglePlay.IResponseWrapper|null);

        /** PreFetch etag */
        etag?: (string|null);

        /** PreFetch ttl */
        ttl?: (number|Long|null);

        /** PreFetch softTtl */
        softTtl?: (number|Long|null);
    }

    /** Represents a PreFetch. */
    class PreFetch implements IPreFetch {

        /**
         * Constructs a new PreFetch.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IPreFetch);

        /** PreFetch url. */
        public url: string;

        /** PreFetch response. */
        public response?: (GooglePlay.IResponseWrapper|null);

        /** PreFetch etag. */
        public etag: string;

        /** PreFetch ttl. */
        public ttl: (number|Long);

        /** PreFetch softTtl. */
        public softTtl: (number|Long);

        /**
         * Creates a new PreFetch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreFetch instance
         */
        public static create(properties?: GooglePlay.IPreFetch): GooglePlay.PreFetch;

        /**
         * Encodes the specified PreFetch message. Does not implicitly {@link GooglePlay.PreFetch.verify|verify} messages.
         * @param message PreFetch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IPreFetch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreFetch message, length delimited. Does not implicitly {@link GooglePlay.PreFetch.verify|verify} messages.
         * @param message PreFetch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IPreFetch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreFetch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreFetch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.PreFetch;

        /**
         * Decodes a PreFetch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreFetch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.PreFetch;

        /**
         * Verifies a PreFetch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreFetch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreFetch
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.PreFetch;

        /**
         * Creates a plain object from a PreFetch message. Also converts values to other types if specified.
         * @param message PreFetch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.PreFetch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreFetch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PreFetch
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerMetadata. */
    interface IServerMetadata {

        /** ServerMetadata latencyMillis */
        latencyMillis?: (number|Long|null);
    }

    /** Represents a ServerMetadata. */
    class ServerMetadata implements IServerMetadata {

        /**
         * Constructs a new ServerMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IServerMetadata);

        /** ServerMetadata latencyMillis. */
        public latencyMillis: (number|Long);

        /**
         * Creates a new ServerMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerMetadata instance
         */
        public static create(properties?: GooglePlay.IServerMetadata): GooglePlay.ServerMetadata;

        /**
         * Encodes the specified ServerMetadata message. Does not implicitly {@link GooglePlay.ServerMetadata.verify|verify} messages.
         * @param message ServerMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IServerMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerMetadata message, length delimited. Does not implicitly {@link GooglePlay.ServerMetadata.verify|verify} messages.
         * @param message ServerMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IServerMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.ServerMetadata;

        /**
         * Decodes a ServerMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.ServerMetadata;

        /**
         * Verifies a ServerMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerMetadata
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.ServerMetadata;

        /**
         * Creates a plain object from a ServerMetadata message. Also converts values to other types if specified.
         * @param message ServerMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.ServerMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Targets. */
    interface ITargets {

        /** Targets targetId */
        targetId?: ((number|Long)[]|null);

        /** Targets signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a Targets. */
    class Targets implements ITargets {

        /**
         * Constructs a new Targets.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.ITargets);

        /** Targets targetId. */
        public targetId: (number|Long)[];

        /** Targets signature. */
        public signature: Uint8Array;

        /**
         * Creates a new Targets instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Targets instance
         */
        public static create(properties?: GooglePlay.ITargets): GooglePlay.Targets;

        /**
         * Encodes the specified Targets message. Does not implicitly {@link GooglePlay.Targets.verify|verify} messages.
         * @param message Targets message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.ITargets, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Targets message, length delimited. Does not implicitly {@link GooglePlay.Targets.verify|verify} messages.
         * @param message Targets message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.ITargets, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Targets message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Targets
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.Targets;

        /**
         * Decodes a Targets message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Targets
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.Targets;

        /**
         * Verifies a Targets message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Targets message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Targets
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.Targets;

        /**
         * Creates a plain object from a Targets message. Also converts values to other types if specified.
         * @param message Targets
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.Targets, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Targets to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Targets
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerCookie. */
    interface IServerCookie {

        /** ServerCookie type */
        type?: (number|null);

        /** ServerCookie token */
        token?: (Uint8Array|null);
    }

    /** Represents a ServerCookie. */
    class ServerCookie implements IServerCookie {

        /**
         * Constructs a new ServerCookie.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IServerCookie);

        /** ServerCookie type. */
        public type: number;

        /** ServerCookie token. */
        public token: Uint8Array;

        /**
         * Creates a new ServerCookie instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerCookie instance
         */
        public static create(properties?: GooglePlay.IServerCookie): GooglePlay.ServerCookie;

        /**
         * Encodes the specified ServerCookie message. Does not implicitly {@link GooglePlay.ServerCookie.verify|verify} messages.
         * @param message ServerCookie message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IServerCookie, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerCookie message, length delimited. Does not implicitly {@link GooglePlay.ServerCookie.verify|verify} messages.
         * @param message ServerCookie message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IServerCookie, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerCookie message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.ServerCookie;

        /**
         * Decodes a ServerCookie message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.ServerCookie;

        /**
         * Verifies a ServerCookie message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerCookie message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerCookie
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.ServerCookie;

        /**
         * Creates a plain object from a ServerCookie message. Also converts values to other types if specified.
         * @param message ServerCookie
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.ServerCookie, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerCookie to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerCookie
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerCookies. */
    interface IServerCookies {

        /** ServerCookies serverCookie */
        serverCookie?: (GooglePlay.IServerCookie[]|null);
    }

    /** Represents a ServerCookies. */
    class ServerCookies implements IServerCookies {

        /**
         * Constructs a new ServerCookies.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IServerCookies);

        /** ServerCookies serverCookie. */
        public serverCookie: GooglePlay.IServerCookie[];

        /**
         * Creates a new ServerCookies instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerCookies instance
         */
        public static create(properties?: GooglePlay.IServerCookies): GooglePlay.ServerCookies;

        /**
         * Encodes the specified ServerCookies message. Does not implicitly {@link GooglePlay.ServerCookies.verify|verify} messages.
         * @param message ServerCookies message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IServerCookies, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerCookies message, length delimited. Does not implicitly {@link GooglePlay.ServerCookies.verify|verify} messages.
         * @param message ServerCookies message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IServerCookies, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerCookies message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerCookies
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.ServerCookies;

        /**
         * Decodes a ServerCookies message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerCookies
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.ServerCookies;

        /**
         * Verifies a ServerCookies message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerCookies message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerCookies
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.ServerCookies;

        /**
         * Creates a plain object from a ServerCookies message. Also converts values to other types if specified.
         * @param message ServerCookies
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.ServerCookies, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerCookies to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerCookies
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResponseWrapper. */
    interface IResponseWrapper {

        /** ResponseWrapper payload */
        payload?: (GooglePlay.IPayload|null);

        /** ResponseWrapper preFetch */
        preFetch?: (GooglePlay.IPreFetch[]|null);

        /** ResponseWrapper serverLogsCookie */
        serverLogsCookie?: (Uint8Array|null);
    }

    /** Represents a ResponseWrapper. */
    class ResponseWrapper implements IResponseWrapper {

        /**
         * Constructs a new ResponseWrapper.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IResponseWrapper);

        /** ResponseWrapper payload. */
        public payload?: (GooglePlay.IPayload|null);

        /** ResponseWrapper preFetch. */
        public preFetch: GooglePlay.IPreFetch[];

        /** ResponseWrapper serverLogsCookie. */
        public serverLogsCookie: Uint8Array;

        /**
         * Creates a new ResponseWrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseWrapper instance
         */
        public static create(properties?: GooglePlay.IResponseWrapper): GooglePlay.ResponseWrapper;

        /**
         * Encodes the specified ResponseWrapper message. Does not implicitly {@link GooglePlay.ResponseWrapper.verify|verify} messages.
         * @param message ResponseWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IResponseWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseWrapper message, length delimited. Does not implicitly {@link GooglePlay.ResponseWrapper.verify|verify} messages.
         * @param message ResponseWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IResponseWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseWrapper message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.ResponseWrapper;

        /**
         * Decodes a ResponseWrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.ResponseWrapper;

        /**
         * Verifies a ResponseWrapper message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseWrapper message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseWrapper
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.ResponseWrapper;

        /**
         * Creates a plain object from a ResponseWrapper message. Also converts values to other types if specified.
         * @param message ResponseWrapper
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.ResponseWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseWrapper to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResponseWrapper
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResponseWrapperApi. */
    interface IResponseWrapperApi {

        /** ResponseWrapperApi payload */
        payload?: (GooglePlay.IPayloadApi|null);
    }

    /** Represents a ResponseWrapperApi. */
    class ResponseWrapperApi implements IResponseWrapperApi {

        /**
         * Constructs a new ResponseWrapperApi.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IResponseWrapperApi);

        /** ResponseWrapperApi payload. */
        public payload?: (GooglePlay.IPayloadApi|null);

        /**
         * Creates a new ResponseWrapperApi instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseWrapperApi instance
         */
        public static create(properties?: GooglePlay.IResponseWrapperApi): GooglePlay.ResponseWrapperApi;

        /**
         * Encodes the specified ResponseWrapperApi message. Does not implicitly {@link GooglePlay.ResponseWrapperApi.verify|verify} messages.
         * @param message ResponseWrapperApi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IResponseWrapperApi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseWrapperApi message, length delimited. Does not implicitly {@link GooglePlay.ResponseWrapperApi.verify|verify} messages.
         * @param message ResponseWrapperApi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IResponseWrapperApi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseWrapperApi message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseWrapperApi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.ResponseWrapperApi;

        /**
         * Decodes a ResponseWrapperApi message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseWrapperApi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.ResponseWrapperApi;

        /**
         * Verifies a ResponseWrapperApi message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseWrapperApi message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseWrapperApi
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.ResponseWrapperApi;

        /**
         * Creates a plain object from a ResponseWrapperApi message. Also converts values to other types if specified.
         * @param message ResponseWrapperApi
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.ResponseWrapperApi, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseWrapperApi to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResponseWrapperApi
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PayloadApi. */
    interface IPayloadApi {

        /** PayloadApi userProfileResponse */
        userProfileResponse?: (GooglePlay.IUserProfileResponse|null);
    }

    /** Represents a PayloadApi. */
    class PayloadApi implements IPayloadApi {

        /**
         * Constructs a new PayloadApi.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IPayloadApi);

        /** PayloadApi userProfileResponse. */
        public userProfileResponse?: (GooglePlay.IUserProfileResponse|null);

        /**
         * Creates a new PayloadApi instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PayloadApi instance
         */
        public static create(properties?: GooglePlay.IPayloadApi): GooglePlay.PayloadApi;

        /**
         * Encodes the specified PayloadApi message. Does not implicitly {@link GooglePlay.PayloadApi.verify|verify} messages.
         * @param message PayloadApi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IPayloadApi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PayloadApi message, length delimited. Does not implicitly {@link GooglePlay.PayloadApi.verify|verify} messages.
         * @param message PayloadApi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IPayloadApi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PayloadApi message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PayloadApi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.PayloadApi;

        /**
         * Decodes a PayloadApi message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PayloadApi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.PayloadApi;

        /**
         * Verifies a PayloadApi message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PayloadApi message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PayloadApi
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.PayloadApi;

        /**
         * Creates a plain object from a PayloadApi message. Also converts values to other types if specified.
         * @param message PayloadApi
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.PayloadApi, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PayloadApi to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PayloadApi
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserProfileResponse. */
    interface IUserProfileResponse {

        /** UserProfileResponse userProfile */
        userProfile?: (GooglePlay.IUserProfile|null);
    }

    /** Represents a UserProfileResponse. */
    class UserProfileResponse implements IUserProfileResponse {

        /**
         * Constructs a new UserProfileResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IUserProfileResponse);

        /** UserProfileResponse userProfile. */
        public userProfile?: (GooglePlay.IUserProfile|null);

        /**
         * Creates a new UserProfileResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserProfileResponse instance
         */
        public static create(properties?: GooglePlay.IUserProfileResponse): GooglePlay.UserProfileResponse;

        /**
         * Encodes the specified UserProfileResponse message. Does not implicitly {@link GooglePlay.UserProfileResponse.verify|verify} messages.
         * @param message UserProfileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IUserProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserProfileResponse message, length delimited. Does not implicitly {@link GooglePlay.UserProfileResponse.verify|verify} messages.
         * @param message UserProfileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IUserProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserProfileResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.UserProfileResponse;

        /**
         * Decodes a UserProfileResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.UserProfileResponse;

        /**
         * Verifies a UserProfileResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserProfileResponse
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.UserProfileResponse;

        /**
         * Creates a plain object from a UserProfileResponse message. Also converts values to other types if specified.
         * @param message UserProfileResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.UserProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserProfileResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserProfileResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Image. */
    interface IImage {

        /** Image imageType */
        imageType?: (number|null);

        /** Image dimension */
        dimension?: (GooglePlay.Image.IDimension|null);

        /** Image imageUrl */
        imageUrl?: (string|null);

        /** Image altTextLocalized */
        altTextLocalized?: (string|null);

        /** Image secureUrl */
        secureUrl?: (string|null);

        /** Image positionInSequence */
        positionInSequence?: (number|null);

        /** Image supportsFifeUrlOptions */
        supportsFifeUrlOptions?: (boolean|null);

        /** Image citation */
        citation?: (GooglePlay.Image.ICitation|null);

        /** Image durationSeconds */
        durationSeconds?: (number|null);

        /** Image fillColorRGB */
        fillColorRGB?: (string|null);

        /** Image autogen */
        autogen?: (boolean|null);

        /** Image backgroundColorRgb */
        backgroundColorRgb?: (string|null);

        /** Image deviceClass */
        deviceClass?: (number|null);

        /** Image supportsFifeMonogramOption */
        supportsFifeMonogramOption?: (boolean|null);

        /** Image imageUrlAlt */
        imageUrlAlt?: (string|null);
    }

    /** Represents an Image. */
    class Image implements IImage {

        /**
         * Constructs a new Image.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IImage);

        /** Image imageType. */
        public imageType: number;

        /** Image dimension. */
        public dimension?: (GooglePlay.Image.IDimension|null);

        /** Image imageUrl. */
        public imageUrl: string;

        /** Image altTextLocalized. */
        public altTextLocalized: string;

        /** Image secureUrl. */
        public secureUrl: string;

        /** Image positionInSequence. */
        public positionInSequence: number;

        /** Image supportsFifeUrlOptions. */
        public supportsFifeUrlOptions: boolean;

        /** Image citation. */
        public citation?: (GooglePlay.Image.ICitation|null);

        /** Image durationSeconds. */
        public durationSeconds: number;

        /** Image fillColorRGB. */
        public fillColorRGB: string;

        /** Image autogen. */
        public autogen: boolean;

        /** Image backgroundColorRgb. */
        public backgroundColorRgb: string;

        /** Image deviceClass. */
        public deviceClass: number;

        /** Image supportsFifeMonogramOption. */
        public supportsFifeMonogramOption: boolean;

        /** Image imageUrlAlt. */
        public imageUrlAlt: string;

        /**
         * Creates a new Image instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Image instance
         */
        public static create(properties?: GooglePlay.IImage): GooglePlay.Image;

        /**
         * Encodes the specified Image message. Does not implicitly {@link GooglePlay.Image.verify|verify} messages.
         * @param message Image message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Image message, length delimited. Does not implicitly {@link GooglePlay.Image.verify|verify} messages.
         * @param message Image message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.Image;

        /**
         * Decodes an Image message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.Image;

        /**
         * Verifies an Image message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Image message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Image
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.Image;

        /**
         * Creates a plain object from an Image message. Also converts values to other types if specified.
         * @param message Image
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Image to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Image
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Image {

        /** Properties of a Dimension. */
        interface IDimension {

            /** Dimension width */
            width?: (number|null);

            /** Dimension height */
            height?: (number|null);

            /** Dimension aspectRatio */
            aspectRatio?: (number|null);
        }

        /** Represents a Dimension. */
        class Dimension implements IDimension {

            /**
             * Constructs a new Dimension.
             * @param [properties] Properties to set
             */
            constructor(properties?: GooglePlay.Image.IDimension);

            /** Dimension width. */
            public width: number;

            /** Dimension height. */
            public height: number;

            /** Dimension aspectRatio. */
            public aspectRatio: number;

            /**
             * Creates a new Dimension instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Dimension instance
             */
            public static create(properties?: GooglePlay.Image.IDimension): GooglePlay.Image.Dimension;

            /**
             * Encodes the specified Dimension message. Does not implicitly {@link GooglePlay.Image.Dimension.verify|verify} messages.
             * @param message Dimension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: GooglePlay.Image.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Dimension message, length delimited. Does not implicitly {@link GooglePlay.Image.Dimension.verify|verify} messages.
             * @param message Dimension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: GooglePlay.Image.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Dimension message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Dimension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.Image.Dimension;

            /**
             * Decodes a Dimension message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Dimension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.Image.Dimension;

            /**
             * Verifies a Dimension message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Dimension message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Dimension
             */
            public static fromObject(object: { [k: string]: any }): GooglePlay.Image.Dimension;

            /**
             * Creates a plain object from a Dimension message. Also converts values to other types if specified.
             * @param message Dimension
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: GooglePlay.Image.Dimension, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Dimension to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Dimension
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Citation. */
        interface ICitation {

            /** Citation titleLocalized */
            titleLocalized?: (string|null);

            /** Citation url */
            url?: (string|null);
        }

        /** Represents a Citation. */
        class Citation implements ICitation {

            /**
             * Constructs a new Citation.
             * @param [properties] Properties to set
             */
            constructor(properties?: GooglePlay.Image.ICitation);

            /** Citation titleLocalized. */
            public titleLocalized: string;

            /** Citation url. */
            public url: string;

            /**
             * Creates a new Citation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Citation instance
             */
            public static create(properties?: GooglePlay.Image.ICitation): GooglePlay.Image.Citation;

            /**
             * Encodes the specified Citation message. Does not implicitly {@link GooglePlay.Image.Citation.verify|verify} messages.
             * @param message Citation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: GooglePlay.Image.ICitation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Citation message, length delimited. Does not implicitly {@link GooglePlay.Image.Citation.verify|verify} messages.
             * @param message Citation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: GooglePlay.Image.ICitation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Citation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Citation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.Image.Citation;

            /**
             * Decodes a Citation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Citation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.Image.Citation;

            /**
             * Verifies a Citation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Citation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Citation
             */
            public static fromObject(object: { [k: string]: any }): GooglePlay.Image.Citation;

            /**
             * Creates a plain object from a Citation message. Also converts values to other types if specified.
             * @param message Citation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: GooglePlay.Image.Citation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Citation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Citation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a UserProfile. */
    interface IUserProfile {

        /** UserProfile profileId */
        profileId?: (string|null);

        /** UserProfile personId */
        personId?: (string|null);

        /** UserProfile profileType */
        profileType?: (number|null);

        /** UserProfile personType */
        personType?: (number|null);

        /** UserProfile name */
        name?: (string|null);

        /** UserProfile image */
        image?: (GooglePlay.IImage[]|null);

        /** UserProfile profileUrl */
        profileUrl?: (string|null);

        /** UserProfile profileDescription */
        profileDescription?: (string|null);
    }

    /** Represents a UserProfile. */
    class UserProfile implements IUserProfile {

        /**
         * Constructs a new UserProfile.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IUserProfile);

        /** UserProfile profileId. */
        public profileId: string;

        /** UserProfile personId. */
        public personId: string;

        /** UserProfile profileType. */
        public profileType: number;

        /** UserProfile personType. */
        public personType: number;

        /** UserProfile name. */
        public name: string;

        /** UserProfile image. */
        public image: GooglePlay.IImage[];

        /** UserProfile profileUrl. */
        public profileUrl: string;

        /** UserProfile profileDescription. */
        public profileDescription: string;

        /**
         * Creates a new UserProfile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserProfile instance
         */
        public static create(properties?: GooglePlay.IUserProfile): GooglePlay.UserProfile;

        /**
         * Encodes the specified UserProfile message. Does not implicitly {@link GooglePlay.UserProfile.verify|verify} messages.
         * @param message UserProfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IUserProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserProfile message, length delimited. Does not implicitly {@link GooglePlay.UserProfile.verify|verify} messages.
         * @param message UserProfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IUserProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserProfile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.UserProfile;

        /**
         * Decodes a UserProfile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.UserProfile;

        /**
         * Verifies a UserProfile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserProfile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserProfile
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.UserProfile;

        /**
         * Creates a plain object from a UserProfile message. Also converts values to other types if specified.
         * @param message UserProfile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.UserProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserProfile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserProfile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadDeviceConfigRequest. */
    interface IUploadDeviceConfigRequest {

        /** UploadDeviceConfigRequest deviceConfiguration */
        deviceConfiguration?: (GooglePlay.IDeviceConfigurationProto|null);

        /** UploadDeviceConfigRequest manufacturer */
        manufacturer?: (string|null);

        /** UploadDeviceConfigRequest gcmRegistrationId */
        gcmRegistrationId?: (string|null);
    }

    /** Represents an UploadDeviceConfigRequest. */
    class UploadDeviceConfigRequest implements IUploadDeviceConfigRequest {

        /**
         * Constructs a new UploadDeviceConfigRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IUploadDeviceConfigRequest);

        /** UploadDeviceConfigRequest deviceConfiguration. */
        public deviceConfiguration?: (GooglePlay.IDeviceConfigurationProto|null);

        /** UploadDeviceConfigRequest manufacturer. */
        public manufacturer: string;

        /** UploadDeviceConfigRequest gcmRegistrationId. */
        public gcmRegistrationId: string;

        /**
         * Creates a new UploadDeviceConfigRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadDeviceConfigRequest instance
         */
        public static create(properties?: GooglePlay.IUploadDeviceConfigRequest): GooglePlay.UploadDeviceConfigRequest;

        /**
         * Encodes the specified UploadDeviceConfigRequest message. Does not implicitly {@link GooglePlay.UploadDeviceConfigRequest.verify|verify} messages.
         * @param message UploadDeviceConfigRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IUploadDeviceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadDeviceConfigRequest message, length delimited. Does not implicitly {@link GooglePlay.UploadDeviceConfigRequest.verify|verify} messages.
         * @param message UploadDeviceConfigRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IUploadDeviceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadDeviceConfigRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadDeviceConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.UploadDeviceConfigRequest;

        /**
         * Decodes an UploadDeviceConfigRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadDeviceConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.UploadDeviceConfigRequest;

        /**
         * Verifies an UploadDeviceConfigRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadDeviceConfigRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadDeviceConfigRequest
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.UploadDeviceConfigRequest;

        /**
         * Creates a plain object from an UploadDeviceConfigRequest message. Also converts values to other types if specified.
         * @param message UploadDeviceConfigRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.UploadDeviceConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadDeviceConfigRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadDeviceConfigRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadDeviceConfigResponse. */
    interface IUploadDeviceConfigResponse {

        /** UploadDeviceConfigResponse uploadDeviceConfigToken */
        uploadDeviceConfigToken?: (string|null);
    }

    /** Represents an UploadDeviceConfigResponse. */
    class UploadDeviceConfigResponse implements IUploadDeviceConfigResponse {

        /**
         * Constructs a new UploadDeviceConfigResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IUploadDeviceConfigResponse);

        /** UploadDeviceConfigResponse uploadDeviceConfigToken. */
        public uploadDeviceConfigToken: string;

        /**
         * Creates a new UploadDeviceConfigResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadDeviceConfigResponse instance
         */
        public static create(properties?: GooglePlay.IUploadDeviceConfigResponse): GooglePlay.UploadDeviceConfigResponse;

        /**
         * Encodes the specified UploadDeviceConfigResponse message. Does not implicitly {@link GooglePlay.UploadDeviceConfigResponse.verify|verify} messages.
         * @param message UploadDeviceConfigResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IUploadDeviceConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadDeviceConfigResponse message, length delimited. Does not implicitly {@link GooglePlay.UploadDeviceConfigResponse.verify|verify} messages.
         * @param message UploadDeviceConfigResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IUploadDeviceConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadDeviceConfigResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadDeviceConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.UploadDeviceConfigResponse;

        /**
         * Decodes an UploadDeviceConfigResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadDeviceConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.UploadDeviceConfigResponse;

        /**
         * Verifies an UploadDeviceConfigResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadDeviceConfigResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadDeviceConfigResponse
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.UploadDeviceConfigResponse;

        /**
         * Creates a plain object from an UploadDeviceConfigResponse message. Also converts values to other types if specified.
         * @param message UploadDeviceConfigResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.UploadDeviceConfigResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadDeviceConfigResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadDeviceConfigResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AndroidCheckinRequest. */
    interface IAndroidCheckinRequest {

        /** AndroidCheckinRequest imei */
        imei?: (string|null);

        /** AndroidCheckinRequest id */
        id?: (number|Long|null);

        /** AndroidCheckinRequest digest */
        digest?: (string|null);

        /** AndroidCheckinRequest checkin */
        checkin?: (GooglePlay.IAndroidCheckinProto|null);

        /** AndroidCheckinRequest desiredBuild */
        desiredBuild?: (string|null);

        /** AndroidCheckinRequest locale */
        locale?: (string|null);

        /** AndroidCheckinRequest loggingId */
        loggingId?: (number|Long|null);

        /** AndroidCheckinRequest marketCheckin */
        marketCheckin?: (string|null);

        /** AndroidCheckinRequest macAddr */
        macAddr?: (string[]|null);

        /** AndroidCheckinRequest meid */
        meid?: (string|null);

        /** AndroidCheckinRequest accountCookie */
        accountCookie?: (string[]|null);

        /** AndroidCheckinRequest timeZone */
        timeZone?: (string|null);

        /** AndroidCheckinRequest securityToken */
        securityToken?: (number|Long|null);

        /** AndroidCheckinRequest version */
        version?: (number|null);

        /** AndroidCheckinRequest otaCert */
        otaCert?: (string[]|null);

        /** AndroidCheckinRequest serialNumber */
        serialNumber?: (string|null);

        /** AndroidCheckinRequest esn */
        esn?: (string|null);

        /** AndroidCheckinRequest deviceConfiguration */
        deviceConfiguration?: (GooglePlay.IDeviceConfigurationProto|null);

        /** AndroidCheckinRequest macAddrType */
        macAddrType?: (string[]|null);

        /** AndroidCheckinRequest fragment */
        fragment?: (number|null);

        /** AndroidCheckinRequest userName */
        userName?: (string|null);

        /** AndroidCheckinRequest userSerialNumber */
        userSerialNumber?: (number|null);
    }

    /** Represents an AndroidCheckinRequest. */
    class AndroidCheckinRequest implements IAndroidCheckinRequest {

        /**
         * Constructs a new AndroidCheckinRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IAndroidCheckinRequest);

        /** AndroidCheckinRequest imei. */
        public imei: string;

        /** AndroidCheckinRequest id. */
        public id: (number|Long);

        /** AndroidCheckinRequest digest. */
        public digest: string;

        /** AndroidCheckinRequest checkin. */
        public checkin?: (GooglePlay.IAndroidCheckinProto|null);

        /** AndroidCheckinRequest desiredBuild. */
        public desiredBuild: string;

        /** AndroidCheckinRequest locale. */
        public locale: string;

        /** AndroidCheckinRequest loggingId. */
        public loggingId: (number|Long);

        /** AndroidCheckinRequest marketCheckin. */
        public marketCheckin: string;

        /** AndroidCheckinRequest macAddr. */
        public macAddr: string[];

        /** AndroidCheckinRequest meid. */
        public meid: string;

        /** AndroidCheckinRequest accountCookie. */
        public accountCookie: string[];

        /** AndroidCheckinRequest timeZone. */
        public timeZone: string;

        /** AndroidCheckinRequest securityToken. */
        public securityToken: (number|Long);

        /** AndroidCheckinRequest version. */
        public version: number;

        /** AndroidCheckinRequest otaCert. */
        public otaCert: string[];

        /** AndroidCheckinRequest serialNumber. */
        public serialNumber: string;

        /** AndroidCheckinRequest esn. */
        public esn: string;

        /** AndroidCheckinRequest deviceConfiguration. */
        public deviceConfiguration?: (GooglePlay.IDeviceConfigurationProto|null);

        /** AndroidCheckinRequest macAddrType. */
        public macAddrType: string[];

        /** AndroidCheckinRequest fragment. */
        public fragment: number;

        /** AndroidCheckinRequest userName. */
        public userName: string;

        /** AndroidCheckinRequest userSerialNumber. */
        public userSerialNumber: number;

        /**
         * Creates a new AndroidCheckinRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AndroidCheckinRequest instance
         */
        public static create(properties?: GooglePlay.IAndroidCheckinRequest): GooglePlay.AndroidCheckinRequest;

        /**
         * Encodes the specified AndroidCheckinRequest message. Does not implicitly {@link GooglePlay.AndroidCheckinRequest.verify|verify} messages.
         * @param message AndroidCheckinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IAndroidCheckinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AndroidCheckinRequest message, length delimited. Does not implicitly {@link GooglePlay.AndroidCheckinRequest.verify|verify} messages.
         * @param message AndroidCheckinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IAndroidCheckinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AndroidCheckinRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AndroidCheckinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.AndroidCheckinRequest;

        /**
         * Decodes an AndroidCheckinRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AndroidCheckinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.AndroidCheckinRequest;

        /**
         * Verifies an AndroidCheckinRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AndroidCheckinRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AndroidCheckinRequest
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.AndroidCheckinRequest;

        /**
         * Creates a plain object from an AndroidCheckinRequest message. Also converts values to other types if specified.
         * @param message AndroidCheckinRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.AndroidCheckinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AndroidCheckinRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AndroidCheckinRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AndroidIntentProto. */
    interface IAndroidIntentProto {

        /** AndroidIntentProto action */
        action?: (string|null);

        /** AndroidIntentProto dataUri */
        dataUri?: (string|null);

        /** AndroidIntentProto mimeType */
        mimeType?: (string|null);

        /** AndroidIntentProto javaClass */
        javaClass?: (string|null);

        /** AndroidIntentProto extra */
        extra?: (GooglePlay.AndroidIntentProto.IExtra[]|null);
    }

    /** Represents an AndroidIntentProto. */
    class AndroidIntentProto implements IAndroidIntentProto {

        /**
         * Constructs a new AndroidIntentProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IAndroidIntentProto);

        /** AndroidIntentProto action. */
        public action: string;

        /** AndroidIntentProto dataUri. */
        public dataUri: string;

        /** AndroidIntentProto mimeType. */
        public mimeType: string;

        /** AndroidIntentProto javaClass. */
        public javaClass: string;

        /** AndroidIntentProto extra. */
        public extra: GooglePlay.AndroidIntentProto.IExtra[];

        /**
         * Creates a new AndroidIntentProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AndroidIntentProto instance
         */
        public static create(properties?: GooglePlay.IAndroidIntentProto): GooglePlay.AndroidIntentProto;

        /**
         * Encodes the specified AndroidIntentProto message. Does not implicitly {@link GooglePlay.AndroidIntentProto.verify|verify} messages.
         * @param message AndroidIntentProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IAndroidIntentProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AndroidIntentProto message, length delimited. Does not implicitly {@link GooglePlay.AndroidIntentProto.verify|verify} messages.
         * @param message AndroidIntentProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IAndroidIntentProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AndroidIntentProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AndroidIntentProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.AndroidIntentProto;

        /**
         * Decodes an AndroidIntentProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AndroidIntentProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.AndroidIntentProto;

        /**
         * Verifies an AndroidIntentProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AndroidIntentProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AndroidIntentProto
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.AndroidIntentProto;

        /**
         * Creates a plain object from an AndroidIntentProto message. Also converts values to other types if specified.
         * @param message AndroidIntentProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.AndroidIntentProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AndroidIntentProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AndroidIntentProto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AndroidIntentProto {

        /** Properties of an Extra. */
        interface IExtra {

            /** Extra name */
            name?: (string|null);

            /** Extra value */
            value?: (string|null);
        }

        /** Represents an Extra. */
        class Extra implements IExtra {

            /**
             * Constructs a new Extra.
             * @param [properties] Properties to set
             */
            constructor(properties?: GooglePlay.AndroidIntentProto.IExtra);

            /** Extra name. */
            public name: string;

            /** Extra value. */
            public value: string;

            /**
             * Creates a new Extra instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Extra instance
             */
            public static create(properties?: GooglePlay.AndroidIntentProto.IExtra): GooglePlay.AndroidIntentProto.Extra;

            /**
             * Encodes the specified Extra message. Does not implicitly {@link GooglePlay.AndroidIntentProto.Extra.verify|verify} messages.
             * @param message Extra message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: GooglePlay.AndroidIntentProto.IExtra, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Extra message, length delimited. Does not implicitly {@link GooglePlay.AndroidIntentProto.Extra.verify|verify} messages.
             * @param message Extra message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: GooglePlay.AndroidIntentProto.IExtra, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Extra message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Extra
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.AndroidIntentProto.Extra;

            /**
             * Decodes an Extra message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Extra
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.AndroidIntentProto.Extra;

            /**
             * Verifies an Extra message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Extra message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Extra
             */
            public static fromObject(object: { [k: string]: any }): GooglePlay.AndroidIntentProto.Extra;

            /**
             * Creates a plain object from an Extra message. Also converts values to other types if specified.
             * @param message Extra
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: GooglePlay.AndroidIntentProto.Extra, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Extra to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Extra
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an AndroidCheckinResponse. */
    interface IAndroidCheckinResponse {

        /** AndroidCheckinResponse status */
        status?: (boolean|null);

        /** AndroidCheckinResponse intent */
        intent?: (GooglePlay.IAndroidIntentProto[]|null);

        /** AndroidCheckinResponse timeMsec */
        timeMsec?: (number|Long|null);

        /** AndroidCheckinResponse digest */
        digest?: (string|null);

        /** AndroidCheckinResponse setting */
        setting?: (GooglePlay.IGoogleServicesSetting[]|null);

        /** AndroidCheckinResponse marketOk */
        marketOk?: (boolean|null);

        /** AndroidCheckinResponse androidId */
        androidId?: (number|Long|null);

        /** AndroidCheckinResponse securityToken */
        securityToken?: (number|Long|null);

        /** AndroidCheckinResponse settingsDiff */
        settingsDiff?: (boolean|null);

        /** AndroidCheckinResponse deleteSetting */
        deleteSetting?: (string[]|null);

        /** AndroidCheckinResponse deviceCheckinConsistencyToken */
        deviceCheckinConsistencyToken?: (string|null);
    }

    /** Represents an AndroidCheckinResponse. */
    class AndroidCheckinResponse implements IAndroidCheckinResponse {

        /**
         * Constructs a new AndroidCheckinResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IAndroidCheckinResponse);

        /** AndroidCheckinResponse status. */
        public status: boolean;

        /** AndroidCheckinResponse intent. */
        public intent: GooglePlay.IAndroidIntentProto[];

        /** AndroidCheckinResponse timeMsec. */
        public timeMsec: (number|Long);

        /** AndroidCheckinResponse digest. */
        public digest: string;

        /** AndroidCheckinResponse setting. */
        public setting: GooglePlay.IGoogleServicesSetting[];

        /** AndroidCheckinResponse marketOk. */
        public marketOk: boolean;

        /** AndroidCheckinResponse androidId. */
        public androidId: (number|Long);

        /** AndroidCheckinResponse securityToken. */
        public securityToken: (number|Long);

        /** AndroidCheckinResponse settingsDiff. */
        public settingsDiff: boolean;

        /** AndroidCheckinResponse deleteSetting. */
        public deleteSetting: string[];

        /** AndroidCheckinResponse deviceCheckinConsistencyToken. */
        public deviceCheckinConsistencyToken: string;

        /**
         * Creates a new AndroidCheckinResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AndroidCheckinResponse instance
         */
        public static create(properties?: GooglePlay.IAndroidCheckinResponse): GooglePlay.AndroidCheckinResponse;

        /**
         * Encodes the specified AndroidCheckinResponse message. Does not implicitly {@link GooglePlay.AndroidCheckinResponse.verify|verify} messages.
         * @param message AndroidCheckinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IAndroidCheckinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AndroidCheckinResponse message, length delimited. Does not implicitly {@link GooglePlay.AndroidCheckinResponse.verify|verify} messages.
         * @param message AndroidCheckinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IAndroidCheckinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AndroidCheckinResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AndroidCheckinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.AndroidCheckinResponse;

        /**
         * Decodes an AndroidCheckinResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AndroidCheckinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.AndroidCheckinResponse;

        /**
         * Verifies an AndroidCheckinResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AndroidCheckinResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AndroidCheckinResponse
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.AndroidCheckinResponse;

        /**
         * Creates a plain object from an AndroidCheckinResponse message. Also converts values to other types if specified.
         * @param message AndroidCheckinResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.AndroidCheckinResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AndroidCheckinResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AndroidCheckinResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AndroidEventProto. */
    interface IAndroidEventProto {

        /** AndroidEventProto tag */
        tag?: (string|null);

        /** AndroidEventProto value */
        value?: (string|null);

        /** AndroidEventProto timeMsec */
        timeMsec?: (number|Long|null);
    }

    /** Represents an AndroidEventProto. */
    class AndroidEventProto implements IAndroidEventProto {

        /**
         * Constructs a new AndroidEventProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IAndroidEventProto);

        /** AndroidEventProto tag. */
        public tag: string;

        /** AndroidEventProto value. */
        public value: string;

        /** AndroidEventProto timeMsec. */
        public timeMsec: (number|Long);

        /**
         * Creates a new AndroidEventProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AndroidEventProto instance
         */
        public static create(properties?: GooglePlay.IAndroidEventProto): GooglePlay.AndroidEventProto;

        /**
         * Encodes the specified AndroidEventProto message. Does not implicitly {@link GooglePlay.AndroidEventProto.verify|verify} messages.
         * @param message AndroidEventProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IAndroidEventProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AndroidEventProto message, length delimited. Does not implicitly {@link GooglePlay.AndroidEventProto.verify|verify} messages.
         * @param message AndroidEventProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IAndroidEventProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AndroidEventProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AndroidEventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.AndroidEventProto;

        /**
         * Decodes an AndroidEventProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AndroidEventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.AndroidEventProto;

        /**
         * Verifies an AndroidEventProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AndroidEventProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AndroidEventProto
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.AndroidEventProto;

        /**
         * Creates a plain object from an AndroidEventProto message. Also converts values to other types if specified.
         * @param message AndroidEventProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.AndroidEventProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AndroidEventProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AndroidEventProto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AndroidStatisticProto. */
    interface IAndroidStatisticProto {

        /** AndroidStatisticProto tag */
        tag?: (string|null);

        /** AndroidStatisticProto count */
        count?: (number|null);

        /** AndroidStatisticProto sum */
        sum?: (number|null);
    }

    /** Represents an AndroidStatisticProto. */
    class AndroidStatisticProto implements IAndroidStatisticProto {

        /**
         * Constructs a new AndroidStatisticProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IAndroidStatisticProto);

        /** AndroidStatisticProto tag. */
        public tag: string;

        /** AndroidStatisticProto count. */
        public count: number;

        /** AndroidStatisticProto sum. */
        public sum: number;

        /**
         * Creates a new AndroidStatisticProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AndroidStatisticProto instance
         */
        public static create(properties?: GooglePlay.IAndroidStatisticProto): GooglePlay.AndroidStatisticProto;

        /**
         * Encodes the specified AndroidStatisticProto message. Does not implicitly {@link GooglePlay.AndroidStatisticProto.verify|verify} messages.
         * @param message AndroidStatisticProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IAndroidStatisticProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AndroidStatisticProto message, length delimited. Does not implicitly {@link GooglePlay.AndroidStatisticProto.verify|verify} messages.
         * @param message AndroidStatisticProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IAndroidStatisticProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AndroidStatisticProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AndroidStatisticProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.AndroidStatisticProto;

        /**
         * Decodes an AndroidStatisticProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AndroidStatisticProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.AndroidStatisticProto;

        /**
         * Verifies an AndroidStatisticProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AndroidStatisticProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AndroidStatisticProto
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.AndroidStatisticProto;

        /**
         * Creates a plain object from an AndroidStatisticProto message. Also converts values to other types if specified.
         * @param message AndroidStatisticProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.AndroidStatisticProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AndroidStatisticProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AndroidStatisticProto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GoogleServicesSetting. */
    interface IGoogleServicesSetting {

        /** GoogleServicesSetting name */
        name?: (Uint8Array|null);

        /** GoogleServicesSetting value */
        value?: (Uint8Array|null);
    }

    /** Represents a GoogleServicesSetting. */
    class GoogleServicesSetting implements IGoogleServicesSetting {

        /**
         * Constructs a new GoogleServicesSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IGoogleServicesSetting);

        /** GoogleServicesSetting name. */
        public name: Uint8Array;

        /** GoogleServicesSetting value. */
        public value: Uint8Array;

        /**
         * Creates a new GoogleServicesSetting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GoogleServicesSetting instance
         */
        public static create(properties?: GooglePlay.IGoogleServicesSetting): GooglePlay.GoogleServicesSetting;

        /**
         * Encodes the specified GoogleServicesSetting message. Does not implicitly {@link GooglePlay.GoogleServicesSetting.verify|verify} messages.
         * @param message GoogleServicesSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IGoogleServicesSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GoogleServicesSetting message, length delimited. Does not implicitly {@link GooglePlay.GoogleServicesSetting.verify|verify} messages.
         * @param message GoogleServicesSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IGoogleServicesSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoogleServicesSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GoogleServicesSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.GoogleServicesSetting;

        /**
         * Decodes a GoogleServicesSetting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GoogleServicesSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.GoogleServicesSetting;

        /**
         * Verifies a GoogleServicesSetting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GoogleServicesSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GoogleServicesSetting
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.GoogleServicesSetting;

        /**
         * Creates a plain object from a GoogleServicesSetting message. Also converts values to other types if specified.
         * @param message GoogleServicesSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.GoogleServicesSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GoogleServicesSetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GoogleServicesSetting
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AndroidBuildProto. */
    interface IAndroidBuildProto {

        /** AndroidBuildProto id */
        id?: (string|null);

        /** AndroidBuildProto product */
        product?: (string|null);

        /** AndroidBuildProto carrier */
        carrier?: (string|null);

        /** AndroidBuildProto radio */
        radio?: (string|null);

        /** AndroidBuildProto bootloader */
        bootloader?: (string|null);

        /** AndroidBuildProto client */
        client?: (string|null);

        /** AndroidBuildProto timestamp */
        timestamp?: (number|Long|null);

        /** AndroidBuildProto googleServices */
        googleServices?: (number|null);

        /** AndroidBuildProto device */
        device?: (string|null);

        /** AndroidBuildProto sdkVersion */
        sdkVersion?: (number|null);

        /** AndroidBuildProto model */
        model?: (string|null);

        /** AndroidBuildProto manufacturer */
        manufacturer?: (string|null);

        /** AndroidBuildProto buildProduct */
        buildProduct?: (string|null);

        /** AndroidBuildProto otaInstalled */
        otaInstalled?: (boolean|null);
    }

    /** Represents an AndroidBuildProto. */
    class AndroidBuildProto implements IAndroidBuildProto {

        /**
         * Constructs a new AndroidBuildProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IAndroidBuildProto);

        /** AndroidBuildProto id. */
        public id: string;

        /** AndroidBuildProto product. */
        public product: string;

        /** AndroidBuildProto carrier. */
        public carrier: string;

        /** AndroidBuildProto radio. */
        public radio: string;

        /** AndroidBuildProto bootloader. */
        public bootloader: string;

        /** AndroidBuildProto client. */
        public client: string;

        /** AndroidBuildProto timestamp. */
        public timestamp: (number|Long);

        /** AndroidBuildProto googleServices. */
        public googleServices: number;

        /** AndroidBuildProto device. */
        public device: string;

        /** AndroidBuildProto sdkVersion. */
        public sdkVersion: number;

        /** AndroidBuildProto model. */
        public model: string;

        /** AndroidBuildProto manufacturer. */
        public manufacturer: string;

        /** AndroidBuildProto buildProduct. */
        public buildProduct: string;

        /** AndroidBuildProto otaInstalled. */
        public otaInstalled: boolean;

        /**
         * Creates a new AndroidBuildProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AndroidBuildProto instance
         */
        public static create(properties?: GooglePlay.IAndroidBuildProto): GooglePlay.AndroidBuildProto;

        /**
         * Encodes the specified AndroidBuildProto message. Does not implicitly {@link GooglePlay.AndroidBuildProto.verify|verify} messages.
         * @param message AndroidBuildProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IAndroidBuildProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AndroidBuildProto message, length delimited. Does not implicitly {@link GooglePlay.AndroidBuildProto.verify|verify} messages.
         * @param message AndroidBuildProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IAndroidBuildProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AndroidBuildProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AndroidBuildProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.AndroidBuildProto;

        /**
         * Decodes an AndroidBuildProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AndroidBuildProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.AndroidBuildProto;

        /**
         * Verifies an AndroidBuildProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AndroidBuildProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AndroidBuildProto
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.AndroidBuildProto;

        /**
         * Creates a plain object from an AndroidBuildProto message. Also converts values to other types if specified.
         * @param message AndroidBuildProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.AndroidBuildProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AndroidBuildProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AndroidBuildProto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AndroidCheckinProto. */
    interface IAndroidCheckinProto {

        /** AndroidCheckinProto build */
        build?: (GooglePlay.IAndroidBuildProto|null);

        /** AndroidCheckinProto lastCheckinMsec */
        lastCheckinMsec?: (number|Long|null);

        /** AndroidCheckinProto event */
        event?: (GooglePlay.IAndroidEventProto[]|null);

        /** AndroidCheckinProto stat */
        stat?: (GooglePlay.IAndroidStatisticProto[]|null);

        /** AndroidCheckinProto requestedGroup */
        requestedGroup?: (string[]|null);

        /** AndroidCheckinProto cellOperator */
        cellOperator?: (string|null);

        /** AndroidCheckinProto simOperator */
        simOperator?: (string|null);

        /** AndroidCheckinProto roaming */
        roaming?: (string|null);

        /** AndroidCheckinProto userNumber */
        userNumber?: (number|null);
    }

    /** Represents an AndroidCheckinProto. */
    class AndroidCheckinProto implements IAndroidCheckinProto {

        /**
         * Constructs a new AndroidCheckinProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IAndroidCheckinProto);

        /** AndroidCheckinProto build. */
        public build?: (GooglePlay.IAndroidBuildProto|null);

        /** AndroidCheckinProto lastCheckinMsec. */
        public lastCheckinMsec: (number|Long);

        /** AndroidCheckinProto event. */
        public event: GooglePlay.IAndroidEventProto[];

        /** AndroidCheckinProto stat. */
        public stat: GooglePlay.IAndroidStatisticProto[];

        /** AndroidCheckinProto requestedGroup. */
        public requestedGroup: string[];

        /** AndroidCheckinProto cellOperator. */
        public cellOperator: string;

        /** AndroidCheckinProto simOperator. */
        public simOperator: string;

        /** AndroidCheckinProto roaming. */
        public roaming: string;

        /** AndroidCheckinProto userNumber. */
        public userNumber: number;

        /**
         * Creates a new AndroidCheckinProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AndroidCheckinProto instance
         */
        public static create(properties?: GooglePlay.IAndroidCheckinProto): GooglePlay.AndroidCheckinProto;

        /**
         * Encodes the specified AndroidCheckinProto message. Does not implicitly {@link GooglePlay.AndroidCheckinProto.verify|verify} messages.
         * @param message AndroidCheckinProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IAndroidCheckinProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AndroidCheckinProto message, length delimited. Does not implicitly {@link GooglePlay.AndroidCheckinProto.verify|verify} messages.
         * @param message AndroidCheckinProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IAndroidCheckinProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AndroidCheckinProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AndroidCheckinProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.AndroidCheckinProto;

        /**
         * Decodes an AndroidCheckinProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AndroidCheckinProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.AndroidCheckinProto;

        /**
         * Verifies an AndroidCheckinProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AndroidCheckinProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AndroidCheckinProto
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.AndroidCheckinProto;

        /**
         * Creates a plain object from an AndroidCheckinProto message. Also converts values to other types if specified.
         * @param message AndroidCheckinProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.AndroidCheckinProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AndroidCheckinProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AndroidCheckinProto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PackageInfo. */
    interface IPackageInfo {

        /** PackageInfo pkgName */
        pkgName?: (string|null);

        /** PackageInfo versionCode */
        versionCode?: (number|null);
    }

    /** Represents a PackageInfo. */
    class PackageInfo implements IPackageInfo {

        /**
         * Constructs a new PackageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: GooglePlay.IPackageInfo);

        /** PackageInfo pkgName. */
        public pkgName: string;

        /** PackageInfo versionCode. */
        public versionCode: number;

        /**
         * Creates a new PackageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PackageInfo instance
         */
        public static create(properties?: GooglePlay.IPackageInfo): GooglePlay.PackageInfo;

        /**
         * Encodes the specified PackageInfo message. Does not implicitly {@link GooglePlay.PackageInfo.verify|verify} messages.
         * @param message PackageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GooglePlay.IPackageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PackageInfo message, length delimited. Does not implicitly {@link GooglePlay.PackageInfo.verify|verify} messages.
         * @param message PackageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GooglePlay.IPackageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PackageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PackageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GooglePlay.PackageInfo;

        /**
         * Decodes a PackageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PackageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GooglePlay.PackageInfo;

        /**
         * Verifies a PackageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PackageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PackageInfo
         */
        public static fromObject(object: { [k: string]: any }): GooglePlay.PackageInfo;

        /**
         * Creates a plain object from a PackageInfo message. Also converts values to other types if specified.
         * @param message PackageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GooglePlay.PackageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PackageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PackageInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
