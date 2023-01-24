const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);

//------map using function---------
const number = [65, 44, 12, 4];
const newAr = number.map(myFunction)
function myFunction(num) {
  return num * 10;
}
console.log(newAr);

//----------
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  fullname=persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }
  console.log(fullname);