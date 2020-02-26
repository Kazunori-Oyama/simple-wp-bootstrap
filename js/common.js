jQuery(function ($) {
    //headerメニューボタン
    $('.header__button').on('click', function () {
        $('.header').toggleClass('js-nav-open');
    })
    //トップへ戻るボタン
    $('.js-back-to-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    })
})