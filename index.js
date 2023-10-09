const nav = document.querySelector(".header");
const btnSub = document.querySelector(".header__icon-bar");
const navLinks = document.querySelector(".nav__list");

btnSub.addEventListener("click", () => {
    if (nav.className === "header") {
        nav.className += " responsive";
      } else {
        nav.className = "header";
      }
    
})

navLinks.addEventListener("click", () => {
    nav.className = "header";
})

