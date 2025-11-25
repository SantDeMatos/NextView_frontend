var pesquisaModel = require("../models/pesquisaModel");

function listarPesquisa(req, res) {
    var linhasPassadas = req.params.linhasPassadas;
    var idEmpresa = req.params.idEmpresa;

    pesquisaModel.listarPesquisa(linhasPassadas, idEmpresa)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function listarResultado(req, res) {
    var linhasPassadasResultado = req.params.linhasPassadasResultado;
    var idEmpresa = req.params.idEmpresa;
    var busca = req.params.busca

    pesquisaModel.listarResultado(linhasPassadasResultado, idEmpresa, busca)
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

    pesquisaModel.listarPesquisaGeneros(linhasPassadas, idEmpresa, generosString)
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

    pesquisaModel.listarPesquisaData(linhasPassadasData, idEmpresa, de, ate)
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

function adicionarConteudo(req, res) {
    var tipo = req.body.tipoServer;
    var titulo = req.body.tituloServer;
    var ano = req.body.anoServer;
    var nota = req.body.notaServer;
    var generos = req.body.generosServer;

    pesquisaModel.adicionarConteudo(tipo, titulo, ano, nota, generos)
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
    listarPesquisaGeneros,
    favoritar,
    desfavoritar,
    listarPesquisaData,
    listarResultado,
    adicionarConteudo
}
