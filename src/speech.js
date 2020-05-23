class BrainSpeech {
    constructor(options) {
        this.voiceId = options.voiceId;
        console.log("Creating speech", options);
        const speechComponent = options.internalHost.speechComponent;
        this.speech = new InternalSpeechComponent();
        this.speech.voiceEngine = "standard";
        this.speech.voiceId = this.voiceId;
        speechComponent.addSpeech(this.speech);
    }

    play(message, lang) {
        if(lang) {
            this.speech.voiceId = lang ? VOICE_ID_BY_LANG[lang] : this.options.voiceId;
        }
        this.speech.body = message;
        this.speech.play();
    }
}