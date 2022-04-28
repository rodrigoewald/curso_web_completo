// pessoa -> 123 (endereço de memória) -> {...} (objeto criado)
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} // acusa erro pois constante só pode receber uma vez um novo objeto

Object.freeze(pessoa) // congelar o objeto

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa) // após o freeze o objeto não será mais alterado

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)