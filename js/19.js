// Operador || (OR) y && (AND)
const available = 200
const total = 500
const creditCard = true

if (creditCard && available > total) {
    console.log("Si, puedes pagar")
} else {
    console.log("No puedes pagar, ponte a lavar los platos")
}