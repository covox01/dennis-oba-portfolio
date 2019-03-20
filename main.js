const $root = $('html, body'); 


// Bottom navigation that reveals the nav on hover 
    const bottomNav = () => {
        $('#super').hover(function(){
            console.log('nav hovered')
            $('.nav-more').addClass('nav-more-up');
        },
            function (){
            $('.nav-more').removeClass('nav-more-up')
        })
        $('#super-item a').on('click', function(){
            $('.nav-more').removeClass('nav-more-up');
        })

    }
// Hover state for portfolio pieces
    const navHover = () => {
        $('.nav-port').hover(function() {
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
    const radioGithub = () => {
        window.open('https://github.com/covox01/broken-radio-puzzle');
    }

    const weather = () => {
        window.open('https://alexandershindennisoba.github.io/weather-gallery/');
    }
    const weatherGithub = () => {
        window.open('https://github.com/alexandershindennisoba/weather-gallery')
    }

    const boffo = () => {
        window.open('https://auth-test-d2fa2.firebaseapp.com/');
    }
    const boffoGithub = () => {
        window.open('https://github.com/demonagency/BoxOfficeBoffo');
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
    bottomNav();
    AOS.init({

    });
}

const smooth = () => {
    $('a').smoothScroll({
        easing: 'swing',
        speed: 1500
    })
    $('.port-title').smoothScroll({
        easing: 'swing',
        speed: 1500
    })
}

$(function(){
    init();
    smooth();
    
}); 