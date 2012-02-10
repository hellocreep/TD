;(function(){
$( function(){
    
    $( '#Lhasa' ).show();
        
    $( '.hotel-tag li' ).each( function(){
       $( this ).click( function(){
          var hotel = $( this ).text();
          $( '.recommended-hotel' ).hide();
          $( '#'+hotel ).show(); 
       }); 
    });

});
})( jQuery )
