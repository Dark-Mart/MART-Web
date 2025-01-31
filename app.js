let riveInstance;

const r = new rive.Rive({
    src: "mart_web.riv",  // Archivo .riv que subiste a GitHub
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",  // Nombre correcto del state machine en Rive
    onLoad: () => {
        console.log("Rive cargado correctamente.");
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;  // Guardamos la instancia para acceder a los inputs
    }
});

document.getElementById("riveCanvas").addEventListener("click", (event) => {
    if (!riveInstance) return;

    const inputs = riveInstance.stateMachineInputs("WEB MART");

    // Verificamos cuál input fue activado y realizamos la acción correspondiente
    inputs.forEach(input => {
        if (input.isTriggered) {
            console.log(`Input activado: ${input.name}`);

            // Accion asociada a cada input
            if (input.name === "YOUTUBE") {
                console.log("Abriendo YouTube...");
                window.open("https://www.youtube.com/@Dark_MART", "_blank");
            } else if (input.name === "LINKEDIN") {
                console.log("Abriendo LinkedIn...");
                window.open("https://www.linkedin.com/in/darkmart/", "_blank");
            } else if (input.name === "MAIL") {
                console.log("Abriendo correo...");
                window.location.href = "mailto:atilanorush@gmail.com";
            } else if (input.name === "PORTFOLIO") {
                console.log("Abriendo Instagram...");
                window.open("https://www.instagram.com/alocado.mentalista/", "_blank");
            }
        }
    });
});
