'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nomeEmpresa:{
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true
    },
    dados:{
        type: String,
        required: [true, 'Dados são obrigatório']
    }
});

module.exports = mongoose.model('Boleto', schema);