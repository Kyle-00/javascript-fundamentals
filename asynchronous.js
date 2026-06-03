// A normal function with a callback
function greet(name, callback) {
    console.log("Hello " + name);

    // Run the callback function
    callback();
}
// Callback function
function sayBye() {
    console.log("Goodbye!");
}
// Promise function
function fetchData() {
    return new Promise((resolve, reject) => {

        console.log("Fetching data...");

        // Simulate a delay of 3 seconds
        setTimeout(() => {
            resolve("Data received successfully!");
        }, 3000);

    });
}
// Async function
async function main() {

    console.log("Program started");

    // Callback example
    greet("Abbie", sayBye);

    // Promise + Await example
    const result = await fetchData();

    console.log(result);

    console.log("Program finished");
}

// Run the program
main();