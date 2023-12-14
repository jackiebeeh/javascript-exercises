// let string = 'hello there'

// get the last character of the string
// add that character to the result string
// replace string with string minus the last character
// repeat until string is empty

const reverseString = function(string) {
    let result = "";
    while (string.length !== 0) {
        result += string.substring(string.length-1);
        string = string.substring(0, string.length-1);
    }
    return result;
};


// Do not edit below this line
module.exports = reverseString;
