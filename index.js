// URLs actualizadas de Rive (web y móvil)
const RIVE_WEB_URL = "https://rive.app/s/OfUb9CLaOEKq2o4aju6U4A/embed";
const RIVE_PHONE_URL = "https://rive.app/s/n5VthfWadk2vi7Hfc9LIdw/embed";

// Elementos del DOM
const riveIframe = document.getElementById("riveIframe");
const riveContainer = document.querySelector(".rive-container");

// Función para cargar el iframe correcto y ajustar aspect ratio
function loadRiveIframe() {
    const isMobile = window.innerWidth <= 768;
    riveIframe.src = isMobile ? RIVE_PHONE_URL : RIVE_WEB_URL;

    // Ajustar aspect ratio dinámicamente
    if (isMobile) {
        riveContainer.style.aspectRatio = "720/1280";
    } else {
        riveContainer.style.aspectRatio = "2277/1280";
    }
}

// Manejadores de clic para los botones
document.querySelectorAll(".invisible-button").forEach(button => {
    button.addEventListener("click", (e) => {
        const id = e.target.id;
        switch(id) {
            case "youtubeButton":
                window.open("https://www.youtube.com/@Dark_MART", "_blank");
                break;
            case "linkedinButton":
                window.open("https://www.linkedin.com/in/darkmart/", "_blank");
                break;
            case "mailButton":
                window.location.href = "mailto:atilanorush@gmail.com";
                break;
            case "portfolioButton":
                window.open("https://www.instagram.com/alocado.mentalista/", "_blank");
                break;
        }
    });
});

// Inicialización y eventos
loadRiveIframe();
window.addEventListener("resize", loadRiveIframe);
