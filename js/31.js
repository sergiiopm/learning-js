const url = "https://jsonplaceholder.typicode.com/comments"

const apiRequest = async () => {
    try {
        const response = await fetch(url)
        const result = await response.json()
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Todo listo")
    }
}

apiRequest()