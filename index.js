window.addEventListener("DOMContentLoaded", () => {
  const riveWeb = document.getElementById("riveWeb");
  const rivePhone = document.getElementById("rivePhone");

  // Función para mostrar el iframe adecuado según el ancho de la pantalla
  function updateIframeDisplay() {
    if (window.innerWidth <= 768) {
      riveWeb.style.display = "none";
      rivePhone.style.display = "block";
    } else {
      riveWeb.style.display = "block";
      rivePhone.style.display = "none";
    }
  }

  // Actualiza la visibilidad del iframe al cargar y al redimensionar
  updateIframeDisplay();
  window.addEventListener("resize", updateIframeDisplay);

  // Listener para detectar mensajes enviados por Rive
  window.addEventListener("message", (event) => {
    // Registra el mensaje recibido para depuración
    console.log("Mensaje recibido:", event.data);

    let data;
    if (typeof event.data === "string") {
      try {
        data = JSON.parse(event.data);
      } catch (e) {
        data = event.data;
      }
    } else {
      data = event.data;
    }
    
    // Si se recibió un objeto con la propiedad "name", lo procesamos
    if (data && data.name) {
      handleRiveEvent(data.name);
    }
  });

  // Función que mapea el nombre del evento a su URL y abre el enlace
  function handleRiveEvent(eventName) {
    console.log("Evento detectado: " + eventName);
    let link = null;

    if (eventName === "Youtube") {
      link = "https://www.youtube.com/@Dark_MART";
    } else if (eventName === "Linkedin") {
      link = "https://www.linkedin.com/in/darkmart/";
    } else if (eventName === "Mail") {
      link = "mailto:atilanorush@gmail.com";
    } else if (eventName === "Portfolio") {
      link = "https://www.instagram.com/alocado.mentalista/";
    }

    if (link) {
      window.open(link, "_blank");
    }
  }
});
