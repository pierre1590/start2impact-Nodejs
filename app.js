const express = require('express');
const router = express.Router();
const path = require('path');

const routes =  require('./routes/place');
const sequelize = require('./utils/database');

const app = express();




app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','*');
    next();
});

app.use('/',routes);



app.use(express.static('public'));



    sequelize.authenticate().then(rec => {
      console.log('Connection has been established successfully');
      sequelize.sync();
    });  


app.listen(85);