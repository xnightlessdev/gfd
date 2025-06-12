function loadTheme(theme = localStorage.getItem("theme") || "default") {
    document.documentElement.className = "";
    document.documentElement.classList.add(theme);
}

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    window.addEventListener("storage", (event) => {
        if (event.key === "theme") {
            loadTheme(event.newValue || "default");
        }
    });
});
