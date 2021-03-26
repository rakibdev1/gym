$(function(){
 
  $(window).on('scroll', function(){

    var scrolling = $(this).scrollTop();      
    if(scrolling > 500){
      $('.uppish').fadeIn(500)
    }
    else{
        $('.uppish').fadeOut(500)
    }
    });

    $('.uppish').click(function(){
      $('html,body').animate({scrollTop:0},600)
    });










  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:false,
    PauseOnHover:false,   
  });

    $('.sponser').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:false,
        
      });
    $('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:false,
        responsive: [
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 576.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]

        
      });
      $('.counter-item').counterUp({
        delay: 10,
        time: 1000
      });

      var containerEl = document.querySelector('.Rokibul-1');

      var mixer = mixitup(containerEl);
      var containerEl = document.querySelector('.Rokibul-2');

      var mixer = mixitup(containerEl);

})