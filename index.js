let riveInstance;
let isMobile = window.innerWidth <= 768; // Detecta si es móvil

const riveFile = isMobile ? "mart_phone.riv" : "mart_web.riv"; // Carga el archivo correcto

// Función para inicializar Rive
function loadRiveAnimation() {
    const r = new rive.Rive({
        src: riveFile,
        canvas: document.getElementById("riveCanvas"),
        autoplay: true,
        stateMachines: "WEB MART",
        onLoad: () => {
            console.log(`Rive cargado correctamente: ${riveFile}`);
            r.resizeDrawingSurfaceToCanvas();
            riveInstance = r;
        },
        onStateChange: (event) => {
            handleStateChange(event.data);
        }
    });
}

// Función para manejar los eventos de los botones en Rive
function handleStateChange(states) {
    if (!riveInstance) return;

    const inputs = riveInstance.stateMachineInputs("WEB MART");

    let link = null;
    for (let input of inputs) {
        console.log(`Input: ${input.name}, Valor: ${input.value}`);

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
}

// Llamamos a la función para cargar Rive
loadRiveAnimation();
