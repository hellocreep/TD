(function(){
$( function(){
    
    //sidebar弹出框
    $( '.nav-left-faqs' ).each(
        function(){
            $( this ).hover( function(){
                $( this ).children( '.poptips' ).fadeIn( 'fast' );
            },function(){
                $( this ).children( '.poptips' ).fadeOut( 'fast' );
            })
        }
    );

	$( '.sidebar' ).height($( '.content' ).height());

});

})( jQuery );
