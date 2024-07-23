//add event listener for waiting for the DOM finishing loading before
// start the game and then get the button elements clicks 
// function() will start only after the loading of the DOM andit is part of the
//event handler of the eventlistener

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    //buttons above refer to all the buttons in the html code --> array
    //button of buttons will returns all the items stored in the array
    //and it will assign that to a variable named button
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")  === "submit") {
                checkAnswer();
                //getAttribute refer to the custom attribute assigned in css and html
                //this is referring t any button pressed by the customer
            }
            else { 
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    /**
     * this is an event listener so the customer can press the enter on the 
     * keyboard instead of press submit
     */
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame("addition");
});
//adding a docstring for a code reference below

/** 
*the main game loop is called when the script is loaded and the
*user answer has been processed
*/

function runGame(gameType) {
    //it will empty the box with the answer provided by the user
    document.getElementById("answer-box"). value = "";
    //this let the cursor into the answer box by default
    document.getElementById("answer-box").focus();
// create two random numbers between 1 and 25 
//we are using math floor for rounding the number to an integer
//math random for generatin the actual number 
// multplied 25 for gettin the number in the selected range 
//plus one to avoid the generation of zero
  let num1 = Math.floor(Math.random() * 25) +1;
  let num2 = Math.floor(Math.random() * 25) +1;

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === "subtract") {
    displaySubtractQuestion(num1, num2);
  }
    else {
    alert(`unknown game type: ${gameType}`);
    //trow will abort the game and will print an error in the console
    throw `unknown game type: ${gameType}. Aborting!`;
  }
}

/**
 * check the answer against the first element in the returned
 * calculatedcorrectanswer array (first object)
 */
function checkAnswer() {
    //retrieve the value from the DOM, parseint is required for be sure
    //it will be a number and .value is required since it is an input
    //(innetext is not valid)
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    // calculated answer is an array so we need to extract our value
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("hey! you got it right! :D");
        incrementScore();
    } else {
        alert(`awww.. you answered ${userAnswer}, the correct answer is ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);

}
/**
 * gets the operand and the operators directly from the DOM and 
 * return the correct answer.
 */
function calculateCorrectAnswer() {
    // get the value from the dom and use parse for make sure it is an
    //integer. by default javascript returns strings from the DOm
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator'). innerText;

    if (operator === "+") {
        // return an array with the sum of the operands and the datatype
        // that will be used next
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];

    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    }
    else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}. Aborting!`;
    }

}
/**
 * gets the current score from the dom and increments by 1
 */
function incrementScore() {
    //innertext and innercontent are interchangeable in this context 
    let oldScore = parseInt(document.getElementById("score").innerText);
    //use the ++oldscore for add one to the element before the score is written in the DOM
    document.getElementById("score").innerText = ++oldScore;
}
/**
 * gets the tally of incorrect score from the dom and increments by 1
 */

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    //text shown in the span section
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {
    //if else statement ternary used for be sure that the first number is bigger than the other.
    //if operand 1 is bigger, it will be used, if not the operand 2 is used
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}