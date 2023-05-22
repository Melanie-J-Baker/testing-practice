// A capitalize function that takes a string and returns it with the first character capitalized.
const capitalize = (string) => {
    let newString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return newString;
}

module.exports = capitalize;