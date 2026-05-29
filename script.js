// This is a single line comment
/*
This is a multi-line comment
*/

/* // Javascript variables
let userName;
let name = "Jason";// variable assignment
console.log(name);
console.log(userName);//output is undefined
userName = "Matthew";//variable assignment
userName = "Abigael"
console.log(userName);
// const keyword is used on immutable data

const userEmail = "jaonnem048@gmail.com";
console.log(userEmail); */

//var keyword 
 var myName = "Jack";
myName = "Moses";
console.log(myName);

let person1 = "Omondi";// variable name can end with numerals but not start with 
console.log(person1);
let _code = "Javascript";//Cannot start with hyphen but underscore
console.log(_code);
let myEmail; // Camel Case naming
let my_user_email; // snake case naming
let UserProfile; // Pascals Case naming

// Data types
// Strings
// 1. Strings - text based data
let myString = "a list of character or text based data"
console.log(typeof(myString));
// 2. Numbers - integers, decimals
let myNum = 15;
let myNum2 = 15.0;
console.log(typeof(myNum));
console.log(typeof(myNum2));

// 3. Boolean - return true or false

let num = true;
console.log(num);

// 4. undefined - for unassigned variables

let course;
console.log(course);// output is undefined

// 5. BigInt - very large number
let veryLargeNumber = 90003847760814274n;
console.log(veryLargeNumber + 1n);
console.log(veryLargeNumber + 2n);

//6. Symbol - used to create hidden or private properties
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2);

// Operators - special symbols that perform operations on variables and values

// 1. Arithmetic operators - perform arithmetic calculations 
/* 
+ addition (1+1)
-  subtraction (1-1)
/  division (1/1)
*  multiplication (1*1)
*/
// modulo - return the remainder

let num1 = 5 % 2;
console.log(num1);

let num2 = 5;
console.log( --num2);
console.log( num2 **3);

// logical and operator (&&)
const isLoggedIn = true;
const hasPremiumAccount = true;

isLoggedIn && console.log("Welcome to your dashboard");
hasPremiumAccount && console.log("Showing premium ads-free video");

//Logical or operator (||)
const userName = "Laletty";
const displayName = userName || "Guest";
console.log(`Welcome back, ${displayName}`);

let trafficLight = "black";
let message = "";
switch (trafficLight){
    case "red":
        message = "Stop immediately."
        break;
    case "Yellow":
        message = "Prepare to stop."
        break;
    case "green":
        message = "Continue driving."
        break;
    default:
        message = "Invalid traffic color light."
        break;
}
console.log (message)
/* 
let number1 = Number(prompt("Enter the value of number1: "));
let number2 = Number(prompt("Enter the value of number2: "));

// take user input to select an operator 
const operator = prompt("Enter a operator ( either +, -, * or / ): ");

switch(operator) {

    case "+":
        result = number1 + number2;
        console.log(${number1} + ${number2} = ${result});
        break;

    case "-":
        result = number1 - number2;
        console.log(${number1} - ${number2} = ${result});
        break;

    case "*":
        result = number1 * number2;
        console.log(${number1} * ${number2} = ${result});
        break;

    case "/":
        result = number1 / number2;
        console.log(${number1} / ${number2} = ${result});
        break;

    default:
        console.log("Invalid operator");
} */ 

// Events
number = 10;
document.getElementById("output") .innerHTML = "The number is : " + number;

function submit() {
    alert("Button was clicked!")
}

const btn = document.getElementById("subscribe")
function subscribe() {
    btn.addEventListener('click', function(){
        alert("Thanks for subscribing!")
    })
}
subscribe();

document.cookie="username=KyleMurimi, theme=dark";
console.log(document.cookie)

function createCookie(){
    const key="session_token";
    const value="xyz234547675abc";
    const maxAge="max-age="+ 3600;
    const path="path=/"
    const security="Secure; SameSite=lax";

    document.cookie=`${key}={value}; ${maxAge}; ${path}; ${security}`

    console.log("Cookie created successfully!")
}
createCookie();