var pesquisaModel = require("../models/pesquisaModel");

function listarPesquisaGeneros(req, res) {
    var linhasPassadas = req.params.linhasPassadas;
    var idEmpresa = req.params.idEmpresa;
    var generosString = req.params.generosString;

    pesquisaModel.listarPesquisaGeneros(linhasPassadas, idEmpresa,generosString)
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

    pesquisaModel.listarPesquisaData(linhasPassadasData, idEmpresa,de ,ate)
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
    listarPesquisaGeneros,
    favoritar,
    desfavoritar,
    listarPesquisaData
}
