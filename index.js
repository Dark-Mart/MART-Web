let riveInstance;
let riveFile;

// Función para cargar el archivo Rive según el tamaño de pantalla
function loadRive() {
    const canvas = document.getElementById("riveCanvas");

    // Detectar si estamos en un dispositivo móvil o web
    const isMobile = window.innerWidth <= 768; // Puedes ajustar este valor si es necesario
    const fileSrc = isMobile ? "mart_phone.riv" : "mart_web.riv"; // Seleccionar el archivo .riv

    if (riveFile && riveFile.src === fileSrc) return; // Evitar cargar el mismo archivo

    // Cargar el archivo adecuado
    const r = new rive.Rive({
        src: fileSrc,  // Cargar el archivo según el dispositivo
        canvas: canvas,
        autoplay: true,
        stateMachines: "WEB MART",  // Nombre de la State Machine
        onLoad: () => {
            console.log(`Rive cargado correctamente desde ${fileSrc}.`);
            r.resizeDrawingSurfaceToCanvas();
            riveInstance = r;
            riveFile = r;
        },
        onEvent: (event) => {
            // Este evento se dispara cuando un evento de Rive es activado
            console.log(`Evento activado: ${event.name}`);
            handleEvent(event.name);
        }
    });
}

// Llamar a la función para cargar el Rive al inicio
loadRive();

// Detectar el cambio de tamaño de la ventana y cargar el archivo adecuado
window.addEventListener("resize", () => {
    loadRive();
});

// Función para manejar los eventos y abrir los enlaces correspondientes
function handleEvent(eventName) {
    switch (eventName) {
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
            console.log("Evento no reconocido.");
    }
}
