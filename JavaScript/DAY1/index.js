function btnclick() {
    alert('hello jesnaa - js alert')
}

console.log("\n------ARITHMETIC OPERATIONS AND STRING LITERALS-------")

//variable declaration
let a = 5;
let b = 7;
//const is a final value like final in java
const c = 45;

//this is the print statement
console.log("Sum of " + a + " and " + b + " is " + (a+b)); //that extra bracket otherwise it will concatenate a and b 
console.log("\nDifference is", a-b); //can use a comma instead of + 
console.log(`\nProduct of ${a} & ${b} is ${a*b}`); //string literals backtick and dollar symbol
console.log(a/b); 
console.log(a%b); 

//boolean values
let val = true;
console.log(val)

console.log("\n------ARRAYS-------")
let arr = ["Aaryan", "Arush", true, 23]
console.log(arr)

console.log("\n-----FOR LOOP------")
//for
for (let i =0;i<arr.length; i++){
    console.log(arr[i]);
}

console.log("\n-----FOR IN-----")
//for in - here accesing is through index in array 
for (const name in arr) {
    console.log(arr[name]);
    
}

console.log("\n----FOR OF-----")
//for of - here accessing is through each value in array
for(const name of arr){
    console.log(name);
}

console.log("\n----FOR EACH-----")
//for each
arr.forEach(
    function(e){
        console.log(e)
    }
);

console.log("\n----FOR EACH 2-----")
//instead of call back fn we can use the arrow function
arr.forEach ((e) => console.log(e));

//push and pop
arr.push("meow")
arr.pop();

console.log("\n-----FILTERS-----")
//filters
arr
.filter((e) => e.toString(). startsWith('A'))
.forEach((e) => console.log(e));

console.log("\n-----MAP-----")
//boolean value true is considered as 1 and string cant be multiplied so NaN 
arr.map((e) => e*2)
.sort()
.forEach((e) => console.log(e));
//filter integers and then map so only 23
arr
.filter((e) => Number.isInteger(e))
.map((e) => e*2)
.forEach((e) => console.log(e));

console.log("\n-----OBJECTS-----")
let obj = {
    name: "Aaryan",
    role: "trainer",
    experience: 9,
    lang: ["java","python","c"]
}

//json- javascript object notation
console.log(obj)
console.log(obj.experience)

console.log("-----------------------")

//this adds the javascript to the array
obj.lang.push("javascript");
console.log(obj);

console.log("-----------------------")

//spread operator (this just appends playwright in the print console not getting addede to the array)
console.log([...obj.lang, "playwright"]) //to print as array []
console.log("-----------------------")
console.log(...obj.lang, "playwright")//prints as a string with spaces
console.log("-----------------------")
console.log(obj);


console.log("\n-----FUNCTIONS-----")
function add(a,b){
    console.log (a+b);
}
add(4,5)

//to pass default value to your parameters in js
//doesnt work for firs arg
function add(a, b=10){
    console.log(a+b);
}
add(5)
//if no value provided during calling they take the default value


console.log("\n-----RECURSIVE FUNCTIONS-----")
function rec(c){
    if(c == 10){
       console.log("done!")
       return; //need a return statement for a recursive function
    }
    rec(c + 1)
}
rec(1);

