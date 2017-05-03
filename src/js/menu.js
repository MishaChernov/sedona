'use strict';

var navMenu = document.querySelector('.menu');
var menuToggle = navMenu.querySelector('.menu__toggle');

navMenu.classList.remove('menu--nojs');


function menuClosed() {
  navMenu.classList.remove('menu--opened');
  navMenu.classList.add('menu--closed');
}

function menuOpened() {
  navMenu.classList.remove('menu--closed');
  navMenu.classList.add('menu--opened');
}

menuToggle.addEventListener('click', function(event) {
  if(navMenu.classList.contains('menu--opened')){
    menuClosed();
  }
  else {
    menuOpened();
  }
});
