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
    inputs.forEach(input => {
        console.log(`🔍 Input detectado: ${input.name} (Valor: ${input.value})`);

        if (input.name === "YouTube" && input.value) {
            console.log("📺 Abriendo YouTube...");
            window.open("https://www.youtube.com/@Dark_MART", "_blank");
            input.fire();  // Disparar el evento
        } 
        else if (input.name === "Linkedin" && input.value) {
            console.log("🔗 Abriendo LinkedIn...");
            window.open("https://www.linkedin.com/in/darkmart/", "_blank");
            input.fire();
        } 
        else if (input.name === "Mail" && input.value) {
            console.log("📩 Abriendo correo...");
            window.location.href = "mailto:atilanorush@gmail.com";
            input.fire();
        } 
        else if (input.name === "Portfolio" && input.value) {
            console.log("📷 Abriendo Instagram...");
            window.open("https://www.instagram.com/alocado.mentalista/", "_blank");
            input.fire();
        }
    });
});
