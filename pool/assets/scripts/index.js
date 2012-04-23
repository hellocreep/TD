(function(){
	function AutoScroll(){
		$('.Recent-Inquiry').find("ul:first").animate({
		marginTop:"-25px"
		},500,function(){
			$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
		});
	} 
$(function(){
	//首页banner轮播
	$(document).ready(function() {
		$(".banner ul li:gt(0)").hide();
		setInterval(function() {
			$('.banner ul li:first').fadeOut(3000).next().fadeIn(3000).end().appendTo('.banner ul');
		}, 5000);
	})

	/******recent inquery 文字滚动**************/
	setInterval(AutoScroll,5000);

	//Expat tour toggle caption
	$( '.expat-list a' ).hover(function(){
    		$( this ).children( '.caption' ).children( 'p' ).slideToggle(300);
	});
})
})(jQuery);