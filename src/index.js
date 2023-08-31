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
// theme === "light" ? setLightTheme() : setDarkTheme();

theme = themeSelect.value;

switch (theme) {
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

var mode = body.dataset.mode;

// >> Function to set the dark theme
function setDarkTheme() {
	document.documentElement.classList.add("dark-mode");
	modesToggle.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
	localStorage.setItem("site_theme", "dark");
	theme = "dark";
	modesToggle.dataset.mode = "light";
	mode = "light"; // Update the mode variable
}

//  >> Function to set the dark theme
function setLightTheme() {
	document.documentElement.classList.remove("dark-mode");
	modesToggle.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
	localStorage.setItem("site_theme", "light");
	theme = "light";
	modesToggle.dataset.mode = "dark";
	mode = "dark";
}

//  >> Function to set the dark theme
function setAutumnTheme() {
	let currentMode = document.documentElement.classList;
	currentMode.remove(...currentMode);

	document.documentElement.classList.remove("dark-mode");
	modesToggle.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
	localStorage.setItem("site_theme", "light");
	theme = "light";
	modesToggle.dataset.mode = "dark";
	mode = "dark";
}

// >> The Light/Dark Mode Switch!!
modesToggle.addEventListener("click", function () {
	if (mode === "light") {
		setLightTheme();
	} else if (mode === "dark") {
		setDarkTheme();
	}
});
