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
	//sidebar同步content 有没其他可以不写js的方法实现？
	$( '.sidebar' ).height($( '.content' ).height());

});

})( jQuery );
