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
