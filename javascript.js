document.addEventListener('DOMContentLoaded', function() {
  var scrollToTopButton = document.getElementById('up');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // Mostrar después de desplazar 300px
          scrollToTopButton.classList.add('show');
      } else {
          scrollToTopButton.classList.remove('show');
      }
  });

});


document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('cambiar-vista');
    var articulos = document.getElementById('articulos');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            articulos.style.gridTemplateColumns = '90%';
        } else if (!checkbox.checked)  {
            articulos.style.gridTemplateColumns = '50% 50%';
        }
    });
});



document.getElementById('menu').addEventListener('change', function() {
    var menu = document.getElementById('menu-hamburguesa');
    var up = document.getElementById("up");
    var secciones = document.getElementById("secciones");
    var titulo = document.getElementById("titulo");
    var vistas = document.getElementById("vistas");
    var x = document.getElementById("X");
    var icono = document.getElementById("icono");
    var filtros = document.getElementById("filtros");

    if (this.checked) {
        menu.style.display = 'block';
        up.style.display = "none";
        secciones.style.display = "none";
        titulo.style.display = "none";
        vistas.style.display = "none";
        x.style.display = "block";
        icono.style.display = "none";
        filtros.style.display = "none";
    } else {
        menu.style.display = 'none';
        x.style.display = "none";
        icono.style.display = "block";
        secciones.style.display = "block";
        secciones.style.display = "flex";
        titulo.style.display = "block";
        vistas.style.display = "block";
        filtros.style.display = "block";
        body.style.scroll = "smooth";
    }
});

