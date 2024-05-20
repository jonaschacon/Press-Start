const menuButton = document.getElementById("menu-button");
const navOptions = document.getElementById("nav-options");

menuButton.addEventListener("click", () => {
    if(navOptions.classList.contains("open")) {
        navOptions.classList.remove("open");
    } else {
        navOptions.classList.add("open")
    }
})