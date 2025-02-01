// Importa Rive desde un CDN (asegúrate de que la versión es compatible con onEvent)
import Rive from "https://unpkg.com/@rive-app/canvas@2.0.123?module";

window.addEventListener("DOMContentLoaded", async () => {
  const canvas = document.getElementById("riveCanvas");
  let riveInstance;
  
  // Determinar si el dispositivo es móvil y elegir el archivo .riv adecuado
  let isMobile = window.innerWidth <= 768;
  let riveFile = isMobile ? "mart_phone.riv" : "mart_web.riv";

  // Función para cargar el archivo .riv y crear la instancia de Rive
  async function loadRive(file) {
    try {
      const response = await fetch(file);
      const bytes = await response.arrayBuffer();
      // Crear instancia de Rive
      riveInstance = new Rive({
        buffer: bytes,
        canvas: canvas,
        autoplay: true,
        stateMachines: "WEB MART",  // Asegúrate de que el nombre coincide con el de tu archivo Rive
        enableEventSideEffects: true,
        onLoad: () => {
          console.log("Rive cargado correctamente:", file);
        },
        onEvent: (event) => {
          console.log("Evento recibido:", event);
          let link = null;
          // Se asume que los botones disparan eventos con nombres exactos
          if (event.name === "Youtube") {
            link = "https://www.youtube.com/@Dark_MART";
          } else if (event.name === "Linkedin") {
            link = "https://www.linkedin.com/in/darkmart/";
          } else if (event.name === "Mail") {
            link = "mailto:atilanorush@gmail.com";
          } else if (event.name === "Portfolio") {
            link = "https://www.instagram.com/alocado.mentalista/";
          }
          if (link) {
            window.open(link, "_blank");
          }
        }
      });
    } catch (err) {
      console.error("Error al cargar el archivo Rive:", err);
    }
  }

  // Carga inicial
  await loadRive(riveFile);

  // Si cambia el tamaño de la pantalla, se recarga la animación correspondiente
  window.addEventListener("resize", async () => {
    let newIsMobile = window.innerWidth <= 768;
    let newRiveFile = newIsMobile ? "mart_phone.riv" : "mart_web.riv";
    if (newRiveFile !== riveFile) {
      riveFile = newRiveFile;
      // Opcional: limpiar la instancia anterior si es necesario
      if (riveInstance && riveInstance.cleanup) {
        riveInstance.cleanup();
      }
      await loadRive(riveFile);
    }
  });
});
