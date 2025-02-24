// console.log()

console.log("log");

// console.error()

console.error("error");

// console.warm()

console.warn("warning");

// console.table

let obj = [
    { Name: "Anurag", Age: 20, Course: "Bca" },
    { Name: "Mohit", Age: 21, Course: "Bca" },
    { Name: "Ritik", Age: 22, Course: "Bca" }
];
console.table(obj);

// console.time() & console.timeEnd()

console.time("Time taken");

for (let i = 0; i < 100000; i++) {

}
console.timeEnd("Time taken");

// console.group() & console.groupEnd()

console.group("User Info");
console.log("Name: Anurag");
console.log("Age: 20");
console.log("Country: India");
console.groupEnd("User Info");

// console.coun()

console.count("count");
console.count("count");
console.count("count");

// console.clear()

// console.clear();

// console.assert()

console.assert(5 > 6);
console.assert(5 < 6);
