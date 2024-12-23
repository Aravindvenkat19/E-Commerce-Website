'use strict';

// navbar Toggle


const overlay = document.querySelector("[data-overlay]")
const navOpenBtn = document.querySelector("[data-nav-open-btn]")
const navbar = document.querySelector("[data-navbar]")
const navCloseBtn = document.querySelector("[data-nav-close-btn]")

const navElems = [overlay,navOpenBtn,navCloseBtn];

for (let i =0; i < navElems.length; i++){
    navElems[i].addEventListener("click", function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

// Header & go to top btn active on page Scroll

const header = document.querySelector('[data-header]')
const goToTopBtn = document.querySelector('[data-go-top]')

window.addEventListener("scroll", function(){
    if(window.scrollY >= 80){
        header.classList.add('active')
        goToTopBtn.classList.add('active')
    }else {
        header.classList.remove('active')
        goToTopBtn.classList.remove('active')
    }
});