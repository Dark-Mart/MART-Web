window.addEventListener("DOMContentLoaded", function () {
  const riveWeb = document.getElementById("rive-web");
  const rivePhone = document.getElementById("rive-phone");

  // Función para determinar qué versión de Rive mostrar según el ancho de la pantalla
  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      riveWeb.style.display = "none";
      rivePhone.style.display = "block";
    } else {
      riveWeb.style.display = "block";
      rivePhone.style.display = "none";
    }
  }

  // Comprobación inicial y al redimensionar la ventana
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

  // Escuchar mensajes enviados desde el iframe de Rive
  window.addEventListener("message", function (event) {
    // Se asume que el mensaje es un string con el nombre del evento
    const eventData = event.data;
    if (typeof eventData === "string") {
      handleRiveEvent(eventData);
    }
  });

  // Función que asocia cada evento a su URL correspondiente y abre la URL en una nueva pestaña
  function handleRiveEvent(eventName) {
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
      console.log(`Abriendo enlace: ${link}`);
      window.open(link, "_blank");
    }
  }
});
