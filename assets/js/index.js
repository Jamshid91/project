const burger = document.querySelector('.burger'),
      mobileMenu = document.querySelector('.mobile-menu'),
      closeMenu = document.querySelector('.close__menu'),
      wrapper = document.querySelector('.wrapper'),
      headerItems = document.querySelectorAll('.header-item')

burger.addEventListener('click', () => {
  mobileMenu.classList.add('showMenu');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('showMenu');
});


$('.header-item').click(function() {
    $(this).siblings().removeClass('showList');
    $(this).toggleClass('showList');
});

$('.mobile-menu__list').click(function() {
  $(this).siblings().removeClass('openList');
  $(this).toggleClass('openList');
});

wrapper.addEventListener('click', () => {
  headerItems.forEach(item => {
    item.classList.remove('showList')
  })
});

// Mask phone number
$(document).ready(function() {
  $(".phone-number").mask("+7 (999) 99-99-999");
});

// carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  dots:false,
  touchDrag: true,
  mouseDrag:true,
  responsive:{
      0:{
          items:1
      }
    }
  })
