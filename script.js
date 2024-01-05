// TO-DO :
// Si operation deja faite => reset
// ajouter dans reset ~isOperateDone ~reussir a faire une initialisation
// Ranger tout avec des comments crtl /

// Vars

let firstNumber = '';
let secondNumber = '';
let operator = '';
const display = document.querySelector('#display');

// Functions

function reset() {
    firstNumber = ''
    secondNumber = '';
    operator = '';
    display.textContent = '0';
}

function add(firstNumber, secondNumber) {
	let result = parseInt(firstNumber) + parseInt(secondNumber);
    // reset();
    return display.textContent = result;
};

function subtract(firstNumber, secondNumber) {
	let result = parseInt(firstNumber) - parseInt(secondNumber);
    reset();
    console.log(result);
};

function multiply(firstNumber, secondNumber) {
  let result = parseInt(firstNumber) * parseInt(secondNumber);
  reset();
  return console.log(result);
};

function divide(firstNumber, secondNumber) {
    if (secondNumber === '0') return console.log('ERROR');
    let result = parseInt(firstNumber) / parseInt(secondNumber);
    reset();
    return console.log(result);
}

function operate(firstNumber, operator, secondNumber) {
    if (operator === '') return;
    isOperatorChosen = false;

    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    }
}

// Interactivity w/ buttons

buttons.addEventListener('click', (e) => {
    
    let chosenDigit = e.target.closest('.digit');
    if (!chosenDigit) return;

    if (isOperatorChosen === false) {
        firstNumber += chosenDigit.textContent;
        display.textContent = firstNumber;
        console.log(firstNumber);
    } else if (isOperatorChosen === true) {
        secondNumber += chosenDigit.textContent;
        display.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;
        console.log(secondNumber);
    }    
})

buttons.addEventListener('click', (e) => {
    let chosenOperator = e.target.closest('.operator');
    if (!chosenOperator) return;

    operator = chosenOperator.textContent;
    display.textContent += ' ' + operator;
    console.log(operator);

    return isOperatorChosen = true;
})

buttons.addEventListener('click', (e) => {
    let doOperate = e.target.closest('.operate');
    if (!doOperate) return;

    operate(firstNumber, operator, secondNumber);
})