let riveInstance;

const r = new rive.Rive({
    src: "mart_web.riv",  // Asegúrate de que el archivo .riv está en el mismo directorio
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",  // Asegúrate de que este es el nombre correcto de la state machine
    onLoad: () => {
        console.log("Rive cargado correctamente.");
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;  // Guardamos la instancia de Rive para interactuar con ella

        // Verificar si los inputs están disponibles
        const inputs = riveInstance.stateMachineInputs("WEB MART");
        console.log("Inputs detectados:", inputs.map(input => input.name));
    }
});

document.getElementById("riveCanvas").addEventListener("click", (event) => {
    if (!riveInstance) return;

    const inputs = riveInstance.stateMachineInputs("WEB MART");

    // Verificamos qué input fue activado
    inputs.forEach(input => {
        console.log(`Input detectado: ${input.name}`);

        // Condiciones para cada input específico
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
