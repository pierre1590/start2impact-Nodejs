const express = require('express');
const router = express.Router();
const path = require('path');

const sequelize = require('./utils/database');

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


app.use('/',router);
router.get('/routes');


    sequelize.authenticate().then(rec => {
      console.log('Connection has been established successfully');
      sequelize.sync()
    });  







app.listen(85);