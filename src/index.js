var playerNameInput = document.querySelector("#playerNameInput");
const startQuizBtn = document.querySelector("#startQuizBtn");

startQuizBtn.addEventListener("click", function () {
  // Get the name and set it to localStorage for late use
  var setPlayerName = playerNameInput.value;
  localStorage.setItem("playerName", setPlayerName);
});


const modesToggle = document.getElementById("modesToggle");
modesToggle.addEventListener("click", function () {
  var mode = modesToggle.dataset.mode;

  if (mode === "light") {
    document.documentElement.classList.toggle("dark-mode");
    modesToggle.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
    modesToggle.dataset.mode = "dark";
  } else if (mode === "dark") {
    document.documentElement.classList.toggle("dark-mode");
    modesToggle.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
    modesToggle.dataset.mode = "light";
  }
});
