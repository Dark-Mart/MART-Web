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

document.getElementById("riveCanvas").addEventListener("click", () => {
    if (!riveInstance) return;

    // Mapeo de inputs con enlaces
    const linkActions = {
        "YouTube": "https://www.youtube.com/@Dark_MART",
        "Linkedin": "https://www.linkedin.com/in/darkmart/",
        "Mail": "mailto:atilanorush@gmail.com",
        "Portfolio": "https://www.instagram.com/alocado.mentalista/"
    };

    // Obtener inputs
    const inputs = riveInstance.stateMachineInputs("WEB MART");

    // Activar solo el trigger clicado
    inputs.forEach(input => {
        if (input.type === "trigger" && linkActions[input.name]) {
            input.fire(); // Disparar trigger
            setTimeout(() => { // Pequeño delay para asegurar que la animación se activa
                if (input.name === "Mail") {
                    window.location.href = linkActions[input.name];
                } else {
                    window.open(linkActions[input.name], "_blank");
                }
            }, 100);
        }
    });
});

