import { Rive, Layout, Fit, Alignment } from "https://cdn.jsdelivr.net/npm/@rive-app/canvas@0.9.3/dist/rive.min.js";

// Configuración de layout para el canvas
const layout = new Layout({
  fit: Fit.FitWidth,  // Ajusta el contenido a la anchura
  alignment: Alignment.Center,
});

// Obtener el canvas de HTML
const riveCanvas = document.getElementById("riveCanvas");

// Asegurarse de que el tamaño del canvas se ajuste cuando se redimensione la ventana
window.addEventListener("resize", () => {
  riveInstance.resizeDrawingSurfaceToCanvas();
}, false);

// Instancia de Rive para cargar la animación
const riveInstance = new Rive({
  src: "mart_web.riv",  // Cargar el archivo Rive
  stateMachines: "WEB MART",  // Nombre de la máquina de estados
  canvas: riveCanvas,
  layout: layout,  // Ajuste de layout opcional
  autoplay: true,
  onLoad: () => {
    console.log("Rive cargado correctamente.");
    riveInstance.resizeDrawingSurfaceToCanvas();
  },
});

// Detectar clics sobre el canvas
document.getElementById("riveCanvas").addEventListener("click", (event) => {
  if (!riveInstance) return;

  // Obtener los inputs de la máquina de estados
  const inputs = riveInstance.stateMachineInputs("WEB MART");

  // Verificar si se activó algún trigger
  inputs.forEach(input => {
    console.log(`Input detectado: ${input.name}`);

    // Si el input es un trigger, abrir el enlace correspondiente
    if (input.isTrigger()) {
      switch (input.name) {
        case "YOUTUBE":
          console.log("Abriendo YouTube...");
          window.open("https://www.youtube.com/@Dark_MART", "_blank");
          break;
        case "LINKEDIN":
          console.log("Abriendo LinkedIn...");
          window.open("https://www.linkedin.com/in/darkmart/", "_blank");
          break;
        case "MAIL":
          console.log("Abriendo correo...");
          window.location.href = "mailto:atilanorush@gmail.com";
          break;
        case "PORTFOLIO":
          console.log("Abriendo Instagram...");
          window.open("https://www.instagram.com/alocado.mentalista/", "_blank");
          break;
        default:
          console.log("Input no reconocido.");
          break;
      }
    }
  });
});
