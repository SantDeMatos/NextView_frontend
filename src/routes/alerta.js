var express = require("express");
var router = express.Router();

var alertaController = require("../controllers/alertaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    alertaController.cadastrar(req, res);
})

router.get("/listarViveiros", function (req ,res) {
    alertaController.listarViveiros(req ,res);
})

router.get("/listarSensores", function (req, res) {
    alertaController.listarSensores(req ,res);
})

router.post("/enviarFiltro", function (req, res) {
    alertaController.receberFiltro(req, res)
})

router.post("/enviarFiltroSensor", function (req, res) {
    alertaController.receberFiltroSensor(req, res)
})

router.get("/listarAreas", function (req, res) {
    alertaController.listarAreas(req ,res);
})

router.get("/listarAlertas", function (req, res) {
    alertaController.listarAlertas(req ,res);
})

module.exports = router;