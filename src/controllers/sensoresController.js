var sensoresModel = require("../models/sensoresModel");

function listar(req, res) {
    var idviveiro = req.params.idviveiro
    var idEmpresa = req.params.idEmpresa

    sensoresModel.listar(idviveiro,idEmpresa).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarDados(req, res) {
    sensoresModel.buscarDados().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    buscarDados
}

