"use strict";function menuClosed(){navMenu.classList.remove("menu--opened"),navMenu.classList.add("menu--closed")}function menuOpened(){navMenu.classList.remove("menu--closed"),navMenu.classList.add("menu--opened")}var navMenu=document.querySelector(".menu"),menuToggle=navMenu.querySelector(".menu__toggle");navMenu.classList.remove("menu--nojs"),menuToggle.addEventListener("click",function(e){navMenu.classList.contains("menu--opened")?menuClosed():menuOpened()});