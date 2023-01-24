// -----------mean of 5 numbers---------
// let sum=0;
// for(i=1; i<=5; i++) {
//     prompt=require("prompt-sync")();
//     var num=parseInt(prompt("Enter number: "));
//     console.log(num);
//     sum+=num;
// }
// let meanAvg=sum/5;
// console.log("Avg of 5 numbers: ", meanAvg);


// ------------try again until number is correct---

// const num=10;
// prompt=require("prompt-sync")();
// var guessNum=parseInt(prompt("Guess a number: "));
// while(guessNum!=num){
//     console.log("Try Again!!")
//     var guessNum=parseInt(prompt("Enter a number: "));
// }
// if(guessNum==num){
//     console.log("Congrats")
// }

// ------Write a program to print marks of an student in an object
// ------ for in looop-------------------
const student={harry: 78, rohan: 57, aakash: 38};
let len=student.length;
for (let key in student){
    console.log(key + " : " + student[key]);
}

console.log(student.harry);

// -----------------
const population = {
  male: 4,
  female: 93,
  others: 10
};

let genders = Object.values(population);

console.log("genders", genders);

let populationArr = Object.entries(population);
console.log("populationArr", populationArr);

for (array of populationArr){
  console.log("Array", array);
};