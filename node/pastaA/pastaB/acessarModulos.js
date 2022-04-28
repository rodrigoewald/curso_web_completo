const moduloA = require('../../moduloA');
console.log(moduloA.ola)

const saudacao = require('saudacao') // nao criar pastas em node_modules (SOMENTE TESTE PARA ESTUDO)
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

//const http = require('http')
//http.createServer((req, res) => {
 //   res.write('Bom dia!')
 //   res.end()
//}).listen(8080)