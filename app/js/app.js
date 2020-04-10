$(document).ready(function(){
    $('.js-header-toggle').click(function(){
        $(this).toggleClass('header__toggle--active');
        $('body').toggleClass('body--hidden');
        $('.header__nav').toggleClass('header__nav--show');
    });
});