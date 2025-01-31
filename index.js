let riveInstance;

// Inicializa la animación de Rive
const r = new rive.Rive({
    src: "mart_web.riv",  // Asegúrate de que la ruta sea correcta
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",  // Nombre de la State Machine
    onLoad: () => {
        console.log("Rive cargado correctamente.");
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;
    }
});

// Evento al hacer clic en el canvas
document.getElementById("riveCanvas").addEventListener("click", () => {
    if (!riveInstance) return;

    // Obtener los estados activos de la State Machine
    const activeStates = riveInstance.stateMachineStates("WEB MART");

    // Verificar qué estado está activo y abrir el enlace correspondiente
    activeStates.forEach(state => {
        console.log(`Estado activo detectado: ${state.name}`);

        switch (state.name) {
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
                console.log("Ningún enlace asociado a este estado.");
        }
    });
});
