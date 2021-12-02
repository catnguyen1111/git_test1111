$(document).ready(function() {
  // chạy tự động
  // var autoLoad = setInterval(function() {
  //   $('.btn-next').trigger('click');
  // },2000);


  $('.btn-next').click(function(event) {

   var sildeAftet = $('.active').next();
   var positionNow = $('.active-btn').index()+1;
   console.log(positionNow);
   
  if(sildeAftet.length!==0){
    $('.active').addClass('hideLeft').one('webkitAnimationEnd',function(event){
      $('.hideLeft').removeClass('hideLeft').removeClass('active');
    });
    sildeAftet.addClass('active').addClass('showRight').one('webkitAnimationEnd',function(event){
      $('.showRight').removeClass('showRight');
    });
    $('.button-slide ul li').removeClass('active-btn');
    $('.button-slide ul li:nth-child('+(positionNow+1)+')').addClass('active-btn');
  }else{
    $('.active').addClass('hideLeft').one('webkitAnimationEnd',function(event){
      $('.hideLeft').removeClass('hideLeft').removeClass('active');
    });
    $('.slide:first-child').addClass('active').addClass('showRight').one('webkitAnimationEnd',function(event){
      $('.showRight').removeClass('showRight');
    });
    $('.button-slide ul li').removeClass('active-btn');
    $('.button-slide ul li:nth-child(1)').addClass('active-btn');
  }

  })
  
  $('.btn-prev').click(function(event) {
     
    var slideBefore = $('.active').prev();
    if(slideBefore.length !== 0){
      $('.active').addClass('showLeft').one('webkitAnimationEnd',function(event){
        $('.showLeft').removeClass('showLeft').removeClass('active');
      });
      slideBefore.addClass('active').addClass('hideRight').one('webkitAnimationEnd',function(event){
        $('.hideRight').removeClass('hideRight');
      });
    }
    else{
      $('.active').addClass('showLeft').one('webkitAnimationEnd',function(event){
        $('.showLeft').removeClass('showLeft').removeClass('active');
      });
      $('.slide:last-child').addClass('active').addClass('hideRight').one('webkitAnimationEnd',function(event){
        $('.hideRight').removeClass('hideRight');
      });
    }
    
  })

 
})

