var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listarGeneros", function (req, res) {
    dashboardController.listarGeneros(req, res);
});

router.get("/listarFilmesTop", function (req, res) {
    dashboardController.listarFilmesTop(req, res);
});

router.get("/listarSeriesTop", function (req, res) {
    dashboardController.listarSeriesTop(req, res);
});

router.get("/diretorDoMomento", function (req, res) {
    dashboardController.diretorDoMomento(req, res);
});

router.get("/atorDoMomento", function (req, res) {
    dashboardController.atorDoMomento(req, res);
});


module.exports = router;
