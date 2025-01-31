document.addEventListener("DOMContentLoaded", function() {
    let riveContainer = document.getElementById("riveContainer");

    function loadRive() {
        let isMobile = window.innerWidth <= 768;
        let riveEmbed = isMobile 
            ? '<iframe width="100%" height="100%" src="https://rive.app/s/z5fuQmVBPkSLvcdwxgSiNA/embed" allowfullscreen allow="autoplay"></iframe>' 
            : '<iframe width="100%" height="100%" src="https://rive.app/s/cOEXIROMIUOuxRV8ml5ooQ/embed" allowfullscreen allow="autoplay"></iframe>';

        riveContainer.innerHTML = riveEmbed;
    }

    // Cargar la animación al inicio
    loadRive();

    // Volver a cargar si cambia el tamaño de la pantalla
    window.addEventListener("resize", function() {
        loadRive();
    });
});

