const primeiroElemento = (array) => array[0]
const primeiraLetra = (string) => string[0]
const letraMaiuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMaiuscula)
    //.then(v => console.log(v))
    .then(console.log)

