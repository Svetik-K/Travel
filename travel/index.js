//Burger menu

const hamburger = document.querySelector('.hamburger');
const coverLayer = document.querySelector('.cover-layer');
const navMenu = document.querySelector('.header__navigation');
const navLinks = document.querySelectorAll('.navigation__link');

hamburger.addEventListener('click', mobileMenu);
navLinks.forEach((link) => link.addEventListener('click', closeMenu));
coverLayer.addEventListener('click', closeMenu);
navMenu.addEventListener('click', closeMenu); 

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("open");
  coverLayer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
    coverLayer.classList.remove('active');
    hamburger.classList.remove("active");
	navMenu.classList.remove("open");
    document.body.style.overflow = '';
}

// Login popup

const loginPopup = document.querySelector('.login-popup');
const loginForm = document.querySelector('.login-popup__form');
const loginButton = document.querySelector('.button_login');
const signInButton = document.querySelector('.popup-button_sign-in');
const email = document.getElementById('e-mail');
const password = document.getElementById('password');
const accountLink = document.querySelector('.account');

loginButton.addEventListener('click', showLoginPopup);
signInButton.addEventListener('click', signInData);
accountLink.addEventListener('click', showLoginPopup);
window.addEventListener('click', (e) => {
    if (e.target == loginPopup) {
        loginPopup.style.display = "none";
        document.body.style.overflow = '';
    }
}) 

function showLoginPopup() {
    loginPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function signInData() {
    let userEmail = email.value;
    let userPassword = password.value;
    if(userEmail && userPassword) {
        alert(`Your e-mail: ${userEmail} 
Your password: ${userPassword}`);
    } else {
        alert(`You should enter Your e-mail and password first`);
    }
}

// Sign In popup

const registerButton = document.querySelector('.register-link');
registerButton.addEventListener('click', createSignIn);

function createSignIn() {
    loginForm.reset();
    document.querySelector('.login-popup__form').style.height = '436px';
    document.querySelector('.login-popup__title').textContent = 'Create account';
    document.querySelector('.popup-button_facebook').style.display = 'none';
    document.querySelector('.popup-button_google').style.display = 'none';
    document.querySelector('.or').style.display = 'none';
    document.querySelector('.popup-button_sign-in').textContent = 'Sign Up';
    document.querySelector('.popup-button_sign-in').style.marginBottom = '26px';
    document.querySelector('.forgot-link').style.display = 'none';
    document.querySelector('.register-text').innerHTML = `Already have an account? <a href="#" class="register-link">Log In</a>`;
    
}


// Slider Desktop

const sliderCards = document.querySelectorAll('.destinations-card');
const slider = document.querySelector('.destinations__cards');
const sliderDots = document.querySelector('.destinations__dots');

let numOfSlides = sliderCards.length;
let slideWidth = sliderCards[2].clientWidth;
let curSlide = 2;
let firstSlide = 0;
let lastSlide = sliderCards.length - 1

function createSlider() {
    sliderCards.forEach((slide, index) => {
        slide.style.left = ((index - 2) * 59.5) + 20 + '%';
    })
    sliderCards[2].classList.add('active'); 
    sliderCards[1].classList.add('left'); 
    sliderCards[3].classList.add('right');

    sliderDots.children[1].classList.add('dot_active');   
}

createSlider();

document.addEventListener('click', (e) => {
    if(e.target.closest('.destinations-card.left')  && curSlide === 2) {
        curSlide--;
        goToPreviousCard(curSlide);
        setActiveDot();
    }
    else if(e.target.closest('.destinations-card.right')  && curSlide === 2) {
        curSlide++;
        goToNextCard(curSlide);
        setActiveDot();
    }
    else if(e.target.closest('.destinations-card.active') && curSlide < 2) {
        curSlide++;
        slider.style.transform = `translateX(0%)`;
        setActiveDot();
    }
    else if(e.target.closest('.destinations-card.active') && curSlide > 2) {
        curSlide--;
        slider.style.transform = `translateX(0%)`;
        setActiveDot();
    } else {
        return;
    }
})

function goToPreviousCard(cardNumber) {
    slider.style.transform = `translateX(${slideWidth + 60}px)`;
    curSlide = cardNumber;  
}
function goToNextCard(cardNumber) {
    slider.style.transform = `translateX(-${slideWidth + 60}px)`;
    curSlide = cardNumber; 
}

function setActiveDot() {
    let currentDot = document.querySelector('.dot.dot_active');
    currentDot.classList.remove('dot_active');
    sliderDots.children[curSlide - 1].classList.add('dot_active'); 
}


// Slider Mobile

const mobileSlides = document.querySelectorAll('.mobile-card');
const sliderContainer = document.querySelector('.mobile-slider__cards');
const nextSlideButton = document.querySelector('.slider-button_right');
const prevSlideButton = document.querySelector('.slider-button_left');
const mobileSliderDots = document.querySelector('.mobile-card__dots');

let numberOfSlides = mobileSlides.length;
let mobileSlideWidth = mobileSlides[0].clientWidth;
let currentSlide = 0;
let maxSlide = numberOfSlides - 1;

function initSlider() {
    mobileSlides.forEach((slide, index) => {
        slide.style.left = index * 100 + '%';
    })
    mobileSlides[0].classList.add('active');
    createMobileDots();
}

function createMobileDots() {
    for(let i = 0; i < numberOfSlides; i++) {
        let dot = document.createElement('div');
        dot.classList.add('mobile-dot');
        mobileSliderDots.append(dot);

        dot.addEventListener('click', () => {
            goToSlide(i);
        })
    }
    mobileSliderDots.children[0].classList.add('mobile-dot_active');
}

initSlider();

nextSlideButton.addEventListener('click', () => {
    if(currentSlide >= maxSlide) {
        goToSlide(0);
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

prevSlideButton.addEventListener('click', () => {
    if(currentSlide <= 0) {
        goToSlide(maxSlide);
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
    sliderContainer.style.transform = `translateX(-${mobileSlideWidth * slideNumber}px)`;
    currentSlide = slideNumber;
    setActiveClass();
}

function setActiveClass() {
    // Set active class for images
    let currentActive = document.querySelector('.mobile-card.active');
    currentActive.classList.remove('active');
    mobileSlides[currentSlide].classList.add('active');

    // Set active class for dots
    let currentDot = document.querySelector('.mobile-dot.mobile-dot_active');
    currentDot.classList.remove('mobile-dot_active');
    mobileSliderDots.children[currentSlide].classList.add('mobile-dot_active');
}




