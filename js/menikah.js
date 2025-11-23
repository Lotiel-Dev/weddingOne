// Que se cocine ese menú hamburguesa //

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
  evento.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// Cuando el usuario se desplaza 20px hacia abajo desde la parte superior, mostrar el botón de subir
window.onscroll = function() {
  funcionDesplazamiento();
};

function funcionDesplazamiento() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Precarga (Preloader)
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function() {
  var Cuerpo = $("body");
  Cuerpo.addClass("preloader-site");
});