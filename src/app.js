class App {
    constructor(options) {
        this.options = options;

        let hostParams = {
            internalHost: this.options.host,
            speech: {lang: this.options.lang},
            detection: {
                localVoiceDetection: {}
            }
        };

        this.host = new BrainHost(hostParams);
    }

    start(ctx) {
        //this.host.speech.play("Bonjour tout le monde, je m'appel Brain");
        sumerian.SystemBus.addListener("host.start.success", () => {
            console.log("Success starting host");
        } );
        this.host.start();
    }
}