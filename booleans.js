let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// exemplos de casos verdadeiros.
console.log(!!2)
console.log(!!-1)
console.log(!![])
console.log(!!" ")  // string não vazia.
console.log(!!{})
console.log(!!Infinity)

// exemplos de casos falsos

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)


// truques de uso.
let name = 'Lucas'
console.log(name || 'desconhecido') // printa o primeiro verdadeiro. Se houver nome, printa nome, se não houver pronta ' '

