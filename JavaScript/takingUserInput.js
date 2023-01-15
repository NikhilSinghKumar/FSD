// take user input in VS Code:
// Step1: npm init
// Step2: npm install prompt-sync
// this installs jason packages & node_modules
// use prompt=require("prompt-sync")()   to take input
//  taking input as string

prompt = require("prompt-sync")(); // this initiate prompt in VS Code
var input= prompt("Enter your name: ");
console.log("Your name is ", input);

var a= prompt("Enter number a: ")
var b= prompt("Enter number b: ")
console.log(a+b); // this is simple string concatenation

// taking input as number
var x=parseInt(prompt("Enter number x: "))
var y=parseInt(prompt("Enter number y: "))
console.log("sum: ", x+y); // this will add numbers x and y