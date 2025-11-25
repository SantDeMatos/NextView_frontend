var favoritoModel = require("../models/favoritoModel");

function listarPesquisa(req, res) {
    var linhasPassadas = req.params.linhasPassadas;
    var idEmpresa = req.params.idEmpresa;

    favoritoModel.listarPesquisa(linhasPassadas, idEmpresa)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}


function listarPesquisaGeneros(req, res) {
    var linhasPassadas = req.params.linhasPassadas;
    var idEmpresa = req.params.idEmpresa;
    var generosString = req.params.generosString;

    favoritoModel.listarPesquisaGeneros(linhasPassadas, idEmpresa, generosString)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function listarPesquisaData(req, res) {
    var linhasPassadasData = req.params.linhasPassadasData;
    var idEmpresa = req.params.idEmpresa;
    var de = req.params.de;
    var ate = req.params.ate;

    favoritoModel.listarPesquisaData(linhasPassadasData, idEmpresa, de, ate)
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

    favoritoModel.desfavoritar(idFilme, idEmpresa)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarPesquisa,
    listarPesquisaGeneros,
    desfavoritar,
    listarPesquisaData,
}
