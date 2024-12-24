$(document).ready(function(){

    $(".careerFilter .ct-slct .child_option").click(function(){

    var abc = $(this).find(".open-menu2").hasClass('active');
    if (abc == true) {
        $(this).find(".dropdown-menu2").slideUp("fast");
        $(".open-menu2").removeClass('active');
    }
    else{
        $(".dropdown-menu2").slideUp("fast");
        $(this).find(".dropdown-menu2").slideDown("fast");
        $(".open-menu2").removeClass('active');
        $(this).find(".open-menu2").addClass('active');
    }
});
   $(document).on("click", function(event){

    var $trigger = $(".careerFilter .ct-slct .child_option");

    if($trigger !== event.target && !$trigger.has(event.target).length){

        $(".dropdown-menu2").slideUp("fast");

        $(".open-menu2").removeClass('active');

    }

});

  jQuery('.term-select').click(function() {

    let text = jQuery(this).text();

    jQuery(this).parents('.child_option').find('.city_btn').text(text);

  })

const label = document.querySelector('.dropdown__filter-selected');


jQuery('.dropdown__select-option').click(function() {

  let text = jQuery(this).text()

  jQuery(this).parents('.dropdown__filter').find('.dropdown__filter-selected').text(text)

  jQuery(this).parents('.dropdown__select').removeClass('active');

  jQuery(this).parents('.dropdown__select').removeAttr('style');

});


jQuery('.dropdown__options-filter').click(function() {

    jQuery('.dropdown__select').removeAttr('style');

    jQuery('.dropdown__select').removeClass('active');

    let parent = jQuery(this).parents('.dropdown')

    let check = parent.find('.dropdown__select').hasClass('active')

    if(check){

      parent.find('.dropdown__select').removeAttr('style');

      parent.find('.dropdown__select').removeClass('active');

    }
    else{

    parent.find('.dropdown__select').css('transform','scaleY(1)');

    parent.find('.dropdown__select').addClass('active');

    }

})

// document.addEventListener('click', (e) => {
//   const toggle = document.querySelector('.dropdown__switch')
//   const element = e.target

//   if (element == toggle) return;

//   const isDropdownChild = element.closest('.dropdown__filter')

//   if (!isDropdownChild) {
//     toggle.checked = false
//   }
// });
// $(".banner .banner-slider .gallery figure img").height($(window).height());
//   jQuery(window).resize(function () {
//     $(".banner .banner-slider .gallery figure img").height($(window).height());
//   });

//$(".banner figure").height($(window).height()),jQuery(window).resize(function(){$(".banner figure").height($(window).height())});

  // $(".banner-slider")
  // .slick({
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 4000,
  //   autoplaySpeed: 4000,
  //   fade: false,
  //   cssEase: "linear",
  //   arrows: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   pauseOnHover:false,
  //   pauseOnFocus:false,
  //   lazyLoad: "progressive",
  //   prevArrow:
  //     '<a href="javascript:;" class="slick-arrow slick-prev"><img class="lazy" src="assets/images/left.svg" alt="slick arrow"><img src="assets/images/left1.svg" alt="slick arrow"></a>',
  //   nextArrow:
  //     '<a href="javascript:;" class="slick-arrow slick-next"><img class="lazy" src="assets/images/left.svg" alt="slick arrow"><img class="lazy" src="assets/images/left1.svg" alt="slick arrow"></a>',
  // });
  // $(".parking-slider").slick({
  //   autoplay: true,
  //   arrows:false,
  //   speed: 4000,
  //   autoplaySpeed:0,
  //   infinite:true,
  //   dots: false,
  //   swipeToSlide:true,
  //   slidesToShow:4,
  //   slidesToScroll:1,
  //   cssEase:'linear',
  //   draggable: false,
  //   swipe: false,
  //   prevArrow:'<a href="javascript:;" class="slick-arrow slick-prev"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="60" height="60" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M27 15L11 31L27 47" stroke="#101820" stroke-width="2"/><path d="M11 31L51 31" stroke="#101820" stroke-width="2"/></svg></a>',
  //   nextArrow:'<a href="javascript:;" class="slick-arrow slick-next"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="61" y="61" width="60" height="60" transform="rotate(-180 61 61)" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M35 47L51 31L35 15" stroke="#101820" stroke-width="2"/><path d="M51 31H11" stroke="#101820" stroke-width="2"/></svg></a>',
  //   responsive: [
  //      {
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow:3,
  //       }
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow:2,
  //       }
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow:2,
  //       }
  //     }
  //   ]
  // });
          $('#myBtnPlay').click(function(){
            $('video').get(0).pause();
            $('.vidWrp video').get(0).play();
            $('#myBtnPlay').hide();
            $('#myBtnPause').show();
          });
          $('#myBtnPause').click(function(){
            $('.vidWrp video').get(0).pause();
            $('#myBtnPlay').show();
            $(this).hide();
          });

          $('.languageDrop > a').click(function(){
   $('.languageDrop ul').slideToggle();
});
$(document).click(function(){
$('.languageDrop ul').slideUp();
});
jQuery(".rightHead").click(function(e){
  e.stopPropagation();
});

  // $(".sec1Slider").slick({
  //   autoplay: true,
  //   arrows:true,
  //   speed: 4000,
  //   infinite:true,
  //   dots: false,
  //   swipeToSlide:true,
  //   slidesToShow:4,
  //   slidesToScroll:1,
  //   cssEase:'linear',
  //   draggable: true,
  //   swipe: true,
  //   pauseOnHover:false,
  //   pauseOnFocus:false,
  //   prevArrow:'<a href="javascript:;" class="slick-arrow slick-prev"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="60" height="60" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M27 15L11 31L27 47" stroke="#101820" stroke-width="2"/><path d="M11 31L51 31" stroke="#101820" stroke-width="2"/></svg></a>',
  //   nextArrow:'<a href="javascript:;" class="slick-arrow slick-next"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="61" y="61" width="60" height="60" transform="rotate(-180 61 61)" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M35 47L51 31L35 15" stroke="#101820" stroke-width="2"/><path d="M51 31H11" stroke="#101820" stroke-width="2"/></svg></a>',
  //   responsive: [
  //     {
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow:3,
  //       }
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow:2,
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow:1,
  //       }
  //     }
  //   ]
  // });
  //  $(".sec2Slider").slick({
  //   autoplay: true,
  //   arrows:false,
  //   speed: 4000,
  //   infinite:true,
  //   dots: true,
  //   fade:true,
  //   slidesToShow:1,
  //   slidesToScroll:1,
  //   cssEase:'linear',
  //   pauseOnHover:false,
  //   pauseOnFocus:false,
  //   prevArrow:'<a href="javascript:;" class="slick-arrow slick-prev"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="60" height="60" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M27 15L11 31L27 47" stroke="#101820" stroke-width="2"/><path d="M11 31L51 31" stroke="#101820" stroke-width="2"/></svg></a>',
  //   nextArrow:'<a href="javascript:;" class="slick-arrow slick-next"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="61" y="61" width="60" height="60" transform="rotate(-180 61 61)" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M35 47L51 31L35 15" stroke="#101820" stroke-width="2"/><path d="M51 31H11" stroke="#101820" stroke-width="2"/></svg></a>'
  // });
  // $(".sec3Slider").slick({
  //   autoplay: true,
  //   arrows:true,
  //   speed: 4000,
  //   infinite:true,
  //   dots: true,
  //   swipeToSlide:true,
  //   slidesToShow:4,
  //   slidesToScroll:1,
  //   cssEase:'linear',
  //   draggable: false,
  //   swipe: false,
  //   pauseOnHover:false,
  //   pauseOnFocus:false,
  //   prevArrow:'<a href="javascript:;" class="slick-arrow slick-prev"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="60" height="60" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M27 15L11 31L27 47" stroke="#101820" stroke-width="2"/><path d="M11 31L51 31" stroke="#101820" stroke-width="2"/></svg></a>',
  //   nextArrow:'<a href="javascript:;" class="slick-arrow slick-next"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="61" y="61" width="60" height="60" transform="rotate(-180 61 61)" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M35 47L51 31L35 15" stroke="#101820" stroke-width="2"/><path d="M51 31H11" stroke="#101820" stroke-width="2"/></svg></a>',
  //    responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow:3,
  //       }
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow:2,
  //       }
  //     }
  //   ]
  // });
  // $(".sec5Slider").slick({
  //   autoplay: true,
  //   arrows:true,
  //   speed: 4000,
  //   infinite:true,
  //   dots: true,
  //   swipeToSlide:true,
  //   slidesToShow:1,
  //   slidesToScroll:1,
  //   cssEase:'linear',
  //   fade:false,
  //   draggable: false,
  //   swipe: false,
  //   pauseOnHover:false,
  //   pauseOnFocus:false,
  //   prevArrow:'<a href="javascript:;" class="slick-arrow slick-prev"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="60" height="60" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M27 15L11 31L27 47" stroke="#101820" stroke-width="2"/><path d="M11 31L51 31" stroke="#101820" stroke-width="2"/></svg></a>',
  //   nextArrow:'<a href="javascript:;" class="slick-arrow slick-next"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="61" y="61" width="60" height="60" transform="rotate(-180 61 61)" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M35 47L51 31L35 15" stroke="#101820" stroke-width="2"/><path d="M51 31H11" stroke="#101820" stroke-width="2"/></svg></a>'
  // });
setTimeout(function () {
  $(".events-slider").slick({
    autoplay: true,
    arrows: false,
    speed: 4000,
    infinite: true,
    dots: true,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: 'linear',
    swipe: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    prevArrow: '<a href="javascript:;" class="slick-arrow slick-prev"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="60" height="60" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M27 15L11 31L27 47" stroke="#101820" stroke-width="2"/><path d="M11 31L51 31" stroke="#101820" stroke-width="2"/></svg></a>',
    nextArrow: '<a href="javascript:;" class="slick-arrow slick-next"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="61" y="61" width="60" height="60" transform="rotate(-180 61 61)" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M35 47L51 31L35 15" stroke="#101820" stroke-width="2"/><path d="M51 31H11" stroke="#101820" stroke-width="2"/></svg></a>'
  });
}, 1000);
////// mob slider
    $(".sliderxs").slick({
        arrows: false,
        dots: true,
        autoplay: true,
    adaptiveHeight: true,
    pauseOnHover:false,
    pauseOnFocus:false,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 991,
              settings: {
                unslick: true,
                slidesToShow:3
              }
            },
            {
              breakpoint: 767,
              settings: {
               slidesToShow:2              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow:1
              }
            }
        ]
    });
////// mob slider end

  $( "#pull" ).click(function() {
    $( "#topMenu" ).slideToggle( "slow");
  });

  // $('.fancybox').fancybox({
  //   'padding'     : 0,
  //   'transitionIn'    : 'fadeIn',
  //   'transitionOut'   : 'fadeOut',
  //   'type'              : 'image',
  //   'autoScale'   : true,
  //   'changeFade'        : 0
  // });


  var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 50, mobile: false }); wow.init();


$(window).scroll(function(){
  if(jQuery('html, body').scrollTop() >= 10){
    $('.header').addClass('scrll');
  }else{
    $('.header').removeClass('scrll');
  }
});

// jQuery('.accordion-button').addClass('collapsed');
// jQuery('.custom-accordion-button').click(function() {
//       var row_id=jQuery(this).attr('row_id');
//   setTimeout(function(){

//       if(jQuery('#'+row_id).hasClass('show')){

//         jQuery('#'+row_id).removeClass('show');
//       }
//   }, 2000);
// });

});
