document.addEventListener("DOMContentLoaded", function() {
  // Obtener todos los elementos "navbar-burger" (botón de menú móvil)
  var $hamburguesasNavegacion = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Comprobar si hay hamburguesas de navegación
  if ($hamburguesasNavegacion.length > 0) {
    // Añadir un evento de clic en cada una de ellas
    $hamburguesasNavegacion.forEach(function($elemento) {
      $elemento.addEventListener("click", function() {
        // Obtener el objetivo del atributo "data-target"
        var objetivo = $elemento.dataset.target;
        var $objetivo = document.getElementById(objetivo);
        // Alternar la clase "is-active" tanto en el "navbar-burger" como en el "navbar-menu"
        $elemento.classList.toggle("is-active");
        $objetivo.classList.toggle("is-active");
      });
    });
  }
});

// Desplazamiento suave con anclas
$(document).on("click", 'a[href^="#"]', function(evento) {
  if (this.hash !== "") {
    evento.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

// Precarga (Preloader) - Sintaxis corregida
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});

$(window).on('load', function() {
  var Cuerpo = $("body");
  Cuerpo.addClass("preloader-site");
});