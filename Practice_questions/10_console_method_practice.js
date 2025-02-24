// 1️⃣ Display an array of colors using console.table().

let colors = ["Yellow", "White", "Green", "Blue", "Red"];
console.table(colors);

// 2️⃣ Measure execution time of a loop using console.time().

console.time("Time taken by loop");
for (let i = 0; i < 100; i++) {
    console.log(i + i);
}
console.timeEnd("Time taken by loop");

// 3️⃣ Create an error message that appears only if age < 18 using console.assert().

let age = Number(prompt("Enter your age : "));
console.assert(age < 18, "YOU ARE UNDERAGE!!!");