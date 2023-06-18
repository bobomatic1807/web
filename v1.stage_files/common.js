

/*----------------------------------------------------------
    IE設定
----------------------------------------------------------*/
if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
  $('body').on("mousewheel", function () {
    event.preventDefault();
    var wd = event.wheelDelta;
    var csp = window.pageYOffset;
    window.scrollTo(0, csp - wd);
  });
}

/*----------------------------------------------------------
    ローディング設定
----------------------------------------------------------*/
var LoadEnd=false;
jQuery.event.add(window,"load",function() {
    var target=$("#loading");
    setTimeout(function(){
      LoadEnd=true;
      $("body").addClass('pageLoad');
      target.addClass('out');
      
      //スクロール表示
      ScrollView_func();
      setTimeout(function(){
        target.hide();
        ScrollView_func()
      },1000);
    },100);
    
});


/*----------------------------------------------------------
初期設定
----------------------------------------------------------*/
var WinScroll = 0;
var WinW = 0;
var WinH = 0;
//遅い割合
var delayScroll=0;

var zoomWidth;

(function() {
  $("body").addClass("loadStart");


  function init(){
    WinScroll = $(window).scrollTop();
    WinW = $(window).width();
    WinH = window.innerHeight ? window.innerHeight : $(window).height();
    
    $(".hero_full_center_text_block").height(WinH);
    $(".hero_full_center_text_block").width(WinW);
    zoomWidth=WinW;
    
  /*----------------------------------------------------------
   cookie
  ----------------------------------------------------------*/
  console.log("cookie:"+$.cookie("karimoku-casestudies"))
  if($.cookie("karimoku-casestudies")!="view"){
    $("#cookie_modal").show();
  }else{
    
  }

/*----------------------------------------------------------
    ブラウザバック
----------------------------------------------------------*/
history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
window.addEventListener('popstate', function(e) {
  // alert('ブラウザバックを検知しました。');
  window.location.reload();
});

  /*----------------------------------------------------------
   pjax
  ----------------------------------------------------------*/
    // $.pjax({
    //     area : '#wrapper',
    //     //link : 'a:not([target])',
    //     link : 'a.change',
    //     ajax: { timeout: 2500},
    //     wait: 500
    // });
    // $(document).bind('pjax:fetch', function(){
    //   $("#loading").removeClass("out");
    //   $('body').removeClass("menu_active");
    // });
    // $(document).bind('pjax:render', function(){
    //   scroll_resize();
    //   setTimeout(function(){
    //     $("#loading").addClass("out");
    //   },2000);
    // });

    /*クッキー
    ----------------------------------------------------------*/
    $('.cookie_modal .inner .btn a').on("click", function (e) {
      e.preventDefault();
      $.cookie("karimoku-casestudies" , "view" , {  path: "/" });
      $(".cookie_modal").addClass("out");
    });


    /*クリック禁止
    ----------------------------------------------------------*/
    $('.block_header .inner .lang_change a.icon').on("click", function (e) {
      e.preventDefault();
    });

    /*ヘッダー
    ----------------------------------------------------------*/
    $('a.toggle').on("click", function (e) {
      e.preventDefault();
      if($("body").hasClass("menu_open")){
        $("body").removeClass("menu_open");
      }else{
        $("body").addClass("menu_open");
      }
    });

    /*言語切り替え
    ----------------------------------------------------------*/
    //日本語
    if($("body").hasClass("lang-jp")){
        $('.block_header .inner .lang_change ul.l_m li:nth-child(1) a,.navigation .inner ul.lang li:nth-child(1) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(1) a').on("click", function (e) {
          e.preventDefault();
          var host = location.hostname ;
          var path  = location.pathname ;
          var result = path.split("jp/");
          var target_url="/"+result[1];
          location.href=target_url;
        });
        $('.block_header .inner .lang_change ul.l_m li:nth-child(2) a,.navigation .inner ul.lang li:nth-child(2) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(2) a').on("click", function (e) {
          e.preventDefault();
        });
        $('.block_header .inner .lang_change ul.l_m li:nth-child(3) a,.navigation .inner ul.lang li:nth-child(3) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(3) a').on("click", function (e) {
          e.preventDefault();
          var host = location.hostname ;
          var path  = location.pathname ;
          var result = path.split("jp/");
          var target_url="/zh-cn/"+result[1];
          location.href=target_url;
        });
        $('.block_header .inner .lang_change ul.l_m li:nth-child(4) a,.navigation .inner ul.lang li:nth-child(4) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(4) a').on("click", function (e) {
          e.preventDefault();
          var host = location.hostname ;
          var path  = location.pathname ;
          var result = path.split("jp/");
          var target_url="/zh-tw/"+result[1];
          location.href=target_url;
        });

    //中文簡体字
    }else if($("body").hasClass("lang-cn")){
      $('.block_header .inner .lang_change ul.l_m li:nth-child(1) a,.navigation .inner ul.lang li:nth-child(1) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(1) a').on("click", function (e) {
        e.preventDefault();
        var host = location.hostname ;
        var path  = location.pathname ;
        var result = path.split("zh-cn/");
        var target_url="/"+result[1];
        location.href=target_url;
      });
      $('.block_header .inner .lang_change ul.l_m li:nth-child(2) a,.navigation .inner ul.lang li:nth-child(2) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(2) a').on("click", function (e) {
        e.preventDefault();
        var host = location.hostname ;
        var path  = location.pathname ;
        var result = path.split("zh-cn/");
        var target_url="/jp/"+result[1];
        location.href=target_url;
      });
      $('.block_header .inner .lang_change ul.l_m li:nth-child(3) a,.navigation .inner ul.lang li:nth-child(3) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(3) a').on("click", function (e) {
        e.preventDefault();
      });
      $('.block_header .inner .lang_change ul.l_m li:nth-child(4) a,.navigation .inner ul.lang li:nth-child(4) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(4) a').on("click", function (e) {
        e.preventDefault();
        var host = location.hostname ;
        var path  = location.pathname ;
        var result = path.split("zh-cn/");
        var target_url="/zh-tw/"+result[1];
        location.href=target_url;
      });

    //中文繁体字
  }else if($("body").hasClass("lang-tw")){
    $('.block_header .inner .lang_change ul.l_m li:nth-child(1) a,.navigation .inner ul.lang li:nth-child(1) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(1) a').on("click", function (e) {
      e.preventDefault();
      var host = location.hostname ;
      var path  = location.pathname ;
      var result = path.split("zh-tw/");
      var target_url="/"+result[1];
      location.href=target_url;
    });
    $('.block_header .inner .lang_change ul.l_m li:nth-child(2) a,.navigation .inner ul.lang li:nth-child(2) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(2) a').on("click", function (e) {
      e.preventDefault();
      var host = location.hostname ;
      var path  = location.pathname ;
      var result = path.split("zh-tw/");
      var target_url="/jp/"+result[1];
      location.href=target_url;
    });
    $('.block_header .inner .lang_change ul.l_m li:nth-child(3) a,.navigation .inner ul.lang li:nth-child(3) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(3) a').on("click", function (e) {
      e.preventDefault();
      var host = location.hostname ;
      var path  = location.pathname ;
      var result = path.split("zh-tw/");
      var target_url="/zh-cn/"+result[1];
      location.href=target_url;
    });
    $('.block_header .inner .lang_change ul.l_m li:nth-child(4) a,.navigation .inner ul.lang li:nth-child(4) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(4) a').on("click", function (e) {
      e.preventDefault();
    });
}else{
  $('.block_header .inner .lang_change ul.l_m li:nth-child(1) a,.navigation .inner ul.lang li:nth-child(1) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(1) a').on("click", function (e) {
    e.preventDefault();
  });
  $('.block_header .inner .lang_change ul.l_m li:nth-child(2) a,.navigation .inner ul.lang li:nth-child(2) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(2) a').on("click", function (e) {
    e.preventDefault();
    var host = location.hostname ;
    var path  = location.pathname ;
    // var result = path.split("zh-tw/");
    var target_url="/jp/"+path;
    location.href=target_url;
  });
  $('.block_header .inner .lang_change ul.l_m li:nth-child(3) a,.navigation .inner ul.lang li:nth-child(3) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(3) a').on("click", function (e) {
    e.preventDefault();
    var host = location.hostname ;
    var path  = location.pathname ;
    // var result = path.split("zh-tw/");
    var target_url="/zh-cn/"+path;
    location.href=target_url;
  });
  $('.block_header .inner .lang_change ul.l_m li:nth-child(4) a,.navigation .inner ul.lang li:nth-child(4) a,.footer_block .first .inner .column dl dd ul.lang li:nth-child(4) a').on("click", function (e) {
    e.preventDefault();
    var host = location.hostname ;
    var path  = location.pathname ;
    // var result = path.split("zh-tw/");
    var target_url="/zh-cn/"+path;
    location.href=target_url;
  });
}
    // //中文繁体字
    // }else if($("body").hasClass("lang-cn")){
    //   $('.block_header .inner .lang_change ul.l_m li:nth-child(1) a span').on("click", function (e) {
    //     e.preventDefault();
    //     var host = location.hostname ;
    //     var path  = location.pathname ;
    //     var result = path.split("jp/");
    //     var target_url="/"+result[1];
    //     location.href=target_url;
    //   });
    //   $('.block_header .inner .lang_change ul.l_m li:nth-child(2) a span').on("click", function (e) {
    //     e.preventDefault();
    //   });
    // }else{
    //   $('.block_header .inner .lang_change ul.l_m li:nth-child(1) a span').on("click", function (e) {
    //     e.preventDefault();
    //   });
      // $('.block_header .inner .lang_change ul.l_m li:nth-child(2) a span').on("click", function (e) {
      //   e.preventDefault();
      //   var host = location.hostname ;
      //   var path  = location.pathname ;
      //   //var result = path.split("wp/");
      //   var target_url="/jp/"+path;
      //   // alert(target_url)
      //   location.href=target_url;
      // });
    // }

    /*ドロップダウンメニュー
    ----------------------------------------------------------*/
    $('.hero_text_left_min_block .inner .sort_area .now a').on("click", function (e) {
      e.preventDefault();
      if($(this).parent().parent().hasClass("view")){
        $(this).parent().parent().removeClass("view");
      }else{
        $(this).parent().parent().addClass("view");
      }
    });
    $('.hero_text_left_min_block .inner .sort_area .dropdown ul li a').on("click", function (e) {
      e.preventDefault();
      $(".hero_text_left_min_block .inner .sort_area .now a span").text($(this).text());
      $(".hero_text_left_min_block .inner .sort_area").removeClass("view");
      var target=$(this).attr("href");
      location.href=target;
    });

    
    $(".navigation .inner .lang_change a.icon").on("click", function (e) {
      e.preventDefault();
      if(!$(this).parent().hasClass("toggleview")){
        $(this).parent().addClass("toggleview");
        $(this).parent().find("ul.lang").slideDown(400);
      }else{
        $(this).parent().removeClass("toggleview");
        $(this).parent().find("ul.lang").slideUp(400);
      }
    });

    /*NEWSロードモア
    ----------------------------------------------------------*/
    if($(".list_news_block .list .column").length<=10){
      $('.list_news_block .load_more').hide();
    }else{
      $('.list_news_block .load_more a').on("click", function (e) {
        e.preventDefault();
        $(".list_news_block .list").addClass("allview");
        $('.list_news_block .load_more').hide();
      });
    }

    /*絞り込み検索
    ----------------------------------------------------------*/
    var now_category="all";
    var now_case_study="all";
    $('.hero_text_center_block .inner .filter .list dl dd ul#category li a').on("click", function (e) {
      e.preventDefault();
      now_category=$(this).attr("href");
      $('.hero_text_center_block .inner .filter .list dl dd ul#category li a').removeClass("active");
      $(this).addClass("active");
      console.log("category:"+now_category);
      SearchFurniture();
    });
    $('.hero_text_center_block .inner .filter .list dl dd ul#case_study li a').on("click", function (e) {
      e.preventDefault();
      now_case_study=$(this).attr("href");
      $('.hero_text_center_block .inner .filter .list dl dd ul#case_study li a').removeClass("active");
      $(this).addClass("active");
      console.log("case_study:"+now_case_study);
      SearchFurniture();
    });

    function SearchFurniture(){

      //category
      if(now_category=="all"){
        $('.list_furniture_block .inner .list_case .list .column').each(function(index) {
          $(this).show();
        });
      }else{
        $('.list_furniture_block .inner .list_case .list .column').each(function(index) {
          var this_category=$(this).attr("data-category");
          var target_category=now_category;
          $(this).show();
          if(this_category!=target_category){
            $(this).hide();
          }
        });
      }


      //case_study
      if(now_case_study=="all"){
        $('.list_furniture_block .inner .list_case').each(function(index) {
          $(this).show();
        });
      }else{
        $('.list_furniture_block .inner .list_case').each(function(index) {
          var case_study=$(this).attr("id");
          var target_case="case_study-"+now_case_study;
          $(this).show();
          if(target_case!=case_study){
            $(this).hide();
          }
        });
      }

    }

    /*スペック調整*/
      $('.spec_block ul.header > li ul.atai').each(function(index) {
        if(!$(this).find("li").length){
          $(this).parent().hide();
        }
      });
      $('.spec_block ul.header > li:first-child').show();
    
    

    /*スライドズーム
    ----------------------------------------------------------*/
    if($("#scroll_size").length){
      $('.slide_block .slide_area .slide .column a').click(function (e) {
        var target=$(this).attr("href");
        e.preventDefault();
        var in_top=$(this).find("figure").offset().top-WinScroll;
        var in_left=$(this).find("figure").offset().left;
        var in_width=$(this).find("figure").width();
        var in_height=$(this).find("figure").height();
        $("body").removeClass("top");
        $("body").addClass("page");
        $(this).addClass("zoom");
        $(this).find("figure").css({"width":in_width,"height":in_height,"top":in_top,"left":in_left}).animate({
          top: '0', 
          left: '0',
          width:$("#wrapper").width(),
          height: '100%'
        }, 400,'easeOutCubic',  function() {
          //alert($(this).width())
          //alert(zoomWidth)
          // アニメーション完了後に実行する処理
         location.href=target;
        });
      });
    }
    if($(".list_furniture_block").length){
      $('.list_furniture_block .inner .list_case .list .column a').click(function (e) {
        var target=$(this).attr("href");
        e.preventDefault();
        var in_top=$(this).find(".over").offset().top-WinScroll;
        var in_left=$(this).find(".over").offset().left;
        var in_width=$(this).find(".over").width();
        var in_height=$(this).find(".over").height();
        // $("body").removeClass("top");
        // $("body").addClass("page");
        $(this).addClass("zoom");
        $(this).find(".over").css({"width":in_width,"height":in_height,"top":in_top,"left":in_left}).animate({
          top: '0', 
          left: '0',
          width:$("#wrapper").width(),
          height: '100%'
        }, 400,'easeOutCubic',  function() {
          // アニメーション完了後に実行する処理
          location.href=target;
        });
      });
    }
    
    /*フィルター
    ----------------------------------------------------------*/
    $('.hero_text_center_block .inner .filter .filter_title a').on("click", function (e) {
      e.preventDefault();
      if($(this).parent().parent().hasClass("view")){
        $(this).parent().parent().removeClass("view");
      }else{
        $(this).parent().parent().addClass("view");
      }
    });
    /*ページスクロール
    ----------------------------------------------------------*/
    $('a[target-scroll]').click(function (e) {
      var target=$(this).attr("target-scroll");
      if(target!=""){
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop:$(target).offset().top-50},800, 'easeInOutExpo');
      }
    });

    /*ボードスライド
    ----------------------------------------------------------*/
    if(WinW<=768){
      $('.block_board .list').slick({
        accessibility: false,// アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
        autoplay: false, // 自動再生。trueで自動再生される。
        autoplaySpeed: 3000,// 自動再生で切り替えをする時間
        speed: 400, // 自動再生や左右の矢印でスライドするスピード
        pauseOnHover: false, // 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
        pauseOnDotsHover: false,// 自動再生時にドットにマウスオンで一時停止するかどうか
        cssEase: 'ease', // 切り替えのアニメーション。ease,linear,ease-in,ease-out,ease-in-out
        dots: false,// 画像下のドット（ページ送り）を表示
        draggable: true,// ドラッグができるかどうか
        fade: false,// 切り替え時のフェードイン設定。trueでon
        arrows: false,// 左右の次へ、前へボタンを表示するかどうか
        infinite: true,// 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
        initialSlide: 0,// 最初のスライダーの位置
        lazyLoad: 'ondemand',// 画像の遅延表示。‘ondemand’or'progressive'
        slidesToShow: 1,// スライドのエリアに画像がいくつ表示されるかを指定
        slidesToScroll: 1,// 一度にスライドする数
        swipe: true,// タッチスワイプに対応するかどうか
        vertical: false,// 縦方向へのスライド
      　centerMode: true,// 表示中の画像を中央へ
        variableWidth: true,// 中央のpadding
        centerPadding: 0
      }).on('reInit init', function(event, slick, currentSlide, nextSlide){
        //console.log("reInit init : "+currentSlide);
      }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        //console.log("beforeChange : "+currentSlide);
      }).on('afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
      })
    }
    

  }　//end :init


  /*----------------------------------------------------------
    スクロール・リサイズ
  ----------------------------------------------------------*/
  var pastScroll=0;
  function scroll_resize(){
    WinScroll = $(window).scrollTop();
    WinW = window.innerWidth ? window.innerWidth: $(window).width();
    WinH = window.innerHeight ? window.innerHeight : $(window).height();

    
    /*スライド
    ----------------------------------------------------------*/
    if($(".slide_block .slide_area .slide .column").length>1){
      $("#scroll_size").height($(".slide_block .slide_area .slide").width()+WinH-WinW);
      $(".slide_block .slide_area .slide").css("left",-WinScroll);
      
    }

    /*ヘッダー
    ----------------------------------------------------------*/
    if($("body.page").length){
      if(WinScroll>10){
        $("body").addClass("onScroll");
      }else{
        $("body").removeClass("onScroll");
      }
      if(pastScroll>WinScroll){
        $("body").addClass("viewHeader");
        if(!$("body").hasClass("h_bk")){
          if(WinScroll<WinH-45){
            $("body").addClass("still_w");
          }else{
            $("body").removeClass("still_w");
          }
        }
      }else{
        $("body").removeClass("viewHeader");
      }

    }
    
    /*カラム入れ替え
    ----------------------------------------------------------*/
    $('.two_column_area').each(function(index) {
      if(WinW<=768){
      }

    });

    //スクロール表示
    ScrollView_func();

    pastScroll=WinScroll;
  }

  $(window).on('load', init);
  $(window).on('orientationchange load scroll resize', scroll_resize);

  function Rewindow(){
    WinScroll = $(window).scrollTop();
    WinW = window.innerWidth ? window.innerWidth: $(window).width();
    WinH = window.innerHeight ? window.innerHeight : $(window).height();
    if(WinW>768){
      $(".hero_full_center_text_block").height(WinH);
      $(".hero_full_center_text_block").width(WinW);
    }
  }
  $(window).on('resize', Rewindow);
})();


//スクロール表示
function ScrollView_func(){
  $('.scrollview').each(function(index) {
    if(LoadEnd&&WinScroll>$(this).offset().top-WinH*0.9){
      $(this).addClass("view");
    }else{
      $(this).removeClass("view");
    }
  });
  $('.scrollview_fix').each(function(index) {
    if(LoadEnd&&WinScroll>$(this).offset().top-WinH*0.9){
      $(this).addClass("view");
    }else{
      $(this).removeClass("view");
    }
  });
}

/*----------------------------------------------------------
transform
----------------------------------------------------------*/
function cssTransition(duration,delay,easing){
  var css = duration +'s '+ delay +'s '+easing;
  return {
    "-webkit-transition" : css,
    "-moz-transition"    : css,
    "-o-transition"      : css,
    "-ms-transition"     : css,
    "transition"         : css
  }
}

function cssTransform(x,y){
  var css = "scale(1.3,1.3) translate3d("+x+"px,"+y+"px,0px) rotate(-0deg)";
  return {
    "-webkit-transform" : css,
    "-moz-transform"    : css,
    "-o-transform"      : css,
    "-ms-transform"     : css,
    "transform"         : css
  }
}

/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});