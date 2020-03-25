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
    //子メニュー展開
    $('.menu-item-has-children>a').on('click', function (event) {
        event.preventDefault();
        $(this).parent('.menu-item-has-children').siblings('.menu-item-has-children').children('a').next('.sub-menu').slideUp('slow', function () {
            $(this).next('.sub-menu').slideToggle('slow');
            console.log('callback')
        });
        $(this).toggleClass('js-icon-change');
        $(this).next('.sub-menu').slideToggle('slow');

    })
})