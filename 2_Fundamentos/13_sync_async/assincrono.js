const fs = require('fs')

console.log("inicio")

fs.writeFile("arquivo.txt", "oi", function(err) {
    setTimeout(function(){
        console.log('Arquivo criado!')
    }, 5000)
})
console.log('fim')
