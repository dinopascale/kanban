"use strict";

function main() {
  const btn = document.querySelector("#toggle-mode");
  const html = document.documentElement;

  html.dataset.theme = getThemeFromStorage();

  btn.addEventListener("click", () => {
    const newTheme = switchMode(html.dataset.theme);
    html.dataset.theme = newTheme;
    saveThemeOnStorage(newTheme);
  });
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

window.addEventListener("load", main);
