let riveInstance;

const r = new rive.Rive({
    src: "mart_web.riv",  // Verifica la ruta a tu archivo .riv
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",  // Verifica que este sea el nombre correcto de la máquina de estados
    onLoad: () => {
        console.log("Rive cargado correctamente.");
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;

        // Verificar si los inputs están disponibles
        const inputs = riveInstance.stateMachineInputs("WEB MART");
        console.log("Inputs detectados:", inputs.map(input => input.name));
    }
});

document.getElementById("riveCanvas").addEventListener("click", (event) => {
    if (!riveInstance) return;

    const inputs = riveInstance.stateMachineInputs("WEB MART");

    inputs.forEach(input => {
        console.log(`Input detectado: ${input.name}`);

        if (input.name === "YouTube") {
            console.log("Abriendo YouTube...");
            window.open("https://www.youtube.com/@Dark_MART", "_blank");
        } else if (input.name === "Linkedin") {
            console.log("Abriendo LinkedIn...");
            window.open("https://www.linkedin.com/in/darkmart/", "_blank");
        } else if (input.name === "Mail") {
            console.log("Abriendo correo...");
            window.location.href = "mailto:atilanorush@gmail.com";
        } else if (input.name === "Portfolio") {
            console.log("Abriendo Instagram...");
            window.open("https://www.instagram.com/alocado.mentalista/", "_blank");
        }
    });
});
