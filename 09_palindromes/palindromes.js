const palindromes = function (string) {
    let firstString = removeEmptySpaces(string).toLowerCase();
    let secondString = reverseString(firstString);
    return (firstString === secondString) ? true : false;
};

function removeEmptySpaces(string) {
    return string.replaceAll(" ","").replaceAll(",","")
    .replaceAll("!","").replaceAll(".","");
}

function reverseString(string) {
    return string.split("").reverse().join("").toString();
}

// Do not edit below this line
module.exports = palindromes;
