// Create a function asyncGreeting(name, callback) that uses setTimeout to simulate an asynchronous operation.
// After 2 seconds, it should call the provided callback with the greeting message "Hello, <name>!".
function greet(name) {
    console.log("Hello, " + name);
}

function asyncGreeting(name, callback) {
    setTimeout(() => {
        callback(name);
    }, 2000)
}

asyncGreeting("Tuffy", greet);