function search() {
  var query = document.getElementById("search-input").value;
  var url = 'https://www.google.com/search?q=' + query;
  window.open(url, '_blank');
}
function setSearchBarInvisible() {
  var searchInput = document.getElementById("search-input");
  var searchSubmit = document.getElementById("search-submit");
  searchInput.style.display = "none";
  searchSubmit.style.display = "none";
}
function toggleSearchBar() {
  var searchInput = document.getElementById("search-input");
  var searchSubmit = document.getElementById("search-submit");
  if(searchInput.style.display === "none")
  {
    searchInput.style.display = "block";
    searchSubmit.style.display = "inline-block";
  }
  else {
    searchInput.style.display = "none";
    searchSubmit.style.display = "none";
  }
}
function checkWidth() {
  if (window.innerWidth < 1034) {
    setSearchBarInvisible();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("search-submit").addEventListener("click", search);
  setSearchBarInvisible();
  document.getElementById("search-button").addEventListener("click", toggleSearchBar);
  window.addEventListener("resize",checkWidth);
});