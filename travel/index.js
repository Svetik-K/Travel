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
const loginButton = document.querySelector('.button_login');
const signInButton = document.querySelector('.popup-button_sign-in');
const email = document.getElementById('e-mail');
const password = document.getElementById('password');
const accountLink = document.querySelector('.account');

loginButton.addEventListener('click', showLoginPopup);
signInButton.addEventListener('click', signInData);
accountLink.addEventListener('click', showLoginPopup);


function showLoginPopup() {
    loginPopup.classList.add('login-popup_active');
    // document.body.style.overflow = 'hidden';
}
function closeLoginPopup() {
    loginPopup.classList.remove('login-popup_active');
    // document.body.style.overflow = '';
}
function signInData() {
    let userEmail = email.value;
    let userPassword = password.value;
    if(userEmail && userPassword) {
        alert(`Your e-mail: ${userEmail} 
Your password: ${userPassword}`);
    } else {
        alert(`You should enter Your e-mail and password first`)
    }
}

// Sign In popup

const registerButton = document.querySelector('.register-link');
registerButton.addEventListener('click', createSignIn);

function createSignIn() {
    document.querySelector('.login-popup__form').style.height = '436px';
    document.querySelector('.login-popup__title').textContent = 'Create account';
    document.querySelector('.popup-button_facebook').style.display = 'none';
    document.querySelector('.popup-button_google').style.display = 'none';
    document.querySelector('.or').style.display = 'none';
    document.querySelector('.popup-button_sign-in').textContent = 'Sign Up';
    document.querySelector('.popup-button_sign-in').style.marginBottom = '26px';
    document.querySelector('.forgot-link').style.display = 'none';
    document.querySelector('.register-text').innerHTML = `Already have an account? <a href="#" class="register-link">Log In</a>`;
    document.querySelector('.register-text').style.paddingTop = '20px';
}


// Slider Desktop

const slider = document.querySelector('.destinations__cards');
const sliderCards = document.querySelectorAll('.destinations-card');

sliderCards.forEach(card => card.addEventListener('click', () => {
    if(card.classList.contains('card-left')) {
        slideRight();  
    } 
    else if(card.classList.contains('card-right')) {
        slideLeft();
    }
    
}));

function slideLeft() {
    slider.classList.add('slide-left');  
}

function slideRight() {
    slider.classList.add('slide-right');  
}


slider.addEventListener('animationend', (animation) => {
    if(animation.animationName === 'slide-to-left') {
        slider.classList.remove('slide-left');

    } else {
        slider.classList.remove('slide-right');
    }
    
});

// Slider Mobile