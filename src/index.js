// Variables
var playerNameInput = document.querySelector("#playerNameInput");
const startQuizBtn = document.querySelector("#startQuizBtn");
const modesToggle = document.getElementById("modesToggle");
const themeSelect = document.getElementById("themeSelect");
const body = document.querySelector("body");
let mode = body.dataset.mode;

// ============================================================ //

startQuizBtn.addEventListener("click", function () {
	setPlayerName();
});

playerNameInput.addEventListener("keypress", function (event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key === "Enter") {
		// Cancel the default action, if needed
		event.preventDefault();
		setPlayerName();
		window.location.href = "selection-page.html";
	}
});

function setPlayerName() {
	// Get the name and set it to localStorage for later use
	var setPlayerName = playerNameInput.value;
	localStorage.setItem("playerName", setPlayerName);
}


// Define theme classes
const themes = {
  light: "light-mode",
  dark: "dark-mode",
  autumn: "autumn-mode",
  frog: "frog-mode",
  christmas: "christmas-mode"
};

// Function to set theme
function setTheme(themeName) {
  let currentMode = document.documentElement.classList;
  currentMode.remove(...currentMode);
  if (themeName !== "light") {
    currentMode.add(themes[themeName]);
  }
  localStorage.setItem("site_theme", themeName);
  theme = themeName;
  mode = themeName;
}

themeSelect.addEventListener("change", function () {
  const selectedValue = themeSelect.value;
  if (themes[selectedValue]) {
    setTheme(selectedValue);
  }
});

// >> To remember the theme you picked last
// >> Get the theme from local storage, default to "light" if not found
let theme = localStorage.getItem("site_theme") || "light";

function setThemeRepeat(theme) {
	if (themes[theme]) {
		setTheme(theme);
   themeSelect.value = theme;
	}
}

setThemeRepeat(theme);
