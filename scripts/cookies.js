document.addEventListener("DOMContentLoaded", function() {
    createCookiePopup();
});

function createCookiePopup () {
    let cookiePopup = document.createElement("div");
    cookiePopup.setAttribute("id", "cookie-popup");
    cookiePopup.innerHTML = "<p>This website uses cookies to ensure you get the best experience on our website.</p><button id='cookie-accept'>Accept</button>";
    cookiePopup.style.position = "fixed";
    cookiePopup.style.bottom = "0";
    cookiePopup.style.left = "0";
    cookiePopup.style.width = "100%";
    cookiePopup.style.height = "100px";
    cookiePopup.style.zIndex = "1000";
    document.body.appendChild(cookiePopup);
    document.getElementById("cookie-accept").addEventListener("click", function () {
        document.getElementById("cookie-popup").style.display = "none";
    });
}