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

    // Comprobamos si se activan los triggers y abrimos los enlaces
    inputs.forEach(input => {
        console.log(`Revisando input: ${input.name}`);
        
        if (input.type === "trigger" && input.name) {
            console.log(`Activando trigger: ${input.name}`);
            input.fire();  // Disparar la animación correspondiente en Rive

            // Comprobamos si el trigger tiene un enlace asociado
            const triggerNameUpper = input.name.toUpperCase();
            if (linkActions[triggerNameUpper]) {
                console.log(`Enlace encontrado para trigger ${triggerNameUpper}: ${linkActions[triggerNameUpper]}`);
                
                // Abrimos el enlace en una nueva pestaña (excepto para "Mail")
                setTimeout(() => {
                    if (triggerNameUpper === "MAIL") {
                        console.log("Abriendo correo...");
                        window.location.href = linkActions[triggerNameUpper];
                    } else {
                        console.log("Abriendo en nueva pestaña...");
                        window.open(linkActions[triggerNameUpper], "_blank");
                    }
                }, 200);  // Esperamos para que la animación se ejecute
            } else {
                console.log(`No se encontró enlace para: ${input.name}`);
            }
        } else {
            console.log(`Input ${input.name} no es de tipo 'trigger' o no tiene nombre.`);
        }
    });
});
