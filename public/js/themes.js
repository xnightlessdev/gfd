function loadTheme(theme = localStorage.getItem("theme") || "default") {
    document.documentElement.className = theme;
}

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
});
