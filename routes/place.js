const express = require('express');
const {body, query} = require('express-validator/check');
const router = express.Router();

const placeController = require('../controllers/place');

//Upload
const path = require('path');
const multer = require('multer');
const {uuid} = require('uuid');

const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null, 'public/images');
    },
    filename : (req,file,callback) => {
        callback(null, uuid()+ path.extname(file.originalname));
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

//PLACE /place/
var cpUpload = upload.single('image');
router.post('/place',
    [
        body('location').trim()
        .isLength({ min : 3}).withMessage('The location must be greater than 3 characters'),
    ],
    placeController.createPlace);