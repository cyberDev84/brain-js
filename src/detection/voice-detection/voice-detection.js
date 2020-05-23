class BrainVoiceDetection {
    localVoiceDetection
    constructor(options) {
        console.log("Creating voice detection with options", options)

        if (typeof BrainLocalVoiceDetection === "undefined") {
            console.warn("The local voice detection component is not created, no local voice detection component implementation");
        }else {
            this.localVoiceDetection = this.buildLocalVoiceDetection(options);
        }
    }

    start = () => {
        console.log("Starting voice detection");
        this.localVoiceDetection.start();
    }

    buildLocalVoiceDetection = (options) => {
        if (!options.localVoiceDetection) {
            console.warn("The local voice detection component is not created, missing local voice detection configuration");
            return null;
        } else {
            const localVoiceDetectionOptions = {};
            return new BrainLocalVoiceDetection(localVoiceDetectionOptions);
        }
    }
}