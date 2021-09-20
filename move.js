$(function(){
    $('.l-hamburgerbtn--close').click(function(){
        $(this).toggleClass('l-hamburgerbtn--open');/*ボタンが×に代わる*/
        $('#slide').slideToggle(230);
    });
});

$(function(){
    $('.l-hamburgerbtn--close').click(function(){
        $('.l-header__nav').toggleClass('l-header__nav--open');/*ダウンメニューの表示*/
    });
});
