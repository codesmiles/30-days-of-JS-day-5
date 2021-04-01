//Exercise:LEVEL 1
//1. Declare an empty array;
const arr = new Array()
console.log(arr)

//2. Declare an array with more than 5 number of elements
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
console.log(countries)

//3. Find the length of your array
console.log(countries.length)

//4. Get the first item, the middle item and the last item of the array
lastIndex = countries.length - 1
console.log(
	countries[0], countries[4], countries[lastIndex]
	);

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
	`susan`, `kelvin`, 28, null, false, undefined, 15.59
]
console.log(mixedDataTypes.length);

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
	'facebook', 'google', 'microsoft','apple', 'IBM', 'oracle', 'amazon'
];

console.log(Array.isArray(itCompanies))
//7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(itCompanies.length);

//9. Print the first company, middle and last company
console.log(
	itCompanies[0], itCompanies[5], itCompanies[itCompanies.length-1]);

	//10. Print out each company
console.log(
	itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6]
	)

	//11. Change each company name to uppercase one by one and print them out
	console.log(
	itCompanies[0].toUpperCase(),itCompanies[1].toUpperCase(),itCompanies[2].toUpperCase(),itCompanies[3].toUpperCase(),itCompanies[4].toUpperCase(),itCompanies[5].toUpperCase(),itCompanies[6].toUpperCase()
	)

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`)

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// console.log(itCompanies.indexOf('facebook'))

let companyCheck = prompt(`Input the name of the company`);
companyCheck=companyCheck.toLowerCase();

if (itCompanies.indexOf(companyCheck) != -1){
    console.log(`${companyCheck}`)
}
else{
	console.log(`Company is not found!! `)
}

//14. Filter out companies which have more than one 'o' without the filter method
let companyFilter =itCompanies.splice(2.5);


//15. Sort the array using sort() method
let companySort = itCompanies.sort();
console.log(companySort);

//16. Reverse the array using reverse() metho
companyReverse = itCompanies.reverse()
console.log(companyReverse);

//17. Slice out the first 3 companies from the array
companySlice = itCompanies.slice(3,4);
console.log(companySlice);

//18. Slice out the last 3 companies from the array
companySlice2 = itCompanies.slice(0,4);

//19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,1));

//20. Remove the first IT company from the array
console.log(itCompanies.shift());

//21. Remove the middle IT company or companies from the array


// Remove the last IT company from the array
console.log(itCompanies.pop());

// Remove all IT companies