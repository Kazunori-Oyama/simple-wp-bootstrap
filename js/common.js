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
        event.stopPropagation()
        event.preventDefault();
        var $thisParent = $(this).parent('.menu-item-has-children');
        var $openElem = $('.js-icon-change');
        var $openElemId = $($openElem).attr('id');
        var $thisId = $thisParent.attr('id')
        console.log($openElem);
        if ($openElem.length >= 1) {
            if ($openElemId == $thisId) {
                $thisParent.find('.sub-menu').slideUp('slow');
                $thisParent.toggleClass('js-icon-change');
            } else {
                $($openElem).toggleClass('js-icon-change');
                $($openElem).find('.sub-menu').slideUp('slow', function () {
                    $thisParent.find('.sub-menu').slideDown('slow');
                    $thisParent.toggleClass('js-icon-change');
                });
            }

        } else {
            $thisParent.find('.sub-menu').slideDown('slow');
            $thisParent.toggleClass('js-icon-change');
        }
    })
})