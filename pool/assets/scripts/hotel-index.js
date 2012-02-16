;(function(){
$( function(){
    
    
    //hotel list 切换
    $( '#Lhasa' ).show();
        
    $( '.hotel-tag li' ).each( function(){
       $( this ).click( function(){
           $( this ).addClass( 'active' ).siblings().removeClass( 'active' );
          var hotel = $( this ).attr( 'rel' );
		  $('.hotel-tag-title').text("Recommended hotels in "+$( this ).text());
          $( '.recommended-hotel' ).hide();
          $( '#'+hotel ).show();
       }); 
    });

	
   //hotel印象文字背景
$('.aboutcontent').each(function(){
    $(this).children().eq(1).addClass("colorbg01");
    $(this).children().eq(2).addClass("colorbg02");
    $(this).children().eq(3).addClass("colorbg03");
    $(this).children().eq(4).addClass("colorbg04");
});

	
    //room type 显示
$('.hotel_roomico a').each(function(e){
    $(this).click(function(e){
	 e.preventDefault();
	$(this).parent().parent().parent().next().toggle();
    });
});


});
})( jQuery )
