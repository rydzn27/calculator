let num1 = null;
let num2 = null;
let operator = null;
let resetDisplay = false;

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

function roundResult(result) {
        return Math.round(result * 100000) / 100000;
    }

function showResult(result) {
    display.textContent = result;

    if (result === "It's over 9000!!!") {
        vegetaGif.classList.add("show");
    } else {
        vegetaGif.classList.remove("show");
    }
}

const display = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
const dotBtn = document.querySelector("#dot");
const backSpaceBtn = document.querySelector("#back-space");
const vegetaGif = document.querySelector("#vegeta");

display.textContent = "0";

function appendNumber(number) {
    const maxLength = 10;

    if (display.textContent === "0" || resetDisplay) {
        display.textContent = number;
        resetDisplay = false;
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
    num1 = null;
    num2 = null;
    operator = null;
    resetDisplay = false;
    vegetaGif.classList.remove("show");
});

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (operator !== null && num1 !== null && !resetDisplay) {
            num2 = Number(display.textContent);
            display.textContent = roundResult(operate(operator, num1, num2));
            num1 = Number(display.textContent = roundResult(operate(operator, num1, num2)));
            
        }

        operator = button.textContent;
        if (num1 === null) {
            num1 = Number(display.textContent);
        }
        
        resetDisplay = true;
    });
});

equalsBtn.addEventListener("click", () => {
    if (num1 === null || operator === null) {
        return;
    }

    num2 = Number(display.textContent);

    let result = operate(operator, num1, num2);
    
    if (typeof result === "string") {
        showResult("It's over 9000!!!");
    } else {
        result = roundResult(result);
        display.textContent = result;
    }

    num1 = result;
    num2 = null;
    operator = null;
    resetDisplay = true;
});

dotBtn.addEventListener("click", () => {
    if (resetDisplay) {
        display.textContent = "0.";
        resetDisplay = false;
        return;
    }

    if (display.textContent.includes(".")) {
        return;
    }

    display.textContent += ".";
});

backSpaceBtn.addEventListener("click", () => {

    if (resetDisplay) {
        display.textContent = "0";
        resetDisplay = false;
        return;
    }

    display.textContent = display.textContent.slice(0, -1);

    if (display.textContent === "") {
        display.textContent = "0";
    }
});

