// Importar Rive desde un CDN
import { Rive, EventType, Fit, Layout } from "https://unpkg.com/@rive-app/canvas";

// Variables globales
let riveInstance;
let riveCanvas;

// Función para cargar el archivo Rive según el tamaño de pantalla
async function loadRiveFile() {
    const isMobile = window.innerWidth <= 768; // Ajusta este valor si es necesario
    const fileSrc = isMobile ? "./mart_phone.riv" : "./mart_web.riv"; // Ruta al archivo .riv

    // Cargar el archivo .riv
    const response = await fetch(fileSrc);
    const arrayBuffer = await response.arrayBuffer();
    return arrayBuffer;
}

// Función principal
async function main() {
    // Obtener el canvas
    riveCanvas = document.getElementById("riveCanvas");

    // Cargar el archivo .riv
    const bytes = await loadRiveFile();

    // Crear una instancia de Rive
    riveInstance = new Rive({
        buffer: bytes, // Usar el buffer cargado
        canvas: riveCanvas,
        autoplay: true,
        stateMachines: "WEB MART", // Nombre de la State Machine
        layout: new Layout({ fit: Fit.Contain }), // Ajustar el contenido al canvas
        onLoad: () => {
            console.log("Rive cargado correctamente.");
            riveInstance.resizeDrawingSurfaceToCanvas();
        },
        onError: (error) => {
            console.error("Error al cargar Rive:", error);
        },
    });

    // Manejar eventos de Rive
    riveInstance.on(EventType.RiveEvent, onRiveEventReceived);

    // Redimensionar el canvas si la ventana cambia de tamaño
    window.addEventListener("resize", () => {
        riveInstance.resizeDrawingSurfaceToCanvas();
    });
}

// Función para manejar eventos de Rive
function onRiveEventReceived(riveEvent) {
    const eventName = riveEvent.data.name;
    console.log("Evento detectado:", eventName);

    // Manejar los eventos según su nombre
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
            console.log("Evento no reconocido:", eventName);
            break;
    }
}

// Iniciar la aplicación
main();
