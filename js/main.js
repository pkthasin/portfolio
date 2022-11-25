// $(function(){
//    $(".slide_gall").bxSlider({
//     auto:true,
//     pause:1500,
//     autoHover:true,
//     autoControls:true,
//     autoControlsCombine:true
//    });

//    $("#notice-tab-wrap h4 a").on("click", tabmenu);

//    function tabmenu(e){
//     e.preventDefault();

//     var $ts = $(this);
//     var $next = $ts.parent().next();

//     if($next.is(":hidden")){
//         $("#notice-tab-wrap h4 a").removeClass("on");
//         $ts.addClass("on");
//         $("#notice-tab-wrap > div:visible").hide();
//         $next.show();
//     } // on을 토글하여 지금 메뉴를 숨기고 다음 메뉴를 보이게 함

//    }

//    $(".grid").isotope({
//     itemSelector: '.grid-item',
//     layoutMode: 'fitRows'
//    });
// });