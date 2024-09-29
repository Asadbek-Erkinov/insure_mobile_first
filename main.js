var elSiteHeader = document.querySelector(".site-header-js");
var elShowMenuBtn = elSiteHeader.querySelector(".js-show-menu-btn");

elShowMenuBtn.addEventListener("click", function() {
  
  // document.body.classList.toggle("no-scroll");
  elSiteHeader.classList.toggle("show-menu");
  
  
});