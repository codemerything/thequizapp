// >> THEME SELECTION CONTINUOUS << //
let theme = localStorage.getItem("site_theme") || "light";
theme === "light"
  ? document.documentElement.classList.remove("dark-mode")
  : document.documentElement.classList.add("dark-mode");

// Variable
const scoreText = document.querySelector("#score");
const playerName = document.querySelector("#playerName");
const returnBtn = document.querySelector("#returnBtn");
let score = localStorage.getItem("score");
let getName = localStorage.getItem("playerName");

// Getting the player's name
playerName.textContent = getName;

// Getting the player's score
scoreText.textContent = score;

// Reset the score and player's name from the local storage
returnBtn.addEventListener("Click", function() {
    
});