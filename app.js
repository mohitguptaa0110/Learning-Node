/*
var a = 10;
var b = 20;
console.log(a + b);
// console.log(window)
console.log(this)   // Empty object

console.log(global) // prints global object in NodeJS

console.log(globalThis)
console.log(global == globalThis)   // output is true
*/

require("./xyz");
// const { calculateSum, calculateMultiply } = require("./calculate/index");
const util = require("node:util")

const { calculateSum, calculateMultiply } = require("./calculate");

const data = require("./data.json")
console.log(data)

var name = "Hello my name is Mohit Gupta";
var a = 10;
var b = 39;

calculateSum(a, b);
calculateMultiply(a, b);
console.log(name);
