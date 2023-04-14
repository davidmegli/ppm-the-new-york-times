let HomePageSection = getEmptySectionsByNameArray("Home Page",[]);
let WorldSection = getEmptySectionsByNameArray("World",["Africa", "Americas", "Asia", "Europe", "Middle East", "U.S."]);
let BusinessSection = getEmptySectionsByNameArray("Business",["Economy", "Markets", "Tech", "Media", "Energy", "Real Estate", "Entrepreneurs", "Personal Finance", "Your Money"]);
let PoliticsSection = getEmptySectionsByNameArray("Politics",["President Biden", "Supreme Court","Congress"]);
let USSection = getEmptySectionsByNameArray("U.S.",["Education","California Today","Race/Related","Wildfire Tracker"]);
let SportsSection = getEmptySectionsByNameArray("Sports",["Baseball","Basketball","Football","Golf","Hockey","Soccer","Tennis","Olympics","College Sports","Pro Sports"]);
let HealthSection = getEmptySectionsByNameArray("Health",["Money & Policy","Health Guide"]);
let NYSection = getEmptySectionsByNameArray("N.Y.",["Eric Adams","Kathy Hochul","Big City"]);
let OpinionSection = getEmptySectionsByNameArray("Opinion",["Today's Opinion","Op-Ed Columnists","Editorials","Op-Ed Contributors","Letters","Sunday Review","Video: Opinion"]);
let TechSection = getEmptySectionsByNameArray("Tech",["Personal Tech","Science","Space","Health","The Future of Everything"]);
let ScienceSection = getEmptySectionsByNameArray("Science",["Climate","Environment","Energy","Space","Wildlife","Nature","Arts & Design","Food & Drink","Travel","Books","Style","Home & Garden","Health","Cars","Video: Arts","Video: Travel"]);
let ArtsSection = getEmptySectionsByNameArray("Arts",["Art & Design","Books","Movies","Music","Television","Theater","Video: Arts"])
let BookReviewSection = getEmptySectionsByNameArray("Books Reviews",["Book Review","Sunday Book Review","Video: Book Review"]);
let StyleSection = getEmptySectionsByNameArray("Style",["Fashion & Style","Food & Drink","Health","Home & Garden","Travel","Weddings","Magazine","T Magazine","Real Estate","Video: Travel"]);
let FoodSection = getEmptySectionsByNameArray("Food",["NYT Cooking", "Restaurant Search", "Wine & Cocktails", "Beer"]);
let TravelSection = getEmptySectionsByNameArray("Travel",[]);
let TSection = getEmptySectionsByNameArray("T Magazine",[]);
let MagazineSection = getEmptySectionsByNameArray("Magazine",[]);
let RealEstateSection = getEmptySectionsByNameArray("Real Estate",["Commercial","Residential"]);
let ObituariesSection = getEmptySectionsByNameArray("Obituaries",[]);
let VideoSection = getEmptySectionsByNameArray("Video",["Arts","Book Review","Opinion","Travel"]);
let GraphicsSection = getEmptySectionsByNameArray("Graphics",[]);
let TheUpshotSection = getEmptySectionsByNameArray("The Upshot",[]);
let MoreSection = getEmptySectionsByNameArray("More",[]);
let MainSection = new Section("Main ", [HomePageSection, WorldSection, BusinessSection, PoliticsSection, USSection, SportsSection, HealthSection, NYSection, OpinionSection, TechSection, ScienceSection, ArtsSection, BookReviewSection, StyleSection, FoodSection, TravelSection, TSection, MagazineSection, RealEstateSection, ObituariesSection, VideoSection, GraphicsSection, TheUpshotSection, MoreSection]);
let navbarContainer = null;
let menuTimeout = null;
let submenuTimeout = null;
let maxTimeout = 2000;
let navbarList = null;

//classe che rappresenta una sezione del menu
function Section(title, subSections) {
    this.title = title;
    this.subSections = [];
    for (let i = 0; i < subSections.length; i++) {
        this.subSections.push(subSections[i]);
    }
}

//funzione che crea una sezione con un array di sotto sezioni vuote (mi resta comoda per non creare singolarmente ogni sottomenu)
function getEmptySectionsByNameArray(title,subSectionsNames) {
    let sections = [];
    for (let i = 0; i < subSectionsNames.length; i++) {
        sections.push(new Section(subSectionsNames[i], []));
    }
    let section = new Section(title, sections);
    return section;
}


function resetNavbar() {
        navbarContainer.classList.add("d-none");
}


