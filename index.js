document.addEventListener("DOMContentLoaded", function() {
    let riveContainer = document.getElementById("riveContainer");
    let riveInstance;

    function loadRive() {
        let isMobile = window.innerWidth <= 768;
        let riveEmbed = isMobile 
            ? '<iframe id="riveFrame" width="100%" height="100%" src="https://rive.app/s/z5fuQmVBPkSLvcdwxgSiNA/embed" allowfullscreen allow="autoplay"></iframe>' 
            : '<iframe id="riveFrame" width="100%" height="100%" src="https://rive.app/s/cOEXIROMIUOuxRV8ml5ooQ/embed" allowfullscreen allow="autoplay"></iframe>';

        riveContainer.innerHTML = riveEmbed;

        // Esperar a que el iframe cargue para detectar eventos
        setTimeout(setupRiveEvents, 1000);
    }

    function setupRiveEvents() {
        let riveFrame = document.getElementById("riveFrame");
        if (!riveFrame) return;

        // Escuchar eventos desde el iframe
        riveFrame.contentWindow.postMessage({ type: "subscribe", eventType: "event" }, "*");

        window.addEventListener("message", function(event) {
            if (!event.data || event.data.type !== "event") return;

            let eventName = event.data.name;
            console.log(`Evento detectado en Rive: ${eventName}`);

            let links = {
                "YouTube": "https://www.youtube.com/@Dark_MART",
                "Linkedin": "https://www.linkedin.com/in/darkmart/",
                "Mail": "mailto:atilanorush@gmail.com",
                "Portfolio": "https://www.instagram.com/alocado.mentalista/"
            };

            if (links[eventName]) {
                console.log(`Abriendo enlace: ${links[eventName]}`);
                window.open(links[eventName], "_blank");
            }
        });
    }

    // Cargar la animación al inicio
    loadRive();

    // Volver a cargar si cambia el tamaño de la pantalla
    window.addEventListener("resize", function() {
        loadRive();
    });
});
