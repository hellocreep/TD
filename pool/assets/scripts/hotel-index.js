;(function(){
$( function(){
    
    
    //hotel list 切换
    $( '#Lhasa' ).show();
        
    $( '.hotel-tag li' ).each( function(){
       $( this ).click( function(){
           $( this ).addClass( 'active' ).siblings().removeClass( 'active' );
          var hotel = $( this ).attr( 'rel' );
          $( '.recommended-hotel' ).hide();
          $( '#'+hotel ).show();
       }); 
    });
    
    //room type 显示
    $( '.hotel-roomtype a' ).each( function(){
        $( this ).click( function( e ){
            e.preventDefault();
            $( this ).toggleClass( 'active' );
            $( this ).parent().parent().parent().next().toggle();
        });
    });

});
})( jQuery )
