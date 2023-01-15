let student= {
    name: "Nikhil",
    mob: 7000044658,
    marks: 480,
};
console.log(student);

// create a const object , can you cahnge it hold a number later? No: typeError

const mark= {
    name: "Nikhil",
}
mark.mob=7000000567; // adding new key to object mark
// mark=30; // typeError:assignment to constant variable
console.log(mark); 
console.log(mark.name);
console.log(name); // ReferenceError: insult not defined