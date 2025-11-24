var dashboardModel = require("../models/dashboardModel");

function listarGeneros(req, res) {
    dashboardModel.listarGeneros().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarFilmesTop(req, res) {
    dashboardModel.listarFilmesTop().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarSeriesTop(req, res) {
    dashboardModel.listarSeriesTop().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function diretorDoMomento(req, res) {
    dashboardModel.diretorDoMomento().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function atorDoMomento(req, res) {
    dashboardModel.atorDoMomento().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarGeneros,
    listarFilmesTop,
    listarSeriesTop,
    diretorDoMomento,
    atorDoMomento,
}
