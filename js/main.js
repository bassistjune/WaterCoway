(function() {
    // 헤더 
    // gnb 토글
    $('.gnb').on('mouseenter', function() {
        $('header').addClass('on');
    }).on('mouseleave', function() {
        $('header').removeClass('on');
    });
    // li depth2 토글
    $('.gnb>li').on('mouseenter', function() {
        $(this).find('div').slideDown(100);
    }).on('mouseleave', function() {
        $(this).find('div').slideUp(100);
    });


    // 슬라이드
    var mainSlider = new Swiper('.main_slider', {
		loop: true,
        pagination: {
			el: '.swiper-pagination',
			clickable:true
		},
		autoplay: {
            el: '.btn_pause',
			delay: 5000,
			disableOnInteraction: false
		},
	});

    // 토글 플레이
    var togglePlay = true;

    $('.main_slider .btn_pause').on('click',function() {
        if(togglePlay) {
            mainSlider.autoplay.stop();
            $('.btn_pause').css('background-position','center left');
        } else {
            mainSlider.autoplay.start();
            $('.btn_pause').css('background-position','right');
        }
        togglePlay = !togglePlay;
    });
    
    /* ( 
        function () {
            swiper.autoplay.stop();
            $(this).css('background-position', 'left center');
        }, function() {
            swiper.autoplay.start();
            $(this).css('background-position', 'right center');
        });  */

    // 헤더 스크롤 온 기능
    var header = $('#header');

    $(window).scroll(function() {
        if($(this).scrollTop() > 20) {  
            header.addClass('on');
        } else {
            header.removeClass('on');
        }
    });

    //event 섹션 온오프 
    $('.main_event .event_close').on('click', function() {
        $(this).toggleClass('on');
        $('.main_event').toggleClass('on');
    });

    var body = $('body');

    /* 모바일 전체메뉴 버튼 기능 */
    $('#header .btn_menu').on('click', function() {
        body.addClass('not_scroll');
        $('#header .mobile_menu').addClass('on');
        $('#dimm').show();
    });

    /* 모바일 메뉴 닫기버튼 */
    $('.mobile_menu .btn_close').on('click', function() {
        body.removeClass('not_scroll');
        $('#dimm').hide();
        $('.mobile_menu').removeClass('on');

        setTimeout(function() {
            $('.gnb_list>li').removeClass('on');
            $('.mobile_depth2').slideUp();
        }, 600);
    });

    // 모바일 depth2 기능 
    $('.bottom_menu .mobile_gnb>li>a').on('click', function() {
        $(this).siblings('.mobile_depth2').slideToggle().not().parent().siblings().find('.mobile_depth2').slideUp(); 
        $(this).parent('li').toggleClass('on').siblings().removeClass('on');

        /* if($(window).resize()) {
            $('.mobile_depth2').hide();
        } */
    });

    // question slider 

    var questionSlider = new Swiper('.question_slider', {
        direction: 'vertical',
        simulateTouch: false,
        /* effect: 'fade', */
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // 커스텀 레인지 셀렉터
    function sliderUI() {

        var sliderBar = $('.slider .slider_bar');
        var txtArr = ['1세미만(영아)','1-3세','4-8세','9-13세','14-18세','19-30세','31-50세','50-69세','70세이상'];
        var txt1 = $('.question_slider .txt1');

        $('.slider').slider({
            min:0,
            max: 8,

        });
        
        //min,max 가져오기
        var min = $('.slider').slider('option', 'min');
        var max = $('.slider').slider('option', 'max');
        var result = 0;

        $('.slider').on('slide', function( event, ui ) {
            result = (ui.value - min)/(max - min) * 100;
            txt1.text(txtArr[ui.value]);
            sliderBar.css('width', result + '%');
        });
        
    }
    sliderUI();

    //커스텀 셀렉트
    $('.custom_select_wrap .custom_select').on('click', function(e) {
        e.preventDefault();
        $(this).parent('.custom_select_wrap').toggleClass('on');
        $(this).siblings('.list_select').toggleClass('on');
    });
    /* $('.custom_select li.init').on('click',function(e) {
        e.preventDefault();
        $(this).siblings().toggle();
        $(this).closest('.custom_select').toggleClass('on');
    });

    $('.custom_select .list_select li:not(.init)').on('click', function() {

        $(this).addClass('selected').siblings().removeClass('selected');
        $('.custom_select li.init').siblings().toggle();
    }); */

    // 라디오박스 기능 
    $("input:radio[id=chk_gender2]").on('click', function(){

        if($("input:radio[id=chk_gender2]").is(":checked")) {

            $('.sub_radio').show();
        } else {

            $('.sub_radio').hide();

        }
    });
    
    // btn_result 기능 
    
    $('.btn_result').on('click', function(e) {
        e.preventDefault();

        $('.result_wrap').css('display','block');
    });
})();