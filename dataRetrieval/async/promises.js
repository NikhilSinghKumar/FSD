// Promise: an object representing eventual completion (or failure) of an asynchronus operation

// .then - callback - promise fulfilled; .catch - callback - promise rejected


// console.log(fetch('https://jsonplaceholder.typicode.com/users'))

// response converted to readable format:
// fetch('https://jsonplaceholder.typicode.com/users').then((response) => console.log(response))

// get data in readable format
fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((data) =>console.log(data))

//error in fetching data
fetch('https://jonplaceholder.typicode.com/users').then((response) => response.json()).then((data) =>console.log(data)).catch(error=>console.log(error))

