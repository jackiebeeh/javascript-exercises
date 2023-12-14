const add = function(x,y) {
  return +x+y;
};

const subtract = function(x,y) {
	return +x-y;
};

const sum = function(x) {
  return x.reduce((a, b) => (a + b), 0);
};

const multiply = function(x) {
  return x.reduce((a, b) => (a * b));
};

const power = function(x,y) {
  return x**y;
};

const factorial = function(n) {
  if (n == 0) return 1;
  else {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
