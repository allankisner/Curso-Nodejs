// criar pacote que aceite pacotes externos = npm init
// instalar chalk e inquirer
// inquirer para recever nome e idade do usuario
// reposta de fundo amarela e texto preto
// inserir um tratamento para erro

const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer.prompt([
    {
      name: 'p1',
      message: 'Qual o seu nome?'  
    },
    {
        name:'p2',
        message:'Qual a sua idade?',
    },
])
.then((res)=>{
    
     if(!res.p1 || !res.p2 ){
      throw new Error("Nome e idade são obrigatórios!")
     }

  console.log(chalk.bgYellow.green.bold(`O seu nome é: ${res.p1} e sua idade é: ${res.p2}`))
})
.catch((err) =>
  console.log(err)
)