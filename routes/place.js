const express = require('express');
const {body,query} = require('express-validator');
const router = express.Router();

const placeController = require('../controllers/place');

//Upload
const path = require('path');
const multer = require('multer');
const uuid = require('uuid').v4;


const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null, 'public/images');
    },
    filename : (req,file,callback) => {
        callback(null, uuid() + path.extname(file.originalname));
    },
});

const fileFilter = ((req,file,callback)=> {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
        callback(null,true);
    }else{
        req.fileValidationError = "Extension not allowed only: image/png | image/jpg |  image/jpeg";
        callback(null,false);
    }
});

var upload = multer({
    storage : storage , 
    fileFilter : fileFilter
});

//PLACE /addPlace
var cpUpload = upload.single('image');

router.post('/addPlace', 
cpUpload,(req,res)=>{
    res.render('addPlace.ejs');
},
    [
        body('location').trim()
        .isLength({ min : 3}).withMessage('The location field must be greater than 3 characters'),
    ],
    placeController.createPlace);

//ALL PLACES /places
    
    router.get('/allPlaces',(req,res)=>{
        res.render('allPlaces.ejs');
    },placeController.getPlaces);
    

    module.exports = router;