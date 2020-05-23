class App {
    constructor(options) {
        this.options = options;

        let hostParams = {
            internalHost: this.options.host,
            speech: {lang: this.options.lang}
        };

        let host = new BrainHost(hostParams);
        host.speech.play("Bonjour tout le monde, je m'appel Brain");
    }

    start(ctx) {
        console.log("Start");
    }
}