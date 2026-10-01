import { calculateSum, calculateAverage } from "./utils.js";
import { getGoodStudents, findStudentById, addStudent } from "./students.js";

let students = [
    { id: 1, name: "Ana", grade: 9 },
    { id: 2, name: "Ion", grade: 7 },
    { id: 3, name: "Maria", grade: 10 },
    { id: 4, name: "Andrei", grade: 6 },
    { id: 5, name: "Elena", grade: 8 }
];

console.log("Toți elevii:");

students.forEach(student => {
    console.log(`${student.id}. ${student.name} - nota ${student.grade}`);
});

const goodStudents = getGoodStudents(students);

console.log("\nElevi cu nota >= 8:");

goodStudents.forEach(student => {
    console.log(`${student.name} - ${student.grade}`);
});

const grades = students.map(student => student.grade);

console.log("\nMedia clasei:", calculateAverage(grades));
console.log("Suma notelor:", calculateSum(grades));

try {
    const student = findStudentById(students, 3);
    console.log(`\nElev găsit: ${student.name}, nota ${student.grade}`);
} catch (error) {
    console.log(error.message);
}

try {
    const student = findStudentById(students, 10);
    console.log(`Elev găsit: ${student.name}`);
} catch (error) {
    console.log(`\nEroare: ${error.message}`);
}

students = addStudent(students, {
    id: 6,
    name: "Cristian",
    grade: 9
});

console.log("\nDupă adăugarea elevului:");

students.forEach(student => {
    console.log(`${student.name} - ${student.grade}`);
});