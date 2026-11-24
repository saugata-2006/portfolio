const menuBtn = document.querySelector(".menu");
const navMenu = document.querySelector("header ul");
const lines = document.querySelectorAll(".menu .m1");

let isOpen = false;

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if(!isOpen){

        lines[0].style.transform =
        "translateY(9px) rotate(45deg)";

        lines[1].style.opacity = "0";

        lines[2].style.transform =
        "translateY(-9px) rotate(-45deg)";

        isOpen = true;

    }else{

        lines[0].style.transform =
        "translateY(0) rotate(0)";

        lines[1].style.opacity = "1";

        lines[2].style.transform =
        "translateY(0) rotate(0)";

        isOpen = false;
    }

});


/* ========= SMOOTH SCROLL ========= */

function scrollToSection(id){

    const section = document.getElementById(id);

    section.scrollIntoView({
        behavior: "smooth"
    });

    navMenu.classList.remove("show");

}