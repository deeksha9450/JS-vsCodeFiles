/*const score=33;
console.log(score);
const balance= new Number(108);//like string we can create new number also by using this method
console.log(balance);
      //1. Prototype of number
[[Prototype]]: Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()

// 1. we will convert number to string
console.log(balance.toString()); // its converted so now we can use string methods also like
console.log(typeof(balance));                       //object
console.log(balance.toString().length);             //3
//2. toFixed method- it will fix the number of digit after decimal which we pass in method 
console.log(balance.toFixed(2));                    //108.00
//3. toExponential() Method
console.log(balance.toExponential(2))               //1.08e+2
//4.toLocaleString() method - it turns the long value in readable format  of lacs hundreds
const largeVal=123456789;
const hundreds=100000000;
console.log(largeVal.toLocaleString());
console.log(hundreds.toLocaleString('en-In'));
//5.to.Precision() /method
const num= 123.63;
console.log(num.toPrecision(3)) // 124              */

//******************************************************____MATHS____*******************************************
/*nsole.log(Math);      //object
console.log(Math.abs(-4));// positive value will remain same but negative value will turn to positive // 4
console.log(Math.PI);       //3.14159
console.log(Math.ceil(2.6)); // ceil means up so it will always return upper value // 3
console.log(Math.floor(2.6)); // floor is opposite of ceil means bottom so it will return lower value //2 
console.log(Math.fround(265.65));
console.log(Math.round(26.6)); // it will give round of value which will be depend on the value after decimal means <=5 then it will return upper value vice-versa
console.log(Math.max(5,6,2,0,9)); // return highest value among //9
console.log(Math.min(5,6,2,0,9));  //return lowest value among //0
console.log(Math.pow(5,2));         // return the value of 2 to the power of 5 =//25                */

// Math.random () ki values always 0 & 1 ke beech ati h
console.log(Math.random());         //0.056333908375351016 any random value followed by 0.
//if we want value shoudl be any number 
console.log(Math.random()*10);      //4.378932858117386 now, the value will be any number not only between 0 & 1 as we can see 4.37 basically it will shift digit in left by one 
console.log((Math.random()*10)+1);   // if we want value should be always greter than 0 then will do +1 //3.2164622976860295
console.log(Math.floor((Math.random()*10)+1));

