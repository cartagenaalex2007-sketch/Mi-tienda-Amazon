// Menú responsive
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Scroll suave entre secciones
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
      nav.classList.remove('show'); // cerrar menú en móviles
    }
  });
});

// Carrusel automático en todas las categorías
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  let scrollAmount = 0;

  function autoScroll() {
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += 250;
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  setInterval(autoScroll, 4000);
});
