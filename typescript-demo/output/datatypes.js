"use strict";
// DATATYPES
// String
let lname = "John";
let upper_lname = lname.toUpperCase();
console.log(`Last Name: ${lname}, Upper Last Name: ${upper_lname}`);
// Number
let age = 25;
// age = "25"; // Error: Type 'string' is not assignable to type 'number'
let weight = 75.5;
console.log(`Age: ${age}, Weight: ${weight}`);
// Boolean
let isMarried = false;
console.log(`Is Married: ${isMarried}`);
// Array
let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let result = numbers.filter((num) => num > 2);
let sum = numbers.reduce((acc, num) => acc + num);
console.log(`Fruits: ${fruits}, Numbers: ${numbers}, Result: ${result}, Sum: ${sum}`);
;
let c = 1 /* Color.Green */;
console.log(`Color: ${c}`);
// Tuple: can't access an inedx greater than 1
let nums = [10, 20];
// let num: Number = nums[2]; // Error: Tuple type '[Number, Number]' of length '2' has no element at index '2' 
function swapNumbers(nums) {
    return [nums[1], nums[0]];
}
let swappedNums = swapNumbers(nums);
console.log(`Numbers: ${nums}; Swapped Numbers: ${swappedNums}`);
// Any
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
