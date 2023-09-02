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

// >> VARIABLES << //
let gameQuestionNumber = parseInt(document.querySelector("#game").dataset.question);
const questionNumberText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
let score = 0;
const questionText = document.querySelector("#question");
const answerBoxes = document.querySelectorAll(".choice-text");

// * Define the URL for the JSON file containing quiz questions
const questionURL = "./src/quiz-games.json";

// * Get the quizId from localStorage
const quizId = localStorage.getItem("quizid");

//* Call the getQuestions function with the retrieved 'quizid'
getQuestions("quiz" + quizId);

// * Function to fetch and display quiz questions
function getQuestions(quizId) {
// * Fetch the questions from JSON 
  fetch(questionURL)
    .then((response) => response.json())
    .then((questions) => {

		// * Access the questions for the specified quiz
      const object = questions[quizId].questions;

      let totalQuestions = Object.keys(object).length;
      runQuestion(gameQuestionNumber);

	//* Function to display a question
      function runQuestion(x) {
        if (x > totalQuestions) {
          window.location.href = "end-page.html";
        }

        let q = object["question" + x];
        let rightAnswer = q.correctAnswer;

        // Add the question number
        questionNumberText.textContent = "Question " + q.questionNumber;

        // Add the actual question
        questionText.textContent = q.question;

        // Add the possible answers by looping through the choice-boxes in the document and adding the answers in
        for (let i = 0; i < answerBoxes.length; ++i) {
          answerBoxes[i].textContent = q.answers[i];
        }

        // When user clicks an answer
        answerBoxes.forEach((answerBox) => {
          answerBox.addEventListener("click", () => {
            if (answerBox.textContent == rightAnswer) {
              score += 1;
              scoreText.textContent = score;
              answerBox.style.color = "green";
            } else if (answerBox.textContent != rightAnswer) {
              answerBox.style.color = "red";
            }

            // Set the new score to localStorage
            localStorage.setItem("score", score);

            // This is set incase we want to add some kind of effect or timer before the next question
            setTimeout(function () {
              answerBox.style.color = "var(--choice-text-color)";
              let newQuestion = x + 1;
              document.querySelector("#game").dataset.question = newQuestion;
              runQuestion(newQuestion);
            }, 500);
          });
        });
      }
    });
}

