var pesquisaModel = require("../models/pesquisaModel");

function listarPesquisa(req, res) {
    var ultimoId = req.params.ultimoId;

    pesquisaModel.listarPesquisa(ultimoId)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarPesquisa
}
