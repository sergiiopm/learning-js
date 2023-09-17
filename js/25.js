const heading = document.querySelector(".heading")
const links = document.querySelectorAll(".navegacion  a")

heading.addEventListener("click", () => {
    // const number = 10
    // if (number === 10) {
    //     heading.textContent = "Mi número es 10"
    // } else {
    //     heading.textContent = "Min numero es diferente"
    // }

    heading.textContent = "Nuevo heading al dar click"
})

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); 
        link.textContent = "Nuevo nombre"
    })
});
