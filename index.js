import { Rive, EventType, RiveEventType } from '@rive-app/canvas';

let riveInstance;

// Función para cargar el archivo Rive según el tamaño de pantalla
function loadRive() {
    const canvas = document.getElementById("riveCanvas");

    // Detectar si estamos en un dispositivo móvil o web
    const isMobile = window.innerWidth <= 768; // Puedes ajustar este valor si es necesario
    const fileSrc = isMobile ? "mart_phone.riv" : "mart_web.riv"; // Seleccionar el archivo .riv

    if (riveInstance && riveInstance.src === fileSrc) return; // Evitar cargar el mismo archivo

    // Cargar el archivo adecuado
    riveInstance = new Rive({
        src: fileSrc, // Cargar el archivo según el dispositivo
        canvas: canvas,
        autoplay: true,
        stateMachines: "WEB MART", // Nombre de la State Machine
        onLoad: () => {
            console.log(`Rive cargado correctamente desde ${fileSrc}.`);
            riveInstance.resizeDrawingSurfaceToCanvas();
        },
    });

    // Suscribirse a eventos de Rive
    riveInstance.on(EventType.RiveEvent, onRiveEventReceived);
}

// Función para manejar eventos de Rive
function onRiveEventReceived(riveEvent) {
    const eventData = riveEvent.data;
    console.log("Evento detectado:", eventData);

    if (eventData.type === RiveEventType.General) {
        // Manejar eventos generales (como los clics en botones)
        handleEvent(eventData.name);
    } else if (eventData.type === RiveEventType.OpenUrl) {
        // Manejar eventos de apertura de URL
        window.open(eventData.url, "_blank");
    }
}

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

// Llamar a la función para cargar el Rive al inicio
loadRive();

// Detectar el cambio de tamaño de la ventana y cargar el archivo adecuado
window.addEventListener("resize", () => {
    loadRive();
});
