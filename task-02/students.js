export function getGoodStudents(students) {
    return students.filter(student => student.grade >= 8);
}

export function findStudentById(students, id) {
    const student = students.find(student => student.id === id);

    if (!student) {
        throw new Error("Elevul nu a fost găsit.");
    }

    return student;
}

export function addStudent(students, student) {
    return [...students, student];
}