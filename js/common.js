(function(win, $){
	var $html = $("html");
	var deviceSize = {
		pc:1009,
		tablet:801,
		mobile:800
	};

	function scrollShowHide(status){
		$html.css({
			"overflow-y":status
		});
	
		return $html.width();
	}
	
	var sc_w1 = scrollShowHide("hidden"); // mobile
		sc_w2 = scrollShowHide("scroll"); // pc, tablet
		sc_w3 = sc_w1 - sc_w2;

		// console.log(sc_w1); // 1920
		// console.log(sc_w2); // 1903
		// console.log(sc_w3); // 17
	
	if(sc_w3 > 0){
		deviceSize.pc = deviceSize.pc - sc_w3;
		deviceSize.tablet = deviceSize.tablet - sc_w3;
		deviceSize.mobile = deviceSize.mobile - sc_w3;
	}
	
	$(win).on("resize", function(){
		var w_size = $(win).width();
	
		if(w_size >= deviceSize.pc && !$("html").hasClass("pc")){
			$html.removeClass("mobile tablet").addClass("pc");
			scrollShowHide("scroll");
		} else if(w_size < deviceSize.pc && w_size >= deviceSize.tablet && !$("html").hasClass("tablet")){
			$html.removeClass("mobile pc").addClass("tablet");
			scrollShowHide("scroll");
		} else if(w_size <= deviceSize.mobile && !$("html").hasClass("mobile")){
			$html.removeClass("tablet pc").addClass("mobile");
	
			var menu_pos = parseInt($(".mobile-menu-wrap").css("left"));
	
			if(menu_pos >= 0){
				scrollShowHide("hidden");
			}
		}
	}); // window resize 이벤트 
	
	$(function(){
		$(win).trigger("resize"); // window가 resize시에 발생함

		$(document).on("mouseover focus", ".pc #gnb>ul>li>a, .tablet #gnb>ul>li>a", gnbPlay);
		//.pc .tablet mouseover, focus 이벤트 발생시 callback 함수 gnbPlay 호출

		$(document).on("click", ".mobile #gnb>ul>li:not(.no-sub)>a", gnbPlay);
		//.mobile click 이벤트 발생시 callback 함수 gnbPlay 호출
		
		function gnbPlay(){
			var $ts = $(this);

			if($("html").hasClass("mobile")){
				$(".mobile #gnb>ul>li>a").removeClass("on");
				$("#gnb ul ul:visible").slideUp(300);
				//모바일일시 실행

				if($ts.next().is(":hidden")){
					$ts.addClass("on");
					$ts.next().stop(true, true).slideDown(300);
				}
			} else {
				$("#gnb ul ul:visible").slideUp(300);
				$ts.next().stop(true, true).slideDown(300);
			}
		} // gnb 펼치는 함수

		$(document).on("mouseleave", ".pc #gnb, .tablet #gnb", gnbleave);
		//pc,tablet gnb에서 마우스가 벗어나면 함수 호출

		function gnbleave(){
			$("#gnb ul ul:visible").slideUp(300);
			$("#gnb>ul>li>a").removeClass("on");
		} // gnb 복귀 시키는 함수

		$(".mobile-menu-open button").on("click", function(){
			$(".mobile-menu-wrap").animate({"left":0}, 200);
			scrollShowHide("hidden");
		}); // 모바일 메뉴 open 버튼(left -1000 -> 0)

		$(".mobile-menu-close button").on("click", function(){
			$(".mobile-menu-wrap").animate({"left":"-1000px"}, 200);
			//-1000px 위치로 다시 숨기기
			scrollShowHide("scroll");
			gnbleave();
		}); // 모바일 메뉴 close 버튼
	});

}(window, jQuery));//IIFE window->win, jQuery->$

