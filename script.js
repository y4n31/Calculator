const displayField = document.querySelector('#display-field');
const displaySpan = document.querySelector('#display-span');
const digitButton = document.getElementsByClassName('digit-buttons');
const operationButton = document.getElementsByClassName('operation-buttons');
const clearButton = document.getElementById('clear');
const plusButton = document.getElementById('add');
const minusButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalButton = document.getElementById('equal');
const backSpaceButton = document.getElementById('backspace');

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
firstNum, secondNum = 0;

function operate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case ':':
            return divide(num1, num2);
    };
};

let displayValue;
let spanStyle = window.getComputedStyle(displaySpan, null).getPropertyValue("font-size");
let spanFontSize = parseFloat(spanStyle);

for(let i = 0; i < digitButton.length; i++) {
    function display() {
        displayValue = digitButton[i].textContent;
        
        if(displaySpan.textContent[0] != 0){
            displaySpan.textContent += displayValue;
            if(isNaN(displaySpan.textContent)) {
                displaySpan.textContent = displayValue;
            };
        }  else {
            displaySpan.textContent = displayValue;
        };

        if (displaySpan.textContent.length == 7) {
            let j=0;
            while(j < 10) {
                digitButton[j].disabled = true;
                j++;
            }
        } else {
            displaySpan.style.fontSize = '95px';
        }

        for(let k = 0; k < displaySpan.textContent.length; k++) {
            !displaySpan.textContent.includes('.') ? document.getElementById('dot').disabled = false : document.getElementById('dot').disabled = true;
        };
    };
    digitButton[i].addEventListener('click', display);
};

function assignValues() {
    firstNum = displaySpan.textContent;
    operator = this.textContent;
    displaySpan.textContent = '';
    if(displaySpan.textContent.length < 7) {
        let j = 0;
            while(j < 10) {
                digitButton[j].disabled = false;
                j++;
            };
    };
};

function callOperate() {
    if(firstNum != null && secondNum != null) {
            secondNum = displaySpan.textContent;
        if(secondNum == 0 && operator == ':') {
            displaySpan.style.fontSize = '55px';
            displaySpan.textContent = 'R U DUMB?';
        } else {
            displayValue = operate(firstNum, secondNum, operator);
            if(!Number.isInteger(displayValue)) {
                displaySpan.textContent = displayValue.toFixed(2);
            } else {
                displaySpan.textContent = displayValue;
            };
        };
    } else {
        displaySpan.textContent = '';
    };

    if(isNaN(displaySpan.textContent)) {
        displaySpan.textContent = '';
    } else if(secondNum == 0 && operator == ':'){
        displaySpan.style.fontSize = '55px';
        displaySpan.textContent = 'R U DUMB?';
    };
    
    if(displaySpan.textContent.length > 7) {
        displaySpan.style.fontSize = '63px';
        let largeResult = parseFloat(displaySpan.textContent);
        displaySpan.textContent = largeResult.toExponential(5);       
    } else if(secondNum == 0 && operator == ':'){
        displaySpan.style.fontSize = '55px';
        displaySpan.textContent = 'R U DUMB?';
    };
};

clearButton.addEventListener('click', function(){
    secondNum = '';
    firstNum = '';
    displayValue = '';
    displaySpan.textContent = '';
    if(displaySpan.textContent.length < 7) {
        let j = 0;
            while(j < 10) {
                digitButton[j].disabled = false;
                j++;
            };
    };
});

function eraseOneDigit () {
    let displayStr = displaySpan.textContent.toString();
    let erased = displayStr.replace(displayStr[displayStr.length-1], '');
    displaySpan.textContent = erased;
};

document.addEventListener('keydown', e => {
    if(e.keyCode >= 48 && e.keyCode <= 57) {
        displaySpan.textContent += e.key;
        console.log(displaySpan.textContent);
    }
});

plusButton.addEventListener('click', assignValues);
minusButton.addEventListener('click', assignValues);
multiplyButton.addEventListener('click', assignValues);
divideButton.addEventListener('click', assignValues);

equalButton.addEventListener('click', callOperate);
backSpaceButton.addEventListener('click', eraseOneDigit);