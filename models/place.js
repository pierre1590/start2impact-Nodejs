const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Place = sequelize.define('place',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    location : {
        type : Sequelize.STRING,
        allowNull : true
    },
    image : {
        type : Sequelize.STRING,
        allowNull : true
    }
});

module.exports = Place;

