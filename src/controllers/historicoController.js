
var historicoModel = require("../models/historicoModel");

function listar(req, res) {

    var id = req.params.id

    historicoModel.listar(id).then(function(resultado){

        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


function alertas(req, res) {

    var id = req.params.id

    historicoModel.alertas(id).then(function(resultado){

        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    alertas
    
}
