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

    // Verificamos cuál input está activado
    inputs.forEach(input => {
        // Si el input está activado, abre el enlace correspondiente
        if (input.value === 1) {  // El trigger se activó
            console.log(`Input activado: ${input.name}`);
            
            // Solo abre el enlace correspondiente al trigger activado
            switch(input.name) {
                case "YouTube":
                    console.log("Abriendo YouTube...");
                    window.open("https://www.youtube.com/@Dark_MART", "_blank");
                    break;
                case "Linkedin":
                    console.log("Abriendo LinkedIn...");
                    window.open("https://www.linkedin.com/in/darkmart/", "_blank");
                    break;
                case "Mail":
                    console.log("Abriendo correo...");
                    window.location.href = "mailto:atilanorush@gmail.com";
                    break;
                case "Portfolio":
                    console.log("Abriendo Instagram...");
                    window.open("https://www.instagram.com/alocado.mentalista/", "_blank");
                    break;
                default:
                    console.log("No hay enlace asociado a este input.");
            }
        }
    });
});
