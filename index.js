let riveInstance;

const r = new rive.Rive({
    src: "mart_web.riv",  // Ruta del archivo Rive
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",
    onLoad: () => {
        console.log("✅ Rive cargado correctamente.");
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;
        
document.getElementById("riveCanvas").addEventListener("click", () => {
    console.log("🖱 Click detectado en el canvas de Rive.");
});

        // Verificar inputs disponibles
        const inputs = riveInstance.stateMachineInputs("WEB MART");
        console.log("🎯 Inputs detectados:", inputs.map(input => input.name));
    }
});

// Manejo de interacciones
document.getElementById("riveCanvas").addEventListener("click", () => {
    if (!riveInstance) return;

    const inputs = riveInstance.stateMachineInputs("WEB MART");

    // Verificamos cada input disponible
    document.getElementById("riveCanvas").addEventListener("click", (event) => {
    if (!riveInstance) return;

    const inputs = riveInstance.stateMachineInputs("WEB MART");

    const youtubeInput = inputs.find(input => input.name === "YouTube");
    const linkedinInput = inputs.find(input => input.name === "Linkedin");
    const mailInput = inputs.find(input => input.name === "Mail");
    const portfolioInput = inputs.find(input => input.name === "Portfolio");

    if (youtubeInput && youtubeInput.type === "trigger") {
        youtubeInput.fire();
        console.log("📺 Abriendo YouTube...");
        window.open("https://www.youtube.com/@Dark_MART", "_blank");
    } else if (linkedinInput && linkedinInput.type === "trigger") {
        linkedinInput.fire();
        console.log("🔗 Abriendo LinkedIn...");
        window.open("https://www.linkedin.com/in/darkmart/", "_blank");
    } else if (mailInput && mailInput.type === "trigger") {
        mailInput.fire();
        console.log("📩 Abriendo correo...");
        window.location.href = "mailto:atilanorush@gmail.com";
    } else if (portfolioInput && portfolioInput.type === "trigger") {
        portfolioInput.fire();
        console.log("📷 Abriendo Instagram...");
        window.open("https://www.instagram.com/alocado.mentalista/", "_blank");
    }
});

});
