const url = "https://jsonplaceholder.typicode.com/comments"

const apiRequest = () => {
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => console.log("Todo listo"))
}

apiRequest()