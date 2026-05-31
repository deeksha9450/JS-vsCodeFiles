//OBJECT LITERALS

/*const sym= Symbol("key"); // there is a different way to use symbol as key in object
const person={
    name:'joe',
    "fullname":"Joe Shelton", // now we wont be able to access this value by using dot, see below
    age:20,
    city:'italy',
    sym:"key",      //normal way to use as key but its actually not symbol we can check by typeof
    [sym]:"key" ,        //here its symbol type
    loggedIn:false,
    loggedInDays:['monday','saturday']
}
console.log(person)
// console.log(person.name)            //we can access value by two ways first is dot and second is [] like below
console.log(person["name"])
now if we want to lock an object so that we cant change the value of that object key's
Object.freeze(person)
person.name='cloe'
console.log(person)// value will not change
// to access "fullname"
console.log(person["fullname"])
console.log(person.sym)
console.log(typeof person.sym)
console.log(person[sym])
console.log(typeof person[sym])             */
/*
const person={
    name:'joe',
    age:20,
    city:'italy'
}
console.log(person)

person.greet=function(){
    console.log("Hi! this is an object")
}
console.log(person.greet());
//here another fucntion by accessing some key 
person.greeting=function(){
    console.log(`Hi ${this.name}!! this is object `)
}
console.log(person.greeting())*/

//FUNCTION INSIDE OBJECT --> METHODS
const person={
  name:"joe",
  age:23,
  greet:function(){
    console.log("hi!, my name is "+this.name)
  }
}
person.greet();