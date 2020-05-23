class BrainDetection {
    voiceDetection;
    constructor(options) {
        console.log("Creating detection with options",  options);

        if (typeof BrainVoiceDetection === "undefined") {
            console.warn("The voice detection component is not created, no voice detection component implementation");
        }else {
            this.voiceDetection = this.buildVoiceDetection(options);
        }
    }

    start = () => {
        console.log("Starting detection");
        this.voiceDetection.start();
        sumerian.SystemBus.emit("detection.start.success");
    }

    buildVoiceDetection = (options) => {
        if (!options.voiceDetection) {
            console.warn("The voice detection component is not created, missing voice detection configuration");
            return null;
        } else {
            const voiceDetectionOptions = {
                localVoiceDetection: {}
            };
            return new BrainVoiceDetection(voiceDetectionOptions);
        }
    }
}