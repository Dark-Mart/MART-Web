let riveInstance;

const r = new rive.Rive({
    src: "mart_web.riv",  // Ruta del archivo Rive
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",
    onLoad: () => {
        console.log("Rive cargado correctamente.");
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;
    }
});

// Manejo de interacciones
document.getElementById("riveCanvas").addEventListener("click", () => {
    if (!riveInstance) return;

    const inputs = riveInstance.stateMachineInputs("WEB MART");

    inputs.forEach(input => {
        if (input.value) {
            if (input.name === "YouTube") {
                window.open("https://www.youtube.com/@Dark_MART", "_blank");
            } else if (input.name === "Linkedin") {
                window.open("https://www.linkedin.com/in/darkmart/", "_blank");
            } else if (input.name === "Mail") {
                window.location.href = "mailto:atilanorush@gmail.com";
            } else if (input.name === "Portfolio") {
                window.open("https://www.instagram.com/alocado.mentalista/", "_blank");
            }
        }
    });
});
