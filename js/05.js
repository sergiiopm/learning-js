const product = {
    name: "Tablet",
    price: 300,
    available: true
}

// Object.freeze(product) => no permite modificar el objeto
// Object.seal(product) => permite modificar las propiedades del objeto

// Reescribir un valor
product.name = "Monitor curvo"

// Añadir un valor
product.image = "image.jpg"

// Eliminar un valor
delete product.available
// const { available, price, ...product2 } = product

console.log(product)