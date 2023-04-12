const navmenu = document.querySelector("#nav");
const toggleClass = "is-sticky";
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        navmenu.classList.add(toggleClass);
    } else {
        navmenu.classList.remove(toggleClass);
    }
});