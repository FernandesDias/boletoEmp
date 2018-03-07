const express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecatar ao banco
mongoose.connect("mongodb://junior:junior15@ds028559.mlab.com:28559/juniordstore");

//Carrega os Models
const Boleto = require('./src/models/boleto');

app.set('view engine', 'pug');
app.set('views', './src/views');

//Carrega as rotas
const indexRoute = require('./src/router/index-route');
const boletoRoute = require('./src/router/boleto-route');

//middlelare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Define as rotas
app.use('/', index);
app.use('/boleto', boletoRoute);

module.exports = app;