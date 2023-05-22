// A capitalize function that takes a string and returns it with the first character capitalized.

const capitalize = require('./capitalize');

test('first letter is capitalized', () => {
    expect(capitalize("mulberry")).toBe("Mulberry");
})

test('converts string in capitals', () => {
    expect(capitalize("MULBERRY")).toBe("Mulberry");
})

test('works for a sentence', () => {
    expect(capitalize("what is the meaning of life")).toBe("What is the meaning of life");
})

test('ignores punctuation', () => {
    expect(capitalize("what's the meaning of life?")).toBe("What's the meaning of life?");
})