$(function(){
    $('.l-hamburgerbtn--close').click(function(){
        $(this).toggleClass('l-hamburgerbtn--open');/*ボタンが×に代わる*/
        $('#slide').slideToggle(230);
        $('.l-header__nav').toggleClass('open');
    });
});

$(function(){
    $('#return a[href]').on('click', function(event) {　/*ナビをクリックするとボタンとメニューが閉じる*/ 
        $('.l-hamburgerbtn--close').trigger('click');
    });
});

$(function() {
    $.scrollify({
      section : "section",
      scrollbars:"false",//スクロールバー表示・非表示設定
      interstitialSection : "header,footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
      easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
      scrollSpeed: 300, // スクロール時の速度
    });
  });