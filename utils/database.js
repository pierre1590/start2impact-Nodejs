const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('polluted_cities','root','',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;