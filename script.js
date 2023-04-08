'use strict';

const features = document.querySelector('.features');
const company = document.querySelector('.company');
const oneFeatures = document.querySelector('.one');
const oneCompany = document.querySelector('.two');
const closeMenu = document.querySelector('.close-menu');
const iconMenu = document.querySelector('.icon-menu');
const ul = document.querySelector('ul');
const overlay = document.getElementById('overlay');
const leftNav = document.querySelector('#left-nav');

document.addEventListener('click', (e) => {
  // for Features
  if (e.target.classList.contains('features')) {
    toggleDropMenu(oneFeatures);
  } else {
    addHide(oneFeatures);
  }
  // for Company
  if (e.target.classList.contains('company')) {
    toggleDropMenu(oneCompany);
  } else {
    addHide(oneCompany);
  }
  // for menu in mobile
  if (e.target.classList.contains('icon-menu')) {
    showNavigation();
  }
  if (e.target.classList.contains('close-menu')) {
    hideNavigation();
  }
  if (e.target.classList.contains('overlay')) {
    hideNavigation();
  }
});

function hideNavigation() {
  ul.style.display = 'none';
  overlay.style.display = 'none';
  closeMenu.style.display = 'none';
  iconMenu.style.display = 'block';
  leftNav.style.display = 'none';
}
function showNavigation() {
  ul.style.display = 'block';
  overlay.style.display = 'block';
  closeMenu.style.display = 'block';
  leftNav.style.display = 'flex';
}

function toggleDropMenu(element) {
  element.classList.toggle('hide');
}
function addHide(element) {
  element.classList.add('hide');
}
