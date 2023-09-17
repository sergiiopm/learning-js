// Manipular Arrays
const technologies = ['Vue.js', 'Laravel', 'JavaScript', 'HTML', 'CSS']

// Añadir elementos
technologies.push('Git') // añade al final del array
technologies.unshift('React') // añade al principio del array
const newArray = [...technologies, 'Go'] //...technologies es que hace una copia de ese array

// Eliminar elementos
technologies.pop() // elimina al final del array
technologies.shift() // elimina al principio del array

technologies.splice(2) // a partir de que elemento elimina el resto del array
technologies.splice(2, 1) // a partir del elemento 2, elimina un elemento

const technologies2 = technologies.filter( function(tech) {
    return tech !== 'HTML'
})

console.log(technologies2)
console.log(technologies)
console.log(newArray)