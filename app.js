const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

const sequelize = require('./utils/database');

const app = express();

//application/json
app.use(bodyParser.json()); 

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.use(express.static('public'));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

//Routing
app.use('/',router);




const Place = require('./models/place');

sequelize.authenticate().then( rec => {
    console.log('Connection Established Successfully');
    //sequelize.sync({force:true})
    sequelize.sync({force:true})
    .then(user => {
        console.log('Sync to DB successfully');
    })
    .catch( err => {
        console.log('Sync to DB error:',err);
    });
}).catch( err => {
     console.log('Connection to DB Error:',err);
});




app.listen(8080);