// Importar Rive desde un CDN
import RiveCanvas from "https://unpkg.com/@rive-app/canvas";

// Variables globales
let riveInstance;
let stateMachine;
let prevTimestamp = 0;

// URLs de los enlaces
const LINKS = {
    YouTube: "https://www.youtube.com/@Dark_MART",
    Linkedin: "https://www.linkedin.com/in/darkmart/",
    Mail: "mailto:atilanorush@gmail.com",
    Portfolio: "https://www.instagram.com/alocado.mentalista/",
};

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
    const canvas = document.getElementById("riveCanvas");

    // Cargar el archivo .riv
    const bytes = await loadRiveFile();

    // Inicializar Rive
    const rive = await RiveCanvas({
        locateFile: (file) => `https://unpkg.com/@rive-app/canvas-advanced@latest/${file}`,
    });

    // Cargar el archivo .riv en Rive
    riveInstance = await rive.load(new Uint8Array(bytes));
    const artboard = riveInstance.defaultArtboard();

    // Obtener la State Machine
    stateMachine = artboard.stateMachineByName("WEB MART"); // Nombre de la State Machine
    if (!stateMachine) {
        console.error("No se encontró la State Machine 'WEB MART'.");
        return;
    }

    console.log("Rive cargado correctamente.");

    // Iniciar el bucle de renderizado
    requestAnimationFrame(renderLoop);
}

// Bucle de renderizado
function renderLoop(timestamp) {
    if (!prevTimestamp) prevTimestamp = timestamp;
    const elapsedTimeSec = (timestamp - prevTimestamp) / 1000;

    if (stateMachine) {
        // Verificar eventos reportados
        const numFiredEvents = stateMachine.reportedEventCount();
        for (let i = 0; i < numFiredEvents; i++) {
            const event = stateMachine.reportedEventAt(i);
            console.log("Trigger detectado:", event.name);

            // Abrir el enlace correspondiente
            if (LINKS[event.name]) {
                console.log(`Abriendo ${event.name}...`);
                window.open(LINKS[event.name], "_blank");
            } else {
                console.log("Trigger no reconocido:", event.name);
            }
        }

        // Avanzar la State Machine
        stateMachine.advance(elapsedTimeSec);
    }

    prevTimestamp = timestamp;
    requestAnimationFrame(renderLoop);
}

// Iniciar la aplicación
main();

// Redimensionar el canvas si la ventana cambia de tamaño
window.addEventListener("resize", () => {
    if (riveInstance) {
        riveInstance.resizeDrawingSurfaceToCanvas();
    }
});
