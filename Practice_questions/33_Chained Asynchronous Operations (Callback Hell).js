// Write a series of asynchronous functions using callbacks to simulate a chain of operations. For example,
// Write a function firstStep(callback) that waits 1 second and then passes the number 5 to the callback.
// Write a function secondStep(number, callback) that multiplies the number by 2 after another 1 second and passes the result.
// Write a function thirdStep(number, callback) that subtracts 3 from the number after 1 second and passes the final result.

function firstStep(callback) {
    setTimeout(() => {
        callback(5, thirdStep);
    }, 1000)
}

function secondStep(num, callback) {
    setTimeout(() => {
        callback(num * 2, fourthStep);
    }, 1000)
}

function thirdStep(num, callback) {
    setTimeout(() => {
        callback(num - 3);
    }, 1000);
}

function fourthStep(num) {
    console.log(num);
}

firstStep(secondStep);