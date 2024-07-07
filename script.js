const displayField = document.querySelector('#display-field');
const digitButton = document.getElementsByClassName('digit-buttons')

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let firstNum, secondNum, operator;

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    };
};

let displayValue = 0;



for(let i = 0; i < digitButton.length; i++) {
    function display() {
        displayValue = digitButton[i].textContent;
        displayField.textContent = displayValue;
    };
    digitButton[i].addEventListener('click', display)
};
