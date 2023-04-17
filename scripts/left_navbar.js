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
let maxTimeout = 400;
let navbarList = null;
let mousePassedOverMenu = false;
let highResolutionMenu = false;

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


document.addEventListener("DOMContentLoaded", setResolution);
document.addEventListener("DOMContentLoaded", createMenu);
window.addEventListener("resize", createMenu);

function setResolution() {
    if(window.innerWidth >= 1034) {
        highResolutionMenu = false;
    }
    else {
        highResolutionMenu = true;
    }
}
function createMenu() {
    console.log("createMenu");
    console.log("window.innerWidth: " + window.innerWidth);
    console.log("highResolutionMenu: " + highResolutionMenu);
    if(window.innerWidth >= 1034) {
        if(!highResolutionMenu) {
            deleteMenu();
            createLeftMenu();
            highResolutionMenu = true;
        }
    }
    else {
        if(highResolutionMenu) {
            deleteMenu();
            createLowResMenu();
            highResolutionMenu = false;
        }
    }
}

function deleteMenu() {
    navbarContainer = document.getElementById("navbar-container");
    if(navbarContainer.childNodes.length > 0)
        navbarContainer.removeChild(navbarContainer.childNodes[0]);
}

function createLeftMenu() {
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
    });
    navbarList.addEventListener("mouseover", function () {
        mousePassedOverMenu = true;
        navbarContainer.classList.remove("d-none");
        clearTimeout(menuTimeout);
    });
    navbarList.addEventListener("mouseleave", function () {
        if(mousePassedOverMenu) {
            menuTimeout = setTimeout(resetNavbar, maxTimeout);
            mousePassedOverMenu = false;
        }
    });
}

function createLowResMenu() {
    navbarContainer = document.getElementById("navbar-container");
    //creo un menu a schermo intero, una una div in testa che contiene il logo al centro e in fondo a destra il tasto per chiudere il menu, e una div che contiene il menu vero e proprio, con in testa la barra di ricerca con id "search" e il bottone con id "search-submit" e sotto i titoli delle sezioni come h3 e le sottosezioni  come link divisi in 2 colonne
    let menu = document.createElement("div");
    menu.setAttribute("id", "menu-lowres");
    menu.classList.add("fixed-top","bg-white","container-fluid","column","h-100","p-0");//,"d-none");
    navbarContainer.appendChild(menu);
    let menuHeader = document.createElement("div");
    menuHeader.setAttribute("id", "menu-header");
    menuHeader.classList.add("row","bg-white","p-0","m-0","align-items-center","justify-content-center","border-bottom","border-1");
    menu.appendChild(menuHeader);
    let menuLogoLink = document.createElement("a");
    menuLogoLink.setAttribute("href", "#");
    menuLogoLink.setAttribute("id", "menu-logo-link1");
    menuLogoLink.classList.add("col-6","px-0","py-3","m-0","text-center");
    menuHeader.appendChild(menuLogoLink);
    let menuLogo = document.createElement("img");
    menuLogo.setAttribute("id", "menu-logo");
    menuLogo.setAttribute("alt", "New York Times Logo");
    menuLogo.setAttribute("src", "resources/NewYorkTimes.svg");
    menuLogoLink.appendChild(menuLogo);
    let menuCloseButton = document.createElement("button");
    menuCloseButton.setAttribute("id", "menu-close-button");
    menuCloseButton.classList.add("col-6","px-0","py-0","m-0","text-center");
    menuCloseButton.style.width = "16px";
    menuCloseButton.style.height = "16px";
    menuHeader.appendChild(menuCloseButton);
    let menuCloseButtonIcon = document.createElement("img");
    menuCloseButtonIcon.setAttribute("id", "menu-close-button-icon");
    menuCloseButtonIcon.setAttribute("alt", "Close Menu Icon");
    menuCloseButtonIcon.setAttribute("src", "resources/close-button.png");
    menuCloseButtonIcon.style.width = "16px";
    menuCloseButtonIcon.style.height = "16px";
    menuCloseButtonIcon.style.opacity = "0.7";
    menuCloseButtonIcon.style.position = "absolute";
    menuCloseButtonIcon.style.top = "20px";
    menuCloseButtonIcon.style.right = "20px";
    menuCloseButton.appendChild(menuCloseButtonIcon);

}