import { Rive } from "@rive-app/canvas";

// Selecciona el canvas
const canvas = document.getElementById("riveCanvas");

// Carga la instancia de Rive con el archivo .riv desde GitHub
const riveInstance = new Rive({
  src: "mart_web.riv",
  canvas: canvas,
  autoplay: true,
  stateMachines: "WEB MART",  // El nombre de la máquina de estados que has definido en Rive
  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  }
});

// Detectar clics y abrir enlaces según el input
canvas.addEventListener("click", (event) => {
  const inputs = riveInstance.stateMachineInputs("WEB MART");

  inputs.forEach(input => {
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
