// URLs de los iframes de Rive
const RIVE_WEB_URL = "https://rive.app/s/q3g7Hh2XAUGpQXoG6naMug/embed";
const RIVE_PHONE_URL = "https://rive.app/s/vG0DebF_8UOd8TJeiEQV7Q/embed";

// Obtener el iframe y el contenedor
const riveIframe = document.getElementById("riveIframe");
const riveContainer = document.getElementById("riveContainer");

// Verificar si el iframe existe
if (!riveIframe) {
    console.error("No se encontró el iframe con ID 'riveIframe'.");
} else {
    console.log("Iframe encontrado correctamente.");
}

// Función para cargar el iframe correcto según el tamaño de la pantalla
function loadRiveIframe() {
    const isMobile = window.innerWidth <= 768; // Ajusta este valor si es necesario
    const iframeUrl = isMobile ? RIVE_PHONE_URL : RIVE_WEB_URL;

    // Cambiar la URL del iframe
    riveIframe.src = iframeUrl;

    // Ajustar el tamaño del contenedor según el iframe
    if (isMobile) {
        riveContainer.style.width = "720px";
        riveContainer.style.height = "1280px";
    } else {
        riveContainer.style.width = "2277px";
        riveContainer.style.height = "1280px";
    }
}

// Función para manejar eventos desde el iframe
function handleRiveEvent(event) {
    // Verificar si el evento proviene del iframe de Rive
    if (event.origin !== "https://rive.app") return;

    // Obtener los datos del evento
    const eventData = event.data;
    console.log("Evento detectado:", eventData);

    // Manejar los eventos según su nombre
    switch (eventData.name) {
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
            console.log("Evento no reconocido:", eventData.name);
            break;
    }
}

// Escuchar eventos desde el iframe
window.addEventListener("message", handleRiveEvent);

// Cargar el iframe correcto al inicio
loadRiveIframe();

// Cambiar el iframe si la ventana cambia de tamaño
window.addEventListener("resize", () => {
    loadRiveIframe();
});
