window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 0  || document.documentElement.scrollTop > 0 ) {
    document.querySelector('.header').classList.add('active')
  } else {
    document.querySelector('.header').classList.remove('active')
  }
}

document.querySelector('.navbar-toggler').addEventListener('click',function(){
  document.querySelector('.navbar').classList.toggle('active');
  document.querySelector('body').classList.toggle('overflow-hidden');
})

const swiper = new Swiper('.banner__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }    
  })


  $('.show-more').on('click',function(){
    if($(this).text() === "mehr laden") {
      $(this).text('weniger laden')
    }
    else {
      $(this).text('mehr laden')
    }
    if($('.more__content').hasClass('active')) {
      $('.more__content').hide();
      $('.more__content').removeClass('active');
    }
    else {
      $('.more__content').addClass('active');
      $('.more__content').show();
    }
  })