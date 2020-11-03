// importando instância única e instância nova para observar a diferença

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // a função tem que ser invocada para acessar o novo objeto
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor) // O valor do contador A e B foram acrescentados igualmente pq o Node tem cache.

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // Somente o valor do contador C acrescenta pq se esta gerando uma nova instância com a função factory.