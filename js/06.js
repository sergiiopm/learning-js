// Destructuring de 2 o más objetos
const product = {
    name: "Tablet",
    price: 300,
    available: true
}

const customer = {
    name: "Sergio",
    premium: true
}

const { name: productName } = product // quiero que obtenga la propiedad name y cree una variable productName
const { name: customerName } = customer

console.log(product.name)
console.log(customer.name)
console.log(productName)
console.log(customerName)