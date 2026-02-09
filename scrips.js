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
