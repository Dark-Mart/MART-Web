let riveInstance;

const r = new rive.Rive({
    src: "mart_web.riv",
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",
    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;

        // Obtener los inputs de la State Machine
        const inputs = riveInstance.stateMachineInputs("WEB MART");

        // Crear un mapa de eventos para abrir enlaces
        const linkActions = {
            "YouTube": "https://www.youtube.com/@Dark_MART",
            "Linkedin": "https://www.linkedin.com/in/darkmart/",
            "Mail": "mailto:atilanorush@gmail.com",
            "Portfolio": "https://www.instagram.com/alocado.mentalista/"
        };

        // Suscribirnos a los cambios de estado de la State Machine
        riveInstance.onStateChange = (stateName) => {
            if (linkActions[stateName]) {
                if (stateName === "Mail") {
                    window.location.href = linkActions[stateName];
                } else {
                    window.open(linkActions[stateName], "_blank");
                }
            }
        };
    }
});
