// Objects
const product = {
    name: "Tablet",
    price: 300,
    available: true
}

console.log(product.price)

// Destructuring 
const { name, available } = product // Genera la variable name
console.log(name)
console.log(available)

// Object literal
const authenticated = true
const user = "Sergio"

const newObject = {
    authenticated,
    user,
}
console.log(newObject)