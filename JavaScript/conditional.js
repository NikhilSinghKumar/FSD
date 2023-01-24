// find whether age of a person lies b/w 10 to 20;

prompt= require("prompt-sync")();
var age=parseInt(prompt("Enter age: "))
// ternary operator- condition? exp1: exp2
// 12<age && age<18? console.log("OK"): console.log("Okay");
if (age>10 && age<20) {
    console.log("Yes you are allowed.");
}
