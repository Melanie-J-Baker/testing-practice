// analyzeArray function that takes array of numbers and returns object with following properties: 
// average, min, max, and length.

/* const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}; */

const analyzeArray = (array) => {
  if (!isValid(array)) {
    return "Not a valid array!"
  } else {
    return {
      average: getAverage(array),
      min: getMin(array),
      max: getMax(array),
      length: array.length,
    }
  }
};

const isValid = (array) => {
  if (Array.isArray(array)) {
    for (let item of array) {
      if (typeof item !== 'number') {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

const getAverage = (array) => {
  return array.reduce((a, b) => (a += b)) / array.length;
};

const getMin = (array) => {
  return Math.min(...array);
};

const getMax = (array) => {
  return Math.max(...array);
};

module.exports = analyzeArray;