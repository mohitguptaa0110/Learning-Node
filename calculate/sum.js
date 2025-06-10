console.log("I am in Sum section adding two numbers");
function calculateSum(a, b) {
  console.log(a + b);
}

// module.exports = {
//   calculateSum: calculateSum,
// };

// another way is 
// console.log(module.exports)  --> it will returns empty object
// module.exports.calculateSum = calculateSum;

// same but we write this 
module.exports = { calculateSum };


