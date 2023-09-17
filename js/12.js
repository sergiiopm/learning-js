// Iteradores en  JS
const technologies = ['Vue.js', 'Laravel', 'JavaScript', 'HTML', 'CSS']

// forEach
const arrayForEach = technologies.forEach(tech => {
    // console.log(tech, i)
    return tech
});

// map
const arrayMap = technologies.map((tech) => {
    // console.log(tech)
    return tech
})

console.log(arrayForEach) // forEach no genera array
console.log(arrayMap) // map genera un array