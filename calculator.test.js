// A calculator object that contains functions for the basic operations: 
// add, subtract, divide, and multiply. 
// Each of these functions should take two numbers and return the correct calculation.

const calculator = require('./calculator');

test('if input not a number', () => {
    expect(calculator.add("A", "?")).toBe("One/both argument(s) not a number");
})

test('if input not a number', () => {
    expect(calculator.subtract("A", "?")).toBe("One/both argument(s) not a number");
})

test('if input not a number', () => {
    expect(calculator.divide("A", "?")).toBe("One/both argument(s) not a number");
})

test('if input not a number', () => {
    expect(calculator.multiply("A", "?")).toBe("One/both argument(s) not a number");
})

test('adds two integers', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('subtracts two integers', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
})

test('divides two integers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
})

test('multiplies two integers', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
})

test('works with floating points', () => {
    expect(calculator.add(1.5, 1.5)).toBe(3);
})