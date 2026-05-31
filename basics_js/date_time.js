// DATES: from 1st JAN,1970 it calculates date in miliseconds as per platform
/*
let myDate = new Date(); // we are creating an object and uska ek instance create kra so date is an oject
console.log(myDate);                                //2026-02-11T12:57:55.418Z
// now we will convert date in to string to make it more readable
console.log(myDate.toString());                     //Wed Feb 11 2026 18:27:55 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())                  //Wed Feb 11 2026
console.log(myDate.toLocaleString())                //11/2/2026, 6:27:55 pm
console.log(myDate.toLocaleDateString())            //11/2/2026
console.log(typeof(myDate))                         //object            */
/*
// month starta with 0 in javascript
let createDate= new Date(2026, 0,26);
console.log(createDate.toDateString())              //Mon Jan 26 2026
*/
//___________________TIMESTAMP___________________________
let myTimeStamp=Date.now()
console.log(myTimeStamp);///milliseconds me result milega
let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);//we have put +1 because months start with 0
console.log(newDate.getDay());// day starts from monday =1

