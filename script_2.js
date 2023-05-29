//////////Fontionnalité 2//////////
let navbarHeader = document.getElementById("navbarHeader");
let navbarButton = document.querySelector(".navbar-toggler");
             
navbarButton.addEventListener("click", function() {
    if (navbarHeader.classList.contains("collapse")) {
        navbarHeader.classList.remove("collapse");
    } else {
        navbarHeader.classList.add("collapse");    
    }
});