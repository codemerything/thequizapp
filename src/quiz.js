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
let questions = {
	question1: {
		questionNumber: "1",
		question: 'Which planet is known as the "Red Planet"?',
		answers: ["Venus", "Saturn", "Jupiter", "Mars"],
		correctAnswer: "Mars",
	},
	question2: {
		questionNumber: "2",
		question: "What is the capital of France?",
		answers: ["London", "Paris", "Madrid", "Berlin"],
		correctAnswer: "Paris",
	},
	question3: {
		questionNumber: "3",
		question: "What is the largest mammal on Earth?",
		answers: ["Elephant", "Giraffe", "Blue Whale", "Rhinoceros"],
		correctAnswer: "Blue Whale",
	},
	question4: {
		questionNumber: "4",
		question: 'Who wrote the play "Romeo and Juliet"?',
		answers: ["Mark Twain", "Jane Austen", "Charles Dickens", "William Shakespeare"],
		correctAnswer: "William Shakespeare",
	},
	question5: {
		questionNumber: "5",
		question: "Which famous scientist developed the theory of general relativity?",
		answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
		correctAnswer: "Albert Einstein",
	},
};
let totalQuestions = Object.keys(questions).length; // The total questions = the total number of questions in the questions object

// >> MISC << //
scoreText.textContent = score;
runQuestion(gameQuestionNumber);

// >> FUNCTIONS << //
//  >> Function to set the questions up dynamically!
function runQuestion(x) {
	// Run this if x is higher than the number of questions available
	// + + Until the end [age is made, go to the start screen page!
	if (x > totalQuestions) {
		window.location.href = "end-page.html";
	}

	// Set the question set
	let q = questions["question" + x];
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
