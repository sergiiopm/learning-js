const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

const apiRequest = async () => {

    const start = performance.now()

    const response = await fetch(url)
    const result = await response.json()

    const response2 = await fetch(url2)
    const result2 = await response2.json()

    const end = performance.now()

    console.log(`Resultado primer función: ${end - start} ms`)
}

const apiRequest2 = async() => {
    const start = performance.now()

    const [response, response2] = await Promise.all([
        fetch(url),
        fetch(url2)
    ])

    const result = await response.json()
    const result2 = await response2.json()

    const end = performance.now()

    console.log(`Resultado segunda función: ${end - start} ms`)
}

apiRequest()
apiRequest2()