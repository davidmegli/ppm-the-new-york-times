let navContainer = null;
let nav = null;
let menuButton = null;
let menuSearch = null;
let nytimesLogo = null;

let todaysDate = null;
let todaysDateParent = null;
let subscribeButton = null;
let subscribeButtonParent = null;
const toggleClass = "is-sticky";
window.addEventListener("DOMContentLoaded", function() {
    navContainer = document.querySelector("#nav");
    nav = document.querySelector("#main-nav");
    menuButton = document.querySelector("#desktop-section-button");
    menuSearch = document.querySelector("#menu-search");
    nytimesLogo = document.querySelector("#nytimes-logo-mini")

    todaysDate = document.querySelector("#todays-date");
    todaysDateParent = todaysDate.parentNode;
    subscribeButton = document.querySelector("#subscribe-button");
    subscribeButtonParent = subscribeButton.parentNode;
    resize();
});

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 200) {
        navContainer.classList.add(toggleClass);
        nav.classList.add(toggleClass);
        menuButton.classList.add(toggleClass);
        nytimesLogo.classList.add(toggleClass);
        menuSearch.removeChild(menuButton);
        nav.insertBefore(menuButton, nav.firstChild);
        nav.insertBefore(nytimesLogo, nav.firstChild);
    } else {
        navContainer.classList.remove(toggleClass);
        nav.classList.remove(toggleClass);
        menuButton.classList.remove(toggleClass);
        nytimesLogo.classList.remove(toggleClass);
        nav.removeChild(menuButton);
        nav.removeChild(nytimesLogo);
        menuSearch.insertBefore(nytimesLogo, menuSearch.firstChild);
        menuSearch.insertBefore(menuButton, menuSearch.firstChild);
    }
});

window.addEventListener("resize", resize);

function resize() {
    if (window.innerWidth < 1034) {
        todaysDateParent.removeChild(todaysDate);
            subscribeButtonParent.removeChild(subscribeButton);
        navContainer.appendChild(todaysDate);
        navContainer.appendChild(subscribeButton);
        todaysDate.classList.add("todays-date-low-res");
        subscribeButton.classList.add("subscribe-button-low-res");
    }
    else {
        navContainer.removeChild(todaysDate);
        navContainer.removeChild(subscribeButton);
        todaysDateParent.appendChild(todaysDate);
        subscribeButtonParent.insertBefore(subscribeButton,subscribeButtonParent.firstChild);
        todaysDate.classList.remove("todays-date-low-res");
        subscribeButton.classList.remove("subscribe-button-low-res");
    }
}