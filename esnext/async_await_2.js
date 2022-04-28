function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
    
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }

        return numeros // resolve

    } catch(e) {
        if(tentativas > 10) {
            throw 'Não deu certo !'; // reject
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
    
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)
