var express = require('express');
var router = express.Router();
var request=require('request');
const baseUrl= 'https://api.chucknorris.io';

/* GET ALL JOKES CATEGORIES */
router.get('/jokes', (req, res, next) => {
    request.get(baseUrl + '/jokes/categories', (err, respose, body) => {
        if(err) { 
            return next(err);
        }
        if(respose.statusCode === 200 ) {
            res.send(body);
        }
    });    
});

/* GET SINGLE JOKE BY ID */
router.get('/jokes/:id', (req, res, next) => {
    const category = req.params.id;
    request.get(baseUrl + `/jokes/random?category=${category}`, (err, respose, body) => {
        if(err) { 
            return next(err);
        }
        if(respose.statusCode === 200 ) {
            res.send(body);
        }
    });
});

module.exports = router;