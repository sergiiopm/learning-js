const heading = document.querySelector(".heading")
const nameInput = document.querySelector("#nombre")
const passswordInput = document.querySelector("#password")

nameInput.addEventListener('input', (e) => {
    heading.textContent = e.target.value
})
passswordInput.addEventListener("input", () => {
    passswordInput.type = "text"

    setTimeout(() => {
        e.target.type = "password"
    }, 200);
})