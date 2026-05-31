let name="deeksha";
let age=24;
console.log(name);
console.log(age);
console.log(`My name is ${name} and I am ${age} year old`);
console.log(typeof(name));
//to check character of string by positions and positions starts with 0 
console.log(name[0]);
// another way to craete strings
const str= new String('srivalli');
// prototype access
console.log(str.__proto__); // result - {} means we got empty object 
//length of string
console.log(str.length);
//string methods like- 
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0));
console.log(str.indexOf('l'));
console.log(str.substring(1,3));
console.log(str.slice(1,3));
console.log(str.slice(-8,3));

let str1= "   hi   ";
console.log(str1.trim())
//replace() method to change something or replace
const url="https://deeksha.com/deeksha%20bajpai";
console.log(url.replace("%20", '_'));
//if we need to check in some value/keyword is present or not 
console.log(url.includes("bajpai")); // true