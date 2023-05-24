// GET UI ELEMENTS
const point = document.getElementById("point");

const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const equals = document.getElementById("equals");

const del = document.getElementById("delete");
const reset = document.getElementById("reset");

const result = document.getElementById("result");

// The screen's output
let total = 0;
let num1 = 0;
let operand = 0;
let num2 = 0;

// When "total" changes, update textContent of "result"


// Perform a calculation
function operate(num1, operand, num2) {

}

// Math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}