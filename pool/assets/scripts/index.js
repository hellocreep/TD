(function() {

	 function autoScroll( target ,slidetime, timeout ){
	 	setInterval( function(){
	 		$( target+' li:first' ).slideUp( slidetime,function(){
	 		$( this ).appendTo( target ).show();
	 		});
	 	}, timeout);
	 }

	$(function() {
		//首页banner轮播
		$(".banner ul li:gt(0)").hide();
		setInterval(function() {
			$('.banner ul li:first').fadeOut(3000).next().fadeIn(3000).end().appendTo('.banner ul');
		}, 5000);
		
		//顶部tc滚动
		autoScroll( '.roll-tips', 1000, 2500 );

		//首页recent-inquiry效果
		autoScroll ( '.Recent-Inquiry ul', 1500, 3000 );
		
		//Expat tour toggle caption
		$('.expat-list a').hover(function() {
			$(this).children('.caption').children('p').slideToggle(300);
		});
	})
})(jQuery);
