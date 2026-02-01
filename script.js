const burgerMenu = document.querySelector(".burger");
const xMark = document.querySelector(".xmark");
const header = document.querySelector("header");

burgerMenu.addEventListener("click", () => {
    header.classList.add("menu-open");
});

xMark.addEventListener("click", () => {
    header.classList.remove("menu-open");
});