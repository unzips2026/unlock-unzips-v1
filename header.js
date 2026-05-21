const announceBar1 = document.querySelector(".announce-bar-1");
const announceBar2 = document.querySelector(".announce-bar-2");
const announceBar3 = document.querySelector(".announce-bar-3");
const headLinks = document.querySelector(".header-links");
const headMenuOpen = document.querySelector(".head-menu-open");
const headMenuClose = document.querySelector(".head-menu-close");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileInsideMenu = document.querySelector(".mobile-inside-menu");
const mobileInsideCategories = document.querySelector(".mobile-inside-categories");
const mobileHeaderLinks = document.querySelector(".mobile-header-links");
const mobileHeaderLinks2 = document.querySelector(".mobile-header-links-2");
let barflag = 1;

function changeContent(){
     if(barflag == 1){
        announceBar1.style.display = "none";
        announceBar2.style.display = "block";
        barflag = 2;
    }else if(barflag == 2){
        announceBar2.style.display = "none";
        announceBar3.style.display = "block";
        barflag = 3;
    }else if(barflag == 3){
        announceBar3.style.display = "none";
        announceBar1.style.display = "block";
        barflag = 1;
    }
}

setInterval(changeContent, 3000);

headMenuOpen.addEventListener("click",() => {
        mobileMenu.classList.add("active");
        document.body.classList.add("active");
});

headMenuClose.addEventListener("click",() => {
        mobileMenu.classList.remove("active"); 
        document.body.classList.remove("active");
});

mobileInsideMenu.addEventListener("click",() => {
        mobileInsideMenu.classList.remove("active");
        mobileInsideCategories.classList.remove("active");
        mobileHeaderLinks.classList.remove("active");
        mobileHeaderLinks2.classList.remove("active");
});

mobileInsideCategories.addEventListener("click",() => {
        mobileInsideMenu.classList.add("active");
        mobileInsideCategories.classList.add("active");
        mobileHeaderLinks.classList.add("active");
        mobileHeaderLinks2.classList.add("active");
});