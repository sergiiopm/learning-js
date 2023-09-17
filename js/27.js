// Eventos del DOM - Submit
const form = document.querySelector("#formulario")
const nameInput = document.querySelector("#nombre")
const passswordInput = document.querySelector("#password")

const alert = document.createElement("DIV")
alert.textContent = "Todos los campos son obligatorios"
alert.classList.add("bg-red-500", "alerta", "text-white", "uppercase", "text-sm", "text-center", "p-2", "font-black")
console.log(alert)

const previousAlert = document.querySelector(".alerta")
previousAlert?.remove()

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    if (nameInput.value === '' || passswordInput.value === '') {
        form.appendChild(alert) // Añade la alerta como div hijo al form
        
        setTimeout(() => {
            alert.remove()
        }, 3000);
        return
    } else {
        if (nameInput.value && passswordInput.value) {
            console.log("Nombre y password ingresados")
        }
    }

    

    console.log("Enviando formulario")
})