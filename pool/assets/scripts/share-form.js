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
})
})(jQuery)
