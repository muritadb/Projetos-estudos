const btnPrev = document.querySelector('[data-js="carousel__button--prev"]')
const btnNext = document.querySelector('[data-js="carousel__button--next"]')
const slides = document.querySelectorAll('[data-js="carousel__item"]')

const lastIndex = slides.length - 1
let currentSlide = 0

const manipulateSlides = correctSlide => {
  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible')
  });

  slides[correctSlide].classList.add('carousel__item--visible')
}

btnPrev.addEventListener('click', () => {
  const correctSlide = currentSlide === 0
    ? currentSlide = 2
    : --currentSlide

  manipulateSlides(correctSlide)
})

btnNext.addEventListener('click', () => {
  const correctSlide = currentSlide === lastIndex
    ? currentSlide = 0
    : ++currentSlide

  manipulateSlides(correctSlide)
})