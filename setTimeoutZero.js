const crypto = require("node:crypto")
console.log("SetTimeoutZero demonstration");

var a = 5;
var b = 10;

setTimeout(() => {
    console.log("SetTimeout function after 3 seconds")
}, 3000);

//this function only will be pushed in to the callstack of v8 once its become empty so its doesn,t matter its for 0 second or more than that
crypto.pbkdf2Sync("mohit0110", "salt", 5000000, 20, "sha512");
console.log("Fist synchronous key is generated ")

setTimeout(() => {
    console.log("Call me asap")
}, 0);//Trust issues with the set timeout 

function multiply(x, y) {
    const result = x * y;
    return result
}

const c = multiply(a, b);
console.log("Multiplication answer is : " + c)