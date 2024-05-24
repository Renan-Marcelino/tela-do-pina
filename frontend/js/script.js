
let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.carrossel li');
  slideIndex += n;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;
  const offset = -slideIndex * 100 + '%';
  document.querySelector('.carrossel ul').style.transform = `translateX(${offset})`;

}