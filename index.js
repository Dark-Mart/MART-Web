window.addEventListener("DOMContentLoaded", () => {
  const riveWeb = document.getElementById("riveWeb");
  const rivePhone = document.getElementById("rivePhone");

  // Función para mostrar el iframe adecuado según el ancho de pantalla
  function updateIframeDisplay() {
    if (window.innerWidth <= 768) {
      riveWeb.style.display = "none";
      rivePhone.style.display = "block";
    } else {
      riveWeb.style.display = "block";
      rivePhone.style.display = "none";
    }
  }

  updateIframeDisplay();
  window.addEventListener("resize", updateIframeDisplay);

  // Escucha mensajes (eventos) enviados desde el embed de Rive
  window.addEventListener("message", (event) => {
    // Se espera que el mensaje tenga una propiedad "name" con el nombre del evento
    if (event.data && typeof event.data === "object" && event.data.name) {
      handleRiveEvent(event.data.name);
    } else if (typeof event.data === "string") {
      // En ocasiones puede venir en formato string JSON
      try {
        const data = JSON.parse(event.data);
        if (data.name) {
          handleRiveEvent(data.name);
        }
      } catch (e) {
        // Si no es JSON, se ignora
      }
    }
  });

  // Función que mapea los nombres de evento a sus URLs correspondientes y abre el enlace
  function handleRiveEvent(eventName) {
    console.log("Evento recibido: " + eventName);
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
