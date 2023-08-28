// >> THEME SELECTION CONTINUOUS << //
let theme = localStorage.getItem("site_theme") || "light";
theme === "light" ? document.documentElement.classList.remove("dark-mode") : document.documentElement.classList.add("dark-mode");
// >> VARIABLES << //
let gameQuestionNumber = parseInt(
  document.querySelector("#game").dataset.question
);
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
    question: 'Which famous scientist developed the theory of general relativity?',
    answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    correctAnswer: "Albert Einstein",
  }
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
    window.location.href = "index.html";
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
      }

      else if (answerBox.textContent != rightAnswer) {
        answerBox.style.color = "red";
      }

      // Set the new score to localStorage
      localStorage.setItem("score", score);

      // This is set incase we want to add some kind of effect or timer before the next question
      setTimeout(function () {
        answerBox.style.color = "var(--bg-colour)";
        let newQuestion = x + 1;
        document.querySelector("#game").dataset.question = newQuestion;
        runQuestion(newQuestion);
      }, 500);
    });
  });
}

// let insertPlayerName = document.querySelector("#insertPlayerName");

// // Get the player's name from localStorage
// let getPlayerName = localStorage.getItem("playerName");
// insertPlayerName.textContent = getPlayerName;
