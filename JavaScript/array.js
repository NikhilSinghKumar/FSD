const nu=[1,2,3];
console.log(typeof(nu));  // array is an object
console.log(nu);

let newnu=nu.toString(); //  object (array) changes to string
console.log(newnu);

let joinnu=nu.join("-");  // joins using a separator as string
console.log(typeof(joinnu));
console.log(joinnu);

pop_nu=nu.pop();          // removes last element
console.log(pop_nu);      // returns popped value (removed element)
console.log(nu);

// similarly push() :: adds element in the end
// shift () :: removes first element

// ----delete element------
const list=[1,2,3,4,5,6,7]
del_list= delete list[3];
delete list[5];
console.log(list);

// ---------concatenate arrays----------
let a1=[1,2,3,4];
let a2=[4,5,6,7];
let a3=[7,8,9];
a1.concat(a2);
console.log(a1.concat(a2));
console.log(a1.concat(a3,a2));
console.log(a1.concat(a2,a3));

// sorting in array alphabetically
let unsorted=[2,5,4,9,8,7];
let unsorted_alpha=["a","c","e","d","j","i"]
console.log(unsorted.sort());
console.log(unsorted_alpha.sort());

// splice:: add new items to an array
let numbers=[1,2,3,4,5];
console.log(numbers.splice(2,1,23,24)); // position, removed element, added elements
console.log(numbers);

// slice
const numb=[23,34,35,37,39,20];
console.log(numb.slice(2)); // sliced and removed till 0,1 itemes

const numb1=[24,25,26,27,28];
console.log(numb1.slice(1,3)); // sliced and removed till 0 & from 3

// reverse the array
const numberss=[1,2,3,4,5,6,7,8,9,0];
console.log(numberss.reverse());

//-------- forEach() loop for each element in array--------
const numbersss = [1, 2, 3, 4, 5];
// traditonal for loop
for (i = 0; i < numbers.length; i++) {
  console.log(numbersss[i]);
}

numbersss.forEach(function(i) {
    console.log(i);
});
//
numbersss.forEach(number => console.log(number)); 

numbersss.forEach((number, index) => {
    console.log('Index: ' + index + ' Value: ' + number);
});

numbersss.forEach(function (number12, index11, ar){
    console.log(ar);
});
