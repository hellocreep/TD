//OVERVIEW头部选项卡切换
$(document).ready(function() {
	$('.thumbs .thumb').each(function(index) {
		$(this).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			$('.slide').hide();
			$('.slide').eq(index).fadeIn();
		})
	})

	$('.thumbs .thumb').eq(0).click();
})
//WHEN TO GO条形图

/*
var January = new Array("-110", "20", "30");
var Febrary = new Array("10", "110", "50");
var March = new Array("30", "110", "50");
var April = new Array("30", "10", "50");
var May = new Array("30", "110", "-10");
var June = new Array("30", "70", "60");
var July = new Array("30", "-20", "50");
var August = new Array("30", "10", "50");
var September = new Array("30", "-110", "50");
var October = new Array("30", "110", "-50");
var Novemeber = new Array("-30", "10", "50");
var December = new Array("10", "110", "50");

var Recommend = new Array("1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2");
var Allmonth = new Array(January, Febrary, March, April, May, June, July, August, September, October, Novemeber, December);
*/
var January = new Array("","","");
var Febrary = new Array("","","");
var March = new Array("","","");
var April = new Array("","","");
var May = new Array("","","");
var June = new Array("","","");
var July = new Array("","","");
var August = new Array("","","");
var September = new Array("","","");
var October = new Array("","","");
var Novemeber = new Array("","","");
var December = new Array("","","");
var Recommend = new Array("", "", "", "", "", "", "", "", "", "", "", "");
$(document).ready(function() {
	var Allmonth = new Array(January, Febrary, March, April, May, June, July, August, September, October, Novemeber, December);
	$.each(Recommend,function(x,y){
		$('.temp tr').eq(x).children('td:eq(1)').addClass('ww-r'+y);
		$('.WWtable tr:odd td').eq(x).addClass('ww-r'+y);
	});
	$.each(Allmonth, function(m, n) {
		$.each(n, function(i, j) {
			$('.temp tr').eq(m).children('td').eq(i + 2).children('span').after(j);
			if(j <= 0) {
				$('.temp tr').eq(m).children('td').eq(i + 2).children('span').css({
					"background" : 'url("/imagesnew/destination/temperature-minus.png") repeat-x'
				}).animate({
					"width" : Math.abs(j)
				}, 1000);
			} else {
				$('.temp tr').eq(m).children('td').eq(i + 2).children('span').animate({
					"width" : j
				}, 1000);
			}
		})
	})
});
