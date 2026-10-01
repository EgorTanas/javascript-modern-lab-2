const grades = [7, 9, 5, 10, 8, 6];

const goodGrades = grades.filter(grade => grade >= 8);

const sum = grades.reduce((total, grade) => total + grade, 0);
const average = sum / grades.length;

const increasedGrades = grades.map(grade => Math.min(grade + 1, 10));

console.log("Note >= 8:", goodGrades);
console.log("Media notelor:", average);
console.log("Note mărite cu 1:", increasedGrades);