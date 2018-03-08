'use strict';

const mongoose = require('mongoose');
const Boleto = mongoose.model('Boleto');

//exports.get = (req,res,next) =>{
    Boleto
    .findOne({
        active: true
    }, 'nomeEmpresa dados')
    .then(data =>{
        res.render('localizar', {
            boleto : data.rows
        });
    }, err => {
        res.send('err');
  });
//}
exports.cad = (req,res,next) =>{
    res.render('cadastro');
}

exports.post = (req,res,next) =>{
    const data = new Boleto(req.body);
    data.save()
    .then(item =>{
        res.send("Item Salvo com sucesso");
    })
    .catch(err =>{
        res.status(400).send("Erro ao salvar");
    });
}