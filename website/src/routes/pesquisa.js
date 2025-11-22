var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

router.get("/listarPesquisa/:ultimoId", function (req, res) {
    pesquisaController.listarPesquisa(req, res);
});

module.exports = router;
