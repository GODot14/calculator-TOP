// TO-DO :
// Si operation deja faite => reset
// ajouter dans reset ~isOperateDone ~reussir a faire une initialisation
// Ranger tout avec des comments crtl /

// Operation functions
let firstNumber = '';
let secondNumber = '';
let operator = '';
const display = document.querySelector('#display');

function reset(lastResult) {
    firstNumber = lastResult;
    secondNumber = '';
    operator = '';
    display.textContent = firstNumber;
}

function add(firstNumber, secondNumber) {
	let result = parseInt(firstNumber) + parseInt(secondNumber);
    reset(result);
    console.log(result);
    return display.textContent = result;
};

function subtract(firstNumber, secondNumber) {
	let result = parseInt(firstNumber) - parseInt(secondNumber);
    reset(result);
    return display.textContent = result;
};

function multiply(firstNumber, secondNumber) {
  let result = parseInt(firstNumber) * parseInt(secondNumber);
  reset(result);
  return display.textContent = result;
};

function divide(firstNumber, secondNumber) {
    if (secondNumber === '0') return errorMessage(); 
    let result = parseInt(firstNumber) / parseInt(secondNumber);
    reset(result);
    return display.textContent = result;
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

function errorMessage() {
    reset('');
    isOperatorChosen = false;
    display.textContent = 'ERROR';
    return;
}

// Interactivity w/ buttons

const buttons = document.getElementById('buttons');
let isOperatorChosen = false;

buttons.addEventListener('click', (e) => {
    
    let chosenDigit = e.target.closest('.digit');
    if (!chosenDigit) return;

    if (isOperatorChosen === false) {
        firstNumber += chosenDigit.textContent;
        display.textContent = firstNumber;
    } else if (isOperatorChosen === true) {
        secondNumber += chosenDigit.textContent;
        display.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;
    }    
})

buttons.addEventListener('click', (e) => {
    let chosenOperator = e.target.closest('.operator');
    if (!chosenOperator) return;

    if (isOperatorChosen === false) {
        operator = chosenOperator.textContent;
        display.textContent += ' ' + operator;
    } else if (isOperatorChosen === true) {
        operate(firstNumber, operator, secondNumber);
        operator = chosenOperator.textContent;
        display.textContent += ' ' + operator;
    }

    return isOperatorChosen = true;
})

buttons.addEventListener('click', (e) => {
    let doOperate = e.target.closest('.operate');
    if (!doOperate) return;

    if (secondNumber === '') return errorMessage();
    
    operate(firstNumber, operator, secondNumber);
})

buttons.addEventListener('click', (e) => {
    let clearContent = e.target.closest('.clear');
    if (!clearContent) return;

    reset('');
})