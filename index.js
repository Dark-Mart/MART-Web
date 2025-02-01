// Esperar a que la librería de Rive esté disponible antes de ejecutarse
function initRive() {
    if (typeof Rive === "undefined") {
        console.warn("Rive aún no está disponible. Reintentando...");
        setTimeout(initRive, 100);
        return;
    }

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
        riveInstance.on("RiveEvent", (riveEvent) => {
            const eventData = riveEvent.data;
            console.log("Evento recibido:", eventData);

            let link = null;
            if (eventData.name === "Youtube") {
                link = "https://www.youtube.com/@Dark_MART";
            } else if (eventData.name === "Linkedin") {
                link = "https://www.linkedin.com/in/darkmart/";
            } else if (eventData.name === "Mail") {
                link = "mailto:atilanorush@gmail.com";
            } else if (eventData.name === "Portfolio") {
                link = "https://www.instagram.com/alocado.mentalista/";
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
}

// Ejecutar cuando la página haya cargado completamente
window.onload = initRive;
