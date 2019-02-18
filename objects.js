const prod1 = {}
prod1.nome = 'celular caro'
prod1.preco = 499.99
prod1['desnconto afu'] = 0.3  // evitar espaços nos atributos

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 50.99,
    objeto: { //objectos dentro de objetos.
        blabla: 1
    }
}
console.log(prod2)