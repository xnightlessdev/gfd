function loadTheme(theme = localStorage.getItem("theme") || "default") {
    const currentTheme = Array.from(document.documentElement.classList).find(cls => cls !== "lang");
    if (currentTheme) document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(theme);
}

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
});
