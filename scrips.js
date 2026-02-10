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
const buyButtons = document.querySelectorAll('.producto a');
buyButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    alert("Serás redirigido a Amazon para completar tu compra.");
  });
});
const subLinks = document.querySelectorAll('.dropdown-content a');
subLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const subCat = link.getAttribute('href').replace('#','');
    document.querySelectorAll('.producto').forEach(prod => {
      prod.style.display = prod.classList.contains(subCat) ? 'block' : 'none';
    });
  });
});
const productos = document.querySelectorAll('.producto');
productos.forEach(prod => {
  prod.addEventListener('click', () => {
    prod.classList.add('clicked');
    setTimeout(() => prod.classList.remove('clicked'), 500);
  });
});
const cta = document.querySelector('.cta');
cta.addEventListener('click', () => {
  document.querySelector('.banner').classList.add('fade');
});
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
        target.scrollIntoView({ behavior: 'smooth' });
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
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
  setInterval(autoScroll, 4000);
});

// Confirmación al comprar en Amazon
const buyButtons = document.querySelectorAll('.producto a');
buyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Serás redirigido a Amazon para completar tu compra.");
  });
});

// Animación al hacer clic en productos
const productos = document.querySelectorAll('.producto');
productos.forEach(prod => {
  prod.addEventListener('click', () => {
    prod.classList.add('clicked');
    setTimeout(() => prod.classList.remove('clicked'), 500);
  });
});

// Filtro de subcategorías en dropdown
const subLinks = document.querySelectorAll('.dropdown-content a');
subLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const subCat = link.getAttribute('href').replace('#','');
    document.querySelectorAll('.producto').forEach(prod => {
      prod.style.display = prod.classList.contains(subCat) ? 'block' : 'none';
    });
  });
});

// Efecto al usar el botón CTA del banner
const cta = document.querySelector('.cta');
if (cta) {
  cta.addEventListener('click', () => {
    document.querySelector('.banner').classList.add('fade');
  });
}
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
        target.scrollIntoView({ behavior: 'smooth' });
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
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth ) {
      scrollAmount = 0;
    } else {
      scrollAmount += 250;
    }
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
  setInterval(autoScroll, 4000);
});