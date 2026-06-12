// concatenation means joining of strings

  function generateReport(){
    const moduleName="Authentication";
    const status="stable";
    const testCoverage= 94;

    const report="Module:" + moduleName +" | Status: " + status +" | Coverage:" + testCoverage +"&"
    return report;
  }
console.log(generateReport())


function interpolation(){
    return`System notification:user: ${user.firstName}${user.lastName}
    Access Status:${user.isActive}`

}
const user={
    firstName:"Kyle",
    lastName:"Murimi",
    isActive: true
}
console.log(interpolation(user))

function welcomeBackUser(user) {
    return `Welcome back, ${user.firstName} ${user.lastName}
    Your account is ${user.isActive ? "active" : "inactive"}. 
    We're happy to see you again.`;
}

const currentUser = {
    firstName: "Kyle",
    lastName: "Murimi",
    isActive: true
};

console.log(welcomeBackUser(currentUser));

let message="Hello"
let name="Kyle"
//Scoping in JS
function greet(){
    //local scope
     message="Welcome"
     name="Jay"
    console.log(`${message} ${name}`)
}

//trying to access local variables outside the function returns not defined
//console.log(`${message} ${name}`)
console.log("Cannot access the local variables")

greet()
//block scope

function display_scope(){
    let message="I am a local variable"// local variable
    let name="Local variable"

    if (true){
        let message1="i am a block scoped variable"//block variable
        console.log(`inner scope:${message}`)
    
    }
    console.log(`outer scope: ${message1}`)
}
display_scope()

console.log(test)
var test= 4;

//var test;
//console.log(test);
//var test= 4;

//console.log(myMessage)

//let myMessage;
//console.log(myName);
//const myName= "Kyle";
greetings();

function greetings(){
    console.log ("Welcome to hoisting!")
}