let numero = 1
{
    let numero = 2 // let tem o escopo dentro do bloco.
    console.log("dentro = " + numero)
}
console.log("fora = " + numero)