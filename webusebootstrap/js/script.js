
$(document).ready(function() {
 // run auto
 let autoLoad = setInterval(function() {
   $('.btn-next').trigger('click');
 },3000)
  
 
  $('.btn-next').click(function(event) {
    let controlbottom = $('.active-btn').index()+1;
    console.log(controlbottom);
    let slideAfter = $('.active').next();
    console.log(slideAfter);
    if(slideAfter.length !== 0){
      $('.active').addClass('hideLeft')
      $('.hideLeft').removeClass('hideLeft').removeClass('active');
     
      slideAfter.addClass('active').addClass('showRight')
      $('.showRight').removeClass('showRight');
    
      $('.button-slide ul li').removeClass('active-btn');
      $('.button-slide ul li:nth-child('+(controlbottom+1)+')').addClass('active-btn');
    }
    else{
      $('.active').addClass('hideLeft');
      $('.hideLeft').removeClass('hideLeft').removeClass('active');
   
      $('.slide:first-child').addClass('active').addClass('showRight');
      $('.showRight').removeClass('showRight');
    
      $('.button-slide ul li').removeClass('active-btn');
      $('.button-slide ul li:nth-child(1)').addClass('active-btn');
    }
  })

  $('.btn-prev').click(function(event) {
    let controlbottom = $('.active-btn').index()+1;
    let slideBefore = $('.active').prev();
    console.log(controlbottom);
    if(slideBefore.length !== 0){;
      $('.active').addClass('hideRight')
      $('.hideRight').removeClass('hideRight').removeClass('active');
      
      slideBefore.addClass('active').addClass('showLeft');
      $('.showLeft').removeClass('showLeft');
      
      $('.button-slide ul li').removeClass('active-btn');
      $('.button-slide ul li:nth-child('+(controlbottom-1)+')').addClass('active-btn');
    }
    else{
      $('.active').addClass('hideRight');
      $('.hideRight').removeClass('hideRight').removeClass('active');

      $('.slide:last-child').addClass('active').addClass('showLeft');
      $('.showLeft').removeClass('showLeft');
   
      $('.button-slide ul li').removeClass('active-btn');
      $('.button-slide ul li:last-child').addClass('active-btn');
    }
  })
  $('.button-slide ul li').click(function(){
    clearInterval(autoLoad);
    let viTriHienTai = $('.active-btn').index()+1;
    let viTriClick = $(this).index()+1;
    $('.button-slide ul li').removeClass('active-btn');
    $(this).addClass('active-btn');
    if(viTriClick > viTriHienTai){
      $('.active').addClass('hideLeft')
      $('.hideLeft').removeClass('hideLeft').removeClass('active');

      $('.slide:nth-child('+viTriClick+')').addClass('active').addClass('showRight');
      $('.showRight').removeClass('showRight');

    }
    if(viTriClick < viTriHienTai){
      $('.active').addClass('hideRight');
      $('.hideRight').removeClass('hideRight').removeClass('active');
     
      $('.slide:nth-child('+viTriClick+')').addClass('active').addClass('showLeft');
      $('.showLeft').removeClass('showLeft');
      
    }
  })

  // btn overview , btn specification
  $('.content-btn-1').click(function(e){
    $('.overview-block').removeClass("hide")
    $('.overview-block').addClass("show")
    $('.specifications-block').removeClass("show")
    $('.specifications-block').addClass("hide")
    $('.content-btn-1 ').addClass("select")
    $('.content-btn-2 ').removeClass("select")
  })
  $('.content-btn-2').click(function(e){
    $('.overview-block').removeClass("show")
    $('.overview-block').addClass("hide")
    $('.specifications-block').removeClass("hide")
    $('.specifications-block').addClass("show")
    $('.content-btn-1 ').removeClass("select")
    $('.content-btn-2 ').addClass("select")
   })

  // menu btn
  $('.my-navbar-nav .my-nav-item').click(function(e){
    let next = $('.my-nav-item').next();
    $('.my-nav-item').removeClass('select');
    $(this).addClass('select')
    
  })


})