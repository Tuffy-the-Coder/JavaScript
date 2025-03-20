// const sum = (a,b) => {
//     console.log(a+b);
// }
// const calculate = (x,y,callback) => {
//     callback(x,y);
// }
// calculate(1,2,sum);

// function fetchData (callback) {
//     console.log("Fetching data....");
//     setTimeout(() => {
//         console.log("Data received.");
//         callback();
//     },2000);
// }
// function proc () {
//     console.log("processing data....");
// }
// fetchData(proc);


// callback hell

function getData(data, getNewData) {
    setTimeout(() => {
        console.log("Fetching data " + data + "...");
        console.log(`Data ${data} received.`);
        if (getNewData) {
            getNewData();
        }
    }, 2000)
}
// getData(1,getData(2)); : error cause using() makes function executes immediatly
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});
