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

// Mapeo de triggers con enlaces
const linkActions = {
    "YouTube": "https://www.youtube.com/@Dark_MART",
    "Linkedin": "https://www.linkedin.com/in/darkmart/",
    "Mail": "mailto:atilanorush@gmail.com",
    "Portfolio": "https://www.instagram.com/alocado.mentalista/"
};

// Función para disparar triggers manualmente
function activateTrigger(triggerName) {
    if (!riveInstance) return;

    const trigger = riveInstance.stateMachineInputs("WEB MART").find(input => input.name === triggerName && input.type === "trigger");

    if (trigger) {
        trigger.fire();
        setTimeout(() => {
            if (triggerName === "Mail") {
                window.location.href = linkActions[triggerName];
            } else {
                window.open(linkActions[triggerName], "_blank");
            }
        }, 200); // Esperamos 200ms para que la animación tenga tiempo de activarse
    }
}

// Evento de clic en el canvas para detectar las interacciones
document.getElementById("riveCanvas").addEventListener("click", (event) => {
    // Obtenemos la posición del clic
    const canvasBounds = event.target.getBoundingClientRect();
    const clickX = event.clientX - canvasBounds.left;
    const clickY = event.clientY - canvasBounds.top;

    // Detectamos qué trigger se debería activar
    const triggers = ["YouTube", "Linkedin", "Mail", "Portfolio"];
    for (let trigger of triggers) {
        activateTrigger(trigger);
    }
});
