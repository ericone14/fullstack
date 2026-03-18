const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('api_fullstack', 'root', 'alunolab', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3303'

});

module.exports = sequelize