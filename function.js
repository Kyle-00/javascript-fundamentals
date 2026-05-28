// Creating functions/declaring

function add(a, b){
    console.log(a + b)
}
add (56, 87)// calling the function

function welcome(name="Guest"){
    console.log(`Hello ${name}`)//body
}
welcome("Kyle");

function display(){
    console.log("This is what will be returned");
    return "Returning the function";
    //unreachable code block
    console.log("Anything for me");
}
let message= display();
console.log(message);


