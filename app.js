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

// Añadimos el evento de clic en el canvas
document.getElementById("riveCanvas").addEventListener("click", (event) => {
    if (!riveInstance) return;

    // Obtenemos los inputs de la máquina de estados
    const inputs = riveInstance.stateMachineInputs("WEB MART");

    // Verificamos los inputs y cuál ha sido activado
    inputs.forEach(input => {
        console.log(`Input detectado: ${input.name}`);

        // Comprobamos qué trigger ha sido activado
        if (input.isTrigger()) {
            // Abrir el enlace correspondiente a cada input activado
            switch (input.name) {
                case "YOUTUBE":
                    console.log("Abriendo YouTube...");
                    window.open("https://www.youtube.com/@Dark_MART", "_blank");
                    break;
                case "LINKEDIN":
                    console.log("Abriendo LinkedIn...");
                    window.open("https://www.linkedin.com/in/darkmart/", "_blank");
                    break;
                case "MAIL":
                    console.log("Abriendo correo...");
                    window.location.href = "mailto:atilanorush@gmail.com";
                    break;
                case "PORTFOLIO":
                    console.log("Abriendo Instagram...");
                    window.open("https://www.instagram.com/alocado.mentalista/", "_blank");
                    break;
                default:
                    console.log("Input no reconocido.");
                    break;
            }
        }
    });
});
