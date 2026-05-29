function calculate(num1, num2, operator) {
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            result = 'Cannot divide by zero';
        } else {
            result = num1 / num2;
        }
    } else {
        result = 'Invalid operator';
    }
    return result;
}

// Example usage:
console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '/')); // 2