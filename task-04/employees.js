const employees = [
    {
        id: 1,
        name: "Ana",
        department: "IT",
        salary: 12000,
        experience: 5
    },
    {
        id: 2,
        name: "Ion",
        department: "Vânzări",
        salary: 8000,
        experience: 2
    },
    {
        id: 3,
        name: "Maria",
        department: "IT",
        salary: 10000,
        experience: 4
    },
    {
        id: 4,
        name: "Andrei",
        department: "HR",
        salary: 7500,
        experience: 6
    },
    {
        id: 5,
        name: "Elena",
        department: "Marketing",
        salary: 9000,
        experience: 3
    },
    {
        id: 6,
        name: "Cristian",
        department: "IT",
        salary: 11000,
        experience: 7
    },
    {
        id: 7,
        name: "Alex",
        department: "Marketing",
        salary: 8500,
        experience: 1
    }
];


// Filtrarea angajaților după departament

const itEmployees = employees.filter(
    employee => employee.department === "IT"
);

console.log("Angajați din departamentul IT:");

itEmployees.forEach(({ name, salary }) => {
    console.log(`${name} - ${salary} lei`);
});


// Calcularea salariului mediu

const averageSalary =
    employees.reduce((sum, employee) => sum + employee.salary, 0)
    / employees.length;

console.log(`\nSalariul mediu: ${averageSalary} lei`);


// Angajații cu experiență mai mare de 3 ani

const experiencedEmployees = employees.filter(
    employee => employee.experience > 3
);

console.log("\nAngajați cu experiență mai mare de 3 ani:");

experiencedEmployees.forEach(({ name, experience }) => {
    console.log(`${name} - ${experience} ani experiență`);
});


// Majorarea salariului cu 10%

const updatedEmployees = employees.map(employee => {

    if (employee.experience > 3) {
        return {
            ...employee,
            salary: employee.salary * 1.10
        };
    }

    return { ...employee };
});


// Raport final

console.log("\nRaport final:");

updatedEmployees.forEach(({ name, department, salary, experience }) => {

    console.log(
        `${name} | ${department} | ${salary.toFixed(2)} lei | ${experience} ani experiență`
    );

});