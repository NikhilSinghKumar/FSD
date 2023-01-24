const numbers = [1, 2, 3, 4, 5, 6];
let sum = numbers.reduce(add);
function add(a, b) {
  return a + b;
}
console.log(sum);

//-------using arrow function------

let summation = numbers.reduce(
    (a, b) => a + b
  );
console.log(summation);