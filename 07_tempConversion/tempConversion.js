// num °F ≘ (num − 32) × (5/9) °C
let result = 0;

const convertToCelsius = function(num) {
  result = (num - 32) * (5/9);
  return +result.toFixed(1);
};

// num °C ≘ (num × (9/5) + 32) °F
const convertToFahrenheit = function(num) {
  result = (num * (9/5) + 32);
  return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
