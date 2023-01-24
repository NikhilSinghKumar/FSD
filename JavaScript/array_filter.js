
	var obj = {
		'Students': [{
				name: "Raj",
				Age:15,
				RollNumber: 123,
				Marks:99,
				
			}, 
            {
				name: "Aman",
				Age:14,
				RollNumber: 223,
				Marks: 69,
			},
			{
				name: "Vivek",
				Age:13,
				RollNumber: 253,
				Marks: 89,
			},
			]
	};
	
	var newArray = obj.Students.filter(function (el)
	{
	return el.Age >=15 &&
			el.RollNumber <= 200 &&
			el.Marks >= 80 ;
	}
	);
	console.log(newArray);

//--------filter-----------
const ages = [32, 14, 16, 40];
const result = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(result);

//---------filter-----------
let cities = [
    {name: 'Los Angeles', population: 3792},
    {name: 'New York', population: 8175},
    {name: 'Chicago', population: 2695},
    {name: 'Houston', population: 2099},
    {name: 'Philadelphia', population: 1526}
];
let bigCities = cities.filter(function (e) {
    return e.population > 3000;
});
console.log(bigCities);