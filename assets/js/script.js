//wait for the DOM to finish loading before running the game
//get the button elements and add events listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = this.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked submit');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        });
    }

});
/**
 * the main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    // creates two random numbers between 0 - 14 the plus 1 adds to the 0-24 making it 1-25
    let num1 = math.floor(math.random() * 25) + 1;
    let num2 = math.floor(math.random() * 25) + 1;

}

function CheckAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}
function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}