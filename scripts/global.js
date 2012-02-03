(function(){
$( function(){
    
    //sidebar
    $( '.nav-left-faqs' ).each(
        function(){
            $( this ).hover( function(){
                $( this ).children( '.poptips' ).show();
            },function(){
                $( this ).children( '.poptips' ).hide();
            })
        }
    );

});

})( jQuery );
