const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  const sumofNums = nums.reduce((sum, item) => {
    return sum + item;
  }, 0);

  return sumofNums;
};

const multiply = function(nums) {
  const product = nums.reduce((prod, item) => {
    return prod * item;
  }, 1);

  return product;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	const nums = [...Array(n + 1).keys()].splice(1);

  const result = nums.reduce((prod, item) => {
    return prod * item;
  }, 1);

  return result;
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
