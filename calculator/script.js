// script.js
function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearAll() {
    document.getElementById('display').value = '';
    
}

function deleteChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    let display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}
function calculatePercentage() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value) / 100;
    } catch (e) {
        display.value = 'Error';
    }
}

function simpleCalculation() {
    let display = document.getElementById('display');
    try {
        // Example of a simple calculation: square of the value
        display.value = Math.pow(eval(display.value), 2);
    } catch (e) {
        display.value = 'Error';
    }
}
