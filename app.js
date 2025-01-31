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

        // Verificar si los inputs están disponibles
        const inputs = riveInstance.stateMachineInputs("WEB MART");
        console.log("Inputs detectados:", inputs.map(input => input.name));
    }
});

document.getElementById("riveCanvas").addEventListener("click", (event) => {
    if (!riveInstance) return;

    const inputs = riveInstance.stateMachineInputs("WEB MART");

    // Verificamos si un solo input está activado
    inputs.forEach(input => {
        console.log(`Input detectado: ${input.name}`);
        
        // Asegurarse de que solo se activa un input a la vez
        if (input.value === 1) {  // Si el trigger se activó
            if (input.name === "YouTube") {
                console.log("Abriendo YouTube...");
                window.open("https://www.youtube.com/@Dark_MART", "_blank");
            } else if (input.name === "Linkedin") {
                console.log("Abriendo LinkedIn...");
                window.open("https://www.linkedin.com/in/darkmart/", "_blank");
            } else if (input.name === "Mail") {
                console.log("Abriendo correo...");
                window.location.href = "mailto:atilanorush@gmail.com";
            } else if (input.name === "Portfolio") {
                console.log("Abriendo Instagram...");
                window.open("https://www.instagram.com/alocado.mentalista/", "_blank");
            }
        }
    });
});
