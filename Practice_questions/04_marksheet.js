let marksheet = {
    Rohan: 98,
    Rahul: 88,
    Sahil: 77,
    Mukesh: 55,
    Kamlesh: 44,
}
// print using for-in loop
for (key in marksheet) {
    console.log(key + " got " + marksheet[key] + " marks.");
}