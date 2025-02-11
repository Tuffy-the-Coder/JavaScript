const student = {
    fullName : "Anurag",
    age : 20,
    cgpa : 5.5,
};
console.log(student);
// accessing individually 
console.log(student.fullName);  
console.log(student["age"]); 
// Modifying 
student["age"] = 21;
student.cgpa = 6.6;
console.log(student);