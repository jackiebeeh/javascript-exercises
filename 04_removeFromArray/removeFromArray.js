// filter the array with function that checks if
// each element of the array is  NOT included in the args array.

const removeFromArray = function(array, ...args) {
    return array.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
