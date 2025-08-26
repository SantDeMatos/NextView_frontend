var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficosController");

router.get("/exibirGraficos", function (req, res) {
  graficoController.exibirGraficos(req, res);
});

router.post("/cadastrar/:id", function (req, res) {
  graficoController.cadastrar(req, res);
})

module.exports = router;