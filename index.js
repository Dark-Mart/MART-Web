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

// Evento de clic en el canvas
document.getElementById("riveCanvas").addEventListener("click", (event) => {
    if (!riveInstance) {
        console.log("Rive no cargado aún.");
        return;
    }

    console.log("Canvas clickeado");

    // Obtener inputs de la State Machine
    const inputs = riveInstance.stateMachineInputs("WEB MART");

    console.log("Inputs detectados:", inputs.map(input => input.name));

    // Detectamos si el clic está dentro de un botón y activamos el trigger correspondiente
    inputs.forEach(input => {
        if (input.type === "trigger" && input.name) {
            console.log(`Activando trigger: ${input.name}`);
            input.fire();

            // Comprobamos si el trigger tiene un enlace asociado
            if (linkActions[input.name.toUpperCase()]) {
                console.log(`Abriendo enlace: ${linkActions[input.name.toUpperCase()]}`);
                
                // Abrimos el enlace en una nueva pestaña (excepto para "Mail")
                setTimeout(() => {
                    if (input.name.toUpperCase() === "MAIL") {
                        console.log("Abriendo correo...");
                        window.location.href = linkActions[input.name.toUpperCase()];
                    } else {
                        console.log("Abriendo en nueva pestaña...");
                        window.open(linkActions[input.name.toUpperCase()], "_blank");
                    }
                }, 200);  // Esperamos para que la animación se ejecute
            } else {
                console.log(`No se encontró enlace para: ${input.name}`);
            }
        }
    });
});
