// caesarCipher func - takes string and shift factor and returns it with each character “shifted”.

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final function into a few smaller functions. 
// Don’t need to explicitly test every function you write, just the public ones. 
// So in this case you only need tests for the final caesarCipher function. 
// If works as expected can be sure that your smaller helper functions are doing what they’re supposed to.

const caesarCipher = (string, shift) => {
    let cipher = "";
    const regexp = /[a-z]/;
    for (i = 0; i < string.length; i++) {
        if (regexp.test(string.charAt(i))) {
            cipher += String.fromCharCode((string.charCodeAt(i) - 97 + shift) % 26 + 97);
        } else {
            cipher += string.charAt(i);
        }
    }
    return cipher;
}

module.exports = caesarCipher;