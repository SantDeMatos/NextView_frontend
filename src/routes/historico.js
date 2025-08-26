
var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");

router.get("/listar/:id", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    historicoController.listar(req, res);
});

router.get("/alertas/:id", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    historicoController.alertas(req, res);
});

module.exports = router;

