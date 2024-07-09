const displayField = document.querySelector('#display-field');
const displaySpan = document.querySelector('#display-span');
const digitButton = document.getElementsByClassName('digit-buttons');

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

let displayValue;
let spanStyle = window.getComputedStyle(displaySpan, null).getPropertyValue("font-size");
let spanFontSize = parseFloat(spanStyle);

for(let i = 0; i < digitButton.length; i++) {
    function display() {
        displayValue = digitButton[i].textContent;
        displaySpan.textContent += displayValue;
        if (displaySpan.offsetLeft < 5) {
            let j=0;
            while(j < 10) {
                digitButton[j].disabled = 'true';
                j++;
            }
            console.log(displaySpan.textContent);
        }
    };
    digitButton[i].addEventListener('click', display)
};

digitButton[0].addEventListener('click', function(){console.log(spanFontSize)});
