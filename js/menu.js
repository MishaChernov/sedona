'use strict';

var navMenu = document.querySelector('.menu');
var burger = navMenu.querySelector('.burger');

navMenu.classList.remove('menu--nojs');

function toggleMenu() {

  function menuClosed() {
    navMenu.classList.remove('menu--opened');
    navMenu.classList.add('menu--closed');
  }
  function menuOpened() {
    navMenu.classList.remove('menu--closed');
    navMenu.classList.add('menu--opened');
  }

  if (navMenu.classList.contains('menu--opened')) {
    menuClosed();
  }
  else {
    menuOpened();
  }
}

burger.addEventListener('click', toggleMenu);
