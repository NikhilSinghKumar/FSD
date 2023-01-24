console.log("harr\"".length); // this gives lenth of string including backward slash

let str= " Please give Rs.100"
let slc= str.slice(16,20); // extracting 100 out of string str
console.log(slc);


let strr= "A B C D E F";
let newStrr=strr.replace('D', 'Q');
console.log(strr.replace("D", "Q"));
console.log(newStrr);

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'tiger'));