function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {        
            // teste catch: con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Especifico: ${err}`) // este sera o primeiro tratamento de erro encontrado, nao executando mais o .catch depois
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log(`Fim!`))