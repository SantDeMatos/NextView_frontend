var express = require("express");
var router = express.Router();

var sensoresController = require("../controllers/sensoresController");

router.post("/filtroSensor", function (req, res) {
    sensoresController.filtroSensor(req, res);
});


router.get("/buscarDados", function (req, res) {
    sensoresController.buscarDados(req, res);
});


router.get("/listar/:idviveiro/:idEmpresa", function (req, res) {
    sensoresController.listar(req, res);
});

module.exports = router;