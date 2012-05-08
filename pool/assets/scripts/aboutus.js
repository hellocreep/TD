(function() {
	//PIC SLIDE
	$.fn.slideshow = function(b) {
		var a = $;
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

	//翻页 opts{list:翻页jquery封装集，num:单页显示数量}
    	//todo: 上一页和下一页,返回window高度未定
	$.fn.autoPager = function( opts ){
	        var pageCount = (opts['list'].length / opts['num']).toFixed(0);
	        if( pageCount<2 ){
	            return;
	        }else{
	            
	            for( var i = 0; i<pageCount; i++){
	                var currentPage = i + 1;
	                var beginPage = i*opts['num'];
	                $( '#pager' ).append("<span class='btn-page' name="+beginPage+">"+currentPage+"</span>");
	            };
	            
	            var pager = function( begin,end ){
	                opts['list'].hide();
	                opts['list'].slice( begin, end ).show();
	            }
	            
	            $( '.btn-page' ).each(function(){
	                $( this ).click( function(){
	                    $( this ).addClass( 'selected' ).siblings().removeClass( 'selected' );
	                    if( opts['scroll'] > -1 ){
	                    	$( window ).scrollTop( opts['scroll'] );
	                    }
	                    var begin = $( this ).attr( 'name' )*1;
	                    var end = begin + opts['num']*1;
	                    pager(begin,end);
	                });
	            });
	            
	            $( '#pager .page-pre' ).click(function(){
	                $( '#pager .selected' ).prev().click();
	            });
	            $( '#pager .page-next' ).click(function(){
	                $( '#pager .selected' ).next().click();
	            });
	            
	            $( '.btn-page:first' ).click();
	            $( window ).scrollTop( 0 );
	        }
	    }


	$(function() {

		$("div.slideshow").slideshow();

		//review 翻页
		var rev_list = $('.rev-wrap');
		var _num = 5;
		pager_opts = {
		    list: rev_list,
		    num: _num,
		    scroll: 0
		}
		$( '#pager' ).autoPager( pager_opts );

		/*Tips from TC翻页*/
		var listNum = $('.accordion li').length;
		var pageNum = Math.ceil(listNum / 4);
		for(var i = 1; i <= pageNum; i++) {
			$('ul.pagenum').append('<li>' + i + '</li>');
		};
		$('.accordion li p').hide();
		$('.accordion li').hide();
		$('ul.pagenum li').first().addClass('activedcss');
		for(var a = 0; a < 4; a++) {
			$('.accordion li').eq(a).show();
		}
		$('ul.pagenum li').click(function() {
			$('ul.pagenum li').removeClass();
			$(this).addClass('activedcss');
			var clickNum = $(this).text();
			var n = (clickNum - 1) * 4;
			$('.accordion li').hide();
			for(var x = n; x < n + 4; x++) {
				$('.accordion li').eq(x).show();
			}
		});
		var listNum = $('.letter-content').length;
		var pageNum = Math.ceil(listNum / 4);
		for(var i = 1; i <= pageNum; i++) {
			$('ul.letter-page').append('<li>' + i + '</li>');
		};
		$('ul.letter-page li').first().addClass('activedcss');
		for(var a = 0; a < 4; a++) {
			$('.letter-content').eq(a).show();
		}
		$('ul.letter-page li').click(function() {
			$('ul.letter-page li').removeClass();
			$(this).addClass('activedcss');
			var clickNum = $(this).text();
			var n = (clickNum - 1) * 4;
			$('.letter-content').hide();
			for(var x = n; x < n + 4; x++) {
				$('.letter-content').eq(x).show();
			}
		});
		//ACCORDION脚本
		$('.accordion h6').click(function() {
			$(this).next().toggle('fast');
		});
		$('.accordion h6').eq(0).click();
		//What We Do 页面切换js
		$('.wedo-nav li').each(function(index) {
			$(this).click(function() {
				$(this).addClass('active').siblings().removeClass('active');
				$('.wrap-js').hide();
				$('.wrap-js').eq(index).show();
			})
		})

		$('.wedo-nav li').eq(0).click();
		//also in this section去掉当前页链接
		$('.section ul li').each(function() {
			if($(this).attr('name') == $('.content').attr('name')) {
				$(this).hide();
			} else if($('.content').attr('name') == "tourguide" || $('.content').attr('name') == "saleteam") {
				$('.section ul li[name="about-team"]').hide();
			}
		})
		//FANCYBOX CHOOSEUS 图片
		$('a[rel="images-gallery"]').fancybox({
			'transitionIn' : 'none',
			'transitionOut' : 'none',
			'titlePosition' : 'over',
			'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
				return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
			}
		});

		//FANCYBOX GET FORM
		$(".quickform").fancybox({
			'width' : '55%',
			'height' : '95%',
			'autoScale' : false,
			'transitionIn' : 'none',
			'transitionOut' : 'none',
			'type' : 'iframe'
		});

		$('a[rel="images-gallery"]').addClass('clearfix').hover(function() {
			$(this).append('<span class="zoom"></span>');
		}, function() {
			$(this).children('.zoom').remove();
		});
	})
})(jQuery);
