// A capitalize function that takes a string and returns it with the first character capitalized.

const capitalize = require('./capitalize');

it('first letter is capitalized', () => {
    expect(capitalize("mulberry")).toBe("Mulberry");
})

it('converts string in capitals', () => {
    expect(capitalize("MULBERRY")).toBe("Mulberry");
})

it('works for a sentence', () => {
    expect(capitalize("what is the meaning of life")).toBe("What is the meaning of life");
})

it('ignores punctuation', () => {
    expect(capitalize("what's the meaning of life?")).toBe("What's the meaning of life?");
})