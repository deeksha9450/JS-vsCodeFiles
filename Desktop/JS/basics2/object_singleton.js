/*let obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length); */
/* DISPLAY THE OBJECT PROPERTY  by using name 
const person={name: 'abc', age:20, city:'NY'
};
let text =person.name+ " , "  + person.age+","+ person.city;
console.log(text); 
*/

/* DISPLAY THE OBJECT PROPERTY  by using loop 
const person={name: 'abc', age:20, city:'NY' };
let text="";
for (let x in person){
   text+= person[x]+" ";
};
console.log(text);
*/
/* DISPLAY THE OBJECT PROPERTY  by using object.values()
const person={name: 'abc', age:20, city:'NY'};
const arr=Object.values(person);// create an array
console.log(arr)
let text=arr.toString(); // stringify the array
console.log(text)
*/
/*DISPLAY THE OBJECT PROPERTY  by using object.entries()
const person={name: 'abc', age:20, city:'NY'};
let text="";
for (let[pers,val] of Object.entries(person)){
    text+=pers+ ":" +val+',';
}
console.log(text)
*/
//DISPLAY THE OBJECT PROPERTY  by using JSON.stringify()
const person={name: 'abc', age:20, city:'NY'};
let text=JSON.stringify(person);
console.log(text)