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


function runGame() {

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