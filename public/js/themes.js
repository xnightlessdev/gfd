
function loadTheme(theme = localStorage.getItem("theme")) {
  if (theme) {
    document.documentElement.className = theme;
  } else {
    document.documentElement.className = ""; 
  }
}

function saveTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.className = theme;
}

loadTheme();
