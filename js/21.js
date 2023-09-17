// Optional chaining o encadenamiento opcional

const student = {
    nombre: "Sergio",
    class: "Programación I",
    approved: true
}

setTimeout(() => {
    student.exams = {
        exam1: 100,
        exam2: 50,
        exam3: 60,
    }
    console.log(student.exams?.exam1)
}, 3000);
// if (student.exams) {
//     console.log(student.exams.exam1)
// }


console.log("Hello World")
