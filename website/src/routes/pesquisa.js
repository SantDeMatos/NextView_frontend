var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

router.get("/listarPesquisaGeneros/:linhasPassadas/:idEmpresa/:generosString", function (req, res) {
    pesquisaController.listarPesquisaGeneros(req, res);
});

router.get("/listarPesquisaData/:linhasPassadasData/:idEmpresa/:de/:ate", function (req, res) {
    pesquisaController.listarPesquisaData(req, res);
});

router.post("/favoritar", function (req, res) {
    pesquisaController.favoritar(req, res);
})

router.delete("/desfavoritar/:id/:idEmpresa", function (req, res) {
    pesquisaController.desfavoritar(req, res);
})


module.exports = router;
