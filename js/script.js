const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Cambia la clase del body a ".show-mobile-menu"
    document.body.classList.toggle("show-mobile-menu");
});

/* Cuando se le da click al boton X, le quita la clase "show-mobile-menu", que hace desaparecer el menu*/
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

/* Cuando se le da click a cualquier opcion del menu hamburguesa desaparece el menu lateral */
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click())
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  //Para que cuando el cursor del mouse se acerque a cualquier item, se cambie de flecha a una mano
  grabCursor: true,
  //Espacio entre cada elemento del slider
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    //Para que cuando se da click a los botones de abajo del slider, tambien cambie de item
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  /*
  ? Para que el slider se adapte de manera Resposiva
  */
  breakpoints: {
    //De 0px hasta 767px de ancho
    0: {
        slidesPerView: 1
    },
    //De 768px hasta 1023px de ancho
    768: {
        slidesPerView: 2
    },
    //De 1024px de ancho a más
    1024: {
        slidesPerView: 3
    },
  }

});