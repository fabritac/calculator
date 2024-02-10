document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    container.appendChild(input);

    let currentInput = '';
    let currentOperator = '';

    function addToInput(value) {
        input.value += value;
    }

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

    let one = createButton("1", () => addToInput('1'));
    let two = createButton("2", () => addToInput('2'));
    let three = createButton("3", () => addToInput('3'));
    let div = createButton("/", () => setOperator('/'));
    let four = createButton("4", () => addToInput('4'));
    let five = createButton("5", () => addToInput('5'));
    let six = createButton("6", () => addToInput('6'));
    let muq = createButton("*", () => setOperator('*'));
    let seven = createButton("7", () => addToInput('7'));
    let eight = createButton("8", () => addToInput('8'));
    let nine = createButton("9", () => addToInput('9'));
    let sub = createButton("-", () => setOperator('-'));
    let zero = createButton("0", () => addToInput('0'));
    let point = createButton(".", () => addToInput('.'));
    let equals = createButton("=", calculateResult);
    let sum = createButton("+", () => setOperator('+'));
    let clear = createButton("Clear", () => {
        input.value = "";
        currentInput = '';
        currentOperator = '';
    });

    function createButton(text, clickHandler) {
        const button = document.createElement("button");
        button.className = "button";
        button.textContent = text;
        container.appendChild(button);
        button.addEventListener("click", clickHandler);
        return button;
    }
});
