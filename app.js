const express = require('express');
const router = express.Router();
const path = require('path');

const routes =  require('./routes/place.js');
const sequelize = require('./utils/database');
const ejs = require('ejs');
const app = express();



app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','*');
    next();
});

app.use(express.static('public'));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

/* app.set('view engine',"ejs");
app.set('views', './views'); */



app.use('/',routes);
app.get('/routes/place');


    sequelize.authenticate().then(rec => {
      console.log('Connection has been established successfully');
      sequelize.sync();
    });  







app.listen(85);