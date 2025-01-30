let riveInstance;

const r = new rive.Rive({
    src: "mart_web.riv",
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",
    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;
    }
});

// Mapeo de animaciones con sus enlaces
const linkActions = {
    "YOUTUBE": "https://www.youtube.com/@Dark_MART",
    "LINKEDIN": "https://www.linkedin.com/in/darkmart/",
    "MAIL": "mailto:atilanorush@gmail.com",
    "PORTFOLIO": "https://www.instagram.com/alocado.mentalista/"
};

// Evento de clic en el canvas
document.getElementById("riveCanvas").addEventListener("click", (event) => {
    if (!riveInstance) return;

    // Obtener inputs de la State Machine
    const inputs = riveInstance.stateMachineInputs("WEB MART");

    // Detectamos si el clic está dentro de un botón y activamos el trigger correspondiente
    inputs.forEach(input => {
        if (input.type === "trigger" && input.name) {
            // Activamos el trigger
            input.fire();

            // Comprobamos si el trigger tiene un enlace asociado
            if (linkActions[input.name.toUpperCase()]) {
                // Abrimos el enlace en una nueva pestaña (excepto para "Mail")
                setTimeout(() => {
                    if (input.name.toUpperCase() === "MAIL") {
                        window.location.href = linkActions[input.name.toUpperCase()];
                    } else {
                        window.open(linkActions[input.name.toUpperCase()], "_blank");
                    }
                }, 200);  // Esperamos para que la animación se ejecute
            }
        }
    });
});
