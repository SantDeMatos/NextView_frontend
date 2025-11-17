var dashboardModel = require("../models/dashboardModel");

function listarGeneros(req, res) {
    dashboardModel.listarGeneros().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarGeneros
}
