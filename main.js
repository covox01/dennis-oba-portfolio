const $root = $('html, body'); 

const navHover = () => {
    $('.nav-port').hover(function() {
        console.log('yes');
        $('.port-title').addClass('hover')
        $('.port-nav').addClass('port-nav-up');
        $('.port-nav-item').addClass('port-nav-item-up');
    }, function () {
        $('.port-title').removeClass('hover');
        $('.port-nav').removeClass('port-nav-up');
        $('.port-nav-item').removeClass('port-nav-item-up');
    })
}
// This opens a new tab using jquery
const radio = () => {
    window.open('https://covox01.github.io/broken-radio-puzzle/');
}

const weather = () => {
    window.open('https://alexandershindennisoba.github.io/weather-gallery/');
}

const boffo = () => {
    window.open('https://auth-test-d2fa2.firebaseapp.com/');
}


const goToPortfolio = () => {
    $('.nav-port').on('click', function(){
        console.log('yo')
        window.location.hash = $(this).attr("#port-1");
    })
}

const init = () => {
    navHover();
    goToPortfolio();
    AOS.init({

    });
}

const smooth = () => {
    $('a').smoothScroll({
        easing: 'swing',
        speed: 1500
    })
    $('.port-title').smoorthScroll({
        easing: 'swing',
        speed: 1500
    })
}
// AOS.init();
// AOS.init({
//     // Global settings:
//     offset: 120, // offset (in px) from the original trigger point
//     delay: 0, // values from 0 to 3000, with step 50ms
//     duration: 400, // values from 0 to 3000, with step 50ms
// });

$(function(){
    init();
    smooth();
    
}); 