var viveiroModel = require("../models/viveiroModel");

function vizualizarViveiros(req, res) {
    var id = req.params.id;

    viveiroModel.vizualizarViveiros(id)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}


function kpi(req, res) {
    var id = req.params.id;

    viveiroModel.kpi(id)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}



function kpi2(req, res) {
    var id = req.params.id;

    viveiroModel.kpi2(id)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}


function kpi3(req, res) {
    var id = req.params.id;

    viveiroModel.kpi3(id)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}



function kpiviv_1(req, res) {
    var id = req.params.id;
    var idviv = req.params.idviv;

    viveiroModel.kpiviv_1(id,idviv)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}



function kpiviv_2(req, res) {
    var id = req.params.id;
    var idviv = req.params.idviv;

    viveiroModel.kpiviv_2(id,idviv)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}


function kpiviv_3(req, res) {
    var id = req.params.id;
    var idviv = req.params.idviv;

    viveiroModel.kpiviv_3(id,idviv)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}



function kpiviv_4(req, res) {
    var id = req.params.id;
    var idviv = req.params.idviv;

    viveiroModel.kpiviv_4(id,idviv)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    vizualizarViveiros,
    kpi,
    kpi2,
    kpi3,
    kpiviv_1,
    kpiviv_2,
    kpiviv_3,
    kpiviv_4
};
