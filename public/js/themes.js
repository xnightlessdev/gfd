function loadTheme(theme = localStorage.getItem("theme") || "default") {
    document.documentElement.className = "";
    document.documentElement.classList.add(theme);
    document.documentElement.style.display = "none";
    document.documentElement.offsetHeight;
    document.documentElement.style.display = "";
}

document.addEventListener
