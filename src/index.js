// Variables
var playerNameInput = document.querySelector("#playerNameInput");
const startQuizBtn = document.querySelector("#startQuizBtn");
const modesToggle = document.getElementById("modesToggle");

// ============================================================ //

startQuizBtn.addEventListener("click", function () {
  setPlayerName();
});

playerNameInput.addEventListener("keypress", function(event) {
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


// >> The Light/Dark Mode Switch!! 
modesToggle.addEventListener("click", function () {
  var mode = modesToggle.dataset.mode;

  if (mode === "light") {
    // Toggle the dark mode colours, change the icon in the switch and update the data set in the switch element!
    document.documentElement.classList.toggle("dark-mode");
    modesToggle.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
    modesToggle.dataset.mode = "dark";
  } else if (mode === "dark") {
    document.documentElement.classList.toggle("dark-mode");
    modesToggle.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
    modesToggle.dataset.mode = "light";
  }
});
