let operator = "";
let firstNumber = "";
let secondNumber = "";
let sum = 0;
let reminderOperator = "";
let key;

const buttons = document.querySelectorAll(".btn");
const change = document.querySelector(".change-btn");
const choice = document.querySelector(".current-number");
const logg = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

document.addEventListener("keydown", (e) => display(e.key));

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		key = this.innerText;

		display(key);
	});
});

clearBtn.addEventListener("click", clear);

deleteBtn.addEventListener("click", deleteChoice);

change.addEventListener("click", changeChoice);

function display(key) {
	if (isNumeric(key)) {
		choice.innerText += key;
	} else if (key == "." && !choice.innerText.includes(".")) {
		choice.innerText += key;
	} else if (key == "=") {
		if (firstNumber != "" && choice.innerText != "") {
			secondNumber = parseFloat(choice.innerText);
			operate(operator, firstNumber, secondNumber);
			choice.innerText = sum;
			logg.innerText += secondNumber + key;
			reminderOperator = "";
			operator = "";
		}
	} else if (key == "-" || key == "+" || key == "x" || key == "÷") {
		if (
			!includesMany(logg.innerText, "-", "+", "x", "÷") &&
			reminderOperator == ""
		) {
			firstNumber = parseFloat(choice.innerText);
			operator = key;
			choice.innerText = "";
			logg.innerText = firstNumber + operator;
			reminderOperator = operator;
		}
	}
}
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
function includesMany(s, ...args) {
	return !args.some((arg) => !s.includes(arg));
}

function add(firstNumber, secondNumber) {
	sum = firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
	sum = firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
	sum = firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
	if (secondNumber == 0) {
		sum = "Dont divide by 0!";
	} else {
		sum = firstNumber / secondNumber;
	}
}

function operate(operator, firstNumber, secondNumber) {
	if (operator == "+") {
		add(firstNumber, secondNumber);
	} else if (operator == "-") {
		subtract(firstNumber, secondNumber);
	} else if (operator == "x") {
		multiply(firstNumber, secondNumber);
	} else if (operator == "÷") {
		divide(firstNumber, secondNumber);
	}
}

function clear() {
	choice.innerText = "";
	logg.innerText = "";
	operator = "";
	firstNumber = "";
	secondNumber = "";
	sum = 0;
}

function deleteChoice() {
	choice.innerText = "";
}

function changeChoice() {
	let number = parseFloat(choice.innerText);

	number = ~number + 1;

	choice.innerText = number;
}
