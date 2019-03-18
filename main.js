
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
const goToUrl = () => {
    window.open('https://www.google.com')
}

const init = () => {
    navHover();
    videoHover();
}


$(function(){
    init();
});