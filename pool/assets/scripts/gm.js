( function ( $ ){

function gm_initialize( e ) {
    e.preventDefault();
    
    $( '.map_container' ).show();
    
     //当前attration
    var thisAttraction = $( '.hotel_h1Title' ).text()//'St Regis Lhasa Resort';
    
    //attractions 坐标
    var attractions = [
            //拉萨hotels 坐标
            ['St Regis Lhasa Resort',29.64634645549873, 91.14490628242493,''],
            ['Brahmaputra Grand Hotel', 29.6459058776359, 91.15386486053467,''],
            ['Four Points by Sheraton Lhasa', 29.643523,91.136159,''],
            ['Jardin Secret Hotel', 29.644260104121273, 91.07539683580399,''],
            ['Xin Ding Hotel', 29.641921940529944, 91.11793667078018,''],
            ['Lhasa Manasarovar Hotel', 29.645929188682256, 91.1548063158989,''],
            ['Tibet Hotel', 29.656966362698242, 91.09017848968506,''],
            ['Yak Hotel',29.65320663343443, 91.13265663385391,''],
            ['Thangka Hotel',29.65003884178747, 91.13028556108475,''],
            ['Tibet Cang-gyan Lhasa Hotel',29.657579374051608, 91.09351247549057,''],
            ['Dhood Gu Hotel',29.652423435947714, 91.13320916891098,''],
            ['Shangbala hotel',29.651628577505004, 91.1311411857605,''],
            ['Kyichu Hotel',29.652675178661685, 91.13057523965836,''],
            ['New Mandala Hotel', 29.649626252314075, 91.13081395626068,''],
            ['Tashitakge Hotel', 29.649735810135784, 91.1329784989357,''],
            //日喀则hotels坐标
            ['Jiumu Yamei Hotel', 29.266839774287874, 88.88052105903625,''],
            ['Zhaxiquta Hotel', 29.266839774287874, 88.88052105903625,''],//坐标要修改
            ['Zanglong Hotel', 29.266839774287874, 88.88052105903625,''],//坐标要修改
            ['Taixing Hotel', 29.266839774287874, 88.88052105903625,''],//坐标要修改
            ['Shigatse Hotel', 29.266839774287874, 88.88052105903625,''],//坐标要修改
            ['Wutse Grand Hotel', 29.266839774287874, 88.88052105903625,''],//坐标要修改
            //['Shigatse Manasarovar Hotel', 29.270475807563095, 88.89087975025177,''],
            //['Shigatse Shangdong Mansion', 29.26557391768497, 88.88239324092865,''],
            ['Holy Land Hotel', 29.267317098771326, 88.88189435005188,''],
            //['Denzin Hotel', 29.271486573763372, 88.87865960597992,''],
            
            //江孜hotels坐标
            ['Gyantse Hotel',28.908927157641713, 89.6045994758606,''],
            ['Jianzang Hotel',28.90934040074421, 89.6030706167221,''],  
            //定日珠峰hotels坐标
            //['Tingri Baiba Hotel', 28.632928072441434, 87.17458248138428,''],
            ['Everest Hotel', 28.63291394726706, 87.17448860406876,''],
            ['Tent Guest House',28.16553641408612, 86.84331893920898,''],
            ['Rongpuk Guest House',28.191236550662385, 86.82906568050385,''],
            //樟木hotels坐标
            ['Caiyuan Hotel', 27.98593414494189, 85.98454266786575,''],
            ['Zhangmu Hotel', 27.98532305497405, 85.98381847143173,''],
            ['Sharpa Hotel', 27.986583128169777, 85.98305404186249,''],
            //林芝hotels坐标
            ['Nyingchi Holiday Hotel', 29.66639420415487, 94.35520201921463,''],
            ['Chongqing Xiaotiane Hotel', 29.266839774287874, 88.88052105903625,''],//坐标要修改
            ['Mingren Business Hotel', 29.266839774287874, 88.88052105903625,''],//坐标要修改
            //山南hotels坐标
            ['Tsedang Hotel', 29.23196098171095, 91.77076488733292,''], 
            ['Yalonghe Hotel',29.231450723281643, 91.7643141746521,''],
            ['Tibet Yulong Holiday Hotel',29.23177841247336, 91.77262365818024,''],
            //火车站坐标
            ['Train Station',29.623105090607822, 91.0705018043518,'imagesnew/hotel/train-station-icon.png'],
            //飞机场坐标
            ['Airport',29.291220248740697, 90.90149849653244,'imagesnew/hotel/airport-icon.png']
    ];
    
    var redlocal = 'imagesnew/hotel/hotel-icon1.png';
    var greenlocal = 'imagesnew/hotel/hotel-icon2.png';
    var new_latlng1,latlng2;    
    //区分当前坐标
    for(var i = 0; i < attractions.length-2; i++) {
            if( attractions[i][0]==thisAttraction ){
                 attractions[i][3] = redlocal;
                 new_latlng1 = attractions[i][1];
                 new_latlng2 = attractions[i][2];
                }
            else{
                attractions[i][3] = greenlocal;
            }
        }
    
    //地图中心位置
    var latlng = new google.maps.LatLng( new_latlng1*1,new_latlng2*1 );//29.646605206678142, 91.13964915275574

    var myOptions = {
        zoom : 11,
        center : latlng,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

//显示attractions
  for (var i = 0; i < attractions.length; i++) {
     var beach = attractions[i];
     var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
     var marker = new google.maps.Marker({
                 position: myLatLng,
                 map: map,
                 title:beach[0],
                 icon:new google.maps.MarkerImage(beach[3]),
                 zIndex: i
            });
               attachSecretMessage(marker, i);
        }
    
    
function attachSecretMessage(marker, number) {

var picture=[
'http://www.tibetdiscovery.com/assets/images/attractions/potala-palace-exterior-480.jpg'
]; 


//click跳转链接
var url =  ['http://hatchee.cn'];

  var infowindow = new google.maps.InfoWindow(
      {
      content: '<dl><dt>'+attractions[number][0]+'</dt><dd id="img"></dd>'+'</dl>',
       size: new google.maps.Size(50,50)
      });

  google.maps.event.addListener(marker, 'click', function() {                                                                   
       infowindow.open(map,marker);
     });
}  
}


$( function(){
   
        $( '#show_map' ).click( gm_initialize );
        $( '#close_map' ).click( function( e ){
            e.preventDefault();
            $( '.map_container' ).hide();
        });

});
})(jQuery);