document.addEventListener("DOMContentLoaded", function() {
    navbarContainer = document.getElementById("navbar-container");
    let navbar = document.createElement("nav");
    navbar.setAttribute("id", "left-navbar");
    navbar.setAttribute("class", "navbar navbar-light bg-light flex-column pt-0 bg-white");
    navbarContainer.appendChild(navbar);
    navbarList = document.createElement("ul");
    navbarList.classList.add("navbar-nav","list-group","list-group-flush","col-12","align-items-start");
    navbar.appendChild(navbarList);
    MainSection.subSections.forEach(function (section) {
        let navbarListItem = document.createElement("li");
        navbarListItem.classList.add("nav-item", "list-group-item","list-group-item-action","p-0");
        navbarListItem.style.paddingTop = "1px";
        if (section.title !== "Science" && section.title !== "The Upshot") {
            navbarListItem.classList.add("border-0");
            navbarListItem.style.paddingBottom = "2px";
        }
        else {
            navbarListItem.style.paddingBottom = "1px";
        }
        let navbarLink = document.createElement("a");
        navbarLink.setAttribute("class", "nav-link ps-4 py-1");
        navbarLink.setAttribute("href", "#");
        navbarLink.innerHTML = section.title;
        navbarListItem.appendChild(navbarLink);
        navbarList.appendChild(navbarListItem);
        if(section.subSections.length > 0) {
            let arrowOnTheRight = document.createElement("span"); //freccia a destra
            arrowOnTheRight.innerHTML = ">";
            arrowOnTheRight.style.fontSize = "0.8em";
            arrowOnTheRight.classList.add("float-end","me-3","opacity-25");
            navbarLink.appendChild(arrowOnTheRight);

            let subMenu = document.createElement("ul"); //creo il sottomenu
            subMenu.classList.add("list-group","list-group-flush","d-none","ps-4","py-1","d-none","sub-menu-list");
            navbarListItem.appendChild(subMenu);

            let subMenuTitle = document.createElement("li"); //creo il titolo del sottomenu
            subMenuTitle.classList.add("list-group-item","list-group-item-action","p-0","pt-2","sub-menu-title");
            subMenuTitle.style.paddingTop = "1px";
            subMenuTitle.style.paddingBottom = "1px";
            subMenuTitle.innerHTML = section.title;
            subMenuTitle.classList.add("border-0");
            subMenu.appendChild(subMenuTitle);

            section.subSections.forEach(function (subSection) {
                let subMenuListItem = document.createElement("li");
                subMenuListItem.classList.add("list-group-item","list-group-item-action","p-0");
                subMenuListItem.style.paddingTop = "1px";
                subMenuListItem.style.paddingBottom = "1px";
                subMenuListItem.classList.add("border-0");

                let subMenuLink = document.createElement("a");
                subMenuLink.setAttribute("class", "nav-link ps-0 py-1");
                subMenuLink.setAttribute("href", "#");
                subMenuLink.innerHTML = subSection.title;
                subMenuListItem.appendChild(subMenuLink);
                subMenu.appendChild(subMenuListItem);
            });
            let estimatedHeightPerElement = 27;
            let estimatedHeight = estimatedHeightPerElement * (section.subSections.length + 1 + 1 / section.subSections.length);
            subMenu.style.height = estimatedHeight + "px";
            let verticalOffset = -15;
            subMenu.style.top = (navbarListItem.offsetTop + verticalOffset) + "px";
            navbar.addEventListener("mouseleave", function () { //nascondo il sottomenu quando esco dal nav
                subMenu.classList.add("d-none");
            });
            navbarListItem.addEventListener("mouseleave", function () { //nascondo il sottomenu dopo un timeout dall'uscita del menu
                menuTimeout = setTimeout(function () {
                    subMenu.classList.add("d-none");
                }, maxTimeout);
            });
            navbarListItem.addEventListener("mouseover", function () { //mostro il sottomenu quando entro nel menu
                navbarListItem.parentElement.querySelectorAll(".sub-menu-list").forEach(function (subMenu) {
                    subMenu.classList.add("d-none");
                });
                subMenu.classList.remove("d-none");
            });
            subMenu.addEventListener("mouseleave", function () { //nascondo il sottomenu dopo un timeout dall'uscita del sottomenu
                submenuTimeout = setTimeout(function () {
                    this.classList.add("d-none");
                }, maxTimeout);
            });
            subMenu.addEventListener("mouseover", function () { //quando entro nel sottomenu mi assicuro che resti visibile durante il mouseover
                this.classList.remove("d-none");
                clearTimeout(submenuTimeout);
            });

        }
    });
    navbarContainer.classList.add("d-none");
    let menuButton =  document.getElementById("desktop-section-button");
    menuButton.addEventListener("click", function () {
        navbarContainer.classList.remove("d-none");
        menuTimeout = setTimeout(resetNavbar, maxTimeout);
    });
    navbarList.addEventListener("mouseover", function () {
        navbarContainer.classList.remove("d-none");
        clearTimeout(menuTimeout);
    });
    navbarList.addEventListener("mouseleave", function () {
        menuTimeout = setTimeout(resetNavbar, maxTimeout);
    });

});

