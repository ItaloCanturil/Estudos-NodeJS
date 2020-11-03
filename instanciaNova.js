// Para retornar uma nova intância se usa uma função factory
// Função factory retorna um novo objeto

module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++
    }
  }
}