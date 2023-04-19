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

let newsSectionLowRes = getEmptySectionsByNameArray("News",["Home Page","World","Coronavirus","U.S.","Politics","New York","Business","Tech","Science","Climate","Sports","Wildfire Tracker","Obituaries","The Upshot","International","Canada","Español","中文网","Today's Paper","Corrections","Trending"]);
let opinionSectionLowRes = getEmptySectionsByNameArray("Opinion",["Today's Opinion","Columnists","Editorials","Guest Essays","Letters","Sunday Opinion","Opinion Video"]);
let artsSectionLowRes = getEmptySectionsByNameArray("Arts",["Today's Arts","Art & Design","Books","Best Sellers Book List","Dance","Movies","Music","Pop Culture","Television","Theater","What To Watch","Video: Arts"]);
let livingSectionLowRes = getEmptySectionsByNameArray("Living",["Automotive","Games","Education","Food","Health","Jobs","Love","Magazine","Parenting","Real Estate","Style","T Magazine","Travel","Listings & More"]);
let listingsAndMoreSectionLowSes = getEmptySectionsByNameArray("Listings & More",["Reader Center","The Athletic","Wirecutter","Cooking","Headway","Live Events","The Learning Network","Tools & Services","Podcasts","Video","Graphics","TimesMachine","Times Store","Manage My Account","NYTLicensing"]);
let MainSectionLowRes = new Section("Main ", [newsSectionLowRes, opinionSectionLowRes, artsSectionLowRes, livingSectionLowRes, listingsAndMoreSectionLowSes]);

let navbarContainer = null;
let menuTimeout = null;
let submenuTimeout = null;
let maxTimeout = 400;
let navbarList = null;
let mousePassedOverMenu = false;
let highResolutionMenu = false;
let leftMenuCreated = false;
let menuListItemsOffset = [];
let verticalOffset = -15;

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
    if(window.innerWidth >= 1034) { //appena la risoluzione è maggiore di 1034
        if(!highResolutionMenu) { //se prima del resize era a bassa risoluzione
            console.log("Resolution changed from low to high");
            deleteMenu(); //cancello il vecchio menu
            removeModalClassesFromMenuButton(); //rimuovo le classi bootstrap che aggiungevano il modal
            createLeftMenu(); //creo il nuovo menu
            highResolutionMenu = true;
        }
    }
    else {
        if(highResolutionMenu) { //se sono passato da high a low resolution
            console.log("Resolution changed from high to low");
            deleteMenu();
            addModalClassesToMenuButton(); //aggiungo le classi bootstrap che aggiungono il modal
            createLowResMenu();
            highResolutionMenu = false;
        }
    }
}

