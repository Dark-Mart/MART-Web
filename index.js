// URLs de Rive (actualizadas)
const RIVE_WEB_URL = "https://rive.app/s/a9eScgpCCUS1V3Q7q5tCGw/embed";
const RIVE_PHONE_URL = "https://rive.app/s/1SzOE6KBLU_Kwm1lFLAGVg/embed";

// Elementos del DOM
const riveIframe = document.getElementById("riveIframe");
const riveContainer = document.querySelector(".rive-container");

// Función para cargar el iframe correcto
function loadRiveIframe() {
    const isMobile = window.innerWidth <= 768;
    riveIframe.src = isMobile ? RIVE_PHONE_URL : RIVE_WEB_URL;
}

// Manejar clics en los botones
document.querySelectorAll(".invisible-button").forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation(); // Evitar interferencias
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

// Inicialización
loadRiveIframe();
window.addEventListener("resize", loadRiveIframe);
