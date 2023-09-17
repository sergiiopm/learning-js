// Operador ternario (condicion) ? si se cumple : no se cumple
const available = 200
const total = 500
const creditCard = true

available > total && creditCard ? 
    console.log("Si puedes pagar con saldo") :
    console.log("No puedes pagar")
