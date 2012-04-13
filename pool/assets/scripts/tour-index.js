(function(){
	//各城市顶部图片轮播
	var _timer_;
	function mainautoshow( imgs, intime, outtime, delay ) {
		$( imgs+" img:not(:last)" ).hide();	
		_timer_ = setInterval( function() {
			var activemainAd = $( imgs+" img:visible" ),
			next = activemainAd.next();
			if ( !next.length ) {
				next = $( imgs+" img:first" );
			}
			next.show().css( 'z-index', 0 );
			activemainAd.fadeOut( outtime,function(){
				next.css( 'z-index',1 );
			});
		}, delay );
	}
	
	//Tibet Tour Tab Change
	function tabChange( target ){
	    var t = $( target );
	    t.children( 'dl' ).each(function( index ){
	        $( this ).click(function(){
	            $( this ).children( 'dd' ).addClass( 'ico_hover' );
	            $( this ).siblings().children( 'dd').removeClass( 'ico_hover');
	            t.children( 'div' ).hide().eq( index ).slideDown()
	        });
	    });
	    t.children( 'dl' ).first().click();
	}


$(function(){
	
	//判断China tour 或者其他页面 来更改样式
	if( $('.allpage-wrap').attr('name')=='china'){
		$( '.tour-block' ).css( 'background','url(/imagesnew/tour-index/bg-tour.png) repeat-x 0 0 #ffffff');
	}else{
		mainautoshow( '.banner',1000,2000,5000);
		$( '.FAQ-footer' ).css({'background':'url("/imagesnew/aboutus/flower.png") no-repeat scroll right 0 #FFFFFF','margin':'30px',
								'box-shadow':'0 1px 3px #666666'
		});
	}
	//tour num
	$( '.tour-rank' ).each(function( index ){
		$( this ).text( index+1 );
	});
	//hide tour price
	$( '.the-price' ).each(function(){
        if( $(this).text()==' '){
            $( this ).parent().hide();
        }
    });
	
	//tab change
	tabChange( '.secondContent' );
	tabChange( '.thirdContent1' );
	tabChange( '.thirdContent2' );
	tabChange( '.thirdContent3' );
	tabChange( '.thirdContent4' );
	tabChange( '.thirdContent5' );
	
	
	//Fancy box
	try{
	$( '.fancybox' ).fancybox();
	$( '.fancybox' ).hover(function(){
			$(this).append('<span class="zoom"></span>');
		},function(){
			$(this).children('.zoom').remove();
	});}catch(e){
		
	}
	
})
})(jQuery);
