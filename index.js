let riveInstance;

const r = new rive.Rive({
    src: "mart_web.riv",
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",
    onLoad: () => {
        console.log("Rive cargado correctamente.");
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

// Obtener inputs de la State Machine
const getInputs = () => {
    if (!riveInstance) return [];
    return riveInstance.stateMachineInputs("WEB MART");
};

// Evento de clic en el canvas
document.getElementById("riveCanvas").addEventListener("click", (event) => {
    const inputs = getInputs();

    if (!inputs || inputs.length === 0) {
        console.log("No se detectaron inputs.");
        return;
    }

    console.log("Canvas clickeado");

    // Revisamos todos los inputs para ver si alguno coincide con un trigger relevante
    inputs.forEach(input => {
        if (input.type === "trigger") {
            const inputName = input.name.toUpperCase();

            console.log(`Trigger activado: ${inputName}`);

            // Activar la animación
            input.fire();

            // Comprobamos si el trigger tiene un enlace asociado
            if (linkActions[inputName]) {
                console.log(`Enlace encontrado para ${inputName}: ${linkActions[inputName]}`);

                // Abrimos el enlace en una nueva pestaña (excepto para "Mail")
                setTimeout(() => {
                    if (inputName === "MAIL") {
                        console.log("Abriendo correo...");
                        window.location.href = linkActions[inputName];
                    } else {
                        console.log("Abriendo enlace en nueva pestaña...");
                        window.open(linkActions[inputName], "_blank");
                    }
                }, 200); // Esperamos para permitir que se ejecute la animación
            }
        }
    });
});
