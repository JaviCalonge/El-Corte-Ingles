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
        } else {
            articulos.style.gridTemplateColumns = '50% 50%';
        }
    });
});
