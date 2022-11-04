const menu = document.querySelector(".menu");
const navlist = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navlist.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    navlist.classList.remove("active");
}))

