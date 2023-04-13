$(document).ready(function(){
  $nav=$(".nav");
  $toggleCollapse=$(".toggle-collapse");

  /*Click event toggle menu */
  $toggleCollapse.click(function(){
      $nav.toggleClass("collapse");
  });

  //owl-corousal
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

});
