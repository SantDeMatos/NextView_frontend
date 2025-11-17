var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listarGeneros", function (req, res) {
    dashboardController.listarGeneros(req, res);
});

module.exports = router;
