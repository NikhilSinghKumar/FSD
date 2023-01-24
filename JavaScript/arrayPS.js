
const arr=[1,2,3,4,5,6];
prompt = require("prompt-sync")(); // this initiate prompt in VS Code
var input= parseInt(prompt("enter a number: ")); // integer, only promp accept input as string
arr.push(input)
console.log(arr);

const fruits= ["kiwi", "banana"];
fruits.push("mango", "orange");
console.log(fruits);

//-------filter num divisible by 10;
 const num=[10,23,34,40];
 numDivby10=num.filter(divnum);
 function divnum(element){
    return element%10==0;
 }
 console.log(numDivby10);

 // Next example-- filter

let numb = [3, 6, 7, 12, 18, 23, 44, 62, 81];
let even_num = numb.filter(function(item){
  return item % 2 == 0; });
console.log(even_num);

// create an array , square of numbers
const number = [65, 44, 12, 4];
const newAr = number.map(squareN)
function squareN(a) {
  return a*a;
}
console.log(newAr);

//-----cal factorial of array of n natural numbers, use reduce
const num1 = [1, 2, 3, 4, 5, 6];
let factorial = num1.reduce(factorialnum1);
function factorialnum1(a, b) {
  return a*b;
}
console.log(factorial);