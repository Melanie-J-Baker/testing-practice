// analyzeArray function that takes array of numbers and returns object with following properties: 
// average, min, max, and length.

/* const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}; */

const analyzeArray = require('./analyzeArray');

test('if not a valid array', () => {
  expect(analyzeArray("array")).toBe("Not a valid array!");
})

test('if array, but not numbers', () => {
  expect(analyzeArray(["one", "two", "three"])).toBe("Not a valid array!");
})

test('works on 3 number array', () => {
  expect(analyzeArray([1, 2, 3])).toStrictEqual({ average: 2, min: 1, max: 3, length: 3 });
})

test('works on 6 number array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 });
})

