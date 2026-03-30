"use strict";

function setSystemTheme() {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', systemPreference);
}

function setupThemeButton() {
    const themeToggleButton = document.getElementById('theme-button');

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = (currentTheme === 'light') ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
    });
}

setSystemTheme();
setupThemeButton();
