var express = require("express");
var router = express.Router();

var quizRacaController = require("../controllers/quizRacaController");



router.post("/inserirPontosQuizRacaBanco", function (req, res) {
    quizRacaController.inserirPontosQuizRacaBanco(req, res);
});

module.exports = router;