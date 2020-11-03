const axios  = require('axios');

axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then((res) => {
  const funcionarios = res.data;
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
  filtrado(funcionarios);

  console.log(func)
})

// minha solução

function filtrado(min) {
  const filter = min.filter((obj) => obj.genero === 'F');
  const country = filter.filter((obj) => obj.pais === 'China');
  const salarium = country.filter((obj) => obj.salario < 2436);

  return filter, country, salarium;
}

// solução da aula

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}