let navbarBis = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow")
let bootstrap = document.querySelector("head > link")
navbarBis.addEventListener('dblclick', function() {
    bootstrap.disabled = !bootstrap.disabled;
});