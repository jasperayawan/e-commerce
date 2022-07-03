const header = document.querySelector("header"); 
var loader = document.querySelector(".loader"); 

window.addEventListener("load", vanish);

function vanish(){ 
    loader.classList.add("disppear");
}

function stickyNavbar(){ 
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavbar);

