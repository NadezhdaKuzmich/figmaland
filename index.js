const nav = document.querySelector(".header");
const btnSub = document.querySelector(".header__icon-bar");
const navLinks = document.querySelector(".nav__list");

btnSub.addEventListener("click", () => {
  nav.classList.toggle("responsive");
})

navLinks.addEventListener("click", () => {
  nav.classList.toggle("responsive");
})