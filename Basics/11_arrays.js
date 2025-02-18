let student_01 = ["Anurag", 20, "BCA"];
console.log(student_01);
console.log(student_01[0]);
console.log(student_01[4]); // undefinied
console.log(student_01.length); // length of array
student_01[3] = 7.8; // adding new element
student_01[1] = 21; // updating element
console.log(student_01);
//print with loop
for (let i = 0; i < student_01.length; i++) {
    console.log(student_01[i]);
}

