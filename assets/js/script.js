//add event listener for waiting for the DOM finishing loading before
// start the game and then get the button elements clicks 
// function() will start only after the loading of the DOM andit is part of the
//event handler of the eventlistener

document.addEventListener("DOMContentLoaded", function() {
    let buttons = getElementsByTagName("button");
    //buttons above refer to all the buttons in the html code --> array
    //button of buttons will returns all the items stored in the array
    //and it will assign that to a variable named button
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")  === "submit") {
                alert("you clicked submit!");
                //getAttribute refer to the custom attribute assigned in css and html
                //this is referring t any button pressed by the customer
            }
            else { 
                let gameType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`);
            }
        })
    }
})
//adding a docstring for a code reference below

/** 
*the main game loop is called when the script is loaded and the
*user answer has been processed
*/

function runGame() {
// create two random numbers between 1 and 25 
//we are using math floor for rounding the number to an integer
//math random for generatin the actual number 
// multplied 25 for gettin the number in the selected range 
//plus one to avoid the generation of zero
  let num1 = Math.floor(Math.random() * 25) +1;
  let num2 = Math.floor(Math.random() * 25) +1;
}

function checkAnswer() {

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