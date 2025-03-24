// Write a function that takes a number as an argument and returns a Promise.
// If the number is positive, the Promise resolves with the square of the number.
// If the number is negative, the Promise rejects with the message "Negative numbers not allowed".

function sq(num) {
    return new Promise((resolve, reject) => {
        if (num >= 0) {
            resolve(num * num);
        }
        else {
            reject("Negative numbers not allowed");
        }
    })
}
sq(-4)
    .then((res) => {
        console.log("resolved with " + res);
    })
    .catch((err) => {
        console.log("rejected with " + err);
    })