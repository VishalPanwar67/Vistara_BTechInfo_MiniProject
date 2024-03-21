let currentSlide = 0;
const slides = document.querySelectorAll('.img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}vw)`;
    });
}

function prevSlide() {
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
}