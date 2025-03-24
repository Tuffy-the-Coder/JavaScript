// Start with the number 5 using a Promise. Chain multiple .then() calls to:

// Multiply the number by 2.
// Subtract 3 from the result.
// Finally, log the final result.

function calculate(num) {
    return new Promise((resolve,reject) => {
    resolve(num);
    })
}
calculate(5)
.then((res) => {
    return res*2;
}).then((res) => {
    return res - 3;
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})