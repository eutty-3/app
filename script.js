let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendOperator(operator) {
    // Prevent multiple operators in a row
    if (expression && !isOperator(expression[expression.length - 1])) {
        expression += operator;
        updateDisplay();
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        if (expression) {
            // Use Function constructor instead of eval for safer evaluation
            const result = Function('"use strict"; return (' + expression + ')')();
            expression = result.toString();
            updateDisplay();
        }
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function updateDisplay() {
    display.value = expression || '0';
}

// Initialize display
updateDisplay();
