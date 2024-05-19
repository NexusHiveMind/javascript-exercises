const convertToCelsius = function(temp_fahrenheit) {
  let result = (temp_fahrenheit-32)*5/9;
  result = Math.round(result * 10) / 10;
  return result;
  // return (Math.round(result * 100) / 100).toFixed(2);
};

const convertToFahrenheit = function(temp_celsius) {
  let result = temp_celsius * 9/5 + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
