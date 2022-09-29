const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// try{
//     sequelize.authenticate()
//     console.log('conectado com sucesso')

// } catch(err){
//     console.log('não funcionou', err)
// }

module.exports = sequelize;