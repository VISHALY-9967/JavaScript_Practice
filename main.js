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

let output= 58;
let usernum = prompt("Guess the game number")
while(usernum != output){
 usernum = prompt("you entered wrong game number")
}
console.log("correct game number");


// Avg marks using array
let marks = [90,23,43,2,13];
let sum = 0;
for (let val of marks) {
  sum = sum + val;
}

console.log("Average marks are", sum/marks.length);