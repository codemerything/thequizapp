// Variables
var playerNameInput = document.querySelector("#playerNameInput");
const startQuizBtn = document.querySelector("#startQuizBtn");
const modesToggle = document.getElementById("modesToggle");
const themeSelect = document.getElementById("themeSelect");
const body = document.querySelector("body");

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
		window.location.href = "quiz.html";
	}
});

function setPlayerName() {
	// Get the name and set it to localStorage for later use
	var setPlayerName = playerNameInput.value;
	localStorage.setItem("playerName", setPlayerName);
}

// >> To remember the theme you picked last
// >> Get the theme from local storage, default to "light" if not found

let theme = localStorage.getItem("site_theme") || "light";
// >> Set the initial theme based on the value from local storage
theme === "light" ? setLightTheme() : setDarkTheme();

var mode = body.dataset.mode;

// >> Function to set the light theme
function setLightTheme() {
	let currentMode = document.documentElement.classList;
	currentMode.remove(...currentMode);
	// currentMode.add("autumn-mode");
	localStorage.setItem("site_theme", "light");
	theme = "light";
	mode = "light";
}

//  >> Function to set the dark theme
function setDarkTheme() {
	let currentMode = document.documentElement.classList;
	currentMode.remove(...currentMode);
	currentMode.add("dark-mode");
	localStorage.setItem("site_theme", "dark");
	theme = "dark";
	mode = "dark";
}

//  >> Function to set the autumn theme
function setAutumnTheme() {
  let currentMode = document.documentElement.classList;
	currentMode.remove(...currentMode);
	currentMode.add("autumn-mode");
	localStorage.setItem("site_theme", "autumn");
	theme = "autumn";
	mode = "autumn";
}

//  >> Function to set the autumn theme
function setFrogTheme() {
  let currentMode = document.documentElement.classList;
	currentMode.remove(...currentMode);
	currentMode.add("frog-mode");
	localStorage.setItem("site_theme", "frog");
	theme = "frog";
	mode = "frog";
}

themeSelect.addEventListener("change", function () {
	const selectedValue = themeSelect.value;
	switch (selectedValue) {
		case "light":
			setLightTheme();
			break;
		case "dark":
			setDarkTheme();
			break;
		case "autumn":
			setAutumnTheme();
			break;
		default:
			break;
	}
});
