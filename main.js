const $root = $('html, body'); 


let vid1 = false;
let vid2 = false;
let vid3 = false; 
// Media query to match css media query then do something
    const mq = window.matchMedia("(min-width: 533px)");
    if (mq.matches) {
        console.log(mq);
        vid1 = true;
        vid2 = true;
        vid3 = true; 
        $('video').attr('autoplay', true);
        $('video').attr('loop', true);
    } else {

    }
// Play video
    const playVideo = () => {
        $('#video-1').click(function(){
            if (vid1 === false) {
                vid1 = true;
                $('.v1').get(0).play();
            } else {
                vid1 = false;
                $('.v1').get(0).pause();
            }
        })
        $('#video-2').click(function () {
            if (vid2 === false) {
                vid2 = true;
                $('.v2').get(0).play();
            } else {
                vid2 = false;
                $('.v2').get(0).pause();
            }
        })
        $('#video-3').click(function () {
            if (vid3 === false) {
                vid3 = true;
                $('.v3').get(0).play();
            } else {
                vid3 = false;
                $('.v3').get(0).pause();
            }
        })
    }
    
// Bottom navigation that reveals the nav on hover 
    const bottomNav = () => {
        let trigger = false
        $('#super').on('click', function(){
            console.log('hover', trigger)
            if (trigger === false) {
                trigger = true
                $('.nav-more').addClass('nav-more-up');
            } else {
                trigger = false
                $('.nav-more').removeClass('nav-more-up');
            }
        })
        $('#super-item a').on('click', function(){
            console.log('clickyyy')
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

// This opens a new tab to the Live and Github pages
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

const init = () => {
    navHover();
    bottomNav();
    playVideo();
    AOS.init({
        once: false
    });
    smooth();
}

$(function(){
    init();
    
    
}); 