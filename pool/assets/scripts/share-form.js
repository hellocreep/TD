;(function(){
	var right_type=new Array(".gif",".jpg",".jpeg",".png",".bmp");
	 function checkImgType(fileURL)
     {
         var right_typeLen=right_type.length;
         var imgUrl=fileURL.toLowerCase();
         var postfixLen=imgUrl.length;
         var len4=imgUrl.substring(postfixLen-4,postfixLen);
         var len5=imgUrl.substring(postfixLen-5,postfixLen);
         for (i=0;i<right_typeLen;i++)
         {
             if((len4==right_type[i])||(len5==right_type[i]))
             {
                 return true;
             }
         }
     }
$(function(){
		$('#shareForm').validate();

	$('.Sendmore').click(function(){
		if($('.uploade').length>5)
		{
			return false;
		}
		else
		{
			$('#new_up').append('<input type="file" name="pic[]" class="uploade"></br>');
		}
	});

	$('.uploade').each(function(){
		$(this).change(function(){

			if(!checkImgType($(this).val()))
         	{
             alert("The file type is not correct ! Must be ('.gif','.jpg','.jpeg','.png','.bmp') ");
             $(this).css('background','#FF0000');
             return;
        	}
        	else
        	{
        		$(this).css('background','');
        	}
		});
	});
	
});
})(jQuery)
