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
      forLegalEntities = document.querySelector('.for-legal-entities'),
      headerItemLink = document.querySelectorAll('.header-item__link')

headerItemLink.forEach(el => {
  el.addEventListener('click', () => {
    headerItemLink.forEach(link => {
      link.classList.remove('active')
    })
    el.classList.toggle('active')
  })
})

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
    },
    navText: [
      `<svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999998 1L13 13L1 25" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      `<svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999998 1L13 13L1 25" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    ]
  })
