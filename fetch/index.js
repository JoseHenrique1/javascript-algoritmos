let request = fetch("https://dog.ceo/api/breeds/image/random")
    .then(
    // Função de callback, que recebe o que veio da requisição
    (response) => response.json())
    .then ((json)=>console.log(json))
console.log()

request = fetch("https://dog.ceo/api/breeds/image/random")
    .then(
    // Função de callback, que recebe o que veio da requisição
    (response) => response.json())
    .then ((json)=>console.log(json.message))


