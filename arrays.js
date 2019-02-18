// arrays heterogêneos sem tamanho fixo.
const valores = [7.7, 8.9, 6.3, 9.2]
//               [0], [1], [2], [3]
console.log(valores[0], valores[2])
console.log(valores[4]) // cuidado, retorna undefined, não erro.

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, null, false, 'teste') // inclui no final do array
console.log(valores)
console.log(valores.pop) // retira valor do final do array.
delete valores[0]
console.log(valores)

console.log(typeof valores)