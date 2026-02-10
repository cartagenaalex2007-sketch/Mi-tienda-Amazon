// Slider automático
const slider = document.querySelector('.slider');
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

setInterval(autoScroll, 3000);

// Menú responsive
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
