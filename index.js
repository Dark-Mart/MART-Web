document.addEventListener("DOMContentLoaded", function() {
    let riveContainer = document.getElementById("riveContainer");
    let isMobile = window.innerWidth <= 768; // Detectamos si es móvil

    // Código embed de Rive según el dispositivo
    let riveEmbed = isMobile 
        ? '<iframe src="https://rive.app/s/_m9nvIj_sEizaP2qmQWzPA/embed" allowfullscreen allow="autoplay"></iframe>' 
        : '<iframe src="https://rive.app/s/VkjyCngtz0qPt_8DR1KFWw/embed" allowfullscreen allow="autoplay"></iframe>';

    riveContainer.innerHTML = riveEmbed;
});
