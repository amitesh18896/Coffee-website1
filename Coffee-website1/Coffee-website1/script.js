// Hamburger Menu 
const navSlide = () => {
    const menu = document.querySelector('#menu-btn');
    const closeBtn = document.querySelector('#close-btn');
    const nav = document.querySelector('.navbar');

    // Toggle menu
    menu.addEventListener('click', () => {
        menu.classList.add('active');
        closeBtn.classList.add('change');
        nav.classList.add('nav-active');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
        closeBtn.classList.remove('change');
        nav.classList.remove('nav-active');
    })
}
navSlide();

// Theme switch
let darkBtn = document.querySelector('#dark');
let lightBtn = document.querySelector('#light');
let body = document.querySelector('body');

darkBtn.addEventListener('click', () => {
    darkBtn.classList.add('switch');
    lightBtn.classList.add('switch');
    body.classList.add('darkTheme');
});

lightBtn.addEventListener('click', () => {
    darkBtn.classList.remove('switch');
    lightBtn.classList.remove('switch');
    body.classList.remove('darkTheme');
})


// Review Section Slider 
let slidePosition = 0;
const slides = document.getElementsByClassName('review');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', function() {
    moveToNextSlide();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    moveToPrevSlide();
});

function updateSlidePosition () {
    for (let slide of slides) {
        slide.classList.remove('visible');
        slide.classList.add('hidden');
    }

    slides[slidePosition].classList.add('visible');
    slides[slidePosition].classList.remove('hidden');
}

function moveToNextSlide () {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide () {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}
