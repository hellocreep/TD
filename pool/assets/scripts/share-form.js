/**
 * @author chenzhao
 */
(function(){
$(function(){
	$('#shareForm').submit(function(){
		 $("#shareForm").validate();
		 
		 if($("#shareForm").valid())
		 {
		 	return true;
		 }
		 else
		 {
		 	return false;
		 }
	});
	
	$( '.send-more' ).click(function(){
		if ($( '.attach' ).length > 6)
		{
			return false;
		}
		else{
			//$( '.attach' ).clone().val( ' ' ).show().insertBefore( $(this) );
			$( this ).parent().parent()
			.before( '<tr class="attach"><td colspan="2"><input type="file" name="pic[]" class="upfile"></td></tr>' );
		}
	})
})
})(jQuery)
