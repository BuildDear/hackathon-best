const slides = document.querySelectorAll('article');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;

function setSlideClasses() {
    slides.forEach((slide, index) => {
        slide.classList.remove('activeSlide', 'lastSlide', 'nextSlide');
        
        if (index === currentSlide) {
            slide.classList.add('activeSlide');
        } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
            slide.classList.add('lastSlide');
        } else if (index === (currentSlide + 1) % slides.length) {
            slide.classList.add('nextSlide');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    setSlideClasses();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    setSlideClasses();
}

setSlideClasses();

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000); // Auto slide every 3 seconds
