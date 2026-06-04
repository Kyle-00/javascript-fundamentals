// accessing elements
//1. accessing elements by id
const headerElement= document.getElementById('header');
headerElement.textContent="Welcome to the DOM manipulation";
headerElement.style="font-family: Arial; color: red"

//adding event listener

const buttonElement= document.getElementById('myButton');
buttonElement.addEventListener('click',()=>{
    alert("Button was clicked!");
} )

function submitForm(){
    alert("Form submitted successfully!")
}
//adding content dynamically

const newParagraph=document.createElement('p');
newParagraph.textContent="This is a new paragraph added dynamically.";
document.body.appendChild(newParagraph);

//Accessing elements by class name
const devContacts=document.getElementsByClassName('family');
console.log(devContacts[1]);
devContacts[1].textContent="Victor";
devContacts[1].style="color: red";
const allContactsArray=[...devContacts];
allContactsArray.forEach(contact=>{ console.log(contact) });
allContactsArray.forEach(function(contact) {console.log(contact)})
allContactsArray.forEach((contact)=>{console.log(contact)})

//accessing elements by tag name
const allContacts= document.getElementsByTagName('p');
console.log(allContacts);// returns a  html collection of all related tags in the document


//accessing elements by query selector
const selector=document.querySelector('.family');//accessing a class
console.log(selector);

const text=document.querySelector("myPara");//accessing an id
console.log(text.textContent);
