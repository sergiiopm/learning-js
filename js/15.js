// Arrow Functions

const add = (number1 = 5, number2 = 5)  => {
    console.log(number1 + number2)
}
// add()
// add(22, 5)

const technologies = ['Vue.js', 'Laravel', 'JavaScript', 'HTML', 'CSS']

const arrayForEach = technologies.forEach(tech => console.log(tech))

console.log(arrayForEach)

const arrayMap = technologies.map((tech) => {
    return tech
})

const technologies2 = technologies.filter(tech => tech !== 'HTML') // hace un return

