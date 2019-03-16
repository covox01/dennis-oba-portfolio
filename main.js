
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

const videoHover = () => {
    $('.demo').mouseover(function () {
        $(this).get(0).play();
    }).mouseout(function () {
        $(this).get(0).pause();
    })
}

const init = () => {
    navHover();
    videoHover();
}


$(function(){
    init();
});