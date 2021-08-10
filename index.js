
var open = document.getElementById('hamburger');
var changeIcon = false;

$("nav").addClass("menu-open");

open.addEventListener("click", function(){

    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        changeIcon = false;
        $(".title_container").removeClass("title_container_after_the_navBar_is_collapsed");
    }

    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
        $(".title_container").addClass("title_container_after_the_navBar_is_collapsed");
    }
    
});

