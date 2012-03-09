(function(){
    //表单提交
	function Submitform1( e ){
		e.preventDefault();
		var formobj=document.getElementById("inquiryform1");
		formobj.method="post";
		formobj.action="http://www.tibetdiscovery.com/forms/mailer.php";
		formobj.submit();
	}
$(function(){
	//FAQ accordion
	$( '.accordion div' ).hide();
	$('.accordion h6').click(function() {
		$(this).next().toggle('fast');
	}); 
	$( '.accordion h6' ).eq(0).click();
	
	//trip tip  fancybox
	$( '.trip-for li' ).each(function(){
	    $( this ).click(function(){
	        $.fancybox({
                'transitionIn' : 'none',
                'transitionOut' : 'none', 
	            'content': $( this ).children( '.tripfor-detail' ).html(),
	        });
	    });
	});
	
	//tour-map fancybox
	$( '.itinerary-map' ).fancybox();
	
	//TAB fiexd
	//TODO
	//随锚点高度更换TAB active
	$( window ).unbind( 'scroll' );
	var t = $( '.tour-tab' );
	t_top = t.offset().top;
	$( window ).bind( 'scroll',function(){
		
		if( $( this ).scrollTop() > t_top ){
			$( '.tab-replace' ).show();
			t.css({'position':'fixed','top':0,
			'z-index':10,'width':970,'background':'#FBFBF5'});
			
		}else{
			$( '.tab-replace' ).hide();
			t.css('position', 'static');
		}
	});
	
	//锚点
	$( '.tour-tab li' ).not( '.last' ).click(function(){
		$( this ).addClass( 'active' ).children( 'a' ).addClass( 'active' )
		.parent()
		.siblings().removeClass( 'active' )
		.children( 'a' ).removeClass( 'active' );
	});
	
	//Price Question
	$( '.light-price img' ).hover(function(){
	    $( '.price-tip' ).show();
	},function(){
	    $( '.price-tip' ).hide();
	})
	
	//Pic gallery
	var gallery_list = [];
	$( '.gallery-list li' ).each( function(){
		gallery_list.push( $(this).attr('name') );
	});
	$( '.view-gallery' ).click(function( e ){
	    e.preventDefault();
		$.fancybox( gallery_list,{
					'type' : 'image',
				});
	});
	
	
	//add wish fancybox
	//TODO
	//不能跳转页面
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
	
	//Review 弹出框
	$('.divReview').hide();
	$('.btn-review').click(function( e ){
		e.preventDefault();
		$( window ).scrollTop( 100 )
		$('.divReview').fadeTo(1000,1);
		});
	$('.close').click(function(){
		$('.divReview').hide();
	});
	$( '#inquirysub').click(Submitform1);
	
	//底部百分比分配
	var total_rank = $( '.total-rank' ).text().split( ',' );
	$( '.itinerary-first h3 span' ).text( total_rank[0] );
	$( '.itinerary-other .rate' ).each(function(){
	    var rank = $( this ).index() + 1
	    $( this ).text( total_rank[rank] );
	});
	
	//Make Enquiry
	//TODO
	//添加关闭按钮
	$( '.make-enquiry' ).click(function(){
	    var form_content = $( '#inquiryform' )
	    form_content.show();
	    //$.fancybox({
	    //    'content': form_content
	    //})
	}); 
	 
})
})(jQuery);
