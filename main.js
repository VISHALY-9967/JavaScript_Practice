// It is use to print the message
console.log("Practice JS");
console.log("Web Development Begins");

// Variables in JS
// String number null undefined bollean
const fullName = "Vishal Yadav";
num = 45;
value = null;
val1 = undefined;
isfollow = true;
notfollow = false;
console.log(name);
console.log(num);
console.log(value);
console.log(val1);
console.log(notfollow);
console.log(isfollow);

// Variables Rules
var fullname = "Vimal kumar";
Fullname = "Rahul kumar";
console.log(fullname);
// Data type of variables
console.log(typeof fullname);
console.log(Fullname);

// let const var
var name = "vikas Yadav";
let fName = "Vishal";
const lName = "Yadav";

const PI = 3.14;
console.log(PI);
console.log(typeof PI);

// Bloack Space Variable
{
  let a = 5;
  console.log(a);
}
{
  let a = 10;
  console.log(a);
  console.log(typeof a);
}

// object-> Non-primitive data types
const Student = {
  fullName: "Raju",
  age: 18,
  city: "Delhi",
};

console.log(Student);
console.log(typeof(Student));

// Store the details in picture in form of object
const product ={
title:"Parker Pen",
rating:4,
offer:5,
price:280,
};

console.log(product);
console.log(typeof(product));

// Store the details in picture in form of object
const profile ={
    profileName:"Vishal yadav",
    post:195,
    isFollow:false,
    followers:12000,
    following:1500,
}
console.log(profile);
console.log(typeof(profile));


// Operators in JS
a=10;
b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// assingment operator
a += 4;
console.log(a);
a -= 4;
console.log(a);
a *= 4;
console.log(a);
a %= 4;
console.log(a);
b **= 4;
console.log(b);

// Comparison operator

console.log(a===b);
console.log(a !== b);

// Conditional comparison operator
// IF condition
let mode = "dark";
let color;
if(mode ==="dark"){
  color = "black";
};
if(mode === "light"){
  color = "white";
}
// use of for loop to print even number between 0 to 100
console.log(color);
let count =0;
for (let i = 0; i <=100 ; i++) {
  if(i % 2 == 0){
    console.log("values=", i);
    count++;
}}
console.log("count=", count);

// Any random game number

// let output= 58;
// let usernum = prompt("Guess the game number")
// while(usernum != output){
//  usernum = prompt("you entered wrong game number")
// }
// console.log("correct game number");


// Avg marks using array
let marks = [90,23,43,2,13];
let sum = 0;
for (let val of marks) {
  sum = sum + val;
}

console.log("Average marks are", sum/marks.length);

// Array method
let company = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
console.log("Company namw is", company);
console.log("Delete First company is", company.shift());
console.log("Company namw is", company);
console.log("Remove Uber and add Ola", company.splice(1,1,"Ola"));
console.log("Company name is", company);
console.log("Company name is", company.push("Amazon"));

// Functions in JS
// Parametarized function
function userName(name){
  console.log("Hello", name);
}
userName("Vishal");

// function to calculate sum of two number
function Sum(num1, num2){
  return num1 + num2;
}
console.log("Sum of 5 and 10 is", Sum(5,10));
console.log("Sum of 6 and 10 is", Sum(6,10));
console.log("Sum of 7 and 10 is", Sum(7,10));

// Multiplication Function
function Multiplication(num1, num2){
  return num1 * num2;
}
console.log("Multiplication of 5 and 10 is", Multiplication(5,10));

// Arrow Functions (Modern JS)
const multiply = (num1, num2) => num1 * num2;
console.log("Multiplication of 8 and 10 using Arrow function is", multiply(8,10));

// Function to return vowels from a string
// let vowel = ["a","e","i","o","u"];
function coutVowels(str){
  let count = 0;
for(const char of str) {
  if (char === "a" || char === "e"  || char === "i" || char === "o" || char === "u"){
    count++;
}
}
console.log(count);
};
coutVowels("Vishal");

//arr.forEach method is a callback function
let arr = [1,2,3 ,4,5,6,7,8,9,10];
arr.forEach(function(val){
  console.log(val);
});
// In arrow format
arr.forEach((val)=> {console.log(val)});

// Square of value in array using forEach
let square = [2,3,4,5,6];
square.forEach((val) =>{
  console.log(val * val);
});

// Map Callback Function
let double = [2,3,4,5,6];
let store = double.map((val) =>{
  console.log(val * val);
});

// Filter Callback Function
let arrs = [1,2,3,4,5,6];
let evenarr = arrs.filter((val) =>{
  return val % 2 === 0;
});

console.log("The even number in array are-", evenarr);

// Reduce Callback Function
let arr1 = [1,2,3,4,5,6];
let output = arr1.reduce((res,curr)=>{
  return res + curr;
});
console.log("The output is ",output);