// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final function into a few smaller functions. 
// Don’t need to explicitly test every function you write, just the public ones. 
// So in this case you only need tests for the final caesarCipher function. 
// If works as expected can be sure that your smaller helper functions are doing what they’re supposed to.

const caesarCipher = require('./caesarCipher');

test('enciphers single word', () => {
    expect(caesarCipher('hello', 2)).toBe('jgnnq');
})

test('wraps correctly from z to a', () => {
    expect(caesarCipher('pizza', 5)).toBe('uneef');
})

test('keeps the same case', () => {
    expect(caesarCipher('PiZza', 5)).toBe('UnEef');
})

test('keeps the same case 2', () => {
    expect(caesarCipher('PIZZA', 5)).toBe('UNEEF');
})

test('if not a string', () => {
    expect(caesarCipher(5, 2)).toBe('Not a string!');
})

test('punctuation', () => {
    expect(caesarCipher("Let's dance!", 3)).toBe("Ohw'v gdqfh!");
})