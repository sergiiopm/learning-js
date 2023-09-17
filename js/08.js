// Template Strings o Concatenación

const customer = "Sergio"
const balance = 400

console.log('El cliente: ' + customer + ' tiene un saldo de: ' + balance)
console.log('El cliente: ', customer, ' tiene un saldo de: ', balance)
console.log(`El cliente : ${customer} tiene un saldo de ${balance}€`)

const product = {
    name: "Tablet",
    price: 300,
    available: true
}

console.log(`El producto: ${product.name} cuesta un total de ${product.price}€`)