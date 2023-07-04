let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-bar')
menu.onclick=() => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

navbar.onclick = () => {
  navbar.classList.toggle('active');
}




let search = document.querySelector('.search');
document.querySelector('#search').onclick=() => {
    search.classList.toggle('active');
}

var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay:9000,
        disableOnInteraction:false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
      nextE1: ".swiper-button-next",
      prevE1: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay:9000,
        disableOnInteraction:false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });