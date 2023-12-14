const fibonacci = function(num) {
    const fib = [0, 1];
    if (num < 0) {
        return "OOPS"
    }
    if (num > 1) {
        for (let n = 2; n <= num; n++){
            fib[n] = (fib[n-1] + fib[n-2]);
        }
    }
    return fib[num];
};


// Do not edit below this line
module.exports = fibonacci;
