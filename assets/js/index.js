const burger = document.querySelector('.burger'),
      mobileMenu = document.querySelector('.mobile-menu'),
      closeMenu = document.querySelector('.close__menu'),
      wrapper = document.querySelector('.wrapper'),
      headerItems = document.querySelectorAll('.header-item'),
      debtLists = document.querySelectorAll('.debt-list'),
      debt = document.querySelector('.debt'),
      wrapperFormInp = document.querySelector('.wrapper-form__inp'),
      sliderBtns = document.querySelectorAll('.slider-btns button'),
      forIndividuals = document.querySelector('.for-individuals'),
      forLegalEntities = document.querySelector('.for-legal-entities')

burger.addEventListener('click', () => {
  mobileMenu.classList.add('showMenu');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('showMenu');
});

debt.addEventListener('click', () => {
  debt.children[2].classList.toggle('d-none');
});

debtLists.forEach(list => {
  list.addEventListener('click', () => {
    wrapperFormInp.value = list.innerText
  })
});

let [forIndividualsBtn, forLegalEntitiesBtn] = sliderBtns;

forLegalEntitiesBtn.addEventListener('click', () => {
  forIndividuals.classList.add('d-none');
  forLegalEntities.classList.remove('d-none');
  forLegalEntitiesBtn.classList.add('active-sort');
  forIndividualsBtn.classList.remove('active-sort');
});
forIndividualsBtn.addEventListener('click', () => {
  forIndividuals.classList.remove('d-none');
  forLegalEntities.classList.add('d-none');
  forLegalEntitiesBtn.classList.remove('active-sort');
  forIndividualsBtn.classList.add('active-sort');
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
