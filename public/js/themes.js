function loadTheme(theme = localStorage.getItem("theme") || "") {
  document.documentElement.className = theme;
}

function saveTheme(theme) {
  localStorage.setItem("theme", theme);
  loadTheme(theme);
}

document.addEventListener("DOMContentLoaded", () => {
  const themeSelect = document.getElementById("theme-select");
  const applyBtn = document.getElementById("applyThemeBtn");

  loadTheme();

  if (themeSelect) {
    themeSelect.value = localStorage.getItem("theme") || "";
  }

  if (applyBtn && themeSelect) {
    applyBtn.addEventListener("click", () => {
      const selectedTheme = themeSelect.value;
      saveTheme(selectedTheme);
    });
  }
});
