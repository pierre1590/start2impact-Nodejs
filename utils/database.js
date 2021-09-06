const Sequelize = require('sequelize');

const sequelize = new Sequelize('polluted_places','root','',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;