;(function() {
    
    $.fn.td_form = function( opts ){
        $( this ).focus(function(){
            if( $(this).val()== opts ){
                $( this ).val('').css( 'color', '#000000' );
            }
        });
        $( this ).blur(function(){
            if( $( this ).val()==''){
            $( this ).val( opts ).css( 'color', '#ccc');
            }
        });
    }    
$(function() {
    
    //表单的验证
    $( '#hotel-form' ).validate();
    
    $( '#extra' ).change( function(){
        if($(this)[0].checked){
            $( '.room-check' ).show();
        }else{
            $( '.room-check' ).hide();
        }
    });

    $( '.num' ).td_form( 'number of extra beds' );
    $( '#SpecialRequest' ).td_form( 'Your Special Request' );


});
})(jQuery)