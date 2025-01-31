import { Rive, Fit, Alignment, Layout } from "https://cdn.jsdelivr.net/npm/@rive-app/canvas@0.9.3/dist/rive.min.js";

// Definir el layout para el canvas
const layout = new Layout({
  fit: Fit.FitWidth,  // Ajuste para que la animación se ajuste al ancho del canvas
  alignment: Alignment.Center,  // Centrado de la animación
});

// Obtener el canvas de HTML
const riveCanvas = document.getElementById("riveCanvas");

// Redimensionar el canvas al tamaño de la ventana
window.addEventListener("resize", () => {
  riveInstance.resizeDrawingSurfaceToCanvas();
}, false);

// Crear la instancia de Rive y cargar la animación
const riveInstance = new Rive({
  src: "mart_web.riv", // Ruta al archivo Rive (asegúrate de que la URL sea correcta)
  stateMachines: "WEB MART",  // Nombre de la máquina de estados en el archivo Rive
  canvas: riveCanvas,  // Asignar el canvas para la animación
  layout: layout,  // Ajuste del layout
  autoplay: true,  // Reproducir la animación automáticamente
  onLoad: () => {
    console.log("Rive cargado correctamente.");
    riveInstance.resizeDrawingSurfaceToCanvas(); // Ajustar el tamaño de la superficie de dibujo
  },
});

// Detectar clics en el canvas
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
          console.log("Input no r
