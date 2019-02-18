// sem retorno
function imprimirSoma (a, b){
    console.log(a + b)
}
imprimirSoma(2,3)
imprimirSoma(2,3,4) // terceiro parâmetro será ignorado.
imprimirSoma(2) // segundo valor vai faltar, função vai retornar NaN, atenção, não é um erro.


// funcao sem retorno.

function soma (a, b=0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

// armazenando funcoes em var
const printsum = function (a, b){
    console.log(a + b)
}

// armazenando funcao arrow em variável
const sum = (a, b) => {
    return a + b
}

console.log(sum(2,3))

//retorno implícito
const subtracao  = (a, b) => console.log(a - b)
subtracao(1, 2)

