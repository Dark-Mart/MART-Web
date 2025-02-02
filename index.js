import RiveCanvas, { RiveEventType } from '@rive-app/canvas-advanced';

let riveInstance;
let riveFile;
let stateMachine;
let prevTimestamp = 0;

// Función para cargar el archivo Rive según el tamaño de pantalla
async function loadRive() {
    const canvas = document.getElementById("riveCanvas");

    // Detectar si estamos en un dispositivo móvil o web
    const isMobile = window.innerWidth <= 768; // Puedes ajustar este valor si es necesario
    const fileSrc = isMobile ? "mart_phone.riv" : "mart_web.riv"; // Seleccionar el archivo .riv

    if (riveFile && riveFile.src === fileSrc) return; // Evitar cargar el mismo archivo

    // Cargar el archivo adecuado
    const rive = await RiveCanvas({
        locateFile: (file) => `https://unpkg.com/@rive-app/canvas-advanced@1.0.0/${file}`,
    });

    const response = await fetch(fileSrc);
    const arrayBuffer = await response.arrayBuffer();

    riveInstance = await rive.load(new Uint8Array(arrayBuffer));
    const artboard = riveInstance.defaultArtboard();
    stateMachine = artboard.stateMachineByName("WEB MART"); // Nombre de la State Machine

    if (!stateMachine) {
        console.error("No se encontró la State Machine 'WEB MART'.");
        return;
    }

    console.log(`Rive cargado correctamente desde ${fileSrc}.`);
    startRenderLoop();
}

// Bucle de renderizado personalizado
function renderLoop(timestamp) {
    if (!prevTimestamp) prevTimestamp = timestamp;
    const elapsedTimeSec = (timestamp - prevTimestamp) / 1000;

    if (stateMachine) {
        // Verificar eventos reportados
        const numFiredEvents = stateMachine.reportedEventCount();
        for (let i = 0; i < numFiredEvents; i++) {
            const event = stateMachine.reportedEventAt(i);
            console.log(`Evento detectado: ${event.name}`);

            // Manejar el evento según su tipo
            if (event.type === RiveEventType.General) {
                handleEvent(event.name);
            }
        }

        // Avanzar la State Machine
        stateMachine.advance(elapsedTimeSec);
    }

    prevTimestamp = timestamp;
    requestAnimationFrame(renderLoop);
}

// Iniciar el bucle de renderizado
function startRenderLoop() {
    requestAnimationFrame(renderLoop);
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
