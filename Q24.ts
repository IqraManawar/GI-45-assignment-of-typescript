/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array.*/
// Variables
let car = 'Subaru';
let fruit = 'Apple';
let number = 10;
let fruits = ['Apple', 'Banana', 'Orange'];

// Tests for equality and inequality with strings
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru');  // True

console.log("Is car == 'Honda'? I predict False.");
console.log(car == 'Honda');  // False

// Tests using the lower case function
console.log("Is fruit.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple');  // True

console.log("Is fruit.toLowerCase() == 'banana'? I predict False.");
console.log(fruit.toLowerCase() == 'banana');  // False

// Numerical tests
console.log("Is number == 10? I predict True.");
console.log(number == 10);  // True

console.log("Is number != 10? I predict False.");
console.log(number != 10);  // False

console.log("Is number > 5? I predict True.");
console.log(number > 5);  // True

console.log("Is number < 5? I predict False.");
console.log(number < 5);  // False

// Logical operators
console.log("Is car == 'Subaru' and number == 10? I predict True.");
console.log(car == 'Subaru' && number == 10);  // True

console.log("Is car == 'Subaru' or number == 5? I predict True.");
console.log(car == 'Subaru' || number == 5);  // True

// Tests for items in array
console.log("Is 'Apple' in fruits? I predict True.");
console.log(Array.isArray(fruits) && fruits.includes('Apple'));  // True

console.log("Is 'Grape' in fruits? I predict False.");
console.log(Array.isArray(fruits) && fruits.includes('Grape'));  // False
