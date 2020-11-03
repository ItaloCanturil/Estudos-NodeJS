// middlware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
  ctx.valor1 = 'mid1'
  next() // função para ativar o proximo passo
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next() // função para ativar o proximo passo
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
  const execPasso = indice => {
    middlewares && indice < middlewares.length && //verificando se o array é true usando o operodor && (e)
      middlewares[indice](ctx, () => execPasso(indice + 1)) // Usando recursividade chamando execPasso dentro de si mesmo
  }
  execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)