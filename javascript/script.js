"use strict";

function setSystemTheme() {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', systemPreference);
}

setSystemTheme();
