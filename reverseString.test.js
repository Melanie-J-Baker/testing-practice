// A reverseString function that takes a string and returns it reversed.

const reverseString = require('./reverseString');

test('reverses single word', () => {
    expect(reverseString("mulberry")).toBe("yrreblum");
})

test('reverses single capitalized word', () => {
    expect(reverseString("Mulberry")).toBe("yrrebluM");
})

test('reverses capitalised sentence with punctuation', () => {
    expect(reverseString("What is the meaning of life?")).toBe("?efil fo gninaem eht si tahW");
})