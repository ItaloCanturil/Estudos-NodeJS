const door = 3333;

const express = require('express')
const app = express() // instanciando o express e atribuindo na const app
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) // essa linha é disparada para todas as requisições

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

app.get('produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => { // para substituir um produto
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto)
})

app.listen(door, () => {
  console.log(`Servidor esta executando na porta ${door}.`)
})