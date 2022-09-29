const fs = require('fs')

const arqA = 'arquivo.txt'
const arqB = 'novo-arquivo.txt'

fs.rename(arqA, arqB, function(err){

    if(err){
        console.log(err)
        return
    }

        console.log(`o ${arqA} foi renomeado para ${arqB}`)
    
})