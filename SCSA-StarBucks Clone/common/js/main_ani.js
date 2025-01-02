
$(document).ready(function(){

	$("#prevBtn a").on("click",function(e){
		mvbSlider.goToPrevSlide();
		e.preventDefault();
	});

	$("#nextBtn a").on("click",function(e){
		mvbSlider.goToNextSlide();
		e.preventDefault();
	});

	var myWin = $(window).width();
	var myWindow = $(window).width();
	var bnrAni = new TimelineLite();

	if (myWin > 1099) {

		bnrAni

			/* winter */
			.append(TweenMax.to($('.winter_mug01'), .5, {css:{opacity:1, right:'397px', top:'-11px'}}))
			.append(TweenMax.to($('.coffee_name01'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug02'), .5, {css:{opacity:1, right:'217px', top:'142px'}}))
			.append(TweenMax.to($('.coffee_name02'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug03'), .5, {css:{bottom:'-130px', opacity:1, right:'552px'}}))
			.append(TweenMax.to($('.coffee_name03'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug04'), .5, {css:{bottom:'73px', opacity:1, right:'649px'}}))
			.append(TweenMax.to($('.coffee_name04'), .8, {css:{opacity:1}}))
			/* winter end */

			/* monkey */
			.append(TweenMax.to($('.monkey_ani_wrap'), .4, {css:{opacity:1}}))
			/* monkey end */

			/* valentine */
			.append(TweenMax.to($('.valentine_ani_wrap2'), .4, {css:{opacity:1}}))
			/* valentine end */

			.append(TweenMax.to($('.autumn2_main_ttl'), .7, {css:{height:'123px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_img'), .3, {css:{top:'135px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.coffee2_img'), .3, {css:{top:'97px', opacity:1}}))
			.append(TweenMax.to($('.coffee2_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn2_ani_wrap a.btn_see_autumn2'), .7, {css:{opacity:1}}))

			.append(TweenMax.to($('.autumn_txt1'), .3, {css:{left:'466px', opacity:1}}))
			.append(TweenMax.to($('.autumn_txt2'), .7, {css:{left:'594px', opacity:1}}))
			.append(TweenMax.to($('.autumn_cup1'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_cup2'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_bev_ttl'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn_ani_wrap a.btn_see_detail'), .7, {css:{opacity:1}}));

	} else if ((myWindow > 960) && (myWindow <= 1099)) {

		bnrAni

			/* winter */
			.append(TweenMax.to($('.winter_mug01'), .5, {css:{opacity:1, right:'450px', top:'-11px'}}))
			.append(TweenMax.to($('.coffee_name01'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug02'), .5, {css:{opacity:1, right:'217px', top:'142px'}}))
			.append(TweenMax.to($('.coffee_name02'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug03'), .5, {css:{bottom:'-130px', opacity:1, right:'552px'}}))
			.append(TweenMax.to($('.coffee_name03'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug04'), .5, {css:{bottom:'73px', opacity:1, right:'649px'}}))
			.append(TweenMax.to($('.coffee_name04'), .8, {css:{opacity:1}}))
			/* winter end */

			/* monkey */
			.append(TweenMax.to($('.monkey_ani_wrap'), .4, {css:{opacity:1}}))
			/* monkey end */

			/* valentine */
			.append(TweenMax.to($('.valentine_ani_wrap2'), .4, {css:{opacity:1}}))
			/* valentine end */

			.append(TweenMax.to($('.autumn2_main_ttl'), .7, {css:{height:'123px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_img'), .3, {css:{top:'235px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.coffee2_img'), .3, {css:{top:'200px', opacity:1}}))
			.append(TweenMax.to($('.coffee2_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn2_ani_wrap a.btn_see_autumn2'), .7, {css:{opacity:1}}))

			.append(TweenMax.to($('.autumn_txt1'), .3, {css:{left:'560px', opacity:1}}))
			.append(TweenMax.to($('.autumn_txt2'), .7, {css:{left:'594px', opacity:1}}))
			.append(TweenMax.to($('.autumn_cup1'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_cup2'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_bev_ttl'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn_ani_wrap a.btn_see_detail'), .7, {css:{opacity:1}}));

	} else if ((myWindow > 660) && (myWindow <= 960)) {

		bnrAni

			/* winter */
			.append(TweenMax.to($('.winter_mug01'), .5, {css:{opacity:1, right:'892px', top:'56px'}}))
			.append(TweenMax.to($('.coffee_name01'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug02'), .5, {css:{opacity:1, right:'925px', top:'377px'}}))
			.append(TweenMax.to($('.coffee_name02'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug03'), .5, {css:{bottom:'-139px', opacity:1, right:'635px'}}))
			.append(TweenMax.to($('.coffee_name03'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug04'), .5, {css:{bottom:'20px', opacity:1, right:'701px'}}))
			.append(TweenMax.to($('.coffee_name04'), .8, {css:{opacity:1}}))
			/* winter end */

			/* monkey */
			.append(TweenMax.to($('.monkey_ani_wrap'), .4, {css:{opacity:1}}))
			/* monkey end */

			/* valentine */
			.append(TweenMax.to($('.valentine_ani_wrap2'), .4, {css:{opacity:1}}))
			/* valentine end */

			.append(TweenMax.to($('.autumn2_main_ttl'), .7, {css:{height:'110px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_img'), .3, {css:{top:'275px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.coffee2_img'), .3, {css:{top:'240px', opacity:1}}))
			.append(TweenMax.to($('.coffee2_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn2_ani_wrap a.btn_see_autumn2'), .7, {css:{opacity:1}}))

			.append(TweenMax.to($('.autumn_txt1'), .3, {css:{left:'690px', opacity:1}}))
			.append(TweenMax.to($('.autumn_txt2'), .7, {css:{left:'730px', opacity:1}}))
			.append(TweenMax.to($('.autumn_cup1'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_cup2'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_bev_ttl'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn_ani_wrap a.btn_see_detail'), .7, {css:{opacity:1}}));

	} else if ((myWindow > 480) && (myWindow <= 660)) {

		bnrAni

			/* winter */
			.append(TweenMax.to($('.winter_mug01'), .5, {css:{opacity:1, right:'680px', top:'198px'}}))
			.append(TweenMax.to($('.coffee_name01'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug02'), .5, {css:{opacity:1, right:'951px', top:'316px'}}))
			.append(TweenMax.to($('.coffee_name02'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug03'), .5, {css:{bottom:'-55px', opacity:1, right:'721px'}}))
			.append(TweenMax.to($('.coffee_name03'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug04'), .5, {css:{bottom:'307px', opacity:1, right:'955px'}}))
			.append(TweenMax.to($('.coffee_name04'), .8, {css:{opacity:1}}))
			/* winter end */

			/* monkey */
			.append(TweenMax.to($('.monkey_ani_wrap'), .4, {css:{opacity:1}}))
			/* monkey end */

			/* valentine */
			.append(TweenMax.to($('.valentine_ani_wrap2'), .4, {css:{opacity:1}}))
			/* valentine end */

			.append(TweenMax.to($('.autumn2_main_ttl'), .7, {css:{height:'87px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_img'), .3, {css:{top:'245px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.coffee2_img'), .3, {css:{top:'240px', opacity:1}}))
			.append(TweenMax.to($('.coffee2_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn2_ani_wrap a.btn_see_autumn2'), .7, {css:{opacity:1}}))

			.append(TweenMax.to($('.autumn_txt1'), .3, {css:{left:'810px', opacity:1}}))
			.append(TweenMax.to($('.autumn_txt2'), .7, {css:{left:'870px', opacity:1}}))
			.append(TweenMax.to($('.autumn_cup1'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_cup2'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_bev_ttl'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn_ani_wrap a.btn_see_detail'), .7, {css:{opacity:1}}));

	} else if ((myWindow > 320) && (myWindow <= 480)) {

		bnrAni

			/* winter */
			.append(TweenMax.to($('.winter_mug01'), .5, {css:{opacity:1, right:'810px', top:'174px'}}))
			.append(TweenMax.to($('.coffee_name01'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug02'), .5, {css:{opacity:1, right:'935px', top:'345px'}}))
			.append(TweenMax.to($('.coffee_name02'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug03'), .5, {css:{bottom:'142px', opacity:1, right:'832px'}}))
			.append(TweenMax.to($('.coffee_name03'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug04'), .5, {css:{bottom:'380px', opacity:1, right:'972px'}}))
			.append(TweenMax.to($('.coffee_name04'), .8, {css:{opacity:1}}))
			/* winter end */

			/* monkey */
			.append(TweenMax.to($('.monkey_ani_wrap'), .4, {css:{opacity:1}}))
			/* monkey end */

			/* valentine */
			.append(TweenMax.to($('.valentine_ani_wrap2'), .4, {css:{opacity:1}}))
			/* valentine end */

			.append(TweenMax.to($('.autumn2_main_ttl'), .7, {css:{height:'62px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_img'), .3, {css:{top:'245px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.coffee2_img'), .3, {css:{top:'200px', opacity:1}}))
			.append(TweenMax.to($('.coffee2_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn2_ani_wrap a.btn_see_autumn2'), .7, {css:{opacity:1}}))

			.append(TweenMax.to($('.autumn_txt1'), .3, {css:{left:'840px', opacity:1}}))
			.append(TweenMax.to($('.autumn_txt2'), .7, {css:{left:'900px', opacity:1}}))
			.append(TweenMax.to($('.autumn_cup1'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_cup2'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_bev_ttl'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn_ani_wrap a.btn_see_detail'), .7, {css:{opacity:1}}));

	} else {

		bnrAni

			/* winter */
			.append(TweenMax.to($('.winter_mug01'), .5, {css:{opacity:1, right:'810px', top:'174px'}}))
			.append(TweenMax.to($('.coffee_name01'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug02'), .5, {css:{opacity:1, right:'935px', top:'345px'}}))
			.append(TweenMax.to($('.coffee_name02'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug03'), .5, {css:{bottom:'142px', opacity:1, right:'832px'}}))
			.append(TweenMax.to($('.coffee_name03'), .8, {css:{opacity:1}}))
			.append(TweenMax.to($('.winter_mug04'), .5, {css:{bottom:'380px', opacity:1, right:'972px'}}))
			.append(TweenMax.to($('.coffee_name04'), .8, {css:{opacity:1}}))
			/* winter end */

			/* monkey */
			.append(TweenMax.to($('.monkey_ani_wrap'), .4, {css:{opacity:1}}))
			/* monkey end */

			/* valentine */
			.append(TweenMax.to($('.valentine_ani_wrap2'), .4, {css:{opacity:1}}))
			/* valentine end */

			.append(TweenMax.to($('.autumn2_main_ttl'), .7, {css:{height:'62px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_img'), .3, {css:{top:'230px', opacity:1}}))
			.append(TweenMax.to($('.coffee1_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.coffee2_img'), .3, {css:{top:'160px', opacity:1}}))
			.append(TweenMax.to($('.coffee2_txt'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn2_ani_wrap a.btn_see_autumn2'), .7, {css:{opacity:1}}))

			.append(TweenMax.to($('.autumn_txt1'), .3, {css:{left:'860px', opacity:1}}))
			.append(TweenMax.to($('.autumn_txt2'), .7, {css:{left:'890px', opacity:1}}))
			.append(TweenMax.to($('.autumn_cup1'), .3, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_cup2'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_bev_ttl'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.main_autumn_ani_wrap a.btn_see_detail'), .7, {css:{opacity:1}}));

	}

	var controller = $.superscrollorama({
		triggerAtCenter: true
	});

	if (myWindow > 1104) {

		var controller = $.superscrollorama();

		controller.addTween(10, TweenMax.from($('.bean_icon01'), .1, {css:{top:'-40px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.bean_icon01'), 1, {css:{top:'40px', opacity:1}, ease: Quad.easeOut}));

		controller.addTween(10, TweenMax.to($('.autumn_blend_bg'), .3, {css:{left:'-61px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn_blend_img'), .3, {css:{left:'-61px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.mybean_icon01'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.mybean_icon01'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.mybean_icon02'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.mybean_icon02'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.autumn_blend_txt1'), .3, {css:{right:'363px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn_blend_txt2'), .3, {css:{right:'246px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		/* winter */
		controller.addTween(10, TweenMax.to($('.winter_blend_bg'), .3, {css:{left:'-33px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter_blend_img'), .3, {css:{left:'-33px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.winter_blend_txt1'), .3, {css:{right:'329px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter_blend_txt2'), .3, {css:{right:'180px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.btn_winter_bean'), .3, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.btn_winter_bean'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		/* winter end */

		controller.addTween(10, TweenMax.to($('.katikati_txt01'), .3, {css:{right:'634px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.katikati_txt01'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.katikati_txt02'), .3, {css:{right:'588px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.katikati_txt02'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.mybean_btn'), .3, {css:{right:'410px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.mybean_btn'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		/*controller.addTween(10, TweenMax.from($('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.from($('.reserve_colombia_bg2, .reserve_colombia2'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.reserve_colombia_bg2, .reserve_colombia2'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.from($('.reserve_tanzinia_bg, .reserve_tanzinia'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.reserve_tanzinia_bg, .reserve_tanzinia'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);*/

		/* ����� ���̳� */
		controller.addTween(10, TweenMax.to($('.reserve_seminar_logo, .txt_main_rseminar, .btn_seminar1'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.reserve_seminar_logo, .txt_main_rseminar, .btn_seminar1'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.to($('.rseminar_obje'),3.0, {css:{opacity:1, right:'42px'}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.rseminar_obje'), 1.0, {css:{opacity:0, right:'-200px'}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.to($('.black_rseminar_txt, .btn_seminar2'), 3.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.black_rseminar_txt, .btn_seminar2'), 3.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		/* ����� ���̳� end */

		/* winter2 */
		controller.addTween(10, TweenMax.from($('.reserve_winter2_bg, .reserve_winter2_obje'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.reserve_winter2_bg, .reserve_winter2_obje'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);
		/* winter2 end */

		controller.addTween(10, TweenMax.to($('.fav_prod_txt01'), .3, {css:{left:'200px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.fav_prod_txt01'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.fav_prod_txt02'), .3, {css:{left:'92px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.fav_prod_txt02'), 2.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.btn_fav_prod'), .3, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.btn_fav_prod'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.to($('.menu_txt01'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_txt01'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.menu_txt02'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_txt02'), 2.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.menu_btn'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_btn'), 2.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.menu_img01'), .3, {css:{right:'476px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_img01'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}));

		controller.addTween(10, TweenMax.to($('.store_exp_img01'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img01'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img02'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img02'), 3.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img03'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img03'), 3.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img04'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img04'), 4.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween(10, TweenMax.to($('.store_txt01'), .3, {css:{right:'264px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_txt01'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_txt02'), .3, {css:{right:'287px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_txt02'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_btn'), .3, {css:{right:'476px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_btn'), 3.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		
		/* 161223 청담 모션 수정 */
		controller.addTween(10, TweenMax.to($('.chungdam_txt'), 1.5, {css:{right:'71px', opacity:1}, ease:Quad.easeOut}), 1, 3300);
		controller.addTween(10, TweenMax.to($('.chungdam_circle01'), 1.5, {css:{top:'94px', opacity:1}, delay:.5, ease:Quad.easeOut}), 1, 3300);
		controller.addTween(10, TweenMax.to($('.chungdam_circle02'), 1.5, {css:{top:'104px', opacity:1}, delay:1, ease:Quad.easeOut}), 1, 3300);
		controller.addTween(10, TweenMax.to($('.chungdam_circle03'), 1.5, {css:{top:'-60px', opacity:1}, delay:1.5, ease:Quad.easeOut}), 1, 3300);
		controller.addTween(10, TweenMax.to($('.btn_detail_chungdam'), 1.5, {css:{opacity:1}, delay:1, ease:Quad.easeOut}), 1, 3300);
		/* 161223 청담 모션 수정 end */

	} else if ((myWindow > 960) && (myWindow <= 1104)) {

		var controller = $.superscrollorama();

		controller.addTween(10, TweenMax.from($('.bean_icon01'), .1, {css:{top:'-40px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.bean_icon01'), 1, {css:{top:'40px', opacity:1}, ease: Quad.easeOut}));

		controller.addTween(10, TweenMax.to($('.autumn_blend_bg'), .3, {css:{left:'-61px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn_blend_img'), .3, {css:{left:'-61px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.mybean_icon01'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.mybean_icon01'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.mybean_icon02'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.mybean_icon02'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.autumn_blend_txt1'), .3, {css:{right:'363px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn_blend_txt2'), .3, {css:{right:'246px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		/* winter */
		controller.addTween(10, TweenMax.to($('.winter_blend_bg'), .3, {css:{left:'-33px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter_blend_img'), .3, {css:{left:'-33px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.winter_blend_txt1'), .3, {css:{right:'329px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter_blend_txt2'), .3, {css:{right:'180px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.btn_winter_bean'), .3, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.btn_winter_bean'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		/* winter end */

		controller.addTween(10, TweenMax.to($('.katikati_txt01'), .3, {css:{right:'634px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.katikati_txt01'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.katikati_txt02'), .3, {css:{right:'588px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.katikati_txt02'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.mybean_btn'), .3, {css:{right:'480px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.mybean_btn'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		/*controller.addTween(10, TweenMax.from($('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.from($('.reserve_colombia_bg2, .reserve_colombia2'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.reserve_colombia_bg2, .reserve_colombia2'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.from($('.reserve_tanzinia_bg, .reserve_tanzinia'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.reserve_tanzinia_bg, .reserve_tanzinia'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);*/

		
		/* ����� ���̳� */
		controller.addTween(10, TweenMax.to($('.reserve_seminar_logo, .txt_main_rseminar, .btn_seminar1'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.reserve_seminar_logo, .txt_main_rseminar, .btn_seminar1'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.to($('.rseminar_obje'),3.0, {css:{opacity:1, right:'42px'}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.rseminar_obje'), 1.0, {css:{opacity:0, right:'-200px'}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.to($('.black_rseminar_txt, .btn_seminar2'), 3.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.black_rseminar_txt, .btn_seminar2'), 3.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		/* ����� ���̳� end */

		/* winter2 */
		controller.addTween(10, TweenMax.from($('.reserve_winter2_bg, .reserve_winter2_obje'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.reserve_winter2_bg, .reserve_winter2_obje'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);
		/* winter2 end */

		controller.addTween(10, TweenMax.to($('.fav_prod_txt01'), .3, {css:{left:'220px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.fav_prod_txt01'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.fav_prod_txt02'), .3, {css:{left:'112px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.fav_prod_txt02'), 2.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.btn_fav_prod'), .3, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.btn_fav_prod'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.to($('.menu_txt01'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_txt01'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.menu_txt02'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_txt02'), 2.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.menu_btn'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_btn'), 2.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.menu_img01'), .3, {css:{right:'476px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_img01'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}));

		controller.addTween(10, TweenMax.to($('.store_exp_img01'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img01'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img02'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img02'), 3.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img03'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img03'), 3.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img04'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img04'), 4.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween(10, TweenMax.to($('.store_txt01'), .3, {css:{right:'264px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_txt01'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_txt02'), .3, {css:{right:'287px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_txt02'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_btn'), .3, {css:{right:'476px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_btn'), 3.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		
		/* 161223 청담 모션 수정 */
		controller.addTween(10, TweenMax.to($('.chungdam_txt'), 1.5, {css:{right:'71px', opacity:1}, ease:Quad.easeOut}), 1, 3300);
		controller.addTween(10, TweenMax.to($('.chungdam_circle01'), 1.5, {css:{top:'94px', opacity:1}, delay:.5, ease:Quad.easeOut}), 1, 3300);
		controller.addTween(10, TweenMax.to($('.chungdam_circle02'), 1.5, {css:{top:'104px', opacity:1}, delay:1, ease:Quad.easeOut}), 1, 3300);
		controller.addTween(10, TweenMax.to($('.chungdam_circle03'), 1.5, {css:{top:'-60px', opacity:1}, delay:1.5, ease:Quad.easeOut}), 1, 3300);
		controller.addTween(10, TweenMax.to($('.btn_detail_chungdam'), 1.5, {css:{opacity:1}, delay:1, ease:Quad.easeOut}), 1, 3300);
		/* 161223 청담 모션 수정 end */

	} else if ((myWindow > 640) && (myWindow <= 960)) {

		var controller = $.superscrollorama();

		controller.addTween(10, TweenMax.from($('.bean_icon01'), .1, {css:{top:'-40px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.bean_icon01'), 1, {css:{top:'40px', opacity:1}, ease: Quad.easeOut}));

		controller.addTween(10, TweenMax.from($('.autumn_blend_bg'), 1.5, {css:{top:'-37px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn_blend_bg'), 1.5, {css:{top:'30px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn_blend_img'), 2.0, {css:{top:'-67px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn_blend_img'), 2.0, {css:{top:'30px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.autumn_blend_txt1'), 1.5, {css:{top:'590px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn_blend_txt1'), 1.5, {css:{top:'490px', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.autumn_blend_txt2'), 2.0, {css:{top:'690px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn_blend_txt2'), 2.0, {css:{top:'590px', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		/* winter */
		controller.addTween(10, TweenMax.to($('.winter_blend_bg'), .3, {css:{top:'0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_bg'), 1.5, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter_blend_img'), .3, {css:{top:'-0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_img'), 2.0, {css:{top:'-500px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.winter_blend_txt1'), .3, {css:{top:'540px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_txt1'), 1.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter_blend_txt2'), .3, {css:{top:'580px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_txt2'), 2.0, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.btn_winter_bean'), .3, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.btn_winter_bean'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		/* winter end */

		/* mybean */
		controller.addTween('.mybean_icon01', TweenMax.from($('.mybean_icon01'), .75, {css:{top:'-37px', opacity:0}}), 1, -200);
		controller.addTween('.mybean_icon01', TweenMax.to($('.mybean_icon01'), .75, {css:{top:'20px', opacity:1}}), 1, -200);
		controller.addTween('.mybean_icon02', TweenMax.from($('.mybean_icon02'), .75, {css:{top:'-67px', opacity:0}}), 1, -200);
		controller.addTween('.mybean_icon02', TweenMax.to($('.mybean_icon02'), .75, {css:{top:'20px', opacity:1}}), 1, -200);

		controller.addTween('.katikati_txt01', TweenMax.from($('.katikati_txt01'), .5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.katikati_txt01', TweenMax.to($('.katikati_txt01'), 1.5, {css:{top:'500px', opacity:1}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.katikati_txt02', TweenMax.from($('.katikati_txt02'), .5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.katikati_txt02', TweenMax.to($('.katikati_txt02'), 1.5, {css:{top:'590px', opacity:1}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.mybean_btn', TweenMax.from($('.mybean_btn'), .75, {css:{top:'620px', opacity:0}}), 1, -200);
		controller.addTween('.mybean_btn', TweenMax.to($('.mybean_btn'), .75, {css:{top:'720px', opacity:1}}), 1, -200);
		/* mybean end */

		/*controller.addTween('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn', TweenMax.from($('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 100);
		controller.addTween('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn', TweenMax.to($('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 100);

		controller.addTween('.reserve_colombia_bg2, .reserve_colombia2', TweenMax.from($('.reserve_colombia_bg2, .reserve_colombia2'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween('.reserve_colombia_bg2, .reserve_colombia2', TweenMax.to($('.reserve_colombia_bg2, .reserve_colombia2'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 0);

		controller.addTween('.reserve_tanzinia_bg, .reserve_tanzinia', TweenMax.from($('.reserve_tanzinia_bg, .reserve_tanzinia'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween('.reserve_tanzinia_bg, .reserve_tanzinia', TweenMax.to($('.reserve_tanzinia_bg, .reserve_tanzinia'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 0);*/

		/* ����� ���̳� */
		controller.addTween(10, TweenMax.to($('.reserve_seminar_logo, .txt_main_rseminar, .btn_seminar1'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 3000);
		controller.addTween(10, TweenMax.from($('.reserve_seminar_logo, .txt_main_rseminar, .btn_seminar1'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 3000);

		controller.addTween(10, TweenMax.to($('.rseminar_obje'),3.0, {css:{opacity:1, top:'370px'}, ease: Quad.easeOut}), 1, 2500);
		controller.addTween(10, TweenMax.from($('.rseminar_obje'), 1.0, {css:{opacity:0, top:'700px'}, ease: Quad.easeOut}), 1, 2500);

		controller.addTween(10, TweenMax.to($('.black_rseminar_txt, .btn_seminar2'), 3.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 2500);
		controller.addTween(10, TweenMax.from($('.black_rseminar_txt, .btn_seminar2'), 3.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2500);
		/* ����� ���̳� end */

		/* winter2 */
		controller.addTween('.reserve_winter2_bg, .reserve_winter2_obje', TweenMax.from($('.reserve_winter2_bg, .reserve_winter2_obje'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween('.reserve_winter2_bg, .reserve_winter2_obje', TweenMax.to($('.reserve_winter2_bg, .reserve_winter2_obje'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 0);
		/* winter2 end */

		controller.addTween('.fav_prod_img01', TweenMax.from($('.fav_prod_img01'), .75, {css:{top:'-40px', opacity:0}}), 1, -200);
		controller.addTween('.fav_prod_img01', TweenMax.to($('.fav_prod_img01'), .75, {css:{top:'40px', opacity:1}}), 1, -200);

		controller.addTween('.fav_txt01', TweenMax.from($('.fav_txt01'), .75, {css:{top:'660px', opacity:0}}), 1, -1000);
		controller.addTween('.fav_txt01', TweenMax.to($('.fav_txt01'), .75, {css:{top:'590px', opacity:1}}), 1, -1000);

		controller.addTween('.fav_prod_txt01', TweenMax.from($('.fav_prod_txt01'), .75, {css:{top:'500px', opacity:0}}), 1, -200);
		controller.addTween('.fav_prod_txt01', TweenMax.to($('.fav_prod_txt01'), .75, {css:{top:'720px', opacity:1}}), 1, -200);
		controller.addTween('.fav_prod_txt02', TweenMax.from($('.fav_prod_txt02'), .75, {css:{top:'1000px', opacity:0}}), 1, -200);
		controller.addTween('.fav_prod_txt02', TweenMax.to($('.fav_prod_txt02'), .75, {css:{top:'830px', opacity:1}}), 1, -200);
		controller.addTween('.btn_fav_prod', TweenMax.from($('.btn_fav_prod'), 1.75, {css:{opacity:0}}), 1, -200);
		controller.addTween('.btn_fav_prod', TweenMax.to($('.btn_fav_prod'), 1.75, {css:{opacity:1}}), 1, -200);

		controller.addTween(10, TweenMax.to($('.menu_txt01'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_txt01'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.menu_txt02'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_txt02'), 2.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.menu_btn'), .3, {css:{left:'73px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_btn'), 2.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.menu_img01'), .3, {css:{right:'476px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.from($('.menu_img01'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}));

		controller.addTween(10, TweenMax.to($('.store_exp_img01'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img01'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img02'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img02'), 3.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img03'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img03'), 3.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img04'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img04'), 4.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween('.store_txt01', TweenMax.from($('.store_txt01'), .75, {css:{top:'0', opacity:0}}), 1, -400);
		controller.addTween('.store_txt01', TweenMax.to($('.store_txt01'), .75, {css:{top:'390px', opacity:1}}), 1, -400);
		controller.addTween('.store_txt02', TweenMax.from($('.store_txt02'), .75, {css:{top:'800px', opacity:0}}), 1, -400);
		controller.addTween('.store_txt02', TweenMax.to($('.store_txt02'), .75, {css:{top:'475px', opacity:1}}), 1, -400); // 2022.12.12 top값 수정
		controller.addTween('.store_btn', TweenMax.from($('.store_btn'), 1.75, {css:{bottom:'-70px', opacity:0}}), 1, -400);
		controller.addTween('.store_btn', TweenMax.to($('.store_btn'), 1.75, {css:{bottom:'70px', opacity:1}}), 1, -400);

		/* 161223 청담 모션 수정 */
		controller.addTween(10, TweenMax.to($('.chungdam_txt'), 1.5, {css:{top:'300px', opacity:1}, ease:Quad.easeOut}), 1, -500);
		controller.addTween(10, TweenMax.to($('.chungdam_circle01'), 1.5, {css:{top:'74px', opacity:1}, delay:.5, ease:Quad.easeOut}), 1, -500);
		controller.addTween(10, TweenMax.to($('.chungdam_circle02'), 1.5, {css:{top:'84px', opacity:1}, delay:1, ease:Quad.easeOut}), 1, -500);
		controller.addTween(10, TweenMax.to($('.chungdam_circle03'), 1.5, {css:{top:'-15px', opacity:1}, delay:1.5, ease:Quad.easeOut}), 1, -500);
		controller.addTween(10, TweenMax.to($('.btn_detail_chungdam'), 1.5, {css:{opacity:1}, delay:1, ease:Quad.easeOut}), 1, -500);
		/* 161223 청담 모션 수정 end */

	} else if ((myWindow > 480) && (myWindow <= 640)) {

		var controller = $.superscrollorama();

		controller.addTween(10, TweenMax.from($('.bean_icon01'), .1, {css:{top:'-40px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.bean_icon01'), 1, {css:{top:'40px', opacity:1}, ease: Quad.easeOut}));

		controller.addTween(10, TweenMax.from($('.autumn_blend_bg'), 1.5, {css:{top:'-37px', opacity:0}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.to($('.autumn_blend_bg'), 1.5, {css:{top:'30px', opacity:1}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.from($('.autumn_blend_img'), 2.0, {css:{top:'-67px', opacity:0}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.to($('.autumn_blend_img'), 2.0, {css:{top:'30px', opacity:1}, ease: Quad.easeOut}), 1, 1500);

		controller.addTween(10, TweenMax.from($('.autumn_blend_txt1'), 1.5, {css:{top:'520px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn_blend_txt1'), 1.5, {css:{top:'420px', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.autumn_blend_txt2'), 2.0, {css:{top:'610px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn_blend_txt2'), 2.0, {css:{top:'510px', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		/* winter */
		controller.addTween(10, TweenMax.to($('.winter_blend_bg'), .3, {css:{top:'0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_bg'), 1.5, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter_blend_img'), .3, {css:{top:'-0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_img'), 2.0, {css:{top:'-500px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.winter_blend_txt1'), .3, {css:{top:'540px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_txt1'), 1.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter_blend_txt2'), .3, {css:{top:'580px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_txt2'), 2.0, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.btn_winter_bean'), .3, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.btn_winter_bean'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		/* winter end */

		/* mybean */
		controller.addTween('.mybean_icon01', TweenMax.from($('.mybean_icon01'), .75, {css:{top:'-67px', opacity:0}}), 1, -200);
		controller.addTween('.mybean_icon01', TweenMax.to($('.mybean_icon01'), .75, {css:{top:'60px', opacity:1}}), 1, -200);
		controller.addTween('.mybean_icon02', TweenMax.from($('.mybean_icon02'), .75, {css:{top:'-67px', opacity:0}}), 1, -200);
		controller.addTween('.mybean_icon02', TweenMax.to($('.mybean_icon02'), .75, {css:{top:'60px', opacity:1}}), 1, -200);

		controller.addTween('.katikati_txt01', TweenMax.from($('.katikati_txt01'), .5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.katikati_txt01', TweenMax.to($('.katikati_txt01'), 1.5, {css:{top:'400px', opacity:1}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.katikati_txt02', TweenMax.from($('.katikati_txt02'), .5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.katikati_txt02', TweenMax.to($('.katikati_txt02'), 1.5, {css:{top:'500px', opacity:1}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.mybean_btn', TweenMax.from($('.mybean_btn'), .75, {css:{top:'650px', opacity:0}}), 1, -200);
		controller.addTween('.mybean_btn', TweenMax.to($('.mybean_btn'), .75, {css:{top:'620px', opacity:1}}), 1, -200);
		/* mybean end */

		/*controller.addTween('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn', TweenMax.from($('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn', TweenMax.to($('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, -200);

		controller.addTween(10, TweenMax.from($('.reserve_colombia_bg2, .reserve_colombia2'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, -100);
		controller.addTween(10, TweenMax.to($('.reserve_colombia_bg2, .reserve_colombia2'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, -100);

		controller.addTween(10, TweenMax.from($('.reserve_tanzinia_bg, .reserve_tanzinia'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, -100);
		controller.addTween(10, TweenMax.to($('.reserve_tanzinia_bg, .reserve_tanzinia'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, -100);*/

		/* ����� ���̳� */
		controller.addTween(10, TweenMax.to($('.reserve_seminar_logo, .txt_main_rseminar, .btn_seminar1'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 2500);
		controller.addTween(10, TweenMax.from($('.reserve_seminar_logo, .txt_main_rseminar, .btn_seminar1'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2500);

		controller.addTween(10, TweenMax.to($('.rseminar_obje'),3.0, {css:{opacity:1, top:'370px'}, ease: Quad.easeOut}), 1, 2500);
		controller.addTween(10, TweenMax.from($('.rseminar_obje'), 1.0, {css:{opacity:0, top:'700px'}, ease: Quad.easeOut}), 1, 2500);

		controller.addTween(10, TweenMax.to($('.black_rseminar_txt, .btn_seminar2'), 3.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 2500);
		controller.addTween(10, TweenMax.from($('.black_rseminar_txt, .btn_seminar2'), 3.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2500);
		/* ����� ���̳� end */

		/* winter2 */
		controller.addTween(10, TweenMax.from($('.reserve_winter2_bg, .reserve_winter2_obje'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, -100);
		controller.addTween(10, TweenMax.to($('.reserve_winter2_bg, .reserve_winter2_obje'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, -100);
		/* winter2 end */

		controller.addTween('.fav_prod_img01', TweenMax.from($('.fav_prod_img01'), .75, {css:{top:'-40px', opacity:0}}), 1, -200);
		controller.addTween('.fav_prod_img01', TweenMax.to($('.fav_prod_img01'), .75, {css:{top:'40px', opacity:1}}), 1, -200);

		controller.addTween('.fav_txt01', TweenMax.from($('.fav_txt01'), .75, {css:{top:'660px', opacity:0}}), 1, -1000);
		controller.addTween('.fav_txt01', TweenMax.to($('.fav_txt01'), .75, {css:{top:'590px', opacity:1}}), 1, -1000);

		controller.addTween('.fav_prod_txt01', TweenMax.from($('.fav_prod_txt01'), .75, {css:{top:'500px', opacity:0}}), 1, -200);
		controller.addTween('.fav_prod_txt01', TweenMax.to($('.fav_prod_txt01'), .75, {css:{top:'720px', opacity:1}}), 1, -200);
		controller.addTween('.fav_prod_txt02', TweenMax.from($('.fav_prod_txt02'), .75, {css:{top:'1000px', opacity:0}}), 1, -200);
		controller.addTween('.fav_prod_txt02', TweenMax.to($('.fav_prod_txt02'), .75, {css:{top:'830px', opacity:1}}), 1, -200);
		controller.addTween('.btn_fav_prod', TweenMax.from($('.btn_fav_prod'), 1.75, {css:{opacity:0}}), 1, -200);
		controller.addTween('.btn_fav_prod', TweenMax.to($('.btn_fav_prod'), 1.75, {css:{opacity:1}}), 1, -200);

		controller.addTween('.menu_img01', TweenMax.from($('.menu_img01'), .75, {css:{top:'0', opacity:0}}), 1, -200);
		controller.addTween('.menu_img01', TweenMax.to($('.menu_img01'), .75, {css:{top:'44px', opacity:1}}), 1, -200);

		controller.addTween(10, TweenMax.to($('.store_exp_img01'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img01'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img02'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img02'), 3.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img03'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img03'), 3.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img04'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img04'), 4.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween('.store_txt01', TweenMax.from($('.store_txt01'), .75, {css:{top:'0', opacity:0}}), 1, -400);
		controller.addTween('.store_txt01', TweenMax.to($('.store_txt01'), .75, {css:{top:'390px', opacity:1}}), 1, -400);
		controller.addTween('.store_txt02', TweenMax.from($('.store_txt02'), .75, {css:{top:'800px', opacity:0}}), 1, -400);
		controller.addTween('.store_txt02', TweenMax.to($('.store_txt02'), .75, {css:{top:'475px', opacity:1}}), 1, -400); // 2022.12.12 top값 수정
		controller.addTween('.store_btn', TweenMax.from($('.store_btn'), 1.75, {css:{bottom:'-70px', opacity:0}}), 1, -400);
		controller.addTween('.store_btn', TweenMax.to($('.store_btn'), 1.75, {css:{bottom:'70px', opacity:1}}), 1, -400);

		/* 161223 청담 모션 수정 */
		controller.addTween(10, TweenMax.to($('.chungdam_txt'), 1.5, {css:{top:'320px', opacity:1}, ease:Quad.easeOut}), 1, -500);
		controller.addTween(10, TweenMax.to($('.chungdam_circle01'), 1.5, {css:{top:'45px', opacity:1}, delay:.5, ease:Quad.easeOut}), 1, -500);
		controller.addTween(10, TweenMax.to($('.chungdam_circle02'), 1.5, {css:{top:'125px', opacity:1}, delay:1, ease:Quad.easeOut}), 1, -500);
		controller.addTween(10, TweenMax.to($('.chungdam_circle03'), 1.5, {css:{top:'-15px', opacity:1}, delay:1.5, ease:Quad.easeOut}), 1, -500);
		controller.addTween(10, TweenMax.to($('.btn_detail_chungdam'), 1.5, {css:{opacity:1}, delay:1, ease:Quad.easeOut}), 1, -500);
		/* 161223 청담 모션 수정 end */

	} else if (myWindow <= 480) {

		var controller = $.superscrollorama();

		controller.addTween(10, TweenMax.from($('.bean_icon01'), .1, {css:{top:'-40px', opacity:0}, ease: Quad.easeOut}));
		controller.addTween(10, TweenMax.to($('.bean_icon01'), 1, {css:{top:'40px', opacity:1}, ease: Quad.easeOut}));

		controller.addTween(10, TweenMax.from($('.autumn_blend_bg'), 1.5, {css:{top:'-37px', opacity:0}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.to($('.autumn_blend_bg'), 1.5, {css:{top:'10px', opacity:1}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.from($('.autumn_blend_img'), 2.0, {css:{top:'-67px', opacity:0}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.to($('.autumn_blend_img'), 2.0, {css:{top:'10px', opacity:1}, ease: Quad.easeOut}), 1, 1500);

		controller.addTween(10, TweenMax.from($('.autumn_blend_txt1'), 1.5, {css:{top:'520px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn_blend_txt1'), 1.5, {css:{top:'350px', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.autumn_blend_txt2'), 2.0, {css:{top:'610px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn_blend_txt2'), 2.0, {css:{top:'440px', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		/* winter */
		controller.addTween(10, TweenMax.to($('.winter_blend_bg'), .3, {css:{top:'0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_bg'), 1.5, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter_blend_img'), .3, {css:{top:'-0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_img'), 2.0, {css:{top:'-500px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.winter_blend_txt1'), .3, {css:{top:'540px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_txt1'), 1.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter_blend_txt2'), .3, {css:{top:'580px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter_blend_txt2'), 2.0, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.btn_winter_bean'), .3, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.btn_winter_bean'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		/* winter end */

		/* mybean */
		controller.addTween('.mybean_icon01', TweenMax.from($('.mybean_icon01'), .75, {css:{top:'-67px', opacity:0}}), 1, -200);
		controller.addTween('.mybean_icon01', TweenMax.to($('.mybean_icon01'), .75, {css:{top:'60px', opacity:1}}), 1, -200);
		controller.addTween('.mybean_icon02', TweenMax.from($('.mybean_icon02'), .75, {css:{top:'-67px', opacity:0}}), 1, -200);
		controller.addTween('.mybean_icon02', TweenMax.to($('.mybean_icon02'), .75, {css:{top:'60px', opacity:1}}), 1, -200);

		controller.addTween('.katikati_txt01', TweenMax.from($('.katikati_txt01'), .5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.katikati_txt01', TweenMax.to($('.katikati_txt01'), 1.5, {css:{top:'380px', opacity:1}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.katikati_txt02', TweenMax.from($('.katikati_txt02'), .5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.katikati_txt02', TweenMax.to($('.katikati_txt02'), 1.5, {css:{top:'450px', opacity:1}, ease: Quad.easeOut}), 1, -200);
		controller.addTween('.mybean_btn', TweenMax.from($('.mybean_btn'), .75, {css:{top:'620px', opacity:0}}), 1, -200);
		controller.addTween('.mybean_btn', TweenMax.to($('.mybean_btn'), .75, {css:{top:'560px', opacity:1}}), 1, -200);
		/* mybean end */

		/*controller.addTween('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn', TweenMax.from($('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, -100);
		controller.addTween('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn', TweenMax.to($('.reserve_colombia, .black_reserve_logo, .black_reserve_txt, .black_btn'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, -100);

		controller.addTween('.reserve_colombia_bg2, .reserve_colombia2', TweenMax.from($('.reserve_colombia_bg2, .reserve_colombia2'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, -100);
		controller.addTween('.reserve_colombia_bg2, .reserve_colombia2', TweenMax.to($('.reserve_colombia_bg2, .reserve_colombia2'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, -100);

		controller.addTween('.reserve_tanzinia_bg, .reserve_tanzinia', TweenMax.from($('.reserve_tanzinia_bg, .reserve_tanzinia'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, -100);
		controller.addTween('.reserve_tanzinia_bg, .reserve_tanzinia', TweenMax.to($('.reserve_tanzinia_bg, .reserve_tanzinia'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, -100);*/

		/* ����� ���̳� */
		controller.addTween(10, TweenMax.to($('.reserve_seminar_logo, .txt_main_rseminar, .btn_seminar1'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 2500);
		controller.addTween(10, TweenMax.from($('.reserve_seminar_logo, .txt_main_rseminar, .btn_seminar1'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2500);

		controller.addTween(10, TweenMax.to($('.rseminar_obje'),3.0, {css:{opacity:1, top:'370px'}, ease: Quad.easeOut}), 1, 2500);
		controller.addTween(10, TweenMax.from($('.rseminar_obje'), 1.0, {css:{opacity:0, top:'700px'}, ease: Quad.easeOut}), 1, 2500);

		controller.addTween(10, TweenMax.to($('.black_rseminar_txt, .btn_seminar2'), 3.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 2500);
		controller.addTween(10, TweenMax.from($('.black_rseminar_txt, .btn_seminar2'), 3.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2500);
		/* ����� ���̳� end */

		/* winter2 */
		controller.addTween('.reserve_winter2_bg, .reserve_winter2_obje', TweenMax.from($('.reserve_winter2_bg, .reserve_winter2_obje'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, -100);
		controller.addTween('.reserve_winter2_bg, .reserve_winter2_obje', TweenMax.to($('.reserve_winter2_bg, .reserve_winter2_obje'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, -100);
		/* winter2 end */

		controller.addTween('.fav_prod_img01', TweenMax.from($('.fav_prod_img01'), .75, {css:{top:'-40px', opacity:0}}), 1, -200);
		controller.addTween('.fav_prod_img01', TweenMax.to($('.fav_prod_img01'), .75, {css:{top:'40px', opacity:1}}), 1, -200);

		controller.addTween('.fav_txt01', TweenMax.from($('.fav_txt01'), .75, {css:{top:'660px', opacity:0}}), 1, -1000);
		controller.addTween('.fav_txt01', TweenMax.to($('.fav_txt01'), .75, {css:{top:'590px', opacity:1}}), 1, -1000);

		controller.addTween('.fav_prod_txt01', TweenMax.from($('.fav_prod_txt01'), .75, {css:{top:'300px', opacity:0}}), 1, -200);
		controller.addTween('.fav_prod_txt01', TweenMax.to($('.fav_prod_txt01'), .75, {css:{top:'410px', opacity:1}}), 1, -200);
		controller.addTween('.fav_prod_txt02', TweenMax.from($('.fav_prod_txt02'), .75, {css:{top:'390px', opacity:0}}), 1, -200);
		controller.addTween('.fav_prod_txt02', TweenMax.to($('.fav_prod_txt02'), .75, {css:{top:'490px', opacity:1}}), 1, -200);
		controller.addTween('.btn_fav_prod', TweenMax.from($('.btn_fav_prod'), 1.75, {css:{opacity:0}}), 1, -200);
		controller.addTween('.btn_fav_prod', TweenMax.to($('.btn_fav_prod'), 1.75, {css:{opacity:1}}), 1, -200);

		controller.addTween('.menu_img01', TweenMax.from($('.menu_img01'), .75, {css:{top:'0', opacity:0}}), 1, -200);
		controller.addTween('.menu_img01', TweenMax.to($('.menu_img01'), .75, {css:{top:'44px', opacity:1}}), 1, -200);

		controller.addTween(10, TweenMax.to($('.store_exp_img01'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img01'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img02'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img02'), 3.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img03'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img03'), 3.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.store_exp_img04'), .3, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.store_exp_img04'), 4.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween('.store_txt01', TweenMax.from($('.store_txt01'), .75, {css:{top:'0', opacity:0}}), 1, -400);
		controller.addTween('.store_txt01', TweenMax.to($('.store_txt01'), .75, {css:{top:'360px', opacity:1}}), 1, -400);
		controller.addTween('.store_txt02', TweenMax.from($('.store_txt02'), .75, {css:{top:'800px', opacity:0}}), 1, -400);
		controller.addTween('.store_txt02', TweenMax.to($('.store_txt02'), .75, {css:{top:'430px', opacity:1}}), 1, -400); // 2022.12.12 top값 수정
		controller.addTween('.store_btn', TweenMax.from($('.store_btn'), 1.75, {css:{bottom:'-70px', opacity:0}}), 1, -400);
		controller.addTween('.store_btn', TweenMax.to($('.store_btn'), 1.75, {css:{bottom:'80px', opacity:1}}), 1, -400);

		/* 161223 청담 모션 수정 */
		//controller.addTween(10, TweenMax.from($('.chungdam_txt'), 1.5, {css:{top:'540px', opacity:0}, ease:Quad.easeOut}), 1, -100);
		controller.addTween(10, TweenMax.to($('.chungdam_txt'), 1.5, {css:{top:'420px', opacity:1}, ease:Quad.easeOut}), 1, -100);
		controller.addTween(10, TweenMax.to($('.chungdam_circle01'), 1.5, {css:{top:'107px', opacity:1}, delay:.5, ease:Quad.easeOut}), 1, -100);
		controller.addTween(10, TweenMax.to($('.chungdam_circle02'), 1.5, {css:{top:'206px', opacity:1}, delay:1, ease:Quad.easeOut}), 1, -100);
		controller.addTween(10, TweenMax.to($('.chungdam_circle03'), 1.5, {css:{top:'22px', opacity:1}, delay:1.5, ease:Quad.easeOut}), 1, -100);
		controller.addTween(10, TweenMax.to($('.btn_detail_chungdam'), 1.5, {css:{opacity:1}, delay:1, ease:Quad.easeOut}), 1, -100);
		/* 161223 청담 모션 수정 end */

	}
	
	/* 20200619 추가 */
	if (myWindow > 960) {
		controller.addTween(10, TweenMax.from($('.reserve3_pc .reserve_img-txt, .reserve3Wrap .look-detail_btn'), .3, {css:{left:'100%', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.reserve3_pc .reserve_img-txt'), 2.5, {css:{left:'0', opacity:1}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.reserve3Wrap .look-detail_btn'), 2.9, {css:{left:'0', opacity:1}, ease: Quad.easeOut}), 1, 2000);
	};

});

/* 20200619 수정 */
$(window).scroll(function(){

	var $reserveMobile = $('.reserve3_mobile .reserve_img-txt');

	if ($('.reserve3_mobile').css("display") == "block") {
		if ($(this).scrollTop()+500 > $('.reserve3Wrap').offset().top){
			$reserveMobile.addClass('on');
		}else{
			$reserveMobile.removeClass('on');
		};
	};
})


