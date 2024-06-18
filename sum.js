// Osama elzero way (legacy way)
// const theSum = (num1, num2, num3) => {
//   return (num1 || 0) + (num2 || null) + (num3 || null);
// };
// More modern way (using default parameters)

/**
 * @desc The function takes any number of arguments and returns the sum of them, but if there's no arguments it returns 0 and if there's only one number it will return it.
 * @param {number} numbers - The numbers to be summed.
 * @returns {number} - The sum of the numbers.
 */
const theSum = (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0);

module.exports = theSum;
