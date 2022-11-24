const burger = document.querySelector(".burger");
const navBar = document.querySelector(".navBar")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    navBar.classList.toggle("active")
})