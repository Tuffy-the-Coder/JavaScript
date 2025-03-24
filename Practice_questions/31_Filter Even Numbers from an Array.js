// Write a function that returns a Promise which resolves after 1 second with an array of numbers
// Chain a .then() call to filter out only the even numbers and log the new array.

function evenArr(arg) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(arg);
        },1000);
    })
}

let arr = [1,2,3,4,5,6,7,8,9];
evenArr(arr)
.then((res) => {
    return evenArr(res.filter((element) => {
        return element%2 == 0;
    })
)
}).then((res) => {
    console.log(res);
})