const schedule = require('node-schedule')

// executa a cada 5 segundos, quando a hora é 13, no dia segunda (1)
const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 1', function () {
    console.log('Executando Tarefa 1 !', new Date().getSeconds())
})

// cancela a execução apos 20 segundos
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa !')
}, 20000)

// executa no segundo 30 quando a hora for 13
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 13
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2 !', new Date().getSeconds())
})