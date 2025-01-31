let riveInstance;
let isMobile = window.innerWidth <= 768; // Detecta si es móvil

const riveFile = isMobile ? "mart_phone.riv" : "mart_web.riv"; // Archivo según el dispositivo

const r = new rive.Rive({
    src: riveFile,
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    stateMachines: "WEB MART",
    onLoad: () => {
        console.log(`Rive cargado: ${riveFile}`);
        r.resizeDrawingSurfaceToCanvas();
        riveInstance = r;
    }
});

document.getElementById("riveCanvas").addEventListener("click", () => {
    if (!riveInstance) return;

    const inputs = riveInstance.stateMachineInputs("WEB MART");

    console.log("Inputs detectados:", inputs);

    let link = null;
    for (let input of inputs) {
        console.log(`Input: ${input.name}, Tipo: ${input.constructor.name}, Valor: ${input.value}`);
        
        if (input.name === "YouTube" && input.value) {
            link = "https://www.youtube.com/@Dark_MART";
            input.value = false;
        } else if (input.name === "Linkedin" && input.value) {
            link = "https://www.linkedin.com/in/darkmart/";
            input.value = false;
        } else if (input.name === "Mail" && input.value) {
            link = "mailto:atilanorush@gmail.com";
            input.value = false;
        } else if (input.name === "Portfolio" && input.value) {
            link = "https://www.instagram.com/alocado.mentalista/";
            input.value = false;
        }
    }

    if (link) {
        console.log(`Abriendo enlace: ${link}`);
        window.open(link, "_blank");
    }
});
