let riveInstance;

const r = new rive.Rive({
    src: "mart_web.riv",
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",
    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;
    }
});

document.getElementById("riveCanvas").addEventListener("click", () => {
    if (!riveInstance) return;

    const inputs = riveInstance.stateMachineInputs("WEB MART");

    const links = {
        "YouTube": "https://www.youtube.com/@Dark_MART",
        "Linkedin": "https://www.linkedin.com/in/darkmart/",
        "Mail": "mailto:atilanorush@gmail.com",
        "Portfolio": "https://www.instagram.com/alocado.mentalista/"
    };

    inputs.forEach(input => {
        if (input.type === "trigger" && links[input.name]) {
            input.fire();
            if (input.name === "Mail") {
                window.location.href = links[input.name];
            } else {
                window.open(links[input.name], "_blank");
            }
        }
    });
});
