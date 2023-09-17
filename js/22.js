// Scope
let price = 300

function someFunction() {
    let price = 100
    console.log(price) // 100
}

someFunction()
console.log(price) // 300