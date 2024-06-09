// Osama elzero way (legacy way)
// const theSum = (num1, num2, num3) => {
//   return (num1 || 0) + (num2 || null) + (num3 || null);
// };
// More modern way (using default parameters)
const theSum = (num1 = 0, num2 = null, num3 = null) => {
  return num1 + num2 + num3;
};
module.exports = theSum;
