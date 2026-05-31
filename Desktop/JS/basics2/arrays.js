/*// shallow copy and deep copy concept example
//Original object
const person={
    name:'deek',
    age:23,
    address:{
        city:'Delhi',
        country:'India'
    }
}
//console.log(person);
console.log(typeof(person));
//SHALLOW COPY by using Object.assign()
const shallowCopy=Object.assign({}, person);
shallowCopy.address.city='goa';
console.log(person.address.city);
console.log(shallowCopy.address.city);

//Deep copy by using JSON.parse and JSON.stringify()
const deepCopy=JSON.parse(JSON.stringify(person));
deepCopy.address.city='GOA';
console.log(person.address.city);
console.log(deepCopy.address.city);

*****BASIC ARRAY METHODS

Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array isArray()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array slice()
Array splice()
Array toSpliced()
*/
/*
let fruits=['banana', 'apple', 'peach', 'mango'];
console.log(fruits);
console.log(fruits.length);              //4
console.log(fruits.toString());          //banana,apple,peach,mango
console.log(fruits.at(3));               //mango
console.log(fruits.join("*"));          //banana*apple*peach*mango
console.log(fruits.pop(3))              // mango -> it will delete the value on passed index->pop=delete
console.log(fruits.push('mango'));      //[ 'banana', 'apple', 'peach', 'mango' ]-- push= add in the last 
console.log(fruits.shift());            //banana-bcoz shift will delete the value from start so now array is[ 'apple', 'peach', 'mango' ]
console.log(fruits.unshift('banana'));  // unshift means add in start  
console.log(fruits)
console.log(Array.isArray(fruits));        //true
delete fruits[0];                       //[ <1 empty item>, 'apple', 'peach', 'mango' ]
console.log(fruits);                        //[ 'banana', 'apple', 'peach', 'mango' ]
console.log(fruits.concat('grapes'));       //[ 'banana', 'apple', 'peach', 'mango', 'grapes' ]
console.log(fruits); 
console.log(fruits.copyWithin(0,2));      */      //[ 'peach', 'mango', 'peach', 'mango' ] - it will copy 2nd index value at 0
let veg=[['peas','chilli'],'onion',['ginger','garlic']];
//console.log(veg);                           //[ [ 'peas', 'chilli' ], 'onion', [ 'ginger', 'garlic' ] ]
let veggies= veg.flat();
console.log(veggies);                       //[ 'peas', 'chilli', 'onion', 'ginger', 'garlic' ]
//console.log(veggies.slice(0,2));                //[ [ 'peas', 'chilli']- it will give the value only of passed range
//console.log(veggies)                           //[ 'peas', 'chilli', 'onion', 'ginger', 'garlic' ]
//console.log(veggies.splice(0,2))                //[ 'peas', 'chilli' ] - it will give the value as well as delete the values within passed range
//console.log(veggies)                            //[ 'onion', 'ginger', 'garlic' ]
console.log(veggies.toSpliced(0,2));               //[ 'onion', 'ginger', 'garlic' ]- it will give the value which starts with 2 index means from end range
console.log(veggies)     