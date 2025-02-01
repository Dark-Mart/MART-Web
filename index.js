// Esperar a que la librería de Rive esté disponible
function initRive() {
    if (window.Rive) {
        const { Rive, EventType, RiveEventType } = window.Rive;

        const canvas = document.getElementById("riveCanvas");

        function loadRive(riveFile) {
            const riveInstance = new Rive({
                src: riveFile,
                canvas: canvas,
                autoplay: true,
                stateMachines: "WEB MART",
                enableEventSideEffects: true,
                onLoad: () => {
                    riveInstance.resizeDrawingSurfaceToCanvas();
                    console.log("Rive cargado correctamente:", riveFile);
                }
            });

            // Detectar eventos de Rive
            riveInstance.on(EventType.RiveEvent, (riveEvent) => {
                const eventData = riveEvent.data;
                console.log("Evento recibido:", eventData);

                let link = null;
                if (eventData.type === RiveEventType.General) {
                    switch (eventData.name) {
                        case "Youtube":
                            link = "https://www.youtube.com/@Dark_MART";
                            break;
                        case "Linkedin":
                            link = "https://www.linkedin.com/in/darkmart/";
                            break;
                        case "Mail":
                            link = "mailto:atilanorush@gmail.com";
                            break;
                        case "Portfolio":
                            link = "https://www.instagram.com/alocado.mentalista/";
                            break;
                    }
                } else if (eventData.type === RiveEventType.OpenUrl && eventData.url) {
                    link = eventData.url;
                }

                if (link) {
                    window.open(link, "_blank");
                }
            });

            return riveInstance;
        }

        let isMobile = window.innerWidth <= 768;
        let riveFile = isMobile ? "mart_phone.riv" : "mart_web.riv";

        let riveInstance = loadRive(riveFile);

        window.addEventListener("resize", () => {
            let newIsMobile = window.innerWidth <= 768;
            let newRiveFile = newIsMobile ? "mart_phone.riv" : "mart_web.riv";
            if (newRiveFile !== riveFile) {
                riveFile = newRiveFile;
                if (riveInstance.cleanup) {
                    riveInstance.cleanup();
                }
                riveInstance = loadRive(riveFile);
            }
        });
    } else {
        setTimeout(initRive, 100);
    }
}

// Iniciar cuando el script de Rive esté cargado
initRive();
