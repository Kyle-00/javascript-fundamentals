/* const student1 = {
    name: "Jason",
    course: "Software Development",
    greet: function() {
        console.log(`Hello my name is ${this.name} I am doing ${this.course}`)
    }
}
const student2 = {
    name: "Abbie",
    course: "Software Development",
    greet: function() {
        console.log(`Hello my name is ${this.name} I am doing ${this.course}`)
    }
}

student1.greet()
student2.greet() */

// creating the blueprint
class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
    greet() {
        console.log(`Hello my name is ${this.name} I am doing ${this.course}`)
    }
}

// creating the object instances
student1 = new Student("Idah", "Python")
student2 = new Student("Derrick", "Machine Learning")
student1.greet()
student2.greet()

class Product {
    constructor(name, id, price) {
        this.name = name;
        this.id = id;
        this.price = price;
    }
    description() {
        console.log(` Name: ${this.name} ID: ${this.id} Price: KES ${this.price}`)
    }
}

product1 = new Product("Headlight", 1, 2000)
product2 = new Product("Piston", 2, 1500)
product3 = new Product("Bumper", 3, 40000)

product1.description()
product2.description()
product3.description()

//Encapsulation- hiding internal state
class BankAccount {
    #balance;// makes the property private
    constructor(owner, initialDeposit) {
        this.owner = owner;
        this.#balance = initialDeposit;
    }
    checkBalance() {
        return `Account owner: ${this.owner} Balance: KES ${this.#balance}`;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited KES ${amount}. New balance: KES ${this.#balance}`);
        } else {
            console.log("Invalid deposit amount.");

        }
    }
}
try{
    console.log("attempting to change balance directly: " + myAccount.#balance); // This will throw an error
    myAccount.#balance = 5000; // This will also throw an error
} catch (error) {
    console.error(`Error updating balance: ${error.message}`);
}

const myAccount = new BankAccount("Kyle", 1000);
myAccount.deposit(500);
console.log(myAccount.checkBalance());

//Inheritance
class user{
    constructor(name, email) {
        this.username = username;
        this.email = email;
    }
    login() {
        console.log(`${this.username} has logged in`);
    }
}

//child class that inherits from user
class admin extends user {
    constructor(name, email, adminLevel) {
        super(name, email); // call the parent class constructor
        this.adminLevel = adminLevel;
    }
    deleteUser(targetUser) {
        console.log(`Admin ${this.username} removed ${targetUser.username}`);
    }
}

const regularUser = new user("Denis", "denis@mail.com");
const adminUser = new admin("Alice", "alice@mail.com");

regularUser.login(); // Output: Denis has logged in
adminUser.login();
adminUser.deleteUser("Denis"); // Output: Admin Alice removed Denis


// Parent class: Vehicle
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`${this.brand} ${this.model} engine started`);
    }
}

// Child class: Car inherits from Vehicle
class Car extends Vehicle {
    constructor(brand, model, doors, fuelType) {
        super(brand, model);  // Call parent class constructor
        this.doors = doors;
        this.fuelType = fuelType;
    }

    // Child-specific method
    honk() {
        console.log(`${this.brand} ${this.model} goes BEEP BEEP! 🚗`);
    }
}

// Create instances
const myVehicle = new Vehicle("Generic", "Rider");
const myCar = new Car("Toyota", "Camry", 4, "Petrol");

// Using inherited method
myVehicle.start();   // Output: Generic Rider engine started
myCar.start();       // Output: Toyota Camry engine started

// Using child-specific method
myCar.honk();    