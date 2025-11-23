var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

router.get("/listarPesquisa/:ultimoId", function (req, res) {
    pesquisaController.listarPesquisa(req, res);
});

router.post("/favoritar", function (req, res) {
    pesquisaController.favoritar(req, res);
})


module.exports = router;
