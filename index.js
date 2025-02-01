document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("riveCanvas");

    function loadRive(riveFile) {
        return new rive.Rive({
            src: riveFile,
            canvas: canvas,
            autoplay: true,
            stateMachines: "WEB MART",
            enableEventSideEffects: true,
            onLoad: function () {
                console.log("Rive cargado correctamente:", riveFile);
                this.resizeDrawingSurfaceToCanvas();
            },
            onEvent: function (riveEvent) {
                const eventName = riveEvent.data.name;
                console.log("Evento detectado:", eventName);

                let link = null;
                if (eventName === "Youtube") {
                    link = "https://www.youtube.com/@Dark_MART";
                } else if (eventName === "Linkedin") {
                    link = "https://www.linkedin.com/in/darkmart/";
                } else if (eventName === "Mail") {
                    link = "mailto:atilanorush@gmail.com";
                } else if (eventName === "Portfolio") {
                    link = "https://www.instagram.com/alocado.mentalista/";
                }

                if (link) {
                    window.open(link, "_blank");
                }
            }
        });
    }

    function detectDevice() {
        return window.innerWidth <= 768 ? "mart_phone.riv" : "mart_web.riv";
    }

    let riveFile = detectDevice();
    let riveInstance = loadRive(riveFile);

    window.addEventListener("resize", () => {
        let newRiveFile = detectDevice();
        if (newRiveFile !== riveFile) {
            riveFile = newRiveFile;
            riveInstance = loadRive(riveFile);
        }
    });
});
