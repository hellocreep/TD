/**
 * @author Administrator
 */
//ACCORDION脚本
/*$(function() {
	$('.accordion li').click(function() {
		$(this).toggleClass('accordion-title-active').next().toggle('fast');
		return false;
	}).next().hide();
}); 
*/
$(document).ready(function(){
	/*$('.accordion li:even').addClass('oddli');*/
	$('.accordion h6').click(function(){
		$(this).next().toggle('fast');
	})
});

/*Tips from TC翻页*/

$(document).ready(function(){
	var listNum = $('.accordion li').length;
	var pageNum = Math.ceil(listNum/4);
	for(var i=1;i<=pageNum;i++){
		$('ul.pagenum').append('<li>'+i+'</li>');
	};
	$('.accordion li p').hide();
	$('.accordion li').hide();
	for(var a=0;a<4;a++){
			$('.accordion li').eq(a).show();	
		}
	$('ul.pagenum li').click(function(){
		$('ul.pagenum li').removeClass();
		$(this).addClass('activedcss');
		var clickNum = $(this).text();
		var n=(clickNum-1)*4;
		$('.accordion li').hide();
		for(var x=n;x<n+4;x++){
			$('.accordion li').eq(x).show();	
		}			
	})
});	

/*
$('.accordion li p').hide();
$(document).ready(function Pagenate(perPage,aimDiv,ulId){
	var listNum = $(aimDiv).length;
	var pageNum = Math.ceil(listNum/perPage);
	for(var i=1;i<=pageNum;i++){
		$(ulId).append('<li>'+i+'</li>');
	};
	
	$(aimDiv).hide();
	for(var a=0;a<perPage;a++){
			$(aimDiv).eq(a).show();	
		}
	$('ulId').click(function(){
		$(ulId+' li').removeClass();
		$(this).addClass('activedcss');
		var clickNum = $(this).text();
		var n=(clickNum-1)*perPage;
		$(aimDiv).hide();
		for(var x=n;x<n+perPage;x++){
			$(aimDiv).eq(x).show();	
		}			
	})
});	
	
Pagenate(5,".accordion li","pagenum");	

*/


//SLIDESHOW脚本
(function(a) {
	a.fn.slideshow = function(b) {
		return this.each(function() {
			var j = a(this);
			var d = j.find("div.images");
			var f = d.find("div.image");
			var c = 0;
			f.detach();
			d.append('<div class="spacer">&nbsp;</div>');
			d.append(f.eq(-1).clone());
			d.append(f.eq(0));
			d.append(f.eq(1).clone());
			d.show();
			j.append('<ul class="indicator"></ul>');
			var g = j.find("ul.indicator");
			for(var e = 0; e < f.length; e++) {
				g.append('<li id="indicator-' + e + '">&nbsp;</li>')
			}
			g.find("li#indicator-0").addClass("active");
			g.find("li").click(function() {
				var n = a(this).index();
				var i = c;
				var k = 0;
				var m = 0;
				var l = 0;
				if(n < i) {
					l = -(i - n)
				} else {
					if(i < n) {
						l = n - i
					}
				}
				if(l != 0) {
					h(l)
				}
			});
			j.find("a.control-previous").click(function(i) {
				i.preventDefault();
				h(-1)
			});
			j.find("a.control-next").click(function(i) {
				i.preventDefault();
				h(1)
			});
			function h(k) {
				var n = d.find("div.spacer");
				if(n.is(":animated")) {
					return false
				}
				if(k > 0) {
					var o = n.outerWidth();
					o += 480 * (k - 1);
					n.css({
						width : o + "px"
					});
					var l = 0;
					l = (parseInt(d.css("margin-left")) - parseInt(480 * (k - 1)));
					d.css("margin-left", l + "px");
					for( e = 0; e < k; e++) {
						var m = (c + 2 + e) % f.length;
						d.append(f.eq(m).clone())
					}
					c = (c + k) % f.length;
					g.find("li").removeClass("active");
					g.find("li#indicator-" + c).addClass("active");
					n.animate({
						width : 0
					}, {
						duration : 300 + 150 * k,
						complete : function() {
							d.css("margin-left", (l + (480 * (k - 1))) + "px");
							a(this).css({
								width : "480px"
							});
							for( e = 0; e < k; e++) {
								d.find("div.image").eq(0).remove()
							}
						}
					})
				}
				if(k < 0) {
					n.remove();
					d.find("div.spacer").remove();
					var l = 0;
					l = (parseInt(d.css("margin-left")) - parseInt(480 * (Math.abs(k) - 1)));
					d.css("margin-left", l + "px");
					for( e = 0; e < Math.abs(k); e++) {
						var i = (c - 2 - e) % f.length;
						d.prepend(f.eq(i).clone())
					}
					d.prepend('<div class="spacer">&nbsp;</div>');
					n = d.find("div.spacer");
					n.css({
						width : 0
					});
					c = (c + k) < 0 ? f.length + (c + k) : (c + k);
					g.find("li").removeClass("active");
					g.find("li#indicator-" + c).addClass("active");
					n.animate({
						width : 480 * Math.abs(k)
					}, {
						duration : 300 + 150 * Math.abs(k),
						complete : function() {
							d.css("margin-left", (l + (480 * (Math.abs(k) - 1))) + "px");
							a(this).css({
								width : "480px"
							});
							for( e = 0; e < Math.abs(k); e++) {
								d.find("div.image").eq(-1).remove()
							}
						}
					})
				}
			}

		})
	}
})(jQuery);
$(document).ready(function() {
	$("div.slideshow").slideshow()
});
