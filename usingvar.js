{{{{var sera = 'Sera???'
    console.log(sera) // var fica visível memso fora dos blocos
    }
   }
  }
}
console.log(sera) // var fica visível memso fora dos blocos

function teste (){
    var local = 123 // variável com escopo local, não existe fora da função.
}

//console.log(local) // deve retornar erro.

var numero = 1
{
    var numero = 2
    console.log("dentro " + numero)
}
console.log("fora " + numero)