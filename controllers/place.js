const { validationResult } = require('express-validator/check');
const path = require('path');
const fs = require('fs');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Place = require('../models/place');


//Create Place
exports.createPlace = (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            message : 'Parameter input error',
            error : errors.array()
        });
    }

    if(!req.file){
        return res.status(422).json({
            message : req.fileValidationError ? req.fileValidationError : 'No images attached...'
        });
    }

    const image = req.file.path.replace(/\\/g,"/");
    const location = req.body.location;
   
    //INSERT NEL DATABASE
    req.createPlace({
        location : location,
        image : image
    }).then((place) => {
        res.status(201).json({ 
            messages : 'Success Operation',
            place : place
        });
    }).catch( err => {
        return res.status(422).json({
            message : 'Error in saving'
        });
    }); 
};

//GET - ALL
exports.getPlaces = (req,res) => {
    Place.findAll()
    .then(places => {
        res.json({ places : places});
    }).catch(
        err => console.log(err)
    );
};