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
