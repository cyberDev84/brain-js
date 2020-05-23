/**
 * This is the speech container
 */
class BrainSpeech {
    constructor(options) {
        console.log("Creating speech with options",  options);
        this.lang = options.lang;
        console.log("Creating speech", options);
        const speechComponent = options.internalHost.speechComponent;
        this._speech = new sumerian.Speech();
        this._speech.voiceEngine = "standard";
        this._speech.voiceId = BrainHost.VOICE_ID_BY_LANG[this.lang];
        speechComponent.addSpeech(this._speech);
    }

    play(message, lang) {
        this._speech.voiceId = BrainHost.VOICE_ID_BY_LANG[lang || this.lang];
        this._speech.body = message;
        this._speech.play();
    }
}