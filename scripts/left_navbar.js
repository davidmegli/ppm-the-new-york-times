
function Section(title, subSections) {
    this.title = title;
    this.subSections = [];
    for (let i = 0; i < subSections.length; i++) {
        this.subSections.push(subSections[i]);
    }
}

function getEmptySectionsByNameArray(title,subSectionsNames) {
    let sections = [];
    for (let i = 0; i < subSectionsNames.length; i++) {
        sections.push(new Section(subSectionsNames[i], []));
    }
    let section = new Section(title, sections);
    return section;
}

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
let FoodSection = getEmptySectionsByNameArray("Food",["Food & Drink","Health","Home & Garden","Travel","Weddings","Magazine","T Magazine","Real Estate","Video: Travel"]);
let TravelSection = getEmptySectionsByNameArray("Travel",[]);
let TSection = getEmptySectionsByNameArray("T Magazine",[]);
let MagazineSection = getEmptySectionsByNameArray("Magazine",[]);
let RealEstateSection = getEmptySectionsByNameArray("Real Estate",["Commercial","Residential"]);
let ObituariesSection = getEmptySectionsByNameArray("Obituaries",[]);
let VideoSection = getEmptySectionsByNameArray("Video",["Video: Arts","Video: Book Review","Video: Opinion","Video: Travel"]);
let GraphicsSection = getEmptySectionsByNameArray("Graphics",[]);
let TheUpshotSection = getEmptySectionsByNameArray("The Upshot",[]);
let MoreSection = getEmptySectionsByNameArray("More",[]);
let MainSection = new Section("Main ", [HomePageSection, WorldSection, BusinessSection, PoliticsSection, USSection, SportsSection, HealthSection, NYSection, OpinionSection, TechSection, ScienceSection, ArtsSection, BookReviewSection, StyleSection, FoodSection, TravelSection, TSection, MagazineSection, RealEstateSection, ObituariesSection, VideoSection, GraphicsSection, TheUpshotSection, MoreSection]);

document.addEventListener("DOMContentLoaded", function() {
    //generate a left navbar for each link in the nav with id main-nav, using bootstrap 5 classes to style, and add it to the section with id navbar-container

    var navbarContainer = document.getElementById("navbar-container");
    var navbar = document.createElement("nav");
    navbar.setAttribute("id", "left-navbar");
    navbar.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");
    navbarContainer.appendChild(navbar);
    var navbarList = document.createElement("ul");
    navbarList.classList.add("navbar-nav","list-group");
    navbar.appendChild(navbarList);
    MainSection.subSections.forEach(function (section) {
        let navbarListItem = document.createElement("li");
        navbarListItem.classList.add("nav-item", "list-group-item","list-group-item-action","d-block","float-left","h-25");
        let navbarLink = document.createElement("a");
        navbarLink.setAttribute("class", "nav-link");
        navbarLink.setAttribute("href", "#");
        navbarLink.innerHTML = section.title;
        navbarListItem.appendChild(navbarLink);
        navbarList.appendChild(navbarListItem);
    });

});