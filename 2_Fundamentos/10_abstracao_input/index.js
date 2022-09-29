const inquirer = require("inquirer")

inquirer.prompt([
    {
        name: 'p1', 
        message:'Qual a nota 1?'
    },
    {
        name: 'p2',
        message:'Qual a nota 2?'
        },
])
.then((res) => {
console.log(res)
const media = ((parseInt(res.p1)) + (parseInt(res.p2))) / 2

console.log(`a média é : ${media}`)
})
.catch(err => console.log(err))