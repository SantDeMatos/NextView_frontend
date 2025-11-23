var pesquisaModel = require("../models/pesquisaModel");

function listarPesquisa(req, res) {
    var ultimoId = req.params.ultimoId;
    var idEmpresa = req.params.idEmpresa;

    pesquisaModel.listarPesquisa(ultimoId, idEmpresa)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function favoritar(req, res) {
    var idFilmeRecebido = req.body.idFilmeServer;
    var idEmpresaRecebido = req.body.idEmpresaServer;

    pesquisaModel.favoritar(idFilmeRecebido, idEmpresaRecebido)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function desfavoritar(req, res) {
    var idFilme = req.params.id;
    var idEmpresa = req.params.idEmpresa;

    pesquisaModel.desfavoritar(idFilme, idEmpresa)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarPesquisa,
    favoritar,
    desfavoritar
}
