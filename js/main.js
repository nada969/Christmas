//to make sure itis connected
//console.log("connected")

$(document).ready(function(){
    $("#btn").click(function(){
        alert("Text : " + $("#text").text());   //return the function    (.text)التكست هيظخر بانهى نوع
    });

    /////////nav
    $("#btnNavbar").click(function(){
       $(".navbar-content").slideToggle(100);
    });
    
    ////////fancybox
    $('[data-fancybox="images"]').fancybox({
        buttons : [ 
          'slideShow',
          'share',
          'zoom',
          'fullScreen',
          'close'
        ],
        thumbs : {
          autoStart : true
        }
      });

      ////////owl-carousel
      $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          items:1,
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
          autoplayTimeout:10000,
          
        });
      });


    //////button top
      $(window).scroll(function(){
        if ($(this).scrollTop()>400){
          $("#topBtn").fadeIn();
        }else{
          $("#topBtn").fadeOut();
        }
      });
      $("#topBtn").click(function(){
        $('html , body').animate({scrollTop:9} , 1000);
      });
});

