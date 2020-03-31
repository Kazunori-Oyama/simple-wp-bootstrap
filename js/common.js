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
    $('.menu-item-has-children').on('click', function (event) {
        // event.stopPropagation()
        event.preventDefault();
        var $this = $(this);
        var $openElem = $('.js-icon-change');
        var $openElemId = $($openElem).attr('id');
        var $thisId = $this.attr('id')
        console.log($openElem);
        if ($openElem.length >= 1) {
            if ($openElemId == $thisId) {
                $this.find('.sub-menu').slideUp('slow');
                $this.toggleClass('js-icon-change');
            } else {
                $($openElem).toggleClass('js-icon-change');
                $($openElem).find('.sub-menu').slideUp('slow', function () {
                    $this.find('.sub-menu').slideDown('slow');
                    $this.toggleClass('js-icon-change');
                });
            }

        } else {
            $this.find('.sub-menu').slideDown('slow');
            $this.toggleClass('js-icon-change');
        }
    })
})