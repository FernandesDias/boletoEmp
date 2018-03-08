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
// arquivos estaticos
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//Carrega as rotas
const indexRoute = require('./src/router/index-route');
const boletoRoute = require('./src/router/boleto-route');

//middlelare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Define as rotas
app.use('/', indexRoute);
app.use('/boleto', boletoRoute);
app.use('/cadastrar', boletoRoute);

module.exports = app;