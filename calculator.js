let firstNumber = null;
let secondNumber = null;
let operator = null;

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
    if (b === 0) {
        return "It's over 9000!!!";
    }
    return a / b;
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "x") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

const display = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".number");
const clearBtn = document.querySelector("#clear");

const addBtn = document.querySelector("#add");


display.textContent = "0";

function appendNumber(number) {
    const maxLength = 10;

    if (display.textContent === "0") {
        display.textContent = number;
    } else if (display.textContent.length < maxLength) {
        display.textContent += number;
    }
}

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
    });
});


clearBtn.addEventListener("click", () => {
    display.textContent = "0";
});