// Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

// Hamburger Menu Selector
hamburgerMenu.addEventListener('click', function(){
    header.classList.toggle('menu-open');
});


// Menu Scroll function
$(document).ready(function(){
    $('.nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });
});

// Scroll to the top button function
$('#up').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
});

AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
});
