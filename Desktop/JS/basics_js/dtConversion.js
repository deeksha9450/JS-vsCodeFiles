// Data type Comparisons:typescript doesnt allow you to compare two different data types. i.e.
// console.log("2">1);
// console.log(1>"2");


/*
console.log(null>0);        // false
console.log(null==0);       //false
console.log(null===0);      //false
console.log(null>=0);       //true

 Logics of above comparisons - : The reason is that an equality check ==, === and 
comparisons work differently  >,<,<=,>=. Compariosn convert null to a number, treating as 0.
That's why 1 is false and 4 is true
*/

/*
console.log("2"==3); // comparison of only value (it will convert num to str then value is different so false)
console.log("2"===2); // comparion of value along with DT // false bcoz value is same but dt is different 
*/

