let lowRes = false;
const resolution = 1150;

document.addEventListener("DOMContentLoaded", function() {

    firstCheckWidth();
    checkWidth();
    window.addEventListener("resize",checkWidth );

});

function firstCheckWidth() {
    if (window.innerWidth >= resolution)
        lowRes = true;
    else
        lowRes = false;
}
function checkWidth() {
    if (window.innerWidth < resolution) {
        if(!lowRes) {
            lowRes = true;
            makeFooterCollapsible();
        }
    }
    else {
        if(lowRes) {
            lowRes = false;
            expandFooter();
        }
    }
}
function makeFooterCollapsible() {
    const footer = document.getElementById("footer-section");
    if(footer !== null) {
        const sectionLinks = footer.querySelectorAll(".section-link");
        const sectionLists = footer.querySelectorAll(".section-list");
        if(sectionLinks !== null && sectionLists !== null && sectionLinks.length === sectionLists.length) {
            for (let i = 0; i < sectionLinks.length; i++) {
                //uso i collapse di bootstrap
                sectionLinks[i].setAttribute("data-bs-toggle", "collapse");
                sectionLinks[i].setAttribute("href", "#collapse" + i);
                sectionLinks[i].setAttribute("role", "button");
                sectionLinks[i].setAttribute("data-bs-target", "#collapse" + i);
                sectionLinks[i].setAttribute("aria-expanded", "false");
                sectionLinks[i].setAttribute("aria-controls", "collapse" + i);

                sectionLists[i].setAttribute("id", "collapse" + i);
                sectionLists[i].classList.add("collapse");
            }
        }
    }
}

function expandFooter() {
    const footer = document.getElementById("footer-section");
    if(footer !== null) {
        const sectionLinks = footer.querySelectorAll(".section-link");
        const sectionLists = footer.querySelectorAll(".section-list");
        if(sectionLinks !== null && sectionLists !== null && sectionLinks.length === sectionLists.length) {
            for (let i = 0; i < sectionLinks.length; i++) {
                //uso i collapse di bootstrap
                if (sectionLinks[i].hasAttribute("data-bs-toggle"))
                    sectionLinks[i].removeAttribute("data-bs-toggle");
                if (sectionLinks[i].hasAttribute("href"))
                    sectionLinks[i].removeAttribute("href");
                if (sectionLinks[i].hasAttribute("role"))
                    sectionLinks[i].removeAttribute("role");
                if (sectionLinks[i].hasAttribute("data-bs-target"))
                    sectionLinks[i].removeAttribute("data-bs-target");
                if (sectionLinks[i].hasAttribute("aria-expanded"))
                    sectionLinks[i].removeAttribute("aria-expanded");
                if (sectionLinks[i].hasAttribute("aria-controls"))
                    sectionLinks[i].removeAttribute("aria-controls");

                if (sectionLists[i].hasAttribute("id"))
                    sectionLists[i].removeAttribute("id");
                if (sectionLists[i].classList.contains("collapse"))
                    sectionLists[i].classList.remove("collapse");
            }
        }
    }
}