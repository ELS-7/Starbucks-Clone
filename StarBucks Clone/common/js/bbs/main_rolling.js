$(document).ready(function(){
	try
	{
		$.mainrolling.init($roll_max, $roll_type);
	}
	catch(err)
	{
		$.mainrolling.init();
	}
});

(function ($) {
    $.mainrolling = {
    	max 		: "",
    	board    : "",
    	init : function(maxCnt, boardType)
    	{
    		if( boardType =="" || !(boardType) ){ boardType = "STB2702"; 	}
    		if( maxCnt ==""     || !(maxCnt) )	{	maxCnt = 5;  		}
			
    		var $image_selector = $(".newsArea_bgl").children("dl").children("dt").children("img").eq(0);
    		var $image_selector2 = $(".newsArea_bgl").children("dl").children("dt").children("img").eq(1); // 반응형 스피커 이미지
			var $link_selector	 = $(".newsArea_bgl").find("a");
			
			if( boardType=="STB2701")
    		{
				 $image_selector = $(".line_notice_inner").children("dl").children("dt");
				 $link_selector	 = $(".line_notice_inner").find("a");

				// $image_selector.css("background", " url('//image.istarbucks.co.kr/common/img/common/notice_ttl.png') ");	//공지사항 이미지 경로로 변경
				$link_selector.attr("href", "/whats_new/notice_list.do");
    		}
    		else
    		{
    			$image_selector.attr("src", "//image.istarbucks.co.kr/common/img/menu/news_title.png");
    			$image_selector2.attr("src", "//image.istarbucks.co.kr/common/img/common/icon_board_speaker.png");
    			$link_selector.attr("href", "/footer/company/news_list.do");
    		}
		
    		$.mainrolling.max 	= maxCnt;
    		$.mainrolling.board  = boardType;
    		$.mainrolling.getBoardList(boardType);			
    	}
    	,
    	RollingUiSettion :  function(rows)
    	{
    		var html = '';
    		jQuery.each( rows , function(x,y){
    			if ( x < parseInt( $.mainrolling.max ) )
    			{
    				if( $.mainrolling.board=="STB2701")
    				{
    					html += '<li><a href="/whats_new/noticeView.do?seq='+y.seq+'">'+y.title+'</a></li>';
    				}
    				else
    				{
    					//html += '<li><a href="/footer/company/news_view.do?seq='+y.seq+'">'+y.title+'</a></li>';
    					html += '<li><a href="javascript:pageViewBodo('+ y.seq +')">'+y.title+'</a></li>';
    				}
    			}
    		});
    		$("ul.news_result").html(html);    		
        	$('ul.news_result').inewsticker({
				speed      	 : 2500,
				effect      	: 'slide',
				dir         	: 'ltr',
				font_size   : 13,
				color       	: '#fff',
				// font_family : 'arial',
				delay_after : 1000
			});
        	
    		
    	}
    	,
    	getBoardList : function(menu_cd)
    	{
    		var param = { "menu_cd" : menu_cd};
			__ajaxCall("/aboutUs/faqList.do", param, true, "json", "post",
					function (_response) 
					{
	    				if ( _response.list.length > 0 )
	    				{
	    					$.mainrolling.RollingUiSettion(_response.list);
	    				}
	    				else
	    				{
	    					if ( menu_cd == "STB2702")
	    					{
	    						$("#news_result").append("<li>보도자료가 없습니다.</li>");
	    					}
	    					else if ( menu_cd == "STB2701")
	    					{
	    						$("#news_result").append("<li>공지사항이 없습니다.</li>");
	    					}
	    				}
			        }
					, 
					function(_error)
					{
					}
	    	);     		
    		
    	}
    };
})(jQuery);



function pageViewBodo(se){
	
	//form
	var form = document.createElement("form");     
	form.setAttribute("method","get");                    
	form.setAttribute("action","/bbs/getBodoView.do");        
	document.body.appendChild(form);                        
	 
	//input
	var seq = document.createElement("input");  
	seq.setAttribute("type", "hidden");                 
	seq.setAttribute("name", "seq");                        
	seq.setAttribute("id", "seq");                        
	seq.setAttribute("value", se);                          
	form.appendChild(seq);
	
	//폼전송
	form.submit();  
}

