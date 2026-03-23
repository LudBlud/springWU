var hamburgerBtn = document.querySelector(".hamburgerButton");
var mobileNav = document.querySelector("#mobile-nav");

hamburgerBtn.addEventListener("click", function() {
    if (mobileNav.classList.contains("open")) {
        mobileNav.classList.remove("open");
    } else {
        mobileNav.classList.add("open");
    }
});

var mobileLinks = document.querySelectorAll("#mobile-nav a");

mobileLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        mobileNav.classList.remove("open");
    });
});