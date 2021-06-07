const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');

// display menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener( 'click', mobileMenu );



