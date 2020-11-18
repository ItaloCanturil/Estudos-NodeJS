const anonimo = process.argv.indexOf('-i') !== -1

if(anonimo) {
  process.stdout.write('Fala Anônimo!\n')
  process.exit()
} else {
  process.stdout.write('Informe o seu nome: ')
  process.stdin.on('data', data => { // evento que dispara quando o usuario escreve de da enter
    const nome = data.toString().replace('\n', '')

    process.stdout.write(`Fala ${nome}!!\n`)
    process.exit()
  })
}