//variables
let x= "Kyle"
// mnemonic names
let userName="Kyle"
console.log(userName);

// comparison operators

let a = 5, b = "5";
console.log(a != b)

for (let i = 1; i < 10; i++){
    console.log(i)
}
//1 + 1= 2
//2 + 1= 3
//3 + 1= 4
//4 + 1= 5
//5 + 1= 6
//6 + 1= 7
//7 + 1= 8
//8 + 1= 9

//ternary operator
const userRole = "admin";
let WelcomeMessage;
if (userRole==="admin"){
    WelcomeMessage= "Welcome,admin! Access granted."
} else{
    WelcomeMessage= "Access denied. Please login to access the dashboard"
}
console.log(WelcomeMessage)

const customMessage = userRole==="admin"
 ?WelcomeMessage= "Welcome, Admin! Access granted."
 :WelcomeMessage="Access denied. Please login to access the dashboard."
 console.log(WelcomeMessage)

 //Logical and &&
 const isLoggedIn= true;
 const hasPremiumAccount= false;

 isLoggedIn && console.log("Welcome to your dashboard")
 hasPremiumAccount && console.log("Showing premium ads-free videos.")
 