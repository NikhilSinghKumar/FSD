/*
The Array.from() method returns an array from any object with a length property.

The Array.from() method returns an array from any iterable object. 
*/

console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], x => x + x));
console.log(Array.from("ABCDEFG"));