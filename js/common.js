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
        var $clickedElem = $(this);
        var $siblings = $(this).parent('.menu-item-has-children').siblings().children('.sub-menu');
        $($siblings).each(function () {
            $(this).slideUp('slow', function () {
                $($clickedElem).next('.sub-menu').slideToggle('slow');
            })
        })
        $(this).toggleClass('js-icon-change');


    })
})