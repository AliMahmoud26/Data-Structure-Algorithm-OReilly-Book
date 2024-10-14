// Accessor Functions in Arrays
// Searching for a value
let names = ['Ali', 'Mahmoud', 'Ali', 'Helal']
let nameIn = names.indexOf('Helal')
console.log(nameIn);

// String representation of array
let nameJoin = names.join()
let nameStr = names.toString()
console.log(nameJoin);
console.log(nameStr);

// Creating new arrays from existing arrays
// Concat Method
let extraNames = ['Ibrahim', 'Mahmoud', 'Ali', 'Helal']
let newArray = names.concat(extraNames)
console.log(newArray);

// Splice Mehtod
let spliceArrays = newArray.splice(3, 3)
console.log(spliceArrays);
