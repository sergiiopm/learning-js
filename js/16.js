const technologies = ['Vue.js', 'Laravel', 'JavaScript', 'HTML', 'CSS']
const numbers = [10, 20, 30]

// Includes
let result = technologies.includes('Laravel')
console.log(result) // true

// FindIndex
result = technologies.findIndex(tech => tech === 'JavaScript')
console.log(result) // 2

// Some
result = numbers.some(number => number > 25) 
console.log(result) // true

// Find
result = numbers.find(number => number == 5)
console.log(result)

// Every
result = numbers.every(number => number > 5) // ¿Son todos mayores que 5?
console.log(result) // true

// Reduce
result = numbers.reduce((total, number) => number + total, 0)
console.log(result)

// Filter
result = technologies.filter( tech => tech === "Vue.js")
console.log(result)