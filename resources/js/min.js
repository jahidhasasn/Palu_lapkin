// MixitUp
var mixer = mixitup('.grid-portfolio-container');

//STICKY HEADER
$(".sticky-header").sticky({topSpacing:0});

jQuery(window).on('scroll', function() {
    if(jQuery(window).scrollTop() > 300) {
        jQuery('.sticky-header').css('background-color', 'rgba(0, 0, 0, 0.9)');
    } else {
       jQuery('.sticky-header').css('background-color', 'transparent');
    }
});



//scrollify Jquery plugin use
//$(function() {
    //$.scrollify({
      //section : ".scrollify",
      //setHeights: false,
     // updateHash: false,
     // scrollSpeed: 800,
   // });
  //});

  // HUMBERGER MENU
  function openMenu(){
    document.getElementById('navebar').style.height="100%";
  }

  function closeMenu(){
    document.getElementById('navebar').style.height="0";
  }

  //smooth scrool
  $(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
  
      }, 1000);
      return false;

    });
  });