// >> THEME SELECTION CONTINUOUS << //
let theme = localStorage.getItem("site_theme") || "light";

let currentMode = document.documentElement.classList;
currentMode.remove(...currentMode);

switch (theme) {
	case "light":
		localStorage.setItem("site_theme", "light");
		break;
	case "dark":
		currentMode.add("dark-mode");
		localStorage.setItem("site_theme", "dark");
		break;
	case "autumn":
		currentMode.add("autumn-mode");
		localStorage.setItem("site_theme", "autumn");
		break;
	case "frog":
		currentMode.add("frog-mode");
		localStorage.setItem("site_theme", "frog");
		break;
	case "christmas":
		currentMode.add("christmas-mode");
		localStorage.setItem("site_theme", "christmas");
		break;
	default:
		break;
}

// Variables
const scoreText = document.querySelector("#score");
const playerName = document.querySelector("#playerName");
const returnBtn = document.querySelector("#returnBtn");
let score = localStorage.getItem("score");
let getName = localStorage.getItem("playerName");

// Getting the player's name and displaying it
playerName.textContent = getName;

// Getting the player's score and displaying it
scoreText.textContent = score;
