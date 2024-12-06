var express = require("express");
var router = express.Router();

var quizClasseController = require("../controllers/quizClasseController");



router.post("/inserirPontosQuizBanco", function (req, res) {
    quizClasseController.inserirPontosQuizBanco(req, res);
});

module.exports = router;