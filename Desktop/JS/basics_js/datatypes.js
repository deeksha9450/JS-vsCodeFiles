"use strict";// treat all JS code as newer version
//alert(3+3) // because we are using nodejs not browser


/* PRIMITIVE DATA TYPES --> 7 TYPES
number, BigInt, string, boolean, null, undefined, symbol */
let number =5       // 2 to power 53
let string= "joe"   //""
let nulls= null     //standalone value
let undefined;      // if no value given then bopth type & value will be undefined
let boolean= true   // true/false --> 1/0
let symbol;         //unique
let bigint;

console.log(number);
console.log(string);
console.log(typeof nulls);
console.log(undefined);
console.log(boolean);
console.log(symbol);
console.log(bigint);

//***********NON-PRIMITIVE DT --> Arrays, Object, Function********************
//ARRAY SYNTAX 
let array= ["first", "second", "third"];
 console.log(array);
//OBJECT SYNTAX  - we can store in object any string ,num,array, function even another object too
 const objectDemo ={
    name: 'deeks',
    roll: 234,
    sub: 'js'
 }

 //FUNCTION SYNTAX
 function functionName(){
    ///code
 }

 const num = 3;
 const loggedIn= false;
 const id = Symbol('123');
 const anotherId= Symbol('123');

 console.log(id);                //Symbol(123)
 console.log(anotherId);         //Symbol(123)
 console.log(id==anotherId);           //false
 // because symbol is unique thats why it give false result for comaprison even we pass same value in it

 const bigNumber= 123456789n; // for bigInt we need to add n after large value
console.log(typeof(bigNumber));
 
/* RETURN typeOf datatypeS in JS:
1) PRIMITIVE DATATYPES:
String=> string
Number=> number
BigInt=>bigint
Boolean=>boolean
undefined=>undefined
null=>object
symbol=>symbol

2)NON-PRIMITIVE DATA TYPES:
Arrays=>object
Object=>object
Function=>function
*/


//Memory types - Stack and heap 
// For primitive data types the memory type is used is stack memory  -it means when we create variable there will be a copy of variable too 
// Non-Primitive DT- > Heap Memory  - here we get reference of variable -original value 
