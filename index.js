let riveInstance;

const r = new rive.Rive({
    src: "mart_web.riv",
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",
    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;

        // Mapeo de animaciones con sus enlaces
        const linkActions = {
            "YOUTUBE": "https://www.youtube.com/@Dark_MART",
            "LINKEDIN": "https://www.linkedin.com/in/darkmart/",
            "MAIL": "mailto:atilanorush@gmail.com",
            "PORTFOLIO": "https://www.instagram.com/alocado.mentalista/"
        };

        // Detectar cambios de animación
        riveInstance.onStateChange = (stateName) => {
            if (linkActions[stateName]) {
                setTimeout(() => {
                    if (stateName === "MAIL") {
                        window.location.href = linkActions[stateName];
                    } else {
                        window.open(linkActions[stateName], "_blank");
                    }
                }, 200); // Pequeño delay para que la animación se reproduzca
            }
        };
    }
});
