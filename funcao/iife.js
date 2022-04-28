// IIFE => Immediately Invoked Function Expression

//fugir do escopo global
//criando função anonima, que será executada assim que o script for lido
(function () {
    console.log('Será executado na hora !')
    console.log('Foge do escopo mais abrangente')
})()