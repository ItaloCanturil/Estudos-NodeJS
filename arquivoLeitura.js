const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo)

// assincrono 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
})

const config = require('./arquivo.json')

// lendo um diretorio

fs.readdir(__dirname, (err, arquivos) => {
  console.log(arquivos)
})