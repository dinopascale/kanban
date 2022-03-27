"use strict";

window.addEventListener("load", main);

window.addEventListener("load", main);
let globalListenerCloseSlidebar = null;

function main() {
  setupSwitcherMode();
  setupSlidebarTriggerBtn();
}

function setupSwitcherMode() {
  const btns = document.querySelectorAll(".mode-switcher");
  const html = document.documentElement;

  html.dataset.theme = getThemeFromStorage();

  btns.forEach((btn) =>
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const newTheme = switchMode(html.dataset.theme);
      html.dataset.theme = newTheme;
      saveThemeOnStorage(newTheme);
    })
  );
}

function setupSlidebarTriggerBtn() {
  const mobileMenu = document.querySelector("#mobile-menu-trigger");
  if (mobileMenu) {
    mobileMenu.addEventListener("click", openSlidebarMobile);
    const closeNavListBtn = document.querySelector(
      ".nav-list-container__header__close-icon"
    );
    closeNavListBtn.addEventListener("click", closeSlidebarMobile);
  }
}

function switchMode(actualTheme) {
  if (actualTheme == "light") {
    return "dark";
  }
  return "light";
}

function saveThemeOnStorage(theme) {
  localStorage.setItem("user-theme", theme);
}

function getThemeFromStorage() {
  return localStorage.getItem("user-theme");
}

// open slidebar with navigation menu on callback click
function openSlidebarMobile(ev) {
  ev.stopPropagation();
  // get and show slidebar
  const navList = document.querySelector(".nav-list-container");
  navList.classList.add("nav-list-container--opened");

  document.body.classList.add("slidebar-opened");
  window.addEventListener("click", closeSlidebarMobile);
}

function closeSlidebarMobile(ev) {
  const navList = document.querySelector(".nav-list-container");
  if (ev.target !== navList) {
    navList.classList.remove("nav-list-container--opened");
    document.body.classList.remove("slidebar-opened");
    window.removeEventListener("click", closeSlidebarMobile);
  }
}
