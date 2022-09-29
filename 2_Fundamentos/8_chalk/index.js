const chalk = require('chalk')

const nota = 4


if (nota >= 7){
    console.log(chalk.green('Parabéns, você merece uma mamada agora!'))
}
else{
    console.log(chalk.bgRed.black.bold('se fodeu!'))
}