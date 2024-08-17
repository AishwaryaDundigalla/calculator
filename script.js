const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const decimalButton = document.getElementById('decimal');
const zeroButton = document.getElementById('zero');
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');

let currentNumber = '';
let previousNumber = '';
let operation = '';

// Add event listeners to buttons
clearButton.addEventListener('click', clearDisplay);
equalsButton.addEventListener('click', calculateResult);
addButton.addEventListener('click', () => {
    operation = '+';
    previousNumber = currentNumber;
    currentNumber = '';
    display.value = previousNumber + '+';
});
subtractButton.addEventListener('click', () => {
    operation = '-';
    previousNumber = currentNumber;
    currentNumber = '';
    display.value = previousNumber + '-';
});
multiplyButton.addEventListener('click', () => {
    operation = '*';
    previousNumber = currentNumber;
    currentNumber = '';
    display.value = previousNumber + '*';
});
divideButton.addEventListener('click', () => {
    operation = '/';
    previousNumber = currentNumber;
    currentNumber = '';
    display.value = previousNumber + '/';
});
decimalButton.addEventListener('click', addDecimal);
zeroButton.addEventListener('click', addDigit);
oneButton.addEventListener('click', addDigit);
twoButton.addEventListener('click', addDigit);
threeButton.addEventListener('click', addDigit);
fourButton.addEventListener('click', addDigit);
fiveButton.addEventListener('click', addDigit);
sixButton.addEventListener('click', addDigit);
sevenButton.addEventListener('click', addDigit);
eightButton.addEventListener('click', addDigit);
nineButton.addEventListener('click', addDigit);

// Functions
function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operation = '';
}

function calculateResult() {
    if (operation === '') {
        return;
    }

    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Error: Division by zero';
                return;
            }
            result = num1 / num2;
            break;
    }

    display.value = result.toString();
    currentNumber = result.toString();
    previousNumber = '';
    operation = '';
}

function addDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        display.value = currentNumber;
    }
}

function addDigit(digit) {
    currentNumber += digit.target.textContent;
    display.value = currentNumber;
}