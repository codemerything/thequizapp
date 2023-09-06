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
const selectionHeader = document.getElementById("selection-header");
const selected = document.getElementById("selected");
let getName = localStorage.getItem("playerName");
const playerName = document.getElementById("playerName");

playerName.textContent = getName;

const questionsUrl = "./src/quiz-games.json";

function getQuizTitles() {
  fetch(questionsUrl)
    .then((response) => response.json())
    .then((quizzes) => {
      // Loop through each quiz ID (e.g., "quiz1", "quiz2")
      for (const quizId in quizzes) {
        if (quizzes.hasOwnProperty(quizId)) {
          const quiz = quizzes[quizId];
          const title = quiz.title;

          let titleText = document.createElement("button");
          titleText.classList.add(
            `${quiz.quizId}`,
            "selectButton",
            "selectOption"
          );

          titleText.textContent = title;
          selectionHeader.append(titleText);
        }
      }
      select();
    });
}

function select() {
  const selectButton = document.querySelectorAll(".selectButton");
  let highlightButton = null;

  selectButton.forEach((button) => {
    button.addEventListener("click", () => {
      if (highlightButton) {
        highlightButton.classList.remove("highlighted");
      }

      button.classList.add("highlighted");
      highlightButton = button;
    });
  });

  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && highlightButton) {
      localStorage.setItem("quizid", highlightButton.className[0]);
      window.location.href = "quiz.html";
    }
  });
}

getQuizTitles();
