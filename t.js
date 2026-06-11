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
// try{
//     console.log("attempting to change balance directly: " + myAccount.#balance); // This will throw an error
//     myAccount.#balance = 5000; // This will also throw an error
// } catch (error) {
//     console.error(`Error updating balance: ${error.message}`);
// }

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



// Base class
class SmartDevice {
  constructor(name) {
    this.name = name;
    this._isOn = false;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
  }

  get isOn() {
    return this._isOn;
  }

  getStatus() {
    return { name: this.name, isOn: this.isOn };
  }
}

// SmartLight – manages brightness (0-100%)
class SmartLight extends SmartDevice {
  constructor(name) {
    super(name);
    this._brightness = 0; // 0% when off
  }

  turnOn() {
    super.turnOn();
    this._brightness = 100;
  }

  turnOff() {
    super.turnOff();
    this._brightness = 0;
  }

  setBrightness(value) {
    if (!this.isOn) {
      throw new Error(`${this.name} is off. Turn it on before adjusting brightness.`);
    }
    if (value < 0 || value > 100) {
      throw new Error('Brightness must be between 0 and 100.');
    }
    this._brightness = value;
  }

  get brightness() {
    return this._brightness;
  }

  getStatus() {
    return { ...super.getStatus(), brightness: this.brightness };
  }
}

// SmartThermostat – manages temperature (°C)
class SmartThermostat extends SmartDevice {
  static DEFAULT_TEMP = 22; // comfortable default

  constructor(name) {
    super(name);
    this._temperature = 15.0; // initial arbitrary value
  }

  turnOn() {
    super.turnOn();
    this._temperature = SmartThermostat.DEFAULT_TEMP;
  }

  turnOff() {
    super.turnOff();
    // temperature remains stored but is reset when turned on again
  }

  setTemperature(value) {
    if (!this.isOn) {
      throw new Error(`${this.name} is off. Turn it on before setting temperature.`);
    }
    this._temperature = value;
  }

  get temperature() {
    return this._temperature;
  }

  getStatus() {
    return { ...super.getStatus(), temperatureC: this.temperature };
  }
}

// SmartCamera – manages recording state
class SmartCamera extends SmartDevice {
  constructor(name) {
    super(name);
    this._isRecording = false;
  }

  turnOn() {
    super.turnOn();
    this._isRecording = true; // starts recording stream
  }

  turnOff() {
    super.turnOff();
    this._isRecording = false;
  }

  startRecording() {
    if (!this.isOn) {
      throw new Error(`${this.name} is off. Turn it on before starting recording.`);
    }
    this._isRecording = true;
  }

  stopRecording() {
    this._isRecording = false;
  }

  get isRecording() {
    return this._isRecording;
  }

  getStatus() {
    return { ...super.getStatus(), isRecording: this.isRecording };
  }
}

// ------------------- Demonstration -------------------
const light = new SmartLight('Living Room Light');
const thermostat = new SmartThermostat('Main Thermostat');
const camera = new SmartCamera('Front Door Camera');

console.log('--- SmartLight ---');
console.log(light.getStatus());          // { name: '...', isOn: false, brightness: 0 }
light.turnOn();
console.log(`After turnOn: brightness = ${light.brightness}%`); // 100%
light.setBrightness(75);
console.log(`After setBrightness(75): ${light.brightness}%`);
light.turnOff();
console.log(`After turnOff: brightness = ${light.brightness}%`); // 0%

console.log('\n--- SmartThermostat ---');
console.log(thermostat.getStatus());     // { isOn: false, temperatureC: 15 }
thermostat.turnOn();
console.log(`After turnOn: temperature = ${thermostat.temperature}°C`); // 22
thermostat.setTemperature(21.5);
console.log(`After setTemperature(21.5): ${thermostat.temperature}°C`);
thermostat.turnOff();
thermostat.turnOn();  // turning on again resets to default 22°C
console.log(`Turned on again: temperature = ${thermostat.temperature}°C`); // 22

console.log('\n--- SmartCamera ---');
console.log(camera.getStatus());         // { isOn: false, isRecording: false }
camera.turnOn();
console.log(`After turnOn: recording = ${camera.isRecording}`); // true
camera.stopRecording();
console.log(`After stopRecording(): recording = ${camera.isRecording}`); // false
camera.startRecording();
console.log(`After startRecording(): recording = ${camera.isRecording}`); // true
camera.turnOff();
console.log(`After turnOff: isOn = ${camera.isOn}, recording = ${camera.isRecording}`); // false, false