document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("calc");

    let currentInput = '';
    let currentOperator = '';

    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    let zero = document.getElementById("zero");
    let btnSum = document.getElementById("btnSum");
    let btnSub = document.getElementById("btnSub");
    let btnMul = document.getElementById("btnMul");
    let btnDiv = document.getElementById("btnDiv");
    let btnEq = document.getElementById("btnEq");
    let point = document.getElementById("point");
    let clear = document.getElementById("clear");

    one.addEventListener("click", () => { input.value += "1" });
    two.addEventListener("click", () => { input.value += "2" });
    three.addEventListener("click", () => { input.value += "3" });
    four.addEventListener("click", () => { input.value += "4" });
    five.addEventListener("click", () => { input.value += "5" });
    six.addEventListener("click", () => { input.value += "6" });
    seven.addEventListener("click", () => { input.value += "7" });
    eight.addEventListener("click", () => { input.value += "8" });
    nine.addEventListener("click", () => { input.value += "9" });
    zero.addEventListener("click", () => { input.value += "0" });
    btnSum.addEventListener("click", () => { setOperator('+') });
    btnSub.addEventListener("click", () => { setOperator('-') });
    btnMul.addEventListener("click", () => { setOperator('*') });
    btnDiv.addEventListener("click", () => { setOperator('/') });
    btnEq.addEventListener("click", () => { calculateResult() } );
    point.addEventListener("click", () => { input.value += "."});
    clear.addEventListener("click", () => {
	input.value = "";
	currentInput = '';
	currentOperator = '';
    });

    function setOperator(operator) {
	currentInput = input.value;
	currentOperator = operator;
	input.value = '';
    }

    function calculateResult() {
	try {
	    const result = operate(currentOperator, parseFloat(currentInput), parseFloat(input.value));
	    input.value = result;
	} catch (error) {
	    input.value = "Error";
	}
	currentInput = '';
	currentOperator = '';
    }

    function operate(operator, num1, num2) {
	switch (operator) {
	case '+':
	    return num1 + num2;
	case '-':
	    return num1 - num2;
	case '*':
	    return num1 * num2;
	case '/':
	    if (num2 === 0) {
		throw new Error("Division by zero");
	    }
	    return num1 / num2;
	default:
	    console.log('Sorry that operation is not permitted');
	    return NaN;
	}
    }

}); 

