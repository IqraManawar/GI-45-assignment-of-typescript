/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.*/
//# List of countries
let countries:string[] = ["Canada", "Brazil", "Japan", "Germany", "Australia"]

//# Print the first country
console.log(countries[0])

//# Intentionally access an out-of-bounds index
//console.log(countries[5])  //# This line will cause an error


//# Correctly access a valid index
console.log(countries[2]) // # This line is correct, accessing the third element
