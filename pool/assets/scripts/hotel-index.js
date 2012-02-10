;(function(){
$( function(){
    
    
    //hotel list 切换
    $( '#Lhasa' ).show();
        
    $( '.hotel-tag li' ).each( function(){
       $( this ).click( function(){
           $( this ).addClass( 'active' ).siblings().removeClass( 'active' );
          var hotel = $( this ).text();
          $( '.recommended-hotel' ).hide();
          $( '#'+hotel ).show();
          //sidebar同步content 有没其他可以不写js的方法实现？ 
          $( '.sidebar' ).height($( '.content' ).height() + 60); 
       }); 
    });
    
    //room type 显示
    $( '.hotel-roomtype a' ).each( function(){
        $( this ).click( function( e ){
            e.preventDefault();
            $( this ).toggleClass( 'active' );
        });
    });

});
})( jQuery )
