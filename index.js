// URLs de los iframes de Rive
const RIVE_WEB_URL = "https://rive.app/s/a9eScgpCCUS1V3Q7q5tCGw/embed";
const RIVE_PHONE_URL = "https://rive.app/s/1SzOE6KBLU_Kwm1lFLAGVg/embed";

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

// URLs de los enlaces
const LINKS = {
    YouTube: "https://www.youtube.com/@Dark_MART",
    Linkedin: "https://www.linkedin.com/in/darkmart/",
    Mail: "mailto:atilanorush@gmail.com",
    Portfolio: "https://www.instagram.com/alocado.mentalista/",
};

// Manejar clics en los botones invisibles
document.getElementById("youtubeButton").addEventListener("click", () => {
    window.open(LINKS.YouTube, "_blank");
});

document.getElementById("linkedinButton").addEventListener("click", () => {
    window.open(LINKS.Linkedin, "_blank");
});

document.getElementById("mailButton").addEventListener("click", () => {
    window.location.href = LINKS.Mail;
});

document.getElementById("portfolioButton").addEventListener("click", () => {
    window.open(LINKS.Portfolio, "_blank");
});

// Cargar el iframe correcto al inicio
loadRiveIframe();

// Cambiar el iframe si la ventana cambia de tamaño
window.addEventListener("resize", () => {
    loadRiveIframe();
});