function deleteMenu() {
    navbarContainer = document.getElementById("navbar-container");
    let modalMenu = document.getElementById("modal-menu");
    if(modalMenu !== null) {
        let modal = bootstrap.Modal.getInstance(modalMenu);
        if(modal !== null)
            modal.hide();
    }
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
    navbarList.classList.add("navbar-nav","list-group","list-group-flush","col-12","align-items-start","pt-3");
    navbar.appendChild(navbarList);
    let i = 0;
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

            console.log("NavbarListItem: "+ navbarListItem);
            console.log("NavbarListItem.offsetTop: "+ navbarListItem.offsetTop);
            if(!leftMenuCreated) {
                menuListItemsOffset.push(navbarListItem.offsetTop);
                subMenu.style.top = (navbarListItem.offsetTop + verticalOffset) + "px";
            }
            else {
                subMenu.style.top = (menuListItemsOffset[i] + verticalOffset) + "px";
            }
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
                    subMenu.classList.add("d-none"); //nascondo tutti i sottomenu
                });
                if (subMenu.classList.contains("d-none"))
                    subMenu.classList.remove("d-none"); //mostro solo il sottomenu corrispondente
            });
            subMenu.addEventListener("mouseleave", function () { //nascondo il sottomenu dopo un timeout dall'uscita del sottomenu
                submenuTimeout = setTimeout(function () {
                    subMenu.classList.add("d-none");
                }, maxTimeout);
            });
            subMenu.addEventListener("mouseover", function () { //quando entro nel sottomenu mi assicuro che resti visibile durante il mouseover
                if (subMenu.classList.contains("d-none"))
                    subMenu.classList.remove("d-none");
                clearTimeout(submenuTimeout);
            });
        }
        else
        {
            navbarListItem.addEventListener("mouseover", function () { //nascondo tutti i sottomenu quando passo nel menu
                let submenus = document.querySelectorAll("#left-navbar .sub-menu-list");
                submenus.forEach(function (subMenu) {
                    subMenu.classList.add("d-none"); //nascondo tutti i sottomenu
                });
                navbarContainer.classList.add("d-none");
            });
        }
        i++;
    });
    if(!leftMenuCreated)
        leftMenuCreated = true;
    navbarContainer.classList.add("d-none");
    let menuButton =  document.getElementById("desktop-section-button");
    menuButton.addEventListener("click", function () {
        if(navbarContainer.classList.contains("d-none"))
            navbarContainer.classList.remove("d-none");
    });
    navbarList.addEventListener("mouseover", function () {
        mousePassedOverMenu = true;
        if (navbarContainer.classList.contains("d-none"))
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
    /*let menu = document.createElement("div");
    menu.setAttribute("id", "menu-lowres");
    menu.classList.add("position-absolute","top-0","bg-white","container-fluid","column","h-100","p-0");//,"d-none");
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
    menuCloseButton.appendChild(menuCloseButtonIcon);*/

    let modalMenu = document.createElement("div");
    modalMenu.setAttribute("id", "modal-menu");
    modalMenu.classList.add("modal");
    modalMenu.setAttribute("tabindex", "-1");
    navbarContainer.appendChild(modalMenu);
    let modalMenuDialog = document.createElement("div");
    modalMenuDialog.classList.add("modal-dialog","modal-fullscreen");
    modalMenu.appendChild(modalMenuDialog);
    let modalMenuContent = document.createElement("div");
    modalMenuContent.classList.add("modal-content");
    modalMenuDialog.appendChild(modalMenuContent);
    //Header della Modal
    let modalMenuHeader = document.createElement("div");
    modalMenuHeader.classList.add("modal-header");
    modalMenuContent.appendChild(modalMenuHeader);
    let modalMenuLogoLink = document.createElement("a");
    modalMenuLogoLink.setAttribute("href", "#");
    modalMenuLogoLink.setAttribute("id", "modal-menu-logo-link");
    modalMenuLogoLink.classList.add("col-12","p-0","m-0","text-center");
    modalMenuHeader.appendChild(modalMenuLogoLink);
    let modalMenuLogo = document.createElement("img");
    modalMenuLogo.setAttribute("id", "modal-menu-logo");
    modalMenuLogo.setAttribute("alt", "New York Times Logo");
    modalMenuLogo.setAttribute("src", "resources/NewYorkTimes.svg");
    modalMenuLogo.classList.add("img-fluid");
    modalMenuLogoLink.appendChild(modalMenuLogo);
    let modalMenuCloseButton = document.createElement("button");
    modalMenuCloseButton.setAttribute("type", "button");
    modalMenuCloseButton.classList.add("btn-close");
    modalMenuCloseButton.style.position = "absolute";
    modalMenuCloseButton.style.top = "20px";
    modalMenuCloseButton.style.right = "20px";
    modalMenuCloseButton.setAttribute("data-bs-dismiss", "modal");
    modalMenuCloseButton.setAttribute("aria-label", "Close");
    modalMenuHeader.appendChild(modalMenuCloseButton);
    //Body della Modal
    let modalMenuBody = document.createElement("div");
    modalMenuBody.classList.add("modal-body","column","px-5");
    modalMenuContent.appendChild(modalMenuBody);
    let searchContainer = document.createElement("div");
    searchContainer.classList.add("row","bg-white","p-0","m-0","align-items-center","justify-content-center");
    modalMenuBody.appendChild(searchContainer);
    let modalMenuSearch = document.createElement("div");
    modalMenuSearch.classList.add("row","bg-white","p-0","m-0","align-items-center","justify-content-center");
    searchContainer.appendChild(modalMenuSearch);
    let modalMenuSearchInput = document.createElement("input");
    modalMenuSearchInput.setAttribute("id", "modal-menu-search-input");
    modalMenuSearchInput.setAttribute("type", "text");
    modalMenuSearchInput.setAttribute("name", "query");
    modalMenuSearchInput.setAttribute("placeholder", "SEARCH");
    modalMenuSearchInput.setAttribute("value", "");
    modalMenuSearchInput.classList.add("col-10","px-2","py-3","m-0","me-2","fluid");
    searchContainer.appendChild(modalMenuSearchInput);
    let modalMenuSearchSubmit = document.createElement("button");
    modalMenuSearchSubmit.setAttribute("id", "modal-menu-search-submit");
    modalMenuSearchSubmit.setAttribute("type", "submit");
    modalMenuSearchSubmit.setAttribute("disabled", "");
    modalMenuSearchSubmit.classList.add("col-2","px-0","py-0","m-0","text-center");
    modalMenuSearchSubmit.innerText = "GO";
    searchContainer.appendChild(modalMenuSearchSubmit);
    MainSectionLowRes.subSections.forEach((section) => {
       let sectionDiv = document.createElement("div");
         sectionDiv.classList.add("row","bg-white","p-0","m-0","align-items-center","justify-content-center");
            modalMenuBody.appendChild(sectionDiv);
            let sectionTitle = document.createElement("div");
            sectionTitle.classList.add("row","bg-white","pt-5","pb-3","px-3","m-0","align-items-center","menu-modal-section-title","text-start");
            sectionTitle.innerText = section.title;
            sectionDiv.appendChild(sectionTitle);
            let sectionSubsections = document.createElement("div");
            sectionSubsections.classList.add("row","bg-white","p-0","px-3","m-0");
            sectionDiv.appendChild(sectionSubsections);

            section.subSections.forEach((subsection) => {
                let subsectionLink = document.createElement("a");
                subsectionLink.setAttribute("href", "#");
                subsectionLink.classList.add("col-6","px-0","py-2","m-0","fluid","menu-modal-subsection");
                subsectionLink.innerText = subsection.title;
                sectionSubsections.appendChild(subsectionLink);
            });
            if (section.subSections.length % 2 !== 0) {
                let emptyDiv = document.createElement("div");
                emptyDiv.classList.add("col-6","px-0","py-3","m-0","text-center","fluid");
                sectionSubsections.appendChild(emptyDiv);
            }
    });

    //Footer della Modal
    let modalMenuFooter = document.createElement("div");
    modalMenuFooter.classList.add("modal-footer");
    modalMenuContent.appendChild(modalMenuFooter);


}

function addModalClassesToMenuButton() {
    let menuButton =  document.getElementById("desktop-section-button");
    menuButton.setAttribute("data-bs-toggle", "modal");
    menuButton.setAttribute("data-bs-target", "#modal-menu");
}

function removeModalClassesFromMenuButton() {
    let menuButton =  document.getElementById("desktop-section-button");
    if (menuButton.hasAttribute("data-bs-toggle"))
        menuButton.removeAttribute("data-bs-toggle");
    if (menuButton.hasAttribute("data-bs-target"))
        menuButton.removeAttribute("data-bs-target");
}