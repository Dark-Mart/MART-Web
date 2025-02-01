import Rive from "@rive-app/canvas";

document.addEventListener("DOMContentLoaded", async function () {
    let riveCanvas = document.getElementById("riveCanvas");
    let riveInstance;

    // Determinar qué archivo cargar según el dispositivo
    let riveFile = window.innerWidth <= 768 ? "mart_phone.riv" : "mart_web.riv";

    // Obtener archivo .riv como bytes
    const response = await fetch(riveFile);
    const bytes = await response.arrayBuffer();

    // Cargar Rive en el canvas
    riveInstance = new Rive({
        buffer: bytes,
        canvas: riveCanvas,
        autoplay: true,
        stateMachines: "WEB MART",
        enableEventSideEffects: true, // Habilitar efectos de eventos
        onLoad: () => {
            console.log("Rive cargado correctamente.");
        },
        onStateChange: (event) => {
            console.log("Evento detectado:", event);

            // Mapeo de eventos a URLs
            const links = {
                "YouTube": "https://www.youtube.com/@Dark_MART",
                "Linkedin": "https://www.linkedin.com/in/darkmart/",
                "Mail": "mailto:atilanorush@gmail.com",
                "Portfolio": "https://www.instagram.com/alocado.mentalista/"
            };

            if (links[event.data]) {
                console.log(`Abriendo enlace: ${links[event.data]}`);
                window.open(links[event.data], "_blank");
            }
        }
    });

    // Manejo de redimensionamiento
    window.addEventListener("resize", () => {
        let newRiveFile = window.innerWidth <= 768 ? "mart_phone.riv" : "mart_web.riv";
        if (newRiveFile !== riveFile) {
            riveFile = newRiveFile;
            riveInstance.load(newRiveFile);
        }
    });
});
