// var insertPlayerName = document.querySelector("#insertPlayerName");

// // Get the player's name from localStorage
// var getPlayerName = localStorage.getItem("playerName");
// insertPlayerName.textContent = getPlayerName;

// Idea 1: Generate the questions from an object and insert them dynamically into the right elements
var gameQuestionNumber = parseInt(document.querySelector("#game").dataset.question);
var questionNumberText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var score = 0;
var questionText = document.querySelector("#question");
var answerBoxes = document.querySelectorAll(".choice-text");

scoreText.textContent = score;

var allQuestions = [];
var QuestionClass = class {
    constructor(questionNumber, question, answerList, rightAnswer) {
        this.questionNumber = questionNumber;
        this.question = question;
        this.answerList = answerList;
        this.rightAnswer = rightAnswer;
        allQuestions.push(this);
    }

    displayQuestion() {
        questionNumberText.textContent = "Question " + this.questionNumber;
        questionText.textContent = this.question;

        for (let i = 0; i < answerBoxes.length; i++) {
            answerBoxes[i].textContent = this.answerList[i];
            // reset the colour for each question (i.e. turn from red/green to bg colour)
            answerBoxes[i].style.color = "var(--bg-colour)";
        }

    }
    checkQuestion(answerBox) {
        console.log(answerBox.textContent)

        if (answerBox.textContent == this.rightAnswer) {
            correct = true;
            answerBox.style.color = "green";
            answerBox.style.pointerEvents = "none"; //after clicking, all following clicks ((ON THE CORRECT ANSWERBOX)) are disabled until the timeout brings in the next question
            score += 1;
            scoreText.textContent = score;



            setTimeout(() => {
                answerBox.style.pointerEvents = "auto";
            }, 1000);
        } else if (answerBox.textContent != this.rightAnswer) {

            answerBox.style.color = "red";

        }
    }
}

//you set up questions here :3

new QuestionClass(1, 'Which planet is known as the "Red Planet"?', ["Venus", "Saturn", "Jupiter", "Mars"], "Mars");
new QuestionClass(2, "What is the capital of France?", ["London", "Paris", "Madrid", "Berlin"], "Paris");
new QuestionClass(3, "What is the largest mammal on Earth?", ["Elephant", "Giraffe", "Blue Whale", "Rhinoceros"], "Blue Whale");


var clickedBox;
var correct = false;

function getClick(i) {
    return new Promise(acc => {
        function handleClick() {
            setTimeout(() => {
                answerBoxes.forEach((answerBox) => {
                    answerBox.removeEventListener('click', handleClick);
                    if (correct = true) {
                        correct = false;
                        acc();
                    }
                });
            }, 1000);

        }
        answerBoxes.forEach((answerBox) => {
            answerBox.addEventListener('click', () => {
                clickedBox = answerBox;
                check(i);
                handleClick()
            });
        });
    });
}


function check(i) {
    console.log(i)
    allQuestions[i].checkQuestion(clickedBox);
}

async function main() {
    for (let i = 0; i < allQuestions.length; i++) {

        allQuestions[i].displayQuestion();

        await getClick(i);
        console.log("click received", i);
    }
    console.log("done");
}
main();