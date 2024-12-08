var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/puxarPontosQuizClasse/:idUsuario", function (req, res) {
    dashboardController.puxarPontosQuizClasse(req, res);
});

router.get("/puxarPontosQuizRaca/:idUsuario", function (req, res) {
    dashboardController.puxarPontosQuizRaca(req, res);
});

router.get("/puxarQtdClasse", function (req, res) {
    dashboardController.puxarQtdClasse(req, res);
});

module.exports = router;