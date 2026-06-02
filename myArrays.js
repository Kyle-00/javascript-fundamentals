//creating an array syntax arrayName =[]

const age= [17,22,15,18,19]
let fruit1="apple"
let fruit2="pineapple"
let fruit3="peach"

const fruits = ["apple","pineapple","peach",...age]

fruits.push("Bananas");//adds element to the end of the array
fruits.unshift("oranges");//
console.log(fruits);

//concat

let evenNumber=[2,4,6,8]
let oddNumber=[1,3,5,7]

let newConcArray=evenNumber.concat(oddNumber);

console.log(newConcArray);

let items=["Javascript", 14, "a", true,5]
let stringifiedArray= items.toString();
console.log(stringifiedArray);
let languages=["Javascript","Python","Java","C++"]

let index= languages.indexOf("Javascript");
console.log(index);

//forEach- loops through a given list
function printLanguages(languages){
    console.log(languages)
}

languages.forEach(printLanguages);
