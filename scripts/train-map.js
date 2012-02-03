( function(){
    //车站资料
    var trainStation = [
    ['icon-beijing','Beijing West Railway Station','<img class="attraction-pic" src="" />'+
    'No.118, East Lianhuachi Road,</br>Fengtai District, Beijing 北京市丰台区莲花池东路118号',
    '<h3>How to get there?</h3><p><strong>By taxi:</strong>the cost from Beijing downtown to the railway station is normally around 40 RMB.</p>'+
    '<p><strong>subway:</strong>currently served by Line 9 from Guogongzhuang Station to Beijing West Railway Station.</p>'+
    '<p><strong>By bus:</strong>a great number of routes to the station’s North Square.</p>'],
    ['icon-lhasa','Lhasa Railway Station','<img class="attraction-pic" src="" />'+
    'The brand-new modern railway station is located 20km southwest of Lhasa downtown.',
    '<h3>Nearby Attractions in Lhasa city:</h3>'+
    '<p><strong>Potala Palace:</strong>the symbol of the city, the Heavenly Palace of the Dalais</p>'+
    '<p><strong>Jokhang Temple:</strong> the house of the Buddha and the holiest destination for all Tibetan pilgrims.</p>'+
    '<p><strong>Barkhor Street:</strong>A typical Tibet bazaar for you to explore the real life of the locals.</p>'
    ],
    ['icon-chengdu','Chengdu Railway Station','<img class="attraction-pic" src="" />'+
    'Gong Jiao Lu, Jin Niu Qu, Chengdu, Sichuan 成都市金牛区二环路北三段',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from Tianfu Square to the railway station is normally no less than 15 RMB.</p>'+
    '<p><strong>By subway:</strong>served by Line 1 </p>'
    ],
    ['icon-chongqing','Chongqing Railway Station','<img class="attraction-pic" src="" />'+
    'Caiyuanba Motorway Interchange,Yuzhong, Chongqing 渝中区菜袁路6号',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from Chaotianmen to the railway station is normally no less than 15 RMB.</p>'+
    '<p><strong>By subway:</strong>served by Line 1 </p>'
    ],
    ['icon-shanghai','Shanghai Railway Station','<img class="attraction-pic" src="" />'+
    'Moling Road, Zhabei District Shanghai 上海市闸北区秣陵路303号',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from the Bund to the railway station is normally around 25 RMB.</p>'+
    '<p><strong>By subway:</strong>scurrently served by Line 1, 3 and 4 </p>'
    ],
    ['icon-guangzhou','Guangzhou Railway Station','<img class="attraction-pic" src="" />'+
    '159 Huanshi Xilu, Yuexiu District, Guangzhou 广州市环市西路159号 ',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from Baiyunshan Airport to the railway station is normally around 80 RMB.</p>'+
    '<p><strong>By subway:</strong>served by Line 1 and 2.  </p>'
    ],
    ['icon-lanzhou','Lanzhou Railway Station','<img class="attraction-pic" src="" />'+
    'Huochezhan West Road, Chengguan, Lanzhou, 兰州市火车站东路393号',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from Baiyunshan Airport to the railway station is normally around 80 RMB.</p>'+
    '<p><strong>By subway:</strong>served by Line 1 and 2.  </p>'
    ],
    ];
    
    //车站信息的lightbox
    var show = function( e ){
        var attraction = $( this ).attr( 'name' );
        if( attraction==undefined ){
            attraction = 'icon' + $( this ).attr( 'class' ).replace(/marker/g,'').replace(' ','');
        }
        for( var i =0; i<trainStation.length; i++){
            if( trainStation[i][0]==attraction ){
                $( '.attraction-title' ).text( trainStation[i][1] );
                $( '.attraction-des' ).html( trainStation[i][2] );
                $( '.attraction-faq' ).html( trainStation[i][3] );
                $( '.lightbox' ).fadeIn( 'slow' );
            }
        }
        $( '.mask' ).show().click( function(){
            $( this ).hide();
            $( '.lightbox' ).fadeOut();
        });
    };
    
    //地图图标北京变化
    var turnon = function( e ){
        var attraction = 'icon' + $( this ).attr( "class" )
        .replace(/marker/g,'').replace(' ',"");
        $( '.'+attraction ).addClass( attraction + '-active' );
    };
    
    var turnoff = function( e ){
        var attraction = 'icon' + $( this ).attr( "class" )
        .replace(/marker/g,'').replace(' ',"");
        $( '.'+attraction ).removeClass( attraction + '-active' );
    };
    
$(function(){
    //地图    
    $( '.marker' ).click( show );
    $( '.attraction-icons' ).click( show );
    $( '.marker' ).hover( turnon ,turnoff );
    $( '.lightbox-close' ).click( function(){
        $( '.mask' ).click();
    })
    $( '.attraction-icons' ).hover( function(){
        var className = $( this ).attr( 'name' );
        $( this ).addClass( className+'-active' );
    }, function(){
        var className = $( this ).attr( 'name' );
        $( this ).removeClass( className+'-active' );
    });

    //sidebar
    $( '.train-faqs' ).each(
        function(){
            $( this ).hover( function(){
                $( this ).children( '.poptips' ).show();
            },function(){
                $( this ).children( '.poptips' ).hide();
            })
        }
    );

    //火车时刻标弹出框
    $( '.icon-train' ).click( function(){
        $( '.schedule-detail.'+$( this ).attr( 'name' ) ).toggle( );
    });

});
})( jQuery )
