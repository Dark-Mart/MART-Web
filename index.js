import { Rive, EventType, RiveEventType } from "https://unpkg.com/@rive-app/canvas@2.0.123?module";

const canvas = document.getElementById("riveCanvas");

// Función que carga el archivo .riv y configura la instancia de Rive
function loadRive(riveFile) {
  const riveInstance = new Rive({
    src: riveFile,
    canvas: canvas,
    autoplay: true,
    stateMachines: "WEB MART",  // Asegúrate de que el nombre coincide con el de tu archivo Rive
    enableEventSideEffects: true,
    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
      console.log("Rive cargado correctamente:", riveFile);
    }
  });

  // Suscribirse a los eventos usando la API on()
  riveInstance.on(EventType.RiveEvent, (riveEvent) => {
    const eventData = riveEvent.data;
    console.log("Evento recibido:", eventData);
    
    // Si es un evento General, usamos el nombre del evento para abrir la URL
    if (eventData.type === RiveEventType.General) {
      let link = null;
      if (eventData.name === "Youtube") {
        link = "https://www.youtube.com/@Dark_MART";
      } else if (eventData.name === "Linkedin") {
        link = "https://www.linkedin.com/in/darkmart/";
      } else if (eventData.name === "Mail") {
        link = "mailto:atilanorush@gmail.com";
      } else if (eventData.name === "Portfolio") {
        link = "https://www.instagram.com/alocado.mentalista/";
      }
      if (link) {
        window.open(link, "_blank");
      }
    }
    // Si el evento ya es de tipo OpenUrl, se abre directamente (esto es opcional)
    else if (eventData.type === RiveEventType.OpenUrl && eventData.url) {
      window.open(eventData.url, "_blank");
    }
  });

  return riveInstance;
}

// Determinar si es móvil y elegir el archivo .riv adecuado
let isMobile = window.innerWidth <= 768;
let riveFile = isMobile ? "mart_phone.riv" : "mart_web.riv";

// Cargar la animación
let riveInstance = loadRive(riveFile);

// Opcional: Volver a cargar la animación si cambia el tamaño de la pantalla
window.addEventListener("resize", () => {
  let newIsMobile = window.innerWidth <= 768;
  let newRiveFile = newIsMobile ? "mart_phone.riv" : "mart_web.riv";
  if (newRiveFile !== riveFile) {
    riveFile = newRiveFile;
    // Si la instancia anterior tiene método cleanup, se puede limpiar antes de recargar
    if (riveInstance.cleanup) {
      riveInstance.cleanup();
    }
    riveInstance = loadRive(riveFile);
  }
});
