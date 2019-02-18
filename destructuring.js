// exemplos de destructuring

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereço: {
        logradouro: 'rua dos bobos',
        numero: 0
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const {nome: i, idade: j} = pessoa // desta forma é possível escolher o nome das variáveis
console.log(i, j)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereço: {logradouro, numero, cep}} = pessoa
console.log(numero, logradouro, cep)