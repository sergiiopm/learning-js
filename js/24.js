const heading = document.querySelector(".heading")
heading.textContent = "Nuevo heading"
// heading.classList.remove("text-4xl")

const nameInput = document.querySelector("#nombre")
nameInput.value = "Hola mundo"
console.log(nameInput)

const links = document.querySelectorAll(".navegacion  a")
console.log(links)

links.forEach(link => link.textContent = "Nuevo texto enlace")