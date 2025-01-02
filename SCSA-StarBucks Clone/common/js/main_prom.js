$(document).ready(function(){

	var myWin = $(window).width();
	var bnrAni = new TimelineLite();
	var sp2Ani = new TimelineLite();
	var sum1Ani = new TimelineLite();
	var sum2Ani = new TimelineLite();
	var sum3Ani = new TimelineLite();
	var aut1Ani = new TimelineLite();
	var win1Ani = new TimelineLite();
	var win2Ani = new TimelineLite();
	var spr1Ani = new TimelineLite();
	var spr2Ani = new TimelineLite();
	var smr1Ani = new TimelineLite();
	var smr2Ani = new TimelineLite(); // 20170607 추가 

	/* 17summer1 */
	
	if (myWin > 960) {
		smr1Ani
		
			.append(TweenMax.to($('.sm17_bev1_cup, .sm17_bev1_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17_bev2_cup, .sm17_bev2_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17_bev3_cup, .sm17_bev3_txt'), 1, {css:{opacity:1}}))
			//.append(TweenMax.to($('.sm17_bev1_img'), 1, {css:{opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sm17_bev1_img'), .5, {css:{width:'482px', height:'250px', left:'886px', top:'-20px', opacity:1}, ease: Power4.easeOut, delay:-.8}))
			.append(TweenMax.to($('.sm17_pop6_img'), .3, {css:{width:'40px', height:'41px', left:'1040px', top:'180px', opacity:1}, ease: Elastic.easeOut, delay:-.5}))
			.append(TweenMax.to($('.sm17_pop5_img'), .3, {css:{width:'37px', height:'40px', left:'1200px', top:'118px', opacity:1}, ease: Elastic.easeOut, delay:-.5}))
			.append(TweenMax.to($('.sm17_pop1_img'), .3, {css:{width:'51px', height:'50px', left:'952px', top:'94px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17_pop3_img'), .3, {css:{width:'41px', height:'47px', left:'1188px', top:'50px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17_pop7_img'), .3, {css:{width:'39px', height:'39px', left:'1308px', top:'125px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17_pop4_img'), .3, {css:{width:'38px', height:'35px', left:'1266px', top:'84px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17_pop2_img'), .3, {css:{width:'39px', height:'37px', left:'960px', top:'35px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17_emblem, .btn_sm17_detail'), 1, {css:{opacity:1}}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
	} else if ((myWin > 480) && (myWin <= 960)) { 
		smr1Ani
		
			.append(TweenMax.to($('.sm17_bev1_cup, .sm17_bev1_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17_bev2_cup, .sm17_bev2_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17_bev3_cup, .sm17_bev3_txt'), 1, {css:{opacity:1}}))
			//.append(TweenMax.to($('.sm17_bev1_img'), 1, {css:{opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sm17_bev1_img'), .5, {css:{width:'400px', height:'210px', marginLeft:'-220px', top:'150px', opacity:1}, ease: Power4.easeOut, delay:-.8}))
			.append(TweenMax.to($('.sm17_pop6_img'), .3, {css:{width:'30px', height:'31px', marginLeft:'-90px', top:'320px', opacity:1}, ease: Elastic.easeOut, delay:-.5}))
			.append(TweenMax.to($('.sm17_pop5_img'), .3, {css:{width:'27px', height:'30px', marginLeft:'40px', top:'280px', opacity:1}, ease: Elastic.easeOut, delay:-.5}))
			.append(TweenMax.to($('.sm17_pop1_img'), .3, {css:{width:'41px', height:'40px', marginLeft:'-160px', top:'260px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17_pop3_img'), .3, {css:{width:'31px', height:'37px', marginLeft:'40px', top:'220px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17_pop7_img'), .3, {css:{width:'29px', height:'29px', marginLeft:'130px', top:'280px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17_pop4_img'), .3, {css:{width:'28px', height:'25px', marginLeft:'100px', top:'260px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17_pop2_img'), .3, {css:{width:'29px', height:'27px', marginLeft:'-130px', top:'190px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17_emblem, .btn_sm17_detail'), 1, {css:{opacity:1}}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
		
	}  else { 
		smr1Ani
		
			.append(TweenMax.to($('.sm17_bev1_cup, .sm17_bev1_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17_bev2_cup, .sm17_bev2_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17_bev3_cup, .sm17_bev3_txt'), 1, {css:{opacity:1}}))
			//.append(TweenMax.to($('.sm17_bev1_img'), 1, {css:{opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sm17_bev1_img'), .5, {css:{width:'280px', height:'150px', marginLeft:'-150px', top:'130px', opacity:1}, ease: Power4.easeOut, delay:-.8}))
			.append(TweenMax.to($('.sm17_pop6_img'), .3, {css:{width:'30px', height:'31px', marginLeft:'-90px', top:'320px', opacity:1}, ease: Elastic.easeOut, delay:-.5}))
			.append(TweenMax.to($('.sm17_pop5_img'), .3, {css:{width:'27px', height:'30px', marginLeft:'40px', top:'280px', opacity:1}, ease: Elastic.easeOut, delay:-.5}))
			.append(TweenMax.to($('.sm17_pop1_img'), .3, {css:{width:'41px', height:'40px', marginLeft:'-160px', top:'260px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17_pop3_img'), .3, {css:{width:'31px', height:'37px', marginLeft:'40px', top:'220px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17_pop7_img'), .3, {css:{width:'29px', height:'29px', marginLeft:'130px', top:'280px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17_pop4_img'), .3, {css:{width:'28px', height:'25px', marginLeft:'100px', top:'260px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17_pop2_img'), .3, {css:{width:'29px', height:'27px', marginLeft:'-130px', top:'190px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17_emblem, .btn_sm17_detail'), 1, {css:{opacity:1}}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
		
	}

	/*  17summer 2  - 20170607 시작 */
	if (myWin >= 1100) {
		smr2Ani
		
			.append(TweenMax.to($('.sm17-03_bev1_cup, .sm17-02_bev1_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-03_bev2_cup, .sm17-02_bev2_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-03_bev3_cup, .sm17-02_bev3_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-03_bev1_img'), .5, {css:{width:'146px', height:'108px',marginLeft:'10px', top:'90px',  opacity:1}, ease: Power4.easeOut, delay:-.8}))
			.append(TweenMax.to($('.sm17-03_Straw1_img'), .3, {css:{width:'57px', height:'44px', marginLeft:'-60px', top:'170px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17-03_Straw2_img'), .3, {css:{width:'57px', height:'55px', marginLeft:'0px', top:'103px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17-03_Straw3_img'), .3, {css:{width:'57px', height:'70px',  marginLeft:'190px', top:'20px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17-03_Straw4_img'), .3, {css:{width:'61px', height:'111px', marginLeft:'155px',  top:'122px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			
			.append(TweenMax.to($('.sm17-02_emblem, .btn_sm17-02_detail'), 1, {css:{opacity:1}}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
	} else if ((myWin >= 820) && (myWin < 1100)) { 
		smr2Ani
		
			.append(TweenMax.to($('.sm17-02_bev1_cup, .sm17-02_bev1_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev2_cup, .sm17-02_bev2_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev3_cup, .sm17-02_bev3_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev1_img'), .5, {css:{width:'160px', height:'210px', marginLeft:'-50px', top:'120px', opacity:1}, ease: Power4.easeOut, delay:-.8}))
			.append(TweenMax.to($('.sm17-02_Straw1_img'), .3, {css:{width:'45px', height:'44px', left:'36%', top:'190px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17-02_Straw2_img'), .3, {css:{width:'45px', height:'55px', left:'45%', top:'123px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17-02_Straw3_img'), .3, {css:{width:'45px', height:'70px', left:'69%', top:'50px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17-02_Straw4_img'), .3, {css:{width:'50px', height:'111px', left:'58%', top:'147px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17-02_emblem, .btn_sm17-02_detail'), 1, {css:{opacity:1}}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
		
	} else if ((myWin >=700) && (myWin < 820)) { 
		smr2Ani
		
			.append(TweenMax.to($('.sm17-02_bev1_cup, .sm17-02_bev1_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev2_cup, .sm17-02_bev2_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev3_cup, .sm17-02_bev3_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev1_img'), .5, {css:{width:'150px', height:'210px', marginLeft:'-80px', top:'170px', opacity:1}, ease: Power4.easeOut, delay:-.8}))// 20170608  수정 위치값
			.append(TweenMax.to($('.sm17-02_Straw1_img'), .3, {css:{width:'45px', height:'44px',  marginLeft:'-170px',top:'250px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17-02_Straw2_img'), .3, {css:{width:'45px', height:'55px', marginLeft:'-110px', top:'170px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17-02_Straw3_img'), .3, {css:{width:'45px', height:'70px', marginLeft:'100px', top:'120px', opacity:1}, ease: Elastic.easeOut, delay:-.3})) 
			.append(TweenMax.to($('.sm17-02_Straw4_img'), .3, {css:{width:'50px', height:'111px', marginLeft:'20px', top:'225px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17-02_emblem, .btn_sm17-02_detail'), 1, {css:{opacity:1}}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
		
	}  else if ((myWin >=440) && (myWin <700)) { 
		smr2Ani
		
			.append(TweenMax.to($('.sm17-02_bev1_cup, .sm17-02_bev1_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev2_cup, .sm17-02_bev2_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev3_cup, .sm17-02_bev3_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev1_img'), .5, {css:{width:'150px', height:'210px', marginLeft:'-85px', top:'150px', opacity:1}, ease: Power4.easeOut, delay:-.8}))// 20170608  수정 위치값
			.append(TweenMax.to($('.sm17-02_Straw1_img'), .3, {css:{width:'45px', height:'44px',  marginLeft:'-180px',top:'250px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17-02_Straw2_img'), .3, {css:{width:'45px', height:'55px', marginLeft:'-120px', top:'170px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17-02_Straw3_img'), .3, {css:{width:'45px', height:'70px', marginLeft:'120px', top:'120px', opacity:1}, ease: Elastic.easeOut, delay:-.3})) 
			.append(TweenMax.to($('.sm17-02_Straw4_img'), .3, {css:{width:'50px', height:'111px', marginLeft:'30px', top:'185px', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17-02_emblem, .btn_sm17-02_detail'), 1, {css:{opacity:1}}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
		
	}  else if ((myWin >= 320) && (myWin < 440)) { 
		smr2Ani
		
			.append(TweenMax.to($('.sm17-02_bev1_cup, .sm17-02_bev1_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev2_cup, .sm17-02_bev2_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev3_cup, .sm17-02_bev3_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev1_img'), .5, {css:{width:'130px', height:'210px', marginLeft:'-105px',  top:'100px', opacity:1}, ease: Power4.easeOut, delay:-.8})) // 20170608 수정.. 위치값
			.append(TweenMax.to($('.sm17-02_Straw1_img'), .3, {css:{width:'32px', height:'44px', left:'40%', top:'18%', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17-02_Straw2_img'), .3, {css:{width:'36px', height:'55px', left:'24%', top:'22%', opacity:1}, ease: Elastic.easeOut, delay:-.1})) // 20170608 수정 위치값.. 
			.append(TweenMax.to($('.sm17-02_Straw3_img'), .3, {css:{width:'36px', height:'70px', left:'67%', top:'16%', opacity:1}, ease: Elastic.easeOut, delay:-.3}))// 20170608  수정 위치값
			.append(TweenMax.to($('.sm17-02_Straw4_img'), .3, {css:{width:'38px', height:'111px', left:'47%', top:'26%', opacity:1}, ease: Elastic.easeOut, delay:-.1}))
			.append(TweenMax.to($('.sm17-02_emblem, .btn_sm17-02_detail'), 1, {css:{opacity:1}}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
		
	}else { 
		smr2Ani
		
			.append(TweenMax.to($('.sm17-02_bev1_cup, .sm17-02_bev1_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev2_cup, .sm17-02_bev2_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev3_cup, .sm17-02_bev3_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sm17-02_bev1_img'), .5, {css:{width:'110px', height:'150px', marginLeft:'-100px', top:'100px', opacity:1}, ease: Power4.easeOut, delay:-.8}))
			.append(TweenMax.to($('.sm17-02_Straw1_img'), .3, {css:{width:'30px', height:'31px', marginLeft:'-150px', top:'100px', opacity:1}, ease: Elastic.easeOut, delay:-.5}))
			.append(TweenMax.to($('.sm17-02_Straw2_img'), .3, {css:{width:'32px', height:'30px', marginLeft:'-40px', top:'150px', opacity:1}, ease: Elastic.easeOut, delay:-.5}))
			.append(TweenMax.to($('.sm17-02_Straw3_img'), .3, {css:{width:'32px', height:'40px', marginLeft:'60px', top:'60px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17-02_Straw4_img'), .3, {css:{width:'34px', height:'60px', marginLeft:'-10px', top:'150px', opacity:1}, ease: Elastic.easeOut, delay:-.3}))
			.append(TweenMax.to($('.sm17-02_emblem, .btn_sm17-02_detail'), 1, {css:{opacity:1}}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
		
	}

	/*  17summer 2  - 20170607 끝 */



	/* 17spring2 */
	if (myWin > 640) {
		spr2Ani
		
			.append(TweenMax.to($('.sp17_2_bev1_cup, .sp17_2_bev1_txt'), 1, {css:{opacity:1}, delay:1.5}))
			.append(TweenMax.to($('.sp17_2_bev2_cup, .sp17_2_bev2_txt'), 1, {css:{opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sp17_2_leaf1_img'), 1, {css:{bottom:'0px', opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sp17_2_leaf2_img'), 1, {css:{top:'0px', opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sp17_2_bev1_img'), 1, {css:{opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sp17_2_emblem, .btn_sp17_2_detail'), 1, {css:{opacity:1}, delay:-.5}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
	} else {
		spr2Ani
		
			.append(TweenMax.to($('.sp17_2_bev1_cup, .sp17_2_bev1_txt'), 1, {css:{opacity:1}}))
			.append(TweenMax.to($('.sp17_2_bev2_cup, .sp17_2_bev2_txt'), 1, {css:{opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sp17_2_leaf1_img'), 1, {css:{top:'70px', opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sp17_2_leaf2_img'), 1, {css:{top:'0px', opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sp17_2_bev1_img'), 1, {css:{opacity:1}, delay:-.5}))
			.append(TweenMax.to($('.sp17_2_emblem, .btn_sp17_2_detail'), 1, {css:{opacity:1}, delay:-.5}))
			
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
	}

	$('.movie_img, .btn_nitro_detail, .nitro_movie_wrap video').mouseenter(function(){
		console.log('play');
		setTimeout(function(){
			$('.nitro_movie_wrap video').get(0).play();
		}, 1);
		$('.movie_img').stop().hide();
	});
	$('.movie_img, .btn_nitro_detail').mouseleave(function(){
		console.log('pause');
		$('.nitro_movie_wrap video').get(0).pause();
		$('.movie_img').stop().show();
	});
	
	$('.nitro_movie_wrap video').mouseleave(function(){
		$(this).get(0).pause();
		$('.movie_img').stop().show();
	});
	
	$('.m_btn_movie').on('click', function(){
		setTimeout(function(){
			$('.m_nitro_movie video').get(0).play();
		}, 1);
		$('.nitro_dimm, .m_nitro_movie').fadeIn();
	});

	$('.nitro_dimm').click(function(){
		$('.m_nitro_movie video').get(0).pause();
		$('.nitro_dimm, .m_nitro_movie').fadeOut();
	});

	

	/* 17spring1 */
	spr1Ani
		
		.append(TweenMax.to($('.sp17_1_bev1_cup, .sp17_1_bev1_txt'), 1, {css:{opacity:1}}))
		.append(TweenMax.to($('.sp17_1_bev2_cup, .sp17_1_bev2_txt'), 1, {css:{opacity:1}}))
		.append(TweenMax.to($('.sp17_1_cha2_img, .sp17_1_cha3_img'), 1, {css:{opacity:1}}))
		.append(TweenMax.to($('.sp17_1_bev1_img'), 1, {css:{opacity:1}, delay:-.5}))
		.append(TweenMax.to($('.sp17_1_emblem, .btn_sp17_1_detail'), 1, {css:{opacity:1}}))
		
		var controller = $.superscrollorama({
		triggerAtCenter: true
	});

	/* 17winter1 */
	win2Ani
		
		.append(TweenMax.to($('.valentine_bev1_cup, .valentine_bev1_txt'), 1, {css:{opacity:1}}))
		.append(TweenMax.to($('.valentine_bev2_cup, .valentine_bev2_txt'), 1, {css:{opacity:1}}))
		.append(TweenMax.to($('.valentine_bev3_cup, .valentine_bev3_txt'), 1, {css:{opacity:1}}))
		.append(TweenMax.to($('.valentine_bev4_cup, .valentine_bev4_txt'), 1, {css:{opacity:1}}))
		.append(TweenMax.to($('.valentine_bev_img'), 1, {css:{opacity:1}, delay:-.5}))
		.append(TweenMax.to($('.valentine_emblem, .btn_valentine_detail'), 1, {css:{opacity:1}}))

		.append(TweenMax.to($('.wt17_1_bev1_cup, .wt17_1_bev1_txt'), 1, {css:{opacity:1}}))
		.append(TweenMax.to($('.wt17_1_bev2_cup, .wt17_1_bev2_txt'), 1, {css:{opacity:1}}))
		.append(TweenMax.to($('.wt17_1_bev3_img'), 1, {css:{opacity:1}, delay:-.5}))
		.append(TweenMax.to($('.wt17_1_emblem, .btn_wt17_1_detail'), 1, {css:{opacity:1}}))
		
		var controller = $.superscrollorama({
		triggerAtCenter: true
	});
	
	/* 20200820수정 */
	controller.addTween(10, TweenMax.from($('.reserve_wrap .reserve_visual'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 500); /* 20210928 수정 */
	controller.addTween(10, TweenMax.to($('.reserve_wrap .reserve_visual'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 500); /* 20210928 수정 */
	
	controller.addTween(10, TweenMax.from($('.reserve_magazine_wrap .reserve_visual'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1700); /* 20210928 추가 */
	controller.addTween(10, TweenMax.to($('.reserve_magazine_wrap .reserve_visual'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1700); /* 20210928 추가 */
	
	if (myWin > 1280) {
		/* 17summer1 */ 
		/*20170720수정 : 모션시작 top값 1000 -> 300*/
		controller.addTween(10, TweenMax.from($('.summer17_bean'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 300);
		controller.addTween(10, TweenMax.to($('.summer17_bean'), 2.0, {css:{left:'70px', opacity:1}, ease: Quad.easeOut}), 1, 300); /*20171020수정*/

		controller.addTween(10, TweenMax.from($('.summer17_bean_ttl'), 1.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 300);
		controller.addTween(10, TweenMax.to($('.summer17_bean_ttl'), 1.5, {css:{left:'715px', opacity:1}, ease: Quad.easeOut}), 1, 300);/*20171020수정*/
		controller.addTween(10, TweenMax.from($('.summer17_bean_txt'), 2.0, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 300);
		controller.addTween(10, TweenMax.to($('.summer17_bean_txt'), 2.0, {css:{left:'715px', opacity:1}, ease: Quad.easeOut}), 1, 300);/*20171020수정*/

		controller.addTween(10, TweenMax.from($('.btn_summer17_bean'), 2.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 300);
		controller.addTween(10, TweenMax.to($('.btn_summer17_bean'), 2.5, {css:{left:'715px', opacity:1}, ease: Quad.easeOut}), 1, 300);/*20180717수정*/
		/*20170720수정 : 모션시작 top값 1000 -> 500*/
		
		/*20200820수정*/
		/*controller.addTween(10, TweenMax.from($('.res_bean_17spring2'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 900);
		controller.addTween(10, TweenMax.to($('.res_bean_17spring2'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 900);*/

		/* 17spring1 */
		controller.addTween(10, TweenMax.from($('.summer17_bean'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 300);
		controller.addTween(10, TweenMax.to($('.summer17_bean'), 2.0, {css:{left:'70px', opacity:1}, ease: Quad.easeOut}), 1, 300); /*20171020수정*/

		controller.addTween(10, TweenMax.from($('.summer17_bean_ttl'), 1.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 300);
		controller.addTween(10, TweenMax.to($('.summer17_bean_ttl'), 1.5, {css:{left:'715px', opacity:1}, ease: Quad.easeOut}), 1, 300); /*20171020수정*/
		controller.addTween(10, TweenMax.from($('.summer17_bean_txt'), 2.0, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 300);
		controller.addTween(10, TweenMax.to($('.summer17_bean_txt'), 2.0, {css:{left:'715px', opacity:1}, ease: Quad.easeOut}), 1, 300);/*20171020수정*/

		controller.addTween(10, TweenMax.from($('.btn_summer17_bean'), 2.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 300);
		controller.addTween(10, TweenMax.to($('.btn_summer17_bean'), 2.5, {css:{left:'715px', opacity:1}, ease: Quad.easeOut}), 1, 300); /*20180717수정*/

		/* 17winter1 */
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_bg'), 1.5, {css:{left:'10px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1'), 2.0, {css:{left:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_ttl'), 1.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_ttl'), 1.5, {css:{left:'660px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_txt'), 2.0, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_txt'), 2.0, {css:{left:'660px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_winter17_1_bean'), 2.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_winter17_1_bean'), 2.5, {css:{left:'665px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.res_bean_17winter1'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.res_bean_17winter1'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1400);

	} else if ((myWin > 960) && (myWin <= 1280)) {
		/* 17summer1 */
		/*20170720수정 : 모션시작 top값 1000 -> 500*/
		controller.addTween(10, TweenMax.from($('.summer17_bean'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 500);
		controller.addTween(10, TweenMax.to($('.summer17_bean'), 2.0, {css:{left:'170px', opacity:1}, ease: Quad.easeOut}), 1, 500);

		controller.addTween(10, TweenMax.from($('.summer17_bean_ttl'), 1.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 500);
		controller.addTween(10, TweenMax.to($('.summer17_bean_ttl'), 1.5, {css:{left:'620px', opacity:1}, ease: Quad.easeOut}), 1, 500);
		controller.addTween(10, TweenMax.from($('.summer17_bean_txt'), 2.0, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 500);
		controller.addTween(10, TweenMax.to($('.summer17_bean_txt'), 2.0, {css:{left:'620px', opacity:1}, ease: Quad.easeOut}), 1, 500);

		controller.addTween(10, TweenMax.from($('.btn_summer17_bean'), 2.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 500);
		controller.addTween(10, TweenMax.to($('.btn_summer17_bean'), 2.5, {css:{left:'625px', opacity:1}, ease: Quad.easeOut}), 1, 500);
		/*20170720수정 : 모션시작 top값 1000 -> 500*/


		/*20200820수정*/
		/*controller.addTween(10, TweenMax.from($('.res_bean_17spring2'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.res_bean_17spring2'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1000);*/

		/* 17spring1 */
		controller.addTween(10, TweenMax.from($('.spring17_1_bean1'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1'), 2.0, {css:{left:'170px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.spring17_1_bean1_ttl'), 1.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1_ttl'), 1.5, {css:{left:'600px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.spring17_1_bean1_txt'), 2.0, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.to($('.spring17_1_bean1_txt'), 2.0, {css:{left:'600px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_spring17_1_bean'), 2.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_spring17_1_bean'), 2.5, {css:{left:'605px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* 17winter1 */
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_bg'), 1.5, {css:{left:'130px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1'), 2.0, {css:{left:'170px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_ttl'), 1.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_ttl'), 1.5, {css:{left:'660px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_txt'), 2.0, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_txt'), 2.0, {css:{left:'660px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_winter17_1_bean'), 2.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_winter17_1_bean'), 2.5, {css:{left:'665px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.res_bean_17winter1'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1600);
		controller.addTween(10, TweenMax.to($('.res_bean_17winter1'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1600);

	} else if ((myWin > 640) && (myWin <= 960)) {
		/* 17summer1 */ /*20170720수정 : 모션시작 top값 1700 -> 700*/
		controller.addTween(10, TweenMax.from($('.summer17_bean'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.to($('.summer17_bean'), 2.0, {css:{top:'9%', opacity:1}, ease: Quad.easeOut}), 1, 700);

		controller.addTween(10, TweenMax.from($('.summer17_bean_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.to($('.summer17_bean_ttl'), 1.5, {css:{top:'56%', opacity:1}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.from($('.summer17_bean_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.to($('.summer17_bean_txt'), 2.0, {css:{top:'65%', opacity:1}, ease: Quad.easeOut}), 1, 700);

		controller.addTween(10, TweenMax.from($('.btn_summer17_bean'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.to($('.btn_summer17_bean'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 700);

		/*20200820수정*/
		/*controller.addTween(10, TweenMax.from($('.res_bean_17spring2'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.res_bean_17spring2'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1700);*/

		/* 17spring1 */
		controller.addTween(10, TweenMax.from($('.spring17_1_bean1'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1'), 2.0, {css:{top:'11%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.spring17_1_bean1_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1_ttl'), 1.5, {css:{top:'62%', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.spring17_1_bean1_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1_txt'), 2.0, {css:{top:'72%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.btn_spring17_1_bean'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.btn_spring17_1_bean'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1700);

		/* 17winter1 */
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_bg'), 1.5, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_bg'), 1.5, {css:{top:'19%', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1'), 2.0, {css:{top:'11%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_ttl'), 1.5, {css:{top:'62%', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_txt'), 2.0, {css:{top:'72%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.btn_winter17_1_bean'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.btn_winter17_1_bean'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.res_bean_17winter1'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.res_bean_17winter1'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 2700);

	} else if ((myWin > 480) && (myWin <= 640)) {
		/* 17summer1 *//*20170720수정 : 모션시작 top값 1700 -> 700*/
		controller.addTween(10, TweenMax.from($('.summer17_bean'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.to($('.summer17_bean'), 2.0, {css:{top:'10%', opacity:1}, ease: Quad.easeOut}), 1, 700);

		controller.addTween(10, TweenMax.from($('.summer17_bean_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.to($('.summer17_bean_ttl'), 1.5, {css:{top:'58%', opacity:1}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.from($('.summer17_bean_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.to($('.summer17_bean_txt'), 2.0, {css:{top:'68%', opacity:1}, ease: Quad.easeOut}), 1, 700);

		controller.addTween(10, TweenMax.from($('.btn_summer17_bean'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.to($('.btn_summer17_bean'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 700);


		/*20200820수정*/
		/*controller.addTween(10, TweenMax.from($('.res_bean_17spring2'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2600);
		controller.addTween(10, TweenMax.to($('.res_bean_17spring2'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 2600);*/

		/* 17spring1 */
		controller.addTween(10, TweenMax.from($('.spring17_1_bean1'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 700);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1'), 2.0, {css:{top:'12%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.spring17_1_bean1_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1_ttl'), 1.5, {css:{top:'62%', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.spring17_1_bean1_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1_txt'), 2.0, {css:{top:'72%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.btn_spring17_1_bean'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.btn_spring17_1_bean'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1700);

		/* 17winter1 */
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_bg'), 1.5, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_bg'), 1.5, {css:{top:'21%', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1'), 2.0, {css:{top:'18%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_ttl'), 1.5, {css:{top:'62%', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_txt'), 2.0, {css:{top:'72%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.btn_winter17_1_bean'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.btn_winter17_1_bean'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.res_bean_17winter1'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 3600);
		controller.addTween(10, TweenMax.to($('.res_bean_17winter1'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 3600);

	} else {
		/* 17summer1 */ /*20170720수정 : 모션시작 top값 1900 -> 900*/
		controller.addTween(10, TweenMax.from($('.summer17_bean'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 500); /*20171020수정*/
		controller.addTween(10, TweenMax.to($('.summer17_bean'), 2.0, {css:{top:'10%', opacity:1}, ease: Quad.easeOut}), 1, 500); /*20171020수정*/

		controller.addTween(10, TweenMax.from($('.summer17_bean_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 500);/*20171020수정*/
		controller.addTween(10, TweenMax.to($('.summer17_bean_ttl'), 1.5, {css:{top:'58%', opacity:1}, ease: Quad.easeOut}), 1, 500); /*20171020수정*/
		controller.addTween(10, TweenMax.from($('.summer17_bean_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 500); /*20171020수정*/
		controller.addTween(10, TweenMax.to($('.summer17_bean_txt'), 2.0, {css:{top:'67%', opacity:1}, ease: Quad.easeOut}), 1, 500); /*20171020수정*/

		controller.addTween(10, TweenMax.from($('.btn_summer17_bean'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 500);/*20171020수정*/
		controller.addTween(10, TweenMax.to($('.btn_summer17_bean'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 500);/*20171020수정*/


		/*20200820수정*/
		/*controller.addTween(10, TweenMax.from($('.res_bean_17spring2'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1000);20171020수정
		controller.addTween(10, TweenMax.to($('.res_bean_17spring2'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1000);20171020수정*/

		/* 17spring1 */
		controller.addTween(10, TweenMax.from($('.spring17_1_bean1'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1'), 2.0, {css:{top:'13%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.spring17_1_bean1_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 1900);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1_ttl'), 1.5, {css:{top:'61%', opacity:1}, ease: Quad.easeOut}), 1, 1900);
		controller.addTween(10, TweenMax.from($('.spring17_1_bean1_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 1900);
		controller.addTween(10, TweenMax.to($('.spring17_1_bean1_txt'), 2.0, {css:{top:'72%', opacity:1}, ease: Quad.easeOut}), 1, 1900);

		controller.addTween(10, TweenMax.from($('.btn_spring17_1_bean'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 1900);
		controller.addTween(10, TweenMax.to($('.btn_spring17_1_bean'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1900);

		/* 17winter1 */
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_bg'), 1.5, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_bg'), 1.5, {css:{top:'18%', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1'), 2.0, {css:{top:'15%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_ttl'), 1.5, {css:{top:'61%', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_txt'), 2.0, {css:{top:'72%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.btn_winter17_1_bean'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.btn_winter17_1_bean'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.res_bean_17winter1'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 3200);
		controller.addTween(10, TweenMax.to($('.res_bean_17winter1'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 3200);
	}
	/* 17winter1 end */

	
	$('#wipe1').cycle({ 
		fx:     'wipe', 
		speed:   300, 
		clip:   't2b',
		pause: true,
		timeout:  500, 
		autostop: true,
		end: function (options) {
			$('#wipe1').cycle('resume').cycle('stop');
		}
	});  

	$('#wipe2').cycle({ 
		fx:     'wipe', 
		speed:   300, 
		clip:   'b2t',
		pause: true,
		timeout:  500, 
		autostop: true,
		end: function (options) {
			$('#wipe2').cycle('resume').cycle('stop');
		}
	}); 

	function spr1TotalRotate(){
		function spr1Rotate1() {
			$('.sp17_1_cha2_img').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000, spr1Rotate1);
		}
		spr1Rotate1();
		function spr1Rotate2() {
			$('.sp17_1_cha3_img').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000, spr1Rotate2);
		}
		spr1Rotate2();
	}
	setTimeout(function(){ 
		spr1TotalRotate();
	}, 3000);
	
	/* 16winter2 */
	function winTotalLeaf(){
		function win2Leaf1Rotate1() {
			$('.wt2_side_leaf1').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf1Rotate1();
		function win2Leaf1Rotate2() {
			$('.wt2_side_leaf1').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf1Rotate2();

		function win2Leaf2Rotate1() {
			$('.wt2_side_leaf2').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf2Rotate1();
		function win2Leaf2Rotate2() {
			$('.wt2_side_leaf2').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf2Rotate2();

		function win2Leaf3Rotate1() {
			$('.wt2_side_leaf3').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf3Rotate1();
		function win2Leaf3Rotate2() {
			$('.wt2_side_leaf3').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf3Rotate2();

		function win2Leaf4Rotate1() {
			$('.wt2_side_leaf4').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf4Rotate1();
		function win2Leaf4Rotate2() {
			$('.wt2_side_leaf4').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf4Rotate2();

		function win2Leaf5Rotate1() {
			$('.wt2_bev2_leaf').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf5Rotate1();
		function win2Leaf5Rotate2() {
			$('.wt2_bev2_leaf').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf5Rotate2();

		function win2Leaf6Rotate1() {
			$('.wt2_bev3_leaf').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf6Rotate1();
		function win2Leaf6Rotate2() {
			$('.wt2_bev3_leaf').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf6Rotate2();

		function win2Leaf7Rotate1() {
			$('.wt2_bev4_leaf').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf7Rotate1();
		function win2Leaf7Rotate2() {
			$('.wt2_bev4_leaf').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf7Rotate2();

		function win2Leaf8Rotate1() {
			$('.wt2_bev1_leaf').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf8Rotate1();
		function win2Leaf8Rotate2() {
			$('.wt2_bev1_leaf').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		win2Leaf8Rotate2();

	}
	winTotalLeaf();
	setTimeout(function(){ 
		winTotalLeaf();
	}, 5000);
	

	var MovieVideo = $('.red_movie_wrap video');
	$('.movie_dimm_bg, .btn_movie_detail, .red_movie_wrap video').mouseenter(function(){
		console.log('play');
		setTimeout(function(){
			$('.red_movie_wrap video').get(0).play();
		}, 1);
		$('.movie_dimm_bg').stop().hide();
		$('.btn_movie_detail').stop().show();
	});
	$('.movie_dimm_bg, .btn_movie_detail').mouseleave(function(){
		console.log('pause');
		$('.red_movie_wrap video').get(0).pause();
		
		$('.btn_movie_detail').stop().hide();
		$('.movie_dimm_bg').stop().show();
	});
	
	$('.red_movie_wrap video').mouseleave(function(){
		$(this).get(0).pause();
		
		$('.btn_movie_detail').stop().hide();
		$('.movie_dimm_bg').stop().show();
	});
	

	win1Ani
		.append(TweenMax.to($('.wt2_bev2_cup, .wt2_bev2_txt, .wt2_bev2_leaf'), 1.3, {css:{opacity:1}}))
		.append(TweenMax.to($('.wt2_bev3_cup, .wt2_bev3_txt, .wt2_bev3_leaf'), 1, {css:{opacity:1}, delay:-.5}))
		.append(TweenMax.to($('.wt2_bev4_cup, .wt2_bev4_txt, .wt2_bev4_leaf'), 1, {css:{opacity:1}, delay:-.5}))
		.append(TweenMax.to($('.wt2_bev1_cup, .wt2_bev1_txt, .wt2_bev1_leaf'), 1, {css:{opacity:1}, delay:-.5}))
		.append(TweenMax.to($('.wt2_side_leaf1, .wt2_side_leaf2, .wt2_side_leaf3, .wt2_side_leaf4, .wt2_emblem, .btn_winter2_detail'), 1, {css:{opacity:1}, delay:-.5}))

	/* 16winter2 end */

	/* 16winter1 */
	function totalLeaf(){
		function leaf1Rotate1() {
			$('.side_leaf1').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf1Rotate1();
		function leaf1Rotate2() {
			$('.side_leaf1').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf1Rotate2();

		function leaf2Rotate1() {
			$('.side_leaf2').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf2Rotate1();
		function leaf2Rotate2() {
			$('.side_leaf2').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf2Rotate2();

		function leaf3Rotate1() {
			$('.side_leaf3').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf3Rotate1();
		function leaf3Rotate2() {
			$('.side_leaf3').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf3Rotate2();

		function leaf4Rotate1() {
			$('.side_leaf4').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf4Rotate1();
		function leaf4Rotate2() {
			$('.side_leaf4').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf4Rotate2();

		function leaf5Rotate1() {
			$('.bev3_leaf').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf5Rotate1();
		function leaf5Rotate2() {
			$('.bev3_leaf').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf5Rotate2();

		function leaf6Rotate1() {
			$('.bev1_leaf').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf6Rotate1();
		function leaf6Rotate2() {
			$('.bev1_leaf').animate({
				'rotate':'5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf6Rotate2();

		function leaf7Rotate1() {
			$('.bev2_leaf').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf7Rotate1();
		function leaf7Rotate2() {
			$('.bev2_leaf').animate({
				'rotate':'-5deg'
			}, 2000).animate({
				'rotate':'0'
			}, 2000);
		}
		leaf7Rotate2();
	}
	totalLeaf();
	setTimeout(function(){ 
		totalLeaf();
	}, 5000);
	

	var MovieVideo = $('.red_movie_wrap video');
	$('.movie_dimm_bg, .btn_movie_detail, .red_movie_wrap video').mouseenter(function(){
		console.log('play');
		setTimeout(function(){
			$('.red_movie_wrap video').get(0).play();
		}, 1);
		$('.movie_dimm_bg').stop().hide();
		$('.btn_movie_detail').stop().show();
	});
	$('.movie_dimm_bg, .btn_movie_detail').mouseleave(function(){
		console.log('pause');
		$('.red_movie_wrap video').get(0).pause();
		
		$('.btn_movie_detail').stop().hide();
		$('.movie_dimm_bg').stop().show();
	});
	
	$('.red_movie_wrap video').mouseleave(function(){
		$(this).get(0).pause();
		
		$('.btn_movie_detail').stop().hide();
		$('.movie_dimm_bg').stop().show();
	});
	

	win1Ani
		.append(TweenMax.to($('.bev3_cup, .bev3_ttl, .bev3_leaf'), 1.3, {css:{opacity:1}}))
		.append(TweenMax.to($('.bev2_cup, .bev2_ttl, .bev2_leaf'), 1, {css:{opacity:1}, delay:-.5}))
		.append(TweenMax.to($('.bev1_cup, .bev1_ttl, .bev1_leaf'), 1, {css:{opacity:1}, delay:-.5}))
		.append(TweenMax.to($('.side_leaf1, .side_fruit1, .side_leaf2, .side_leaf3, .side_fruit2, .side_leaf4, .win1_emblem, .btn_winter1_detail'), 1, {css:{opacity:1}, delay:-.5}))

	/* 16winter1 end */

	/* 16autumn1 ani */

	/*setInterval(function(){
		$('.cup_obje01').fadeOut(3000).delay(2000).fadeIn(3000);
		$('.cup_obje02').fadeOut(2000).delay(1000).fadeIn(2000);
		$('.cup_obje03').fadeOut(2500).delay(2000).fadeIn(2500);
		$('.cup_obje04').fadeOut(2100).delay(2000).fadeIn(2100);
	}, 1);*/


		aut1Ani
			.append(TweenMax.to($('.tablecloth'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.autumn_spoon'), .7, {css:{opacity:1}, delay:-0.2}))
			.append(TweenMax.to($('.bev_img02'), .7, {css:{opacity:1 }}))
			.append(TweenMax.to($('.bev_img01'), .7, {css:{opacity:1},delay:-0.2}))
			.append(TweenMax.to($('.ttl_bev01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.ttl_teavana'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.bev_img03'), .7, {css:{opacity:1},delay:-0.2}))
			.append(TweenMax.to($('.bev_img04'), .7, {css:{opacity:1},delay:-0.3}))
			.append(TweenMax.to($('.ttl_bev02'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_autumn_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.teavana_float'), .7, {css:{opacity:1}}))
	

	function reserveStar() {
		$('.black_reserve_logo2').animateSprite({
			fps : 8,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
			},
			loop : false,
			complete : function(){
				setTimeout(function(){
				$('.black_reserve_logo2').animateSprite('restart');
				},1000);
			}
		});
	}
	reserveStar();

	function bevShadow01() {
		$('.bev_img01_shadow').fadeIn();
		$('.bev_img01_shadow').animateSprite({
			fps : 18,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
			},
			loop : false
		});
	}

	function bevShadow02() {
		$('.bev_img02_shadow').fadeIn();
		$('.bev_img02_shadow').animateSprite({
			fps : 18,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
			},
			loop : false
		});
	}

	function bevShadow03() {
		$('.bev_img03_shadow').fadeIn();
		$('.bev_img03_shadow').animateSprite({
			fps : 18,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
			},
			loop : false
		});
	}

	function bevShadow04() {
		$('.bev_img04_shadow').fadeIn();
		$('.bev_img04_shadow').animateSprite({
			fps : 18,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
			},
			loop : false
		});
	}

	/* 16autumn1 ani end */

	/* summer3 ani */
	if (myWin > 1370) {
		sum3Ani
			.append(TweenMax.to($('.sum3_cup_img_01'), .7, {css:{left:'909px' ,opacity:1}, delay:1.5}))
			.append(TweenMax.to($('.sum3_cup_ttl_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_02'), .7, {css:{left:'1221px' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_02'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_03'), .7, {css:{bottom:'120px' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_03'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_bg_01'), .075, {css:{width:'200px',left:'830px',top:'150px' ,opacity:1}, onComplete:bgMoving02}))
			.append(TweenMax.to($('.sum3_cup_bg_02'), .7, {css:{opacity:1}, delay:.5, onComplete:bgMoving03}))
			.append(TweenMax.to($('.ttl_summer3'), .7, {css:{top:'175px' ,opacity:1}, delay:1}))
			.append(TweenMax.to($('.btn_summer3_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.bnr_teaching'), .7, {css:{opacity:1}}))
	} else if ((myWin > 1280) && (myWin <= 1370)) {
		sum3Ani
			.append(TweenMax.to($('.sum3_cup_img_01'), .7, {css:{left:'909px' ,opacity:1}, delay:1.5}))
			.append(TweenMax.to($('.sum3_cup_ttl_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_02'), .7, {css:{left:'1221px' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_02'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_03'), .7, {css:{bottom:'120px' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_03'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_bg_01'), .075, {css:{width:'200px',left:'830px',top:'150px' ,opacity:1}, onComplete:bgMoving02}))
			.append(TweenMax.to($('.sum3_cup_bg_02'), .7, {css:{opacity:1}, delay:.5, onComplete:bgMoving03}))
			.append(TweenMax.to($('.ttl_summer3'), .7, {css:{top:'175px' ,opacity:1}, delay:1}))
			.append(TweenMax.to($('.btn_summer3_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.bnr_teaching'), .7, {css:{opacity:1}}))
	} else if ((myWin > 960) && (myWin <= 1280)) {
		sum3Ani
			.append(TweenMax.to($('.sum3_cup_img_01'), .7, {css:{left:'889px' ,opacity:1}, delay:1.5}))
			.append(TweenMax.to($('.sum3_cup_ttl_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_02'), .7, {css:{left:'1191px' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_02'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_03'), .7, {css:{bottom:'120px' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_03'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_bg_01'), .075, {css:{width:'150px',left:'830px',top:'190px' ,opacity:1}, onComplete:bgMoving02}))
			.append(TweenMax.to($('.sum3_cup_bg_02'), .7, {css:{opacity:1}, delay:.5, onComplete:bgMoving03}))
			.append(TweenMax.to($('.ttl_summer3'), .7, {css:{top:'240px' ,opacity:1}, delay:1}))
			.append(TweenMax.to($('.btn_summer3_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.bnr_teaching'), .7, {css:{opacity:1}}))
	} else if ((myWin > 720) && (myWin <= 960)) {
		sum3Ani
			.append(TweenMax.to($('.sum3_cup_img_01'), .7, {css:{left:'41%' ,opacity:1}, delay:1.5}))
			.append(TweenMax.to($('.sum3_cup_ttl_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_02'), .7, {css:{left:'52%' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_02'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_03'), .7, {css:{bottom:'180px' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_03'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_bg_01'), .075, {css:{width:'120px',left:'770px',top:'315px' ,opacity:1}, onComplete:bgMoving02}))
			.append(TweenMax.to($('.sum3_cup_bg_02'), .7, {css:{opacity:1}, delay:.5, onComplete:bgMoving03}))
			.append(TweenMax.to($('.ttl_summer3'), .7, {css:{top:'50px' ,opacity:1}, delay:1}))
			.append(TweenMax.to($('.btn_summer3_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.bnr_teaching'), .7, {css:{opacity:1}}))
	} else if ((myWin > 640) && (myWin <= 720)) {
		sum3Ani
			.append(TweenMax.to($('.sum3_cup_img_01'), .7, {css:{left:'41%' ,opacity:1}, delay:1.5}))
			.append(TweenMax.to($('.sum3_cup_ttl_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_02'), .7, {css:{left:'52%' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_02'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_03'), .7, {css:{bottom:'200px' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_03'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_bg_01'), .075, {css:{width:'120px',left:'770px',top:'285px' ,opacity:1}, onComplete:bgMoving02}))
			.append(TweenMax.to($('.sum3_cup_bg_02'), .7, {css:{opacity:1}, delay:.5, onComplete:bgMoving03}))
			.append(TweenMax.to($('.ttl_summer3'), .7, {css:{top:'50px' ,opacity:1}, delay:1}))
			.append(TweenMax.to($('.btn_summer3_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.bnr_teaching'), .7, {css:{opacity:1}}))
	} else if ((myWin > 480) && (myWin <= 640)) {
		sum3Ani
			.append(TweenMax.to($('.sum3_cup_img_01'), .7, {css:{left:'42%' ,opacity:1}, delay:1.5}))
			.append(TweenMax.to($('.sum3_cup_ttl_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_02'), .7, {css:{left:'51.5%' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_02'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_03'), .7, {css:{bottom:'155px' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_03'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_bg_01'), .075, {css:{width:'110px',left:'800px',top:'310px' ,opacity:1}, onComplete:bgMoving02}))
			.append(TweenMax.to($('.sum3_cup_bg_02'), .7, {css:{opacity:1}, delay:.5, onComplete:bgMoving03}))
			.append(TweenMax.to($('.ttl_summer3'), .7, {css:{top:'70px' ,opacity:1}, delay:1}))
			.append(TweenMax.to($('.btn_summer3_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.bnr_teaching'), .7, {css:{opacity:1}}))
	} else {
		sum3Ani
			.append(TweenMax.to($('.sum3_cup_img_01'), .7, {css:{left:'42.5%' ,opacity:1}, delay:1.5}))
			.append(TweenMax.to($('.sum3_cup_ttl_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_02'), .7, {css:{left:'51.5%' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_02'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_img_03'), .7, {css:{bottom:'220px' ,opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_ttl_03'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.sum3_cup_bg_01'), .075, {css:{width:'100px',left:'810px',top:'250px' ,opacity:1}, onComplete:bgMoving02}))
			.append(TweenMax.to($('.sum3_cup_bg_02'), .7, {css:{opacity:1}, delay:.5, onComplete:bgMoving03}))
			.append(TweenMax.to($('.ttl_summer3'), .7, {css:{top:'60px' ,opacity:1}, delay:1}))
			.append(TweenMax.to($('.btn_summer3_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.bnr_teaching'), .7, {css:{opacity:1}}))
	}
	function imgMoving01() {
		$('.main_summer3_img1').fadeIn();
		$('.main_summer3_img1').animateSprite({
			fps : 18,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
			},
			loop : false
		});
	}
	imgMoving01();
	function imgMoving02() {
		$('.main_summer3_img2').fadeIn();
		$('.main_summer3_img2').animateSprite({
			fps : 12,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
			},
			loop : false
		});
	}
	imgMoving02();
	function bgMoving02() {
		$('.sum3_cup_bg_02').fadeIn();
		$('.sum3_cup_bg_02').animateSprite({
			fps : 4,
			animations : {
				walkRight: [0, 1, 2, 3, 4]
			},
			loop : true
		});
	}
	function bgMoving03() {
		$('.sum3_cup_bg_03').fadeIn();
		$('.sum3_cup_bg_03').animateSprite({
			fps : 20,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7]
			},
			loop : false
		});
	}
	

	/* summer2 ani */
	if (myWin > 1370) {
		sum2Ani
			.append(TweenMax.to($('.ttl_summer'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_img_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_ttl_01'), .7, {css:{left:'1240px' ,opacity:1}, onComplete:cupMoving01}))
			.append(TweenMax.to($('.cup_img_02'), .7, {css:{ opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_02'), .7, {css:{left:'1427px' ,opacity:1}, onComplete:cupMoving02}))
			.append(TweenMax.to($('.cup_img_03'), .7, {css:{opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_03'), .7, {css:{left:'1487px' ,opacity:1}, onComplete:cupMoving03}))
			.append(TweenMax.to($('.btn_summer_detail'), .7, {css:{opacity:1}, delay:1.0}))
	} else if ((myWin > 1280) && (myWin <= 1370)) {
		sum2Ani
			.append(TweenMax.to($('.ttl_summer'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_img_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_ttl_01'), .7, {css:{left:'1240px' ,opacity:1}, onComplete:cupMoving01}))
			.append(TweenMax.to($('.cup_img_02'), .7, {css:{ opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_02'), .7, {css:{left:'1427px' ,opacity:1}, onComplete:cupMoving02}))
			.append(TweenMax.to($('.cup_img_03'), .7, {css:{opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_03'), .7, {css:{left:'1487px' ,opacity:1}, onComplete:cupMoving03}))
			.append(TweenMax.to($('.btn_summer_detail'), .7, {css:{opacity:1}, delay:1.0}))
	} else if ((myWin > 960) && (myWin <= 1280)) {
		sum2Ani
			.append(TweenMax.to($('.ttl_summer'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_img_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_ttl_01'), .7, {css:{left:'1130px' ,opacity:1}, onComplete:cupMoving01}))
			.append(TweenMax.to($('.cup_img_02'), .7, {css:{ opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_02'), .7, {css:{left:'1280px' ,opacity:1}, onComplete:cupMoving02}))
			.append(TweenMax.to($('.cup_img_03'), .7, {css:{opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_03'), .7, {css:{left:'1330px' ,opacity:1}, onComplete:cupMoving03}))
			.append(TweenMax.to($('.btn_summer_detail'), .7, {css:{opacity:1}, delay:1.0}))
	} else if ((myWin > 720) && (myWin <= 960)) {
		sum2Ani
			.append(TweenMax.to($('.ttl_summer'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_img_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_ttl_01'), .7, {css:{left:'655px' ,opacity:1}, onComplete:cupMoving01}))
			.append(TweenMax.to($('.cup_img_02'), .7, {css:{ opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_02'), .7, {css:{left:'1100px' ,opacity:1}, onComplete:cupMoving02}))
			.append(TweenMax.to($('.cup_img_03'), .7, {css:{opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_03'), .7, {css:{left:'1180px' ,opacity:1}, onComplete:cupMoving03}))
			.append(TweenMax.to($('.btn_summer_detail'), .7, {css:{opacity:1}, delay:1.0}))
	} else if ((myWin > 640) && (myWin <= 720)) {
		sum2Ani
			.append(TweenMax.to($('.ttl_summer'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_img_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_ttl_01'), .7, {css:{left:'705px' ,opacity:1}, onComplete:cupMoving01}))
			.append(TweenMax.to($('.cup_img_02'), .7, {css:{ opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_02'), .7, {css:{left:'1065px' ,opacity:1}, onComplete:cupMoving02}))
			.append(TweenMax.to($('.cup_img_03'), .7, {css:{opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_03'), .7, {css:{left:'1100px' ,opacity:1}, onComplete:cupMoving03}))
			.append(TweenMax.to($('.btn_summer_detail'), .7, {css:{opacity:1}, delay:1.0}))
	} else if ((myWin > 480) && (myWin <= 640)) {
		sum2Ani
			.append(TweenMax.to($('.ttl_summer'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.ttl_summer'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_img_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_ttl_01'), .7, {css:{left:'775px' ,opacity:1}, onComplete:cupMoving01}))
			.append(TweenMax.to($('.cup_img_02'), .7, {css:{ opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_02'), .7, {css:{left:'1060px' ,opacity:1}, onComplete:cupMoving02}))
			.append(TweenMax.to($('.cup_img_03'), .7, {css:{opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_03'), .7, {css:{left:'1090px' ,opacity:1}, onComplete:cupMoving03}))
			.append(TweenMax.to($('.btn_summer_detail'), .7, {css:{opacity:1}, delay:1.0}))
	} else {
		sum2Ani
			.append(TweenMax.to($('.ttl_summer'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_img_01'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.cup_ttl_01'), .7, {css:{left:'848px' ,opacity:1}, onComplete:cupMoving01}))
			.append(TweenMax.to($('.cup_img_02'), .7, {css:{ opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_02'), .7, {css:{left:'1065px' ,opacity:1}, onComplete:cupMoving02}))
			.append(TweenMax.to($('.cup_img_03'), .7, {css:{opacity:1}, delay:1.0}))
			.append(TweenMax.to($('.cup_ttl_03'), .7, {css:{left:'1085px' ,opacity:1}, onComplete:cupMoving03}))
			.append(TweenMax.to($('.btn_summer_detail'), .7, {css:{opacity:1}, delay:1.0}))
	}
	
	function cupMoving01() {
		$('.cup_bg_01').fadeIn();
		$('.cup_bg_01').animateSprite({
			fps : 16,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
			},
			loop : false
		});
	}
	function cupMoving02() {
		$('.cup_bg_02').fadeIn();
		$('.cup_bg_02').animateSprite({
			fps : 14,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
			},
			loop : false
		});
	}
	function cupMoving03() {
		$('.cup_bg_03').fadeIn();
		$('.cup_bg_03').animateSprite({
			fps : 16,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
			},
			loop : false
		});
	}
	/* summer2 ani end */

	/* summer1 ani */
	if (myWin > 1370) {
		sum1Ani
			.append(TweenMax.to($('.ttl_chill'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.img_cup03'), .7, {css:{left:'1295px', opacity:1}, onComplete:txtSprite03}))
			.append(TweenMax.to($('.img_cup02'), .7, {css:{left:'947px', opacity:1}, onComplete:txtSprite02, delay:1.5}))
			.append(TweenMax.to($('.img_cup01'), .7, {css:{top:'126px', opacity:1}, onComplete:txtSprite01, delay:1.5}))
			.append(TweenMax.to($('.btn_chill_detail'), .7, {css:{opacity:1}, delay:1.5}))
	} else if ((myWin > 1280) && (myWin <= 1370)) {
		sum1Ani
			.append(TweenMax.to($('.ttl_chill'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.img_cup03'), .7, {css:{left:'1295px', opacity:1}, onComplete:txtSprite03}))
			.append(TweenMax.to($('.img_cup02'), .7, {css:{left:'957px', opacity:1}, onComplete:txtSprite02, delay:1.5}))
			.append(TweenMax.to($('.img_cup01'), .7, {css:{top:'236px', opacity:1}, onComplete:txtSprite01, delay:1.5}))
			.append(TweenMax.to($('.btn_chill_detail'), .7, {css:{opacity:1}, delay:1.5}))
	} else if ((myWin > 960) && (myWin <= 1280)) {
		sum1Ani
			.append(TweenMax.to($('.ttl_chill'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.img_cup03'), .7, {css:{left:'1245px', opacity:1}, onComplete:txtSprite03}))
			.append(TweenMax.to($('.img_cup02'), .7, {css:{left:'977px', opacity:1}, onComplete:txtSprite02, delay:1.5}))
			.append(TweenMax.to($('.img_cup01'), .7, {css:{top:'246px', opacity:1}, onComplete:txtSprite01, delay:1.5}))
			.append(TweenMax.to($('.btn_chill_detail'), .7, {css:{opacity:1}, delay:1.5}))
	} else if ((myWin > 720) && (myWin <= 960)) {
		sum1Ani
			.append(TweenMax.to($('.ttl_chill'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.img_cup03'), .7, {css:{left:'52%', opacity:1}, onComplete:txtSprite03}))
			.append(TweenMax.to($('.img_cup02'), .7, {css:{left:'42%', opacity:1}, onComplete:txtSprite02, delay:1.5}))
			.append(TweenMax.to($('.img_cup01'), .7, {css:{top:'320px', opacity:1}, onComplete:txtSprite01, delay:1.5}))
			.append(TweenMax.to($('.btn_chill_detail'), .7, {css:{opacity:1}, delay:1.5}))
	} else if ((myWin > 640) && (myWin <= 720)) {
		sum1Ani
			.append(TweenMax.to($('.ttl_chill'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.img_cup03'), .7, {css:{left:'52%', opacity:1}, onComplete:txtSprite03}))
			.append(TweenMax.to($('.img_cup02'), .7, {css:{left:'42%', opacity:1}, onComplete:txtSprite02, delay:1.5}))
			.append(TweenMax.to($('.img_cup01'), .7, {css:{top:'320px', opacity:1}, onComplete:txtSprite01, delay:1.5}))
			.append(TweenMax.to($('.btn_chill_detail'), .7, {css:{opacity:1}, delay:1.5}))
	} else if ((myWin > 480) && (myWin <= 640)) {
		sum1Ani
			.append(TweenMax.to($('.ttl_chill'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.img_cup03'), .7, {css:{left:'52%', opacity:1}, onComplete:txtSprite03}))
			.append(TweenMax.to($('.img_cup02'), .7, {css:{left:'42%', opacity:1}, onComplete:txtSprite02, delay:1.5}))
			.append(TweenMax.to($('.img_cup01'), .7, {css:{top:'320px', opacity:1}, onComplete:txtSprite01, delay:1.5}))
			.append(TweenMax.to($('.btn_chill_detail'), .7, {css:{opacity:1}, delay:1.5}))
	} else {
		sum1Ani
			.append(TweenMax.to($('.ttl_chill'), 1.5, {css:{opacity:1}}))
			.append(TweenMax.to($('.img_cup03'), .7, {css:{left:'51.5%', opacity:1}, onComplete:txtSprite03}))
			.append(TweenMax.to($('.img_cup02'), .7, {css:{left:'43%', opacity:1}, onComplete:txtSprite02, delay:1.5}))
			.append(TweenMax.to($('.img_cup01'), .7, {css:{top:'340px', opacity:1}, onComplete:txtSprite01, delay:1.5}))
			.append(TweenMax.to($('.btn_chill_detail'), .7, {css:{opacity:1}, delay:1.5}))
	}

	function txtSprite03() {
		$('.img_txt03').fadeIn();
		$('.img_txt03').animateSprite({
			fps : 12,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
			},
			loop : false,
			complete : function(){
				$('.ttl_cup03').fadeIn();
			}
		});
	}
	function txtSprite02() {
		$('.img_txt02').fadeIn();
		$('.img_txt02').animateSprite({
			fps : 12,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			},
			loop : false,
			complete : function(){
				$('.ttl_cup02').fadeIn();
			}
		});
	}
	function txtSprite01() {
		$('.img_txt01').fadeIn();
		$('.img_txt01').animateSprite({
			fps : 12,
			animations : {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
			},
			loop : false,
			complete : function(){
				$('.ttl_cup01').fadeIn();
			}
		});
	}
	/* summer1 ani end */

	/* spring2 ani */
	if (myWin > 1280) {
		sp2Ani
			.append(TweenMax.to($('.ttl_bloom'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.leaves'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_cherry_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_cup01'), 1, {css:{left:'769px', opacity:1, top:'-52px'}, onComplete:leafSprite01}))
			.append(TweenMax.to($('.latte_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite02}))
			.append(TweenMax.to($('.choco_cup01'), 1, {css:{left:'1259px', opacity:1, top:'206px'}, onComplete:leafSprite03}))
			.append(TweenMax.to($('.choco_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.choco_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite04}))
	} else if ((myWin > 960) && (myWin <= 1280)) {
		sp2Ani
			.append(TweenMax.to($('.ttl_bloom'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.leaves'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_cherry_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_cup01'), 1, {css:{left:'810px', opacity:1, top:'-52px'}, onComplete:leafSprite01}))
			.append(TweenMax.to($('.latte_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite02}))
			.append(TweenMax.to($('.choco_cup01'), 1, {css:{left:'1259px', opacity:1, top:'206px'}, onComplete:leafSprite03}))
			.append(TweenMax.to($('.choco_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.choco_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite04}))
	} else if ((myWin > 720) && (myWin <= 960)) {
		sp2Ani
			.append(TweenMax.to($('.ttl_bloom'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.leaves'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_cherry_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_cup01'), 1, {css:{left:'0', opacity:1, top:'360px'}, onComplete:leafSprite01}))
			.append(TweenMax.to($('.latte_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite02}))
			.append(TweenMax.to($('.choco_cup01'), 1, {css:{left:'440px', opacity:1, top:'520px'}, onComplete:leafSprite03}))
			.append(TweenMax.to($('.choco_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.choco_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite04}))
	} else if ((myWin > 640) && (myWin <= 720)) {
		sp2Ani
			.append(TweenMax.to($('.ttl_bloom'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.leaves'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_cherry_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_cup01'), 1, {css:{left:'-60px', opacity:1, top:'360px'}, onComplete:leafSprite01}))
			.append(TweenMax.to($('.latte_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite02}))
			.append(TweenMax.to($('.choco_cup01'), 1, {css:{left:'400px', opacity:1, top:'510px'}, onComplete:leafSprite03}))
			.append(TweenMax.to($('.choco_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.choco_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite04}))
	} else if ((myWin > 480) && (myWin <= 640)) {
		sp2Ani
			.append(TweenMax.to($('.ttl_bloom'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.leaves'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_cherry_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_cup01'), 1, {css:{left:'-40px', opacity:1, top:'380px'}, onComplete:leafSprite01}))
			.append(TweenMax.to($('.latte_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite02}))
			.append(TweenMax.to($('.choco_cup01'), 1, {css:{left:'250px', opacity:1, top:'600px'}, onComplete:leafSprite03}))
			.append(TweenMax.to($('.choco_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.choco_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite04}))
	} else {
		sp2Ani
			.append(TweenMax.to($('.ttl_bloom'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.leaves'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_cherry_detail'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_cup01'), 1, {css:{left:'-60px', opacity:1, top:'310px'}, onComplete:leafSprite01}))
			.append(TweenMax.to($('.latte_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.latte_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite02}))
			.append(TweenMax.to($('.choco_cup01'), 1, {css:{left:'170px', opacity:1, top:'540px'}, onComplete:leafSprite03}))
			.append(TweenMax.to($('.choco_cup01_shadow'), .7, {css:{opacity:1}}))
			.append(TweenMax.to($('.choco_ttl01'), .7, {css:{opacity:1}, onComplete:leafSprite04}))
	}

	function leafSprite01() {
		$('.leaf_sprite01').fadeIn();
		$('.leaf_sprite01').animateSprite({
			fps: 12,
			animations: {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
			},
			loop: false
		});
	}

	function leafSprite02() {
		$('.leaf_sprite02').fadeIn();
		$('.leaf_sprite02').animateSprite({
			fps: 12,
			animations: {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
			},
			loop: false
		});
	}

	function leafSprite03() {
		$('.leaf_sprite03').fadeIn();
		$('.leaf_sprite03').animateSprite({
			fps: 12,
			animations: {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
			},
			loop: false
		});
	}

	function leafSprite04() {
		$('.leaf_sprite04').fadeIn();
		$('.leaf_sprite04').animateSprite({
			fps: 12,
			animations: {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
			},
			loop: false,
			complete: function(){
				console.log('animation End');
			}
		});
	}
	/* spring2 ani end */


	/* spring ani */
	function springTypoObj() {
		if (myWin > 960) {
			$('.spring_typo_obj01').jsMovie({
				sequence:'##.png',
				from:0,
				to:20,
				folder:'img/main/spring/typo_obj01/',
				fps:8,
				height:247,
				width:442,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 720) && (myWin <= 960)) {
			$('.spring_typo_obj01').jsMovie({
				sequence:'##.png',
				from:0,
				to:20,
				folder:'img/main/spring/typo_obj01/',
				fps:8,
				height:224,
				width:400,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 640) && (myWin <= 720)) {
			$('.spring_typo_obj01').jsMovie({
				sequence:'##.png',
				from:0,
				to:20,
				folder:'img/main/spring/typo_obj01/',
				fps:8,
				height:190,
				width:340,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 480) && (myWin <= 640)) {
			$('.spring_typo_obj01').jsMovie({
				sequence:'##.png',
				from:0,
				to:20,
				folder:'img/main/spring/typo_obj01/',
				fps:8,
				height:224,
				width:400,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else {
			$('.spring_typo_obj01').jsMovie({
				sequence:'##.png',
				from:0,
				to:20,
				folder:'img/main/spring/typo_obj01/',
				fps:8,
				height:157,
				width:280,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		}
	}
	springTypoObj();
	
	function naviObj() {
		if (myWin > 960) {
			$('.spring_navi').jsMovie({
				sequence:'##.png',
				from:1,
				to:4,
				folder:'img/main/spring/navi/',
				fps:4,
				height:100,
				width:100,
				playOnLoad:true,
				performStop:false,
				repeat:true
			});
		} else if ((myWin > 720) && (myWin <= 960)) {
			$('.spring_navi').jsMovie({
				sequence:'##.png',
				from:1,
				to:4,
				folder:'img/main/spring/navi/',
				fps:4,
				height:100,
				width:100,
				playOnLoad:true,
				performStop:false,
				repeat:true
			});
		} else if ((myWin > 640) && (myWin <= 720)) {
			$('.spring_navi').jsMovie({
				sequence:'##.png',
				from:1,
				to:4,
				folder:'img/main/spring/navi/',
				fps:4,
				height:80,
				width:80,
				playOnLoad:true,
				performStop:false,
				repeat:true
			});
		} else if ((myWin > 480) && (myWin <= 640)) {
			$('.spring_navi').jsMovie({
				sequence:'##.png',
				from:1,
				to:4,
				folder:'img/main/spring/navi/',
				fps:4,
				height:90,
				width:90,
				playOnLoad:true,
				performStop:false,
				repeat:true
			});
		} else {
			$('.spring_navi').jsMovie({
				sequence:'##.png',
				from:1,
				to:4,
				folder:'img/main/spring/navi/',
				fps:4,
				height:70,
				width:70,
				playOnLoad:true,
				performStop:false,
				repeat:true
			});
		}
	}
	setTimeout(function(){
		naviObj();
	}, 5000);

	$('.spring_typo_obj01').bind('ended', function(){
		if (myWin > 1280) {
			bnrAni
				.append(TweenMax.to($('.btn_macchiato_detail'), .5, {css:{opacity:1}}))	
				.append(TweenMax.to($('.caramel_cup'), .5, {css:{opacity:1, right:'670px', top:'40px'}, onComplete:caramelCupTxt}))
				.append(TweenMax.to($('.latte_cup'), .5, {css:{opacity:1, right:'370px', top:'270px'}, onComplete:latteCupTxt}))
		} else if ((myWin > 960) && (myWin <= 1280)) {
			bnrAni
				.append(TweenMax.to($('.btn_macchiato_detail'), .5, {css:{opacity:1}}))	
				.append(TweenMax.to($('.caramel_cup'), .5, {css:{opacity:1, right:'670px', top:'40px'}, onComplete:caramelCupTxt}))
				.append(TweenMax.to($('.latte_cup'), .5, {css:{opacity:1, right:'360px', top:'300px'}, onComplete:latteCupTxt}))
		} else if ((myWin > 720) && (myWin <= 960)) {
			bnrAni
				.append(TweenMax.to($('.btn_macchiato_detail'), .5, {css:{opacity:1}}))	
				.append(TweenMax.to($('.caramel_cup'), .5, {css:{opacity:1, right:'1030px', top:'30px'}, onComplete:caramelCupTxt}))
				.append(TweenMax.to($('.latte_cup'), .5, {css:{opacity:1, right:'550px', top:'380px'}, onComplete:latteCupTxt}))
		} else if ((myWin > 640) && (myWin <= 720)) {
			bnrAni
				.append(TweenMax.to($('.btn_macchiato_detail'), .5, {css:{opacity:1}}))	
				.append(TweenMax.to($('.caramel_cup'), .5, {css:{opacity:1, right:'1030px', top:'70px'}, onComplete:caramelCupTxt}))
				.append(TweenMax.to($('.latte_cup'), .5, {css:{opacity:1, right:'660px', top:'400px'}, onComplete:latteCupTxt}))
		} else if ((myWin > 480) && (myWin <= 640)) {
			bnrAni
				.append(TweenMax.to($('.btn_macchiato_detail'), .5, {css:{opacity:1}}))	
				.append(TweenMax.to($('.caramel_cup'), .5, {css:{opacity:1, right:'950px', top:'310px'}, onComplete:caramelCupTxt}))
				.append(TweenMax.to($('.latte_cup'), .5, {css:{opacity:1, right:'700px', top:'530px'}, onComplete:latteCupTxt}))
		} else {
			bnrAni
				.append(TweenMax.to($('.btn_macchiato_detail'), .5, {css:{opacity:1}}))	
				.append(TweenMax.to($('.caramel_cup'), .5, {css:{opacity:1, right:'965px', top:'230px'}, onComplete:caramelCupTxt}))
				.append(TweenMax.to($('.latte_cup'), .5, {css:{opacity:1, right:'780px', top:'450px'}, onComplete:latteCupTxt}))
		}
	});

	function caramelCupTxt() {
		if (myWin > 720) {
			$('.caramel_cup_txt').jsMovie({
				sequence:'##.png',
				from:0,
				to:26,
				folder:'img/main/spring/ctxt1/',
				fps:6,
				height:135,
				width:226,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 640) && (myWin <= 720)) {
			$('.caramel_cup_txt').jsMovie({
				sequence:'##.png',
				from:0,
				to:26,
				folder:'img/main/spring/ctxt1/',
				fps:6,
				height:123,
				width:206,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 480) && (myWin <= 640)) {
			$('.caramel_cup_txt').jsMovie({
				sequence:'##.png',
				from:0,
				to:26,
				folder:'img/main/spring/ctxt1/',
				fps:6,
				height:125,
				width:215,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else {
			$('.caramel_cup_txt').jsMovie({
				sequence:'##.png',
				from:0,
				to:26,
				folder:'img/main/spring/ctxt1/',
				fps:6,
				height:96,
				width:160,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		}
	}

	function latteCupTxt() {
		if (myWin > 720) {
			$('.latte_cup_txt').jsMovie({
				sequence:'##.png',
				from:0,
				to:16,
				folder:'img/main/spring/ctxt2/',
				fps:6,
				height:90,
				width:185,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 640) && (myWin <= 720)) {
			$('.latte_cup_txt').jsMovie({
				sequence:'##.png',
				from:0,
				to:16,
				folder:'img/main/spring/ctxt2/',
				fps:6,
				height:80,
				width:165,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 480) && (myWin <= 640)) {
			$('.latte_cup_txt').jsMovie({
				sequence:'##.png',
				from:0,
				to:16,
				folder:'img/main/spring/ctxt2/',
				fps:6,
				height:83,
				width:170,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else {
			$('.latte_cup_txt').jsMovie({
				sequence:'##.png',
				from:0,
				to:16,
				folder:'img/main/spring/ctxt2/',
				fps:6,
				height:66,
				width:135,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		}
	}

	function comming() {
		$('.bn_comming_wrap').fadeIn();
		$('.bn_comming').animate({
			'top':'-4px'
		}, 600).animate({
			'top':'0'
		}, 600, comming);
		$('.bn_comming').animateSprite({
			fps: 4,
			animations: {
				walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
			},
			loop: true
		});
	}
	comming();

	var controller = $.superscrollorama({
		triggerAtCenter: true
	});

	if (myWin > 1280) {

		/* 17winter1 */
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_bg'), 1.5, {css:{left:'10px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1'), 2.0, {css:{left:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_ttl'), 1.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_ttl'), 1.5, {css:{left:'660px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter17_1_bean1_txt'), 2.0, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter17_1_bean1_txt'), 2.0, {css:{left:'660px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_winter17_1_bean'), 2.5, {css:{left:'1000px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_winter17_1_bean'), 2.5, {css:{left:'665px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.res_bean_17winter1'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.res_bean_17winter1'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* 16winter2 */
		controller.addTween(10, TweenMax.from($('.res_bean_winter2'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.to($('.res_bean_winter2'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1500);

		/* 16winter1 */
		controller.addTween(10, TweenMax.from($('.winter1_bean1_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_bg'), 1.5, {css:{left:'-122px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter1_bean1'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1'), 2.0, {css:{left:'-122px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.winter1_bean1_ttl'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_ttl'), 1.5, {css:{right:'263px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter1_bean1_txt'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_txt'), 2.0, {css:{right:'82px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_winter1_bean1'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_winter1_bean1'), 2.5, {css:{right:'391px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		
		/* 16autumn1 */
		controller.addTween(10, TweenMax.from($('.autumn1_bean1_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_bg'), 1.5, {css:{left:'11px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean1'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1'), 2.0, {css:{left:'11px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.autumn1_bean1_ttl'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_ttl'), 1.5, {css:{right:'306px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean1_txt'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_txt'), 2.0, {css:{right:'246px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_autumn1_bean1'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_autumn1_bean1'), 2.5, {css:{right:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.autumn1_bean2_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_bg'), 1.5, {css:{left:'-18px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean2'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2'), 2.0, {css:{left:'-18px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.autumn1_bean2_ttl'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_ttl'), 1.5, {css:{right:'443px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean2_txt'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_txt'), 2.0, {css:{right:'169px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_autumn1_bean2'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_autumn1_bean2'), 2.5, {css:{right:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.res_bean01'), 2.5, {css:{top:'-200px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.res_bean01'), 2.5, {css:{top:'65px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.res_bean02'), 2.5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.res_bean02'), 2.5, {css:{top:'65px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.res_bean03'), 2.5, {css:{top:'-200px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.res_bean03'), 2.5, {css:{top:'65px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.res_bean_nw'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.to($('.res_bean_nw'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1500);

		/* summer3 */
		controller.addTween(10, TweenMax.from($('.summer3_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_bg'), 1.5, {css:{left:'110px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer3_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_img'), 2.0, {css:{left:'25px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer3_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_txt1'), 1.5, {css:{right:'390px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer3_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_txt2'), 2.0, {css:{right:'184px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer3_bean'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer3_bean'), 2.5, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* summer2 */
		controller.addTween(10, TweenMax.from($('.summer2_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_bg'), 1.5, {css:{left:'35px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer2_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_img'), 2.0, {css:{left:'35px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer2_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_txt1'), 1.5, {css:{right:'385px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer2_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_txt2'), 2.0, {css:{right:'256px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer2_bean'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer2_bean'), 2.5, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* summer1 */
		controller.addTween(10, TweenMax.from($('.summer1_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_bg'), 1.5, {css:{left:'35px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer1_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_img'), 2.0, {css:{left:'35px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer1_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_txt1'), 1.5, {css:{right:'236px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer1_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_txt2'), 2.0, {css:{right:'175px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer1_bean'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer1_bean'), 2.5, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* spring */
		controller.addTween(10, TweenMax.from($('.spring1_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_bg'), 1.5, {css:{left:'-10px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.spring1_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_img'), 2.0, {css:{left:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.spring1_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_txt1'), 1.5, {css:{right:'87px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.spring1_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_txt2'), 2.0, {css:{right:'333px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_spring1_bean'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_spring1_bean'), 2.5, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
	} else if ((myWin > 960) && (myWin <= 1280)) {
		controller.addTween(10, TweenMax.from($('.res_bean_winter2'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.to($('.res_bean_winter2'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1500);

		/* 16winter1 */
		controller.addTween(10, TweenMax.from($('.winter1_bean1_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_bg'), 1.5, {css:{left:'-122px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter1_bean1'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1'), 2.0, {css:{left:'-122px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.winter1_bean1_ttl'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_ttl'), 1.5, {css:{right:'263px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter1_bean1_txt'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_txt'), 2.0, {css:{right:'82px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_winter1_bean1'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_winter1_bean1'), 2.5, {css:{right:'391px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* 16autumn1 */
		controller.addTween(10, TweenMax.from($('.autumn1_bean1_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_bg'), 1.5, {css:{left:'11px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean1'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1'), 2.0, {css:{left:'11px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.autumn1_bean1_ttl'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_ttl'), 1.5, {css:{right:'306px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean1_txt'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_txt'), 2.0, {css:{right:'246px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_autumn1_bean1'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_autumn1_bean1'), 2.5, {css:{right:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.autumn1_bean2_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_bg'), 1.5, {css:{left:'-18px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean2'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2'), 2.0, {css:{left:'-18px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.autumn1_bean2_ttl'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_ttl'), 1.5, {css:{right:'443px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean2_txt'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_txt'), 2.0, {css:{right:'169px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_autumn1_bean2'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_autumn1_bean2'), 2.5, {css:{right:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.res_bean01'), 2.5, {css:{top:'-200px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.res_bean01'), 2.5, {css:{top:'65px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.res_bean02'), 2.5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.res_bean02'), 2.5, {css:{top:'65px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.res_bean03'), 2.5, {css:{top:'-200px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.res_bean03'), 2.5, {css:{top:'65px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.res_bean_nw'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.to($('.res_bean_nw'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1200);

		/* summer3 */
		controller.addTween(10, TweenMax.from($('.summer3_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_bg'), 1.5, {css:{left:'120px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer3_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_img'), 2.0, {css:{left:'65px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer3_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_txt1'), 1.5, {css:{right:'400px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer3_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_txt2'), 2.0, {css:{right:'194px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer3_bean'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer3_bean'), 2.5, {css:{right:'491px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* summer2 */
		controller.addTween(10, TweenMax.from($('.summer2_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_bg'), 1.5, {css:{left:'70px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer2_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_img'), 2.0, {css:{left:'70px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer2_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_txt1'), 1.5, {css:{right:'387px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer2_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_txt2'), 2.0, {css:{right:'257px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer2_bean'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer2_bean'), 2.5, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* summer1 */
		controller.addTween(10, TweenMax.from($('.summer1_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_bg'), 1.5, {css:{left:'35px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer1_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_img'), 2.0, {css:{left:'35px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer1_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_txt1'), 1.5, {css:{right:'236px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer1_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_txt2'), 2.0, {css:{right:'175px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer1_bean'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer1_bean'), 2.5, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* spring */
		controller.addTween(10, TweenMax.from($('.spring1_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_bg'), 1.5, {css:{left:'100px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.spring1_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_img'), 2.0, {css:{left:'180px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.spring1_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_txt1'), 1.5, {css:{right:'120px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.spring1_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_txt2'), 2.0, {css:{right:'365px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_spring1_bean'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_spring1_bean'), 2.5, {css:{right:'511px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
	} else if ((myWin > 640) && (myWin <= 960)) {
		controller.addTween(10, TweenMax.from($('.res_bean_winter2'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.to($('.res_bean_winter2'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1500);

		/* 16winter1 */
		controller.addTween(10, TweenMax.from($('.winter1_bean1_bg'), 1.5, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_bg'), 1.5, {css:{top:'15%', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.winter1_bean1'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter1_bean1'), 2.0, {css:{top:'15%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.winter1_bean1_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_ttl'), 1.5, {css:{top:'54%', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.winter1_bean1_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_txt'), 2.0, {css:{top:'68%', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.btn_winter1_bean1'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.btn_winter1_bean1'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1700);

		/* 16autumn1 */
		controller.addTween(10, TweenMax.from($('.autumn1_bean1_bg'), 1.5, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_bg'), 1.5, {css:{top:'40px', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.autumn1_bean1'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1'), 2.0, {css:{top:'40px', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.autumn1_bean1_ttl'), 1.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_ttl'), 1.5, {css:{top:'490px', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.autumn1_bean1_txt'), 2.0, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_txt'), 2.0, {css:{top:'595px', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.btn_autumn1_bean1'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.btn_autumn1_bean1'), 2.5, {css:{top:'740px', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.autumn1_bean2_bg'), 1.5, {css:{top:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_bg'), 1.5, {css:{top:'80px', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.autumn1_bean2'), 2.0, {css:{top:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2'), 2.0, {css:{top:'80px', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.autumn1_bean2_ttl'), 1.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_ttl'), 1.5, {css:{top:'480px', opacity:1}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.from($('.autumn1_bean2_txt'), 2.0, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_txt'), 2.0, {css:{top:'585px', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.btn_autumn1_bean2'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 1700);
		controller.addTween(10, TweenMax.to($('.btn_autumn1_bean2'), 2.5, {css:{top:'740px', opacity:1}, ease: Quad.easeOut}), 1, 1700);

		controller.addTween(10, TweenMax.from($('.res_bean01'), 2.5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, 3500);
		controller.addTween(10, TweenMax.to($('.res_bean01'), 2.5, {css:{top:'465px', opacity:1}, ease: Quad.easeOut}), 1, 3500);
		controller.addTween(10, TweenMax.from($('.res_bean02'), 2.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 3500);
		controller.addTween(10, TweenMax.to($('.res_bean02'), 2.5, {css:{top:'465px', opacity:1}, ease: Quad.easeOut}), 1, 3500);
		controller.addTween(10, TweenMax.from($('.res_bean03'), 2.5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, 3500);
		controller.addTween(10, TweenMax.to($('.res_bean03'), 2.5, {css:{top:'465px', opacity:1}, ease: Quad.easeOut}), 1, 3500);

		controller.addTween(10, TweenMax.from($('.res_bean_nw'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 3200);
		controller.addTween(10, TweenMax.to($('.res_bean_nw'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 3200);

		/* summer3 */
		controller.addTween(10, TweenMax.from($('.summer3_blend_bg'), 1.5, {css:{top:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_bg'), 1.5, {css:{top:'90px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer3_blend_img'), 2.0, {css:{top:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_img'), 2.0, {css:{top:'70px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer3_blend_txt1'), 1.5, {css:{top:'800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_txt1'), 1.5, {css:{top:'530px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer3_blend_txt2'), 2.0, {css:{top:'800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_txt2'), 2.0, {css:{top:'620px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer3_bean'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer3_bean'), 2.5, {css:{top:'740px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* summer2 */
		controller.addTween(10, TweenMax.from($('.summer2_blend_bg'), 1.5, {css:{top:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_bg'), 1.5, {css:{top:'70px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer2_blend_img'), 2.0, {css:{top:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_img'), 2.0, {css:{top:'70px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer2_blend_txt1'), 1.5, {css:{top:'800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_txt1'), 1.5, {css:{top:'530px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer2_blend_txt2'), 2.0, {css:{top:'800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_txt2'), 2.0, {css:{top:'620px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer2_bean'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer2_bean'), 2.5, {css:{top:'740px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* summer1 */
		controller.addTween(10, TweenMax.from($('.summer1_blend_bg'), 1.5, {css:{top:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_bg'), 1.5, {css:{top:'70px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer1_blend_img'), 2.0, {css:{top:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_img'), 2.0, {css:{top:'70px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer1_blend_txt1'), 1.5, {css:{top:'800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_txt1'), 1.5, {css:{top:'530px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer1_blend_txt2'), 2.0, {css:{top:'800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_txt2'), 2.0, {css:{top:'620px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer1_bean'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer1_bean'), 2.5, {css:{top:'740px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* spring */
		controller.addTween(10, TweenMax.from($('.spring1_blend_bg'), 1.5, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_bg'), 1.5, {css:{top:'-80px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.spring1_blend_img'), 2.0, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_img'), 2.0, {css:{top:'-80px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.spring1_blend_txt1'), 1.5, {css:{top:'800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_txt1'), 1.5, {css:{top:'520px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.spring1_blend_txt2'), 2.0, {css:{top:'800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.spring1_blend_txt2'), 2.0, {css:{top:'670px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_spring1_bean'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_spring1_bean'), 2.5, {css:{top:'770px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
	} else if ((myWin > 480) && (myWin <= 640)) {
		controller.addTween(10, TweenMax.from($('.res_bean_winter2'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.to($('.res_bean_winter2'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1500);

		/* 16winter1 */
		controller.addTween(10, TweenMax.from($('.winter1_bean1_bg'), 1.5, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_bg'), 1.5, {css:{top:'15%', opacity:1}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.from($('.winter1_bean1'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.winter1_bean1'), 2.0, {css:{top:'15%', opacity:1}, ease: Quad.easeOut}), 1, 2700);

		controller.addTween(10, TweenMax.from($('.winter1_bean1_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_ttl'), 1.5, {css:{top:'58%', opacity:1}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.from($('.winter1_bean1_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_txt'), 2.0, {css:{top:'68%', opacity:1}, ease: Quad.easeOut}), 1, 2700);

		controller.addTween(10, TweenMax.from($('.btn_winter1_bean1'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.btn_winter1_bean1'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 2700);

		/* 16autumn1 */
		controller.addTween(10, TweenMax.from($('.autumn1_bean1_bg'), 1.5, {css:{top:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_bg'), 1.5, {css:{top:'40px', opacity:1}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.from($('.autumn1_bean1'), 2.0, {css:{top:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1'), 2.0, {css:{top:'40px', opacity:1}, ease: Quad.easeOut}), 1, 2700);

		controller.addTween(10, TweenMax.from($('.autumn1_bean1_ttl'), 1.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_ttl'), 1.5, {css:{top:'490px', opacity:1}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.from($('.autumn1_bean1_txt'), 2.0, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_txt'), 2.0, {css:{top:'595px', opacity:1}, ease: Quad.easeOut}), 1, 2700);

		controller.addTween(10, TweenMax.from($('.btn_autumn1_bean1'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.btn_autumn1_bean1'), 2.5, {css:{top:'740px', opacity:1}, ease: Quad.easeOut}), 1, 2700);

		controller.addTween(10, TweenMax.from($('.autumn1_bean2_bg'), 1.5, {css:{top:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_bg'), 1.5, {css:{top:'80px', opacity:1}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.from($('.autumn1_bean2'), 2.0, {css:{top:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2'), 2.0, {css:{top:'80px', opacity:1}, ease: Quad.easeOut}), 1, 2700);

		controller.addTween(10, TweenMax.from($('.autumn1_bean2_ttl'), 1.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_ttl'), 1.5, {css:{top:'480px', opacity:1}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.from($('.autumn1_bean2_txt'), 2.0, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_txt'), 2.0, {css:{top:'585px', opacity:1}, ease: Quad.easeOut}), 1, 2700);

		controller.addTween(10, TweenMax.from($('.btn_autumn1_bean2'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.btn_autumn1_bean2'), 2.5, {css:{top:'740px', opacity:1}, ease: Quad.easeOut}), 1, 2700);

		controller.addTween(10, TweenMax.from($('.res_bean01'), 2.5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, 3500);
		controller.addTween(10, TweenMax.to($('.res_bean01'), 2.5, {css:{top:'465px', opacity:1}, ease: Quad.easeOut}), 1, 3500);
		controller.addTween(10, TweenMax.from($('.res_bean02'), 2.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 3500);
		controller.addTween(10, TweenMax.to($('.res_bean02'), 2.5, {css:{top:'465px', opacity:1}, ease: Quad.easeOut}), 1, 3500);
		controller.addTween(10, TweenMax.from($('.res_bean03'), 2.5, {css:{top:'200px', opacity:0}, ease: Quad.easeOut}), 1, 3500);
		controller.addTween(10, TweenMax.to($('.res_bean03'), 2.5, {css:{top:'465px', opacity:1}, ease: Quad.easeOut}), 1, 3500);

		controller.addTween(10, TweenMax.from($('.res_bean_nw'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 3200);
		controller.addTween(10, TweenMax.to($('.res_bean_nw'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 3200);

		/* summer3 */
		controller.addTween(10, TweenMax.from($('.summer3_blend_bg'), 1.5, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_bg'), 1.5, {css:{top:'120px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer3_blend_img'), 2.0, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_img'), 2.0, {css:{top:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer3_blend_txt1'), 1.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_txt1'), 1.5, {css:{top:'350px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer3_blend_txt2'), 2.0, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_txt2'), 2.0, {css:{top:'420px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer3_bean'), 2.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer3_bean'), 2.5, {css:{top:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* summer2 */
		controller.addTween(10, TweenMax.from($('.summer2_blend_bg'), 1.5, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_bg'), 1.5, {css:{top:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer2_blend_img'), 2.0, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_img'), 2.0, {css:{top:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer2_blend_txt1'), 1.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_txt1'), 1.5, {css:{top:'350px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer2_blend_txt2'), 2.0, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_txt2'), 2.0, {css:{top:'420px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer2_bean'), 2.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer2_bean'), 2.5, {css:{top:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* summer1 */
		controller.addTween(10, TweenMax.from($('.summer1_blend_bg'), 1.5, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_bg'), 1.5, {css:{top:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer1_blend_img'), 2.0, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_img'), 2.0, {css:{top:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer1_blend_txt1'), 1.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_txt1'), 1.5, {css:{top:'350px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer1_blend_txt2'), 2.0, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_txt2'), 2.0, {css:{top:'420px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer1_bean'), 2.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer1_bean'), 2.5, {css:{top:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* spring */
		controller.addTween(10, TweenMax.from($('.spring1_blend_bg'), 1.5, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.to($('.spring1_blend_bg'), 1.5, {css:{top:'-100px', opacity:1}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.from($('.spring1_blend_img'), 2.0, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.to($('.spring1_blend_img'), 2.0, {css:{top:'-100px', opacity:1}, ease: Quad.easeOut}), 1, 1200);

		controller.addTween(10, TweenMax.from($('.spring1_blend_txt1'), 1.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.spring1_blend_txt1'), 1.5, {css:{top:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.spring1_blend_txt2'), 2.0, {css:{top:'820px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.spring1_blend_txt2'), 2.0, {css:{top:'620px', opacity:1}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.from($('.btn_spring1_bean'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_spring1_bean'), 2.5, {css:{top:'710px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		/* spring end */
	} else {
		controller.addTween(10, TweenMax.from($('.res_bean_winter2'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1500);
		controller.addTween(10, TweenMax.to($('.res_bean_winter2'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1500);

		/* 16winter1 */
		controller.addTween(10, TweenMax.from($('.winter1_bean1_bg'), 1.5, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_bg'), 1.5, {css:{top:'15%', opacity:1}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.winter1_bean1'), 2.0, {css:{top:'-100px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1'), 2.0, {css:{top:'15%', opacity:1}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween(10, TweenMax.from($('.winter1_bean1_ttl'), 1.5, {css:{top:'78%', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_ttl'), 1.5, {css:{top:'58%', opacity:1}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.winter1_bean1_txt'), 2.0, {css:{top:'98%', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.winter1_bean1_txt'), 2.0, {css:{top:'68%', opacity:1}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween(10, TweenMax.from($('.btn_winter1_bean1'), 2.5, {css:{ opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.btn_winter1_bean1'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 2000);

		/* 16autumn1 */
		controller.addTween(10, TweenMax.from($('.autumn1_bean1_bg'), 1.5, {css:{top:'-500px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_bg'), 1.5, {css:{top:'20px', opacity:1}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean1'), 2.0, {css:{top:'-500px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1'), 2.0, {css:{top:'20px', opacity:1}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween(10, TweenMax.from($('.autumn1_bean1_ttl'), 1.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_ttl'), 1.5, {css:{top:'370px', opacity:1}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean1_txt'), 2.0, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean1_txt'), 2.0, {css:{top:'455px', opacity:1}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween(10, TweenMax.from($('.btn_autumn1_bean1'), 2.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.btn_autumn1_bean1'), 2.5, {css:{top:'530px', opacity:1}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween(10, TweenMax.from($('.autumn1_bean2_bg'), 1.5, {css:{top:'-500px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_bg'), 1.5, {css:{top:'30px', opacity:1}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean2'), 2.0, {css:{top:'-500px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2'), 2.0, {css:{top:'30px', opacity:1}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween(10, TweenMax.from($('.autumn1_bean2_ttl'), 1.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_ttl'), 1.5, {css:{top:'330px', opacity:1}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.from($('.autumn1_bean2_txt'), 2.0, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.autumn1_bean2_txt'), 2.0, {css:{top:'415px', opacity:1}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween(10, TweenMax.from($('.btn_autumn1_bean2'), 2.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 2000);
		controller.addTween(10, TweenMax.to($('.btn_autumn1_bean2'), 2.5, {css:{top:'520px', opacity:1}, ease: Quad.easeOut}), 1, 2000);

		controller.addTween(10, TweenMax.from($('.res_bean01'), 2.5, {css:{top:'185px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.res_bean01'), 2.5, {css:{top:'385px', opacity:1}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.from($('.res_bean02'), 2.5, {css:{top:'585px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.res_bean02'), 2.5, {css:{top:'385px', opacity:1}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.from($('.res_bean03'), 2.5, {css:{top:'185px', opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.res_bean03'), 2.5, {css:{top:'385px', opacity:1}, ease: Quad.easeOut}), 1, 2700);

		controller.addTween(10, TweenMax.from($('.res_bean_nw'), 2.0, {css:{opacity:0}, ease: Quad.easeOut}), 1, 2700);
		controller.addTween(10, TweenMax.to($('.res_bean_nw'), 2.0, {css:{opacity:1}, ease: Quad.easeOut}), 1, 2700);

		/* summer3 */
		controller.addTween(10, TweenMax.from($('.summer3_blend_bg'), 1.5, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_bg'), 1.5, {css:{top:'120px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer3_blend_img'), 2.0, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_img'), 2.0, {css:{top:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer3_blend_txt1'), 1.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_txt1'), 1.5, {css:{top:'350px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer3_blend_txt2'), 2.0, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer3_blend_txt2'), 2.0, {css:{top:'420px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer3_bean'), 2.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer3_bean'), 2.5, {css:{top:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* summer2 */
		controller.addTween(10, TweenMax.from($('.summer2_blend_bg'), 1.5, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_bg'), 1.5, {css:{top:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer2_blend_img'), 2.0, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_img'), 2.0, {css:{top:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer2_blend_txt1'), 1.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_txt1'), 1.5, {css:{top:'350px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer2_blend_txt2'), 2.0, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer2_blend_txt2'), 2.0, {css:{top:'420px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer2_bean'), 2.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer2_bean'), 2.5, {css:{top:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* summer1 */
		controller.addTween(10, TweenMax.from($('.summer1_blend_bg'), 1.5, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_bg'), 1.5, {css:{top:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer1_blend_img'), 2.0, {css:{top:'-280px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_img'), 2.0, {css:{top:'50px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.summer1_blend_txt1'), 1.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_txt1'), 1.5, {css:{top:'350px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.summer1_blend_txt2'), 2.0, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.summer1_blend_txt2'), 2.0, {css:{top:'420px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_summer1_bean'), 2.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_summer1_bean'), 2.5, {css:{top:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		/* spring */
		controller.addTween(10, TweenMax.from($('.spring1_blend_bg'), 1.5, {css:{top:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.to($('.spring1_blend_bg'), 1.5, {css:{top:'-40px', opacity:1}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.from($('.spring1_blend_img'), 2.0, {css:{top:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.to($('.spring1_blend_img'), 2.0, {css:{top:'-40px', opacity:1}, ease: Quad.easeOut}), 1, 1200);

		controller.addTween(10, TweenMax.from($('.spring1_blend_txt1'), 1.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.spring1_blend_txt1'), 1.5, {css:{top:'350px', opacity:1}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.spring1_blend_txt2'), 2.0, {css:{top:'680px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.spring1_blend_txt2'), 2.0, {css:{top:'440px', opacity:1}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.from($('.btn_spring1_bean'), 2.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_spring1_bean'), 2.5, {css:{top:'520px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		/* spring end */
	}
	/* spring ani end */
	

	/* winter2 ani */
	bnrAni
		/* winter2 */
		.append(TweenMax.to($('h2.winter2_typo'), .5, {css:{opacity:1}, onComplete:typoObj01}))
		.append(TweenMax.to($('.typo_obj02'), .7, {css:{opacity:1}}))
		.append(TweenMax.to($('.typo_obj03'), .7, {css:{opacity:1}}))
		/* winter2 end */

	/* typo ani */
	function typoObj01() {
		if (myWin > 960) {
			$('.typo_obj01').jsMovie({
				sequence:'##.png',
				from:0,
				to:27,
				folder:'img/main/winter2/typo_obj01/',
				fps:20,
				height:706,
				width:673,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 720) && (myWin <= 960)) {
			$('.typo_obj01').jsMovie({
				sequence:'##.png',
				from:0,
				to:27,
				folder:'img/main/winter2/typo_obj01/',
				fps:20,
				height:482,
				width:480,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 640) && (myWin <= 720)) {
			$('.typo_obj01').jsMovie({
				sequence:'##.png',
				from:0,
				to:27,
				folder:'img/main/winter2/typo_obj01/',
				fps:20,
				height:402,
				width:400,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 480) && (myWin <= 640)) {
			$('.typo_obj01').jsMovie({
				sequence:'##.png',
				from:0,
				to:27,
				folder:'img/main/winter2/typo_obj01/',
				fps:20,
				height:402,
				width:400,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else {
			$('.typo_obj01').jsMovie({
				sequence:'##.png',
				from:0,

				to:27,
				folder:'img/main/winter2/typo_obj01/',
				fps:20,
				height:336,
				width:320,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		}
	}

	$('.typo_obj01').bind('ended', function(){
		if (myWin > 1280) {
			bnrAni
				.append(TweenMax.to($('.vanilla_cup'), .5, {css:{opacity:1, right:'557px', top:'23px'}, onComplete:vanillaCupTxt}))
				.append(TweenMax.to($('.nuts_cup'), .5, {css:{opacity:1, right:'439px', top:'357px'}, onComplete:nutsCupTxt}))

				.append(TweenMax.to($('.typo_leaf01 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut, onComplete:nutsDeco}))
				.append(TweenMax.to($('.typo_leaf02 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf03 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf04 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf05 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf06 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
		} else if ((myWin > 960) && (myWin <= 1280)) {
			bnrAni
				.append(TweenMax.to($('.vanilla_cup'), .5, {css:{opacity:1, right:'520px', top:'23px'}, onComplete:vanillaCupTxt}))
				.append(TweenMax.to($('.nuts_cup'), .5, {css:{opacity:1, right:'400px', top:'357px'}, onComplete:nutsCupTxt}))

				.append(TweenMax.to($('.typo_leaf01 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut, onComplete:nutsDeco}))
				.append(TweenMax.to($('.typo_leaf02 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf03 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf04 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf05 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf06 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
		} else if ((myWin > 720) && (myWin <= 960)) {
			bnrAni
				.append(TweenMax.to($('.vanilla_cup'), .5, {css:{opacity:1, right:'1030px', top:'23px'}, onComplete:vanillaCupTxt}))
				.append(TweenMax.to($('.nuts_cup'), .5, {css:{opacity:1, right:'900px', top:'357px'}, onComplete:nutsCupTxt}))

				.append(TweenMax.to($('.typo_leaf01 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut, onComplete:nutsDeco}))
				.append(TweenMax.to($('.typo_leaf02 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf03 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf04 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf05 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf06 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
		} else if ((myWin > 640) && (myWin <= 720)) {
			bnrAni
				.append(TweenMax.to($('.vanilla_cup'), .5, {css:{opacity:1, right:'1030px', top:'53px'}, onComplete:vanillaCupTxt}))
				.append(TweenMax.to($('.nuts_cup'), .5, {css:{opacity:1, right:'900px', top:'377px'}, onComplete:nutsCupTxt}))

				.append(TweenMax.to($('.typo_leaf01 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut, onComplete:nutsDeco}))
				.append(TweenMax.to($('.typo_leaf02 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf03 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf04 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf05 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf06 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
		} else if ((myWin > 480) && (myWin <= 640)) {
			bnrAni
				.append(TweenMax.to($('.vanilla_cup'), .5, {css:{opacity:1, right:'960px', top:'263px'}, onComplete:vanillaCupTxt}))
				.append(TweenMax.to($('.nuts_cup'), .5, {css:{opacity:1, right:'780px', top:'450px'}, onComplete:nutsCupTxt}))

				.append(TweenMax.to($('.typo_leaf01 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut, onComplete:nutsDeco}))
				.append(TweenMax.to($('.typo_leaf02 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf03 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf04 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf05 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf06 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
		} else {
			bnrAni
				.append(TweenMax.to($('.vanilla_cup'), .5, {css:{opacity:1, right:'960px', top:'243px'}, onComplete:vanillaCupTxt}))
				.append(TweenMax.to($('.nuts_cup'), .5, {css:{opacity:1, right:'780px', top:'450px'}, onComplete:nutsCupTxt}))

				.append(TweenMax.to($('.typo_leaf01 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut, onComplete:nutsDeco}))
				.append(TweenMax.to($('.typo_leaf02 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf03 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf04 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf05 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
				.append(TweenMax.to($('.typo_leaf06 img'), .3, {css:{height:'100%', top:'0'}, ease:Bounce.easeOut}))
		}
	});
	/* typo ani end */

	/* win2 ani */
	if (myWin > 1280) {
		/* win2 */
		controller.addTween(10, TweenMax.from($('.winter2_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_bg'), 1.5, {css:{left:'30px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter2_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_img'), 2.0, {css:{left:'30px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.winter2_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_txt1'), 1.5, {css:{right:'291px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter2_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_txt2'), 2.0, {css:{right:'185px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_winter2_bean'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_winter2_bean'), 2.5, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
	} else if ((myWin > 960) && (myWin <= 1280)) {
		/* win2 */
		controller.addTween(10, TweenMax.from($('.winter2_blend_bg'), 1.5, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_bg'), 1.5, {css:{left:'180px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter2_blend_img'), 2.0, {css:{left:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_img'), 2.0, {css:{left:'180px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.winter2_blend_txt1'), 1.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_txt1'), 1.5, {css:{right:'291px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter2_blend_txt2'), 2.0, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_txt2'), 2.0, {css:{right:'185px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_winter2_bean'), 2.5, {css:{right:'-700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_winter2_bean'), 2.5, {css:{right:'481px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
	} else if ((myWin > 640) && (myWin <= 960)) {
		/* win2 */
		controller.addTween(10, TweenMax.from($('.winter2_blend_bg'), 1.5, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_bg'), 1.5, {css:{top:'-80px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter2_blend_img'), 2.0, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_img'), 2.0, {css:{top:'-80px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.winter2_blend_txt1'), 1.5, {css:{top:'800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_txt1'), 1.5, {css:{top:'530px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.from($('.winter2_blend_txt2'), 2.0, {css:{top:'800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.winter2_blend_txt2'), 2.0, {css:{top:'630px', opacity:1}, ease: Quad.easeOut}), 1, 1000);

		controller.addTween(10, TweenMax.from($('.btn_winter2_bean'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_winter2_bean'), 2.5, {css:{top:'780px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
	} else if ((myWin > 480) && (myWin <= 640)) {
		/* win2 */
		controller.addTween(10, TweenMax.from($('.winter2_blend_bg'), 1.5, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.to($('.winter2_blend_bg'), 1.5, {css:{top:'-40px', opacity:1}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.from($('.winter2_blend_img'), 2.0, {css:{top:'-400px', opacity:0}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.to($('.winter2_blend_img'), 2.0, {css:{top:'-40px', opacity:1}, ease: Quad.easeOut}), 1, 1200);

		controller.addTween(10, TweenMax.from($('.winter2_blend_txt1'), 1.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.winter2_blend_txt1'), 1.5, {css:{top:'500px', opacity:1}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.winter2_blend_txt2'), 2.0, {css:{top:'780px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.winter2_blend_txt2'), 2.0, {css:{top:'580px', opacity:1}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.from($('.btn_winter2_bean'), 2.5, {css:{top:'900px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_winter2_bean'), 2.5, {css:{top:'710px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		/* win2 end */
	} else {
		/* win2 */
		controller.addTween(10, TweenMax.from($('.winter2_blend_bg'), 1.5, {css:{top:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.to($('.winter2_blend_bg'), 1.5, {css:{top:'-10px', opacity:1}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.from($('.winter2_blend_img'), 2.0, {css:{top:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1200);
		controller.addTween(10, TweenMax.to($('.winter2_blend_img'), 2.0, {css:{top:'-10px', opacity:1}, ease: Quad.easeOut}), 1, 1200);

		controller.addTween(10, TweenMax.from($('.winter2_blend_txt1'), 1.5, {css:{top:'600px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.winter2_blend_txt1'), 1.5, {css:{top:'380px', opacity:1}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.from($('.winter2_blend_txt2'), 2.0, {css:{top:'680px', opacity:0}, ease: Quad.easeOut}), 1, 1400);
		controller.addTween(10, TweenMax.to($('.winter2_blend_txt2'), 2.0, {css:{top:'450px', opacity:1}, ease: Quad.easeOut}), 1, 1400);

		controller.addTween(10, TweenMax.from($('.btn_winter2_bean'), 2.5, {css:{top:'700px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
		controller.addTween(10, TweenMax.to($('.btn_winter2_bean'), 2.5, {css:{top:'550px', opacity:1}, ease: Quad.easeOut}), 1, 1000);
		/* win2 end */
	}
	/* win2 ani end */

	function nutsDeco() {
		if (myWin > 720) {
			$('.nuts_deco').jsMovie({
				sequence:'##.png',
				from:1,
				to:22,
				folder:'img/main/winter2/nuts_deco/',
				fps:35,
				height:571,
				width:419,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 640) && (myWin <= 720)) {
			$('.nuts_deco').jsMovie({
				sequence:'##.png',
				from:1,
				to:22,
				folder:'img/main/winter2/nuts_deco/',
				fps:35,
				height:477,
				width:350,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 480) && (myWin <= 640)) {
			$('.nuts_deco').jsMovie({
				sequence:'##.png',
				from:1,
				to:22,
				folder:'img/main/winter2/nuts_deco/',
				fps:35,
				height:477,
				width:350,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else {
			$('.nuts_deco').jsMovie({
				sequence:'##.png',
				from:1,
				to:22,
				folder:'img/main/winter2/nuts_deco/',
				fps:35,
				height:477,
				width:350,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		}
	}

	/* ctxt ani */
	function vanillaCupTxt() {
		if (myWin > 720) {
			$('.vanilla_cup_txt').jsMovie({
				sequence:'##.png',
				from:1,
				to:13,
				folder:'img/main/winter2/ctxt1/',
				fps:4,
				height:94,
				width:168,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 640) && (myWin <= 720)) {
			$('.vanilla_cup_txt').jsMovie({
				sequence:'##.png',
				from:1,
				to:13,
				folder:'img/main/winter2/ctxt1/',
				fps:4,
				height:73,
				width:130,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 480) && (myWin <= 640)) {
			$('.vanilla_cup_txt').jsMovie({
				sequence:'##.png',
				from:1,
				to:13,
				folder:'img/main/winter2/ctxt1/',
				fps:4,
				height:73,
				width:130,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else {
			$('.vanilla_cup_txt').jsMovie({
				sequence:'##.png',
				from:1,
				to:13,
				folder:'img/main/winter2/ctxt1/',
				fps:4,
				height:62,
				width:110,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		}
	}

	function nutsCupTxt() {
		if (myWin > 720) {
			$('.nuts_cup_txt').jsMovie({
				sequence:'##.png',
				from:1,
				to:12,
				folder:'img/main/winter2/ctxt2/',
				fps:4,
				height:90,
				width:190,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 640) && (myWin <= 720)) {
			$('.nuts_cup_txt').jsMovie({
				sequence:'##.png',
				from:1,
				to:12,
				folder:'img/main/winter2/ctxt2/',
				fps:4,
				height:76,
				width:160,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else if ((myWin > 480) && (myWin <= 640)) {
			$('.nuts_cup_txt').jsMovie({
				sequence:'##.png',
				from:1,
				to:12,
				folder:'img/main/winter2/ctxt2/',
				fps:4,
				height:76,
				width:160,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		} else {
			$('.nuts_cup_txt').jsMovie({
				sequence:'##.png',
				from:1,
				to:12,
				folder:'img/main/winter2/ctxt2/',
				fps:4,
				height:62,
				width:130,
				playOnLoad:true,
				performStop:false,
				repeat:false
			});
		}
	}
	/* ctxt ani end */
	/* winter2 ani end */
});
