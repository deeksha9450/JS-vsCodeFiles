const accountId= 23450
let accountName= "Joe"
var amount= 96000
bank="SBI"// when we dont specify any variable type then it will be of var type by default
let city; // undefined

amount= 1
//acountId= 10 // declared with const variable so cant change 
accountName= "Clark"
console.log(accountId);
console.log(accountName)
console.log(amount)
console.log(bank)
console.log(city)

// const is fixed, we can't change value which is initialized using const.
/* so why do we not prefer var
because of issue in block scope and functional scope
Whenever we will try to use same variable which is already initialized with different
 value, value will get manipulate. Thats why we prefer let because it is secure.
 */


