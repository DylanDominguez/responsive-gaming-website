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