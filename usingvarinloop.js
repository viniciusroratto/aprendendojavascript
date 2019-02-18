// usando o var em loop:

// for(var i = 0; i < 10; i++)
//     console.log(i)
// console.log("i =" + i)

// usando o let em loop:
// for(let j = 0; j < 10; j++)
//     console.log(j)
//console.log(j) // retorna erro pois j é let declarada dentro do escopo do for. Após o for j deixa de existir.


const funcs = []

for(let i = 0; i < 10; i++){
        funcs.push(function(){
            console.log(i)
        })
}

funcs[2]()
funcs[8]()