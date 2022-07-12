console.log("time for logic");
let displayValue = "hej";

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		clicked(this);
	});
});

function clicked(e) {
	console.log(e.innerText);
}

function add(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
	if (secondNumber == 0) {
		return "Dont divide by 0!";
	} else {
		return firstNumber / secondNumber;
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
