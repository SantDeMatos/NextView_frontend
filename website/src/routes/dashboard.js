var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listarGeneros", function (req, res) {
    dashboardController.listarGeneros(req, res);
});

router.get("/listarFilmesTop", function (req, res) {
    dashboardController.listarFilmesTop(req, res);
});



module.exports = router;
