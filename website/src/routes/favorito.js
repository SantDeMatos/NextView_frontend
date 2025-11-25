var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.get("/listarPesquisa/:linhasPassadas/:idEmpresa", function (req, res) {
    favoritoController.listarPesquisa(req, res);
});

router.get("/listarPesquisaGeneros/:linhasPassadas/:idEmpresa/:generosString", function (req, res) {
    favoritoController.listarPesquisaGeneros(req, res);
});

router.get("/listarPesquisaData/:linhasPassadasData/:idEmpresa/:de/:ate", function (req, res) {
    favoritoController.listarPesquisaData(req, res);
});

router.get("/listarResultado/:linhasPassadasResultado/:idEmpresa/:busca", function (req, res) {
    favoritoController.listarResultado(req, res);
});

router.post("/favoritar", function (req, res) {
    favoritoController.favoritar(req, res);
})

router.delete("/desfavoritar/:id/:idEmpresa", function (req, res) {
    favoritoController.desfavoritar(req, res);
})



module.exports = router;
