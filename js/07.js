// Unir objetos
const product = {
    name: "Tablet",
    price: 300,
    available: true
}

const customer = {
    name: "Sergio",
    premium: true
}

const newObject = Object.assign(customer, product)
console.log(newObject)

const mergeObject = {
    product,
    customer
}
console.log(mergeObject)