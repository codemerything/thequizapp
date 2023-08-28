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
// the above is kept from before

var allQuestions = []; //setting up an empty array to hold class instance objects

var QuestionClass = class {
    constructor(questionNumber, question, answerList, rightAnswer) {
        this.questionNumber = questionNumber;
        this.question = question;
        this.answerList = answerList;
        this.rightAnswer = rightAnswer;
        allQuestions.push(this); //add the new question object to the end of array
    }

    displayQuestion() { // this method is the same as the old one
        questionNumberText.textContent = "Question " + this.questionNumber;
        questionText.textContent = this.question;

        for (let i = 0; i < answerBoxes.length; i++) {
            answerBoxes[i].textContent = this.answerList[i];
            // reset the colour for each question (i.e. turn from red/green to bg colour)
            answerBoxes[i].style.color = "var(--bg-colour)";
        }

    }
    checkQuestion(answerBox) { // i have moved the on click check into the method
        console.log(answerBox.textContent)

        if (answerBox.textContent == this.rightAnswer) {
            correct = true;
            answerBox.style.color = "green";
            answerBox.style.pointerEvents = "none"; //after clicking, all following clicks ((ON THE CORRECT ANSWERBOX)) are disabled until the timeout brings in the next question
            score += 1;
            scoreText.textContent = score;



            setTimeout(() => {
                answerBox.style.pointerEvents = "auto"; //returns clicks back to normal on that answerbox
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


var clickedBox;//holds the element clicked
var correct = false;

function getClick(i) {// get click checks if a click has happened on an answer box. it is async because in order to use a for loop to iterate through the questions, you need it to await a click
    return new Promise(acc => {
        function handleClick() {
            setTimeout(() => {
                answerBoxes.forEach((answerBox) => {
                    answerBox.removeEventListener('click', handleClick);
                    if (correct = true) {
                        correct = false;
                        acc(); //fulfill promise
                    }
                });
            }, 1000); //wait one second before continuing

        }
        answerBoxes.forEach((answerBox) => {
            answerBox.addEventListener('click', () => { //apply event listener for each answe box
                clickedBox = answerBox; //sets the clicked element globally
                check(i);// checks the question
                handleClick()// calls the other function as to fullful the promise and move on
            });
        });
    });
}


function check(i) {
    allQuestions[i].checkQuestion(clickedBox);//calling method of the current question object
}

async function main() {
    for (let i = 0; i < allQuestions.length; i++) {//for loop that starts off by displaying the question, then calls get click

        allQuestions[i].displayQuestion();

        await getClick(i);

    }

}
main();