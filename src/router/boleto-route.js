'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/boleto-controller');

//router.get('/', controller.get);
//router.get('/', function(req,res,next){
//    res.render('cadastro');
//});
//router.post('/', controller.post);
router.get('/', controller.cad);

module.exports = router;