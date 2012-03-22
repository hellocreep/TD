(function(){
    //表单提交
	function Submitform1( e ){
		e.preventDefault();
		var formobj = $( "#form-js" );
		formobj.method="post";
		formobj.action="http://www.tibetdiscovery.com/forms/mailer.php";
		formobj.submit();
	}
	/******recent inquery 文字滚动**************/
function AutoScroll(){
        $('.Recent-Inquiry').find("ul:first").animate({
                marginTop:"-25px"
        },500,function(){
                $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
        });
        
}
    //TAB切换
    function change_tab( t ){
        t.addClass( 'active' ).children( 'a' ).addClass( 'active' )
        .parent()
        .siblings().removeClass( 'active' )
        .children( 'a' ).removeClass( 'active' );
    }
$(function(){
	//FAQ accordion
	$( '.accordion div' ).hide();
	$('.accordion h6').click(function() {
		$(this).next().toggle('fast');
		$( this ).parent().siblings().children( 'div:visible' ).slideUp();
	}); 
	$( '.accordion h6' ).eq(0).click();
	
	//trip tip  fancybox
	$( '.trip-for li' ).each(function(){
	    $( this ).click(function(){
	        $.fancybox({
                'transitionIn' : 'none',
                'transitionOut' : 'none', 
	            'content': $( this ).children( '.tripfor-detail' ).html()
	        });
	    });
	});
	//高亮 tips
	var h_light = $( '.tripfor-detail' ).eq( 0 ).attr( 'rel' )
                    .replace('demand-','').replace('.png','');
	$( '.physical-require li' ).eq( h_light*1-1 ).addClass( 'active' );
	
	var h_light2 = $( '.tips-title' ).eq( 0 ).text();
	if( h_light2 =='Leisure' ){
	    $( '.tour-pace-tips li' ).eq( 0 ).addClass( 'active' );
	}
	if( h_light2=='Comfortable' ){
	    $( '.tour-pace-tips li' ).eq( 1 ).addClass( 'active' );
	}
	if( h_light2=='Tight' ){
	    $( '.tour-pace-tips li' ).eq( 2 ).addClass( 'active' );
	}
	
	//tour-map fancybox
	$( '.itinerary-map' ).fancybox();
	
	//TAB fiexd
	$( window ).unbind( 'scroll' );
	   var t = $( '.tour-tab' );
       t_top = t.offset().top;
	$( window ).bind( 'scroll',function(){
        var d = $( '#tab-detail' ).offset().top;
        var p = $( '#tab-price' ).offset().top;
        var f = $( '#tab-faq' ).offset().top;
        var r = $( '#tab-review' ).offset().top;
		var s_top = $( this ).scrollTop()
		
		if( s_top > t_top ){
			$( '.tab-replace' ).show();
			t.css({'position':'fixed','top':0,
			'z-index':10,'width':970,'background':'#FBFBF5'});
			if( s_top > (d-40) ){
                change_tab( $( '.tab-detail' ) );
            }
            if( s_top > (p-40) ){
                change_tab( $( '.tab-price' ) );
            }
            if( s_top > (f-40) ){
                change_tab( $( '.tab-faq' ) );
            }
			if( s_top > (r-40) ){
                change_tab( $( '.tab-review' ) );
            }
		}else{
			$( '.tab-replace' ).hide();
			t.css({'position':'static','background':'none'});
			$( '.tour-tab li' ).not( '.last' ).removeClass( 'active' )
			.children( 'a' ).removeClass( 'active' );
		}
		
	});
	
	//锚点
	$( '.tour-tab li' ).not( '.last' ).click(function(){
		change_tab( $(this) );
	});
	
	/*屏蔽不显示图片*/
    $("dl.dayCloum div dt+dd p:contains('No documents found.')").parent().hide();
    $("ul#optformlist p:contains('No documents found.')").hide(); 
    //隐藏价格问题
    var tour_code = $( '.des-detail li').eq(3).text().replace( 'Tour code: ','');
    if( tour_code== 'TD-JT-7B' || tour_code=='TD-JT-04' || tour_code=='TD-JT-08'){
        $( '.tour-price img').hide();
    }
    
	
	//Price Question
	$( '.tour-price img' ).hover(function(){
	    $( '.price-tip' ).show();
	},function(){
	    $( '.price-tip' ).hide();
	});
	$( '.price-tip' ).hover(function(){
		$( this ).show();
	},function(){
		$( this ).hide();
	})
	$( '.yourbooking img' ).hover(function(){
		$( '.yourbooking .price-tip' ).css({'top':'80px','right':'90px'})
	    $( '.yourbooking .price-tip' ).show();
	},function(){
	    $( '.yourbooking .price-tip' ).hide();
	});
	//Pic gallery
	var gallery_list = [];
	$( '.gallery-list li' ).each( function(){
		gallery_list.push( $(this).attr('name') );
	});
	$( '.view-gallery' ).click(function( e ){
	    e.preventDefault();
		$.fancybox( gallery_list,{
					'type' : 'image'
				});
	});
	
	
	//add wish fancybox
	//TODO
	//不能跳转页面
	/*
	$( '.add-wish' ).click(function(){
		$.fancybox({
				'width' : '75%',
				'height' : '75%',
				'autoScale' : false,
				'transitionIn' : 'none',
				'transitionOut' : 'none',
				'type' : 'iframe'
				});
	});
	*/
	//Review 弹出框
	$('.divReview').hide();
	$('.btn-review').click(function( e ){
		e.preventDefault();
		$( window ).scrollTop( 100 );
		$('.divReview').fadeTo(1000,1);
		});
	$('.close').click(function(){
		$('.divReview').hide();
	});
	$( '#inquirysub').click(Submitform1);
	
	//底部百分比分配
	/*
	var total_rank = $( '.total-rank' ).text().split( ',' );
	$( '.itinerary-first h3 span' ).text( total_rank[0] );
	$( '.itinerary-other .rate' ).each(function( index ){
	    var rank = index + 1
        $( this ).text( total_rank[rank] );
	});
	*/
	//新版make enquiry
	$( '.make-enquiry a' ).click(function( e ){
		var price=$('.light-price').text();
		$('.tourprice').text(price);
		$('.post-tour-price').remove();
		$('.fielddisplay').append('<input class="post-tour-price" type="text" value="from '+price+'" name="Tour_Price">');
	    e.preventDefault();
	    var form_content = $( '#enquireform' )
	    //让form根据屏幕大小居中
	    var left_mt = ($(window).width() - $( '#enquireform' ).width())/2;
	    var top_mt = ($(window).height() - $( '#enquireform' ).height())/2;
	    
	    if( top_mt < 0 ){
	    	top_mt = 0 ;
	    }else if(left_mt < 0 ){
	    	left_mt = 0;
	    }
	    
	    $( '#enquireform' ).css({'top':top_mt,'left':left_mt});
	    
	    form_content.show();
	    $( window ).scrollTop( 0 );
	    $( '.exit_ico' ).show();
	    $( 'body' ).append("<div class='form-mask'></div>");
	    $( '.form-mask' ).click(function(){
	    	$( '.form-mask' ).remove()
	    	$( '#enquireform' ).hide();
	    })
	});
	//价格表弹出表单
	$( '.group a' ).click(function( e ){
		var price=$(this).text();
		$('.tourprice').html(price);
		$('.post-tour-price').remove();
		$('.fielddisplay').append('<input class="post-tour-price" type="text" value="from '+price+'" name="Tour_Price">');
	e.preventDefault();
	var form_content = $( '#enquireform' )
	//让form根据屏幕大小居中
	var left_mt = ($(window).width() - $( '#enquireform' ).width())/2;
	var top_mt = ($(window).height() - $( '#enquireform' ).height())/2;
	if( top_mt < 0 ){
	top_mt = 0 ;
	}else if(left_mt < 0 ){
	left_mt = 0;
	}
	$( '#enquireform' ).css({'top':top_mt,'left':left_mt});
	form_content.show();
	$( window ).scrollTop( 0 );
	$( '.exit_ico' ).show();
	$( 'body' ).append("<div class='form-mask'></div>");
	$( '.form-mask' ).click(function(){
	$( '.form-mask' ).remove()
	$( '#enquireform' ).hide();
	})
	}); 
	$( '.exit_ico' ).click( function(){
		$( '.form-mask' ).click();
	});
	$( '#form-js' ).validate();

	//底部隐藏无价格的Price
	$( '.itinerary-other .red' ).each(function(){
    	if( $(this).text()==''){
    		$( this ).parent().hide();
		}
	});
		
	//地图放大
	$( '.itinerary-map' ).hover(function(){
        	$(this).append('<span class="zoom"></span>');
        },function(){
        	$(this).children('.zoom').remove();
        }
        );
/******recent inquery 文字滚动**************/
setInterval(AutoScroll,5000);

	/****检查线路是否有价格**********************/
	if($('.post-tour-price').val()=='')
	{
		$(this).remove();
	}
})
})(jQuery);
