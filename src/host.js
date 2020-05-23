/**
 * This is the host container
 */
class BrainHost {

    static VOICE_ID_BY_LANG = {
        "ar": "Zeina",
        "en": "Joanna",
        "fr": "Celine"
    }

    speech;
    detection;

    statutComponents = {
        speech: false,
        detection: false
    }

    constructor(options) {
        console.log("Creating host with options",  options);

        // Build speech
        if (typeof BrainSpeech === "undefined") {
            console.warn("The speech component is not created, no speech component implementation");
        } else {
            this.speech = this.buildSpeech(options);
        }

        // Build Detection
        if (typeof BrainDetection === "undefined") {
            console.warn("The detection component is not created, no detection component implementation");
        } else {
            this.detection = this.buildDetection(options);
        }
    }

    start = () => {
        console.log("Starting host");
        sumerian.SystemBus.addListener("speech.start.success", () => {
            this.statutComponents.speech = true;
            this.checkComponentStart();
        } );

        sumerian.SystemBus.addListener("detection.start.success", () => {
            this.statutComponents.detection = true;
            this.checkComponentStart();
        } );

        this.speech.start();
        this.detection.start();

    }

    checkComponentStart() {
        if (this.statutComponents.speech && this.statutComponents.detection) {
            sumerian.SystemBus.emit("host.start.success");
        }
    }

    buildSpeech = (options) => {
        if (!options.speech || !options.internalHost) {
            console.warn("The speech component is not created, missing speech configuration and/or internalHost references");
            return null;
        } else {
            const speechOptions = {};
            const lang = options.speech.lang || navigator.language;
            speechOptions.lang = (options.speech.lang || lang).substring(0, 2);
            speechOptions.internalHost = options.internalHost;
            return new BrainSpeech(speechOptions);
        }
    }

    buildDetection = (options) => {
        if (!options.detection) {
            console.warn("The detection component is not created, missing detection configuration");
            return null;
        } else {
            const detectionOptions = {
                voiceDetection: {
                }
            };
            return new BrainDetection(detectionOptions);
        }
    }
}