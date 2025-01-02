$(document).ready(function(){
	var myWin = $(window).width();
	var setCnt = $(".set_common").length;	// 메인TOP배너 상품갯수
	var tempIdx;							// SET 상품 인덱스용 (ex : .set_01)

	var autAni = new TimelineLite();

	//s::20210118 수정
	if (myWin > 959) {

		autAni.append(TweenMax.to($('.main-visual_slogan'), .5, {css:{opacity:1}}));

		// 메인 TOP배너 SET상품 갯수에 따라 TweenMax 이벤트를 동적으로 생성 (박태현)
		for(var i=1; i<=setCnt; i++){
			(i<10) ? tempIdx = "0" + i : tempIdx = i;	// 인덱스를 2자리 이상으로 생성
			autAni.append(TweenMax.to($('.set_' + tempIdx), .5, {css:{opacity:1}}));
		}
		autAni.append(TweenMax.to($('.btn_slogan'), .5, {css:{opacity:1}}));

		/*
		// 기존코드 백업
		autAni
			.append(TweenMax.to($('.set_01'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_02'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_03'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_04'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_05'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_slogan'), .5, {css:{opacity:1}}))
		*/

		var controller = $.superscrollorama({
			triggerAtCenter: true
		});

	}else {
		autAni.append(TweenMax.to($('.main-visual_slogan'), .5, {css:{opacity:1}}));
		for(var i=1; i<=setCnt; i++){
			(i<10) ? tempIdx = "0" + i : tempIdx = i;
			autAni.append(TweenMax.to($('.set_' + tempIdx), .5, {css:{opacity:1}}));
		}
		autAni.append(TweenMax.to($('.btn_slogan'), .5, {css:{opacity:1}}));
		/*
		// 기존코드 백업
		autAni
			.append(TweenMax.to($('.main-visual_slogan'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_01'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_02'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_03'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_04'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_05'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_slogan'), .5, {css:{opacity:1}}))
		*/

		var controller = $.superscrollorama({
			triggerAtCenter: true
		});
	}
	//e::20210118 수정

	//Bean
	var controller = $.superscrollorama({
		triggerAtCenter: true
	});
	//s::20201224 수정
	if (myWin > 641) {

		var controller = $.superscrollorama();

		var controller = $.superscrollorama();

		controller.addTween(10, TweenMax.to($('.bean_img_box'), .3, {opacity: 0, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_img_box'), 2.0, {left:'-100%', opacity: 0, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.to($('.bean_txt_box'), .3, {opacity: 0, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_txt_box'), 2.5, {right:'-100%', opacity: 0, ease: Quad.easeOut}), 1, 0);

		/*
		// 기존코드 백업
		controller.addTween(10, TweenMax.to($('.bean_img_box'), .3, {css:{left:'13%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_img_box'), 2.0, {css:{left:'-100%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.to($('.bean_txt_box'), .3, {css:{right:'22%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_txt_box'), 2.5, {css:{right:'-100%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		*/
	} else if (myWin <= 660) {

		/*
		// 기존코드 백업
		controller.addTween(10, TweenMax.to($('.bean_img_box'), 1, {css:{top:'0', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_img_box'), 2.5, {css:{top:'-50%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.to($('.bean_txt_box'), 1, {css:{bottom:'-3%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_txt_box'), 2.5, {css:{bottom:'-50%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		*/

		controller.addTween(10, TweenMax.to($('.bean_img_box'), .3, {opacity: 0, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_img_box'), 2.0, {top:'-50%', opacity: 0, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.to($('.bean_txt_box'), .3, {opacity: 0, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_txt_box'), 2.5, {bottom:'-50%', opacity: 0, ease: Quad.easeOut}), 1, 0);
	}
	//e::20201224 수정
});