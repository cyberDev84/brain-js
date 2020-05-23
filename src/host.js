class BrainHost {

    constructor(options) {
        if (typeof Speech === "undefined") {
            console.warn("The speech component is not created, no speech component implementation");
        } else {
            this.speech = this.buildSpeech(options);
        }
    }

    buildSpeech(options) {
        if (!options.speech || !options.internalHost) {
            console.warn("The speech component is not created, missing speech configuration and/or internalHost references");
            return null;
        } else {
            var speechOptions = {};
            const lang = (options.speech.lang || navigator.language).substring(0, 2);
            speechOptions.voiceId = options.speech.voiceId || VOICE_ID_BY_LANG[lang];
            speechOptions.internalHost = options.internalHost;
            return new BrainSpeech(speechOptions);
        }
    }
}

const VOICE_ID_BY_LANG = {
    "ar": "Zeina",
    "en": "Joanna",
    "fr": "Celine"
}

const LANG_BY_VOICE_ID = {
    "ar": "Zeina",
    "en": "Joanna",
    "fr": "Celine"
}