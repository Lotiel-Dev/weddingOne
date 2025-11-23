document.addEventListener("DOMContentLoaded", function() {
  // 1. Menú Hamburguesa
  var $hamburguesasNavegacion = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  if ($hamburguesasNavegacion.length > 0) {
    $hamburguesasNavegacion.forEach(function($elemento) {
      $elemento.addEventListener("click", function() {
        var objetivo = $elemento.dataset.target;
        var $objetivo = document.getElementById(objetivo);
        $elemento.classList.toggle("is-active");
        $objetivo.classList.toggle("is-active");
      });
    });
  }

  // 2. Lógica de Música de Fondo
  var audio = document.getElementById("audio-fondo");
  var btnMusica = document.getElementById("btn-musica");
  var iconoMusica = document.getElementById("icono-musica");

  // Función para actualizar icono
  function actualizarIcono(reproduciendo) {
    if (reproduciendo) {
      btnMusica.classList.add("is-playing");
      iconoMusica.classList.remove("fa-volume-mute");
      iconoMusica.classList.add("fa-music");
    } else {
      btnMusica.classList.remove("is-playing");
      iconoMusica.classList.remove("fa-music");
      iconoMusica.classList.add("fa-volume-mute");
    }
  }

  // Intentar autoplay al cargar
  var promesa = audio.play();
  if (promesa !== undefined) {
    promesa.then(_ => {
      // Autoplay exitoso
      actualizarIcono(true);
    }).catch(error => {
      // Autoplay bloqueado por el navegador (esperando click del usuario)
      console.log("Autoplay bloqueado. Esperando interacción.");
      actualizarIcono(false);
    });
  }

  // Control manual al hacer click en el botón
  btnMusica.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      actualizarIcono(true);
    } else {
      audio.pause();
      actualizarIcono(false);
    }
  });
});

// 3. Desplazamiento suave
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

// 4. Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});

$(window).on('load', function() {
  var Cuerpo = $("body");
  Cuerpo.addClass("preloader-site");
});