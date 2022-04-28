function tratarErro(erro) {
    throw new Error('...')    
}

function imprimirNomeGritado(obj) {

    try{
        console.log(obj.name.toUpperCase(0 + '!!!'))
    } catch(e) {

    } finally {
        console.log('final')
    }
    
}

const obj = { name: 'Roberto'}
imprimirNomeGritado(obj)