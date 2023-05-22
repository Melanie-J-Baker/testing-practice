// A calculator object that contains functions for the basic operations: 
// add, subtract, divide, and multiply. 
// Each of these functions should take two numbers and return the correct calculation.

const valid = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    } else {
        return true;
    }
};

const calculator = {
    add(num1, num2) {
        if (valid(num1, num2)) {
            return num1 + num2;
        }
        return 'One/both argument(s) not a number';
    },
    subtract(num1, num2) {
        if (valid(num1, num2)) {
            return num1 - num2;
        }
        return 'One/both argument(s) not a number';
    },
    divide(num1, num2) {
        if (valid(num1, num2)) {
            return num1 / num2;
        }
        return 'One/both argument(s) not a number';
    },
    multiply(num1, num2) {
        if (valid(num1, num2)) {
            return num1 * num2;
        }
        return 'One/both argument(s) not a number';
    }
}

module.exports = calculator;