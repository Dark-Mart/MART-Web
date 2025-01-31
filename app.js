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

    // Detectamos la animación activa en la máquina de estados
    const currentAnimation = riveInstance.stateMachineAnimation("WEB MART");
    console.log("Animación activa:", currentAnimation);

    // Comprobamos cuál es la animación activa y si está asociada a un enlace
    switch(currentAnimation) {
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
            console.log("No hay enlace asociado a esta animación.");
    }
});
