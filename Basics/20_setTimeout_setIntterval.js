let timerID = setTimeout(function () {
    console.log("Time Up!");
}, 2000);
clearTimeout(timerID);

const sum = (a, b) => {
    console.log(a + b);
}
setTimeout(sum, 2000, 20, 30);

let timerId = setInterval(function () {
    console.log("hello");
}, 2000);

clearInterval(timerId);

let count = 0;
const add = (a) => {
    if (count < 10) {
        a += count;
        console.log(a);
        count++;
    }
    else {
        clearInterval(addition);
    }


}

let addition = setInterval(add, 1500, 1);

