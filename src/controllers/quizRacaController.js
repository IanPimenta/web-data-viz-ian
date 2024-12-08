var quizRacaModel = require("../models/quizRacaModel");

function inserirPontosQuizRacaBanco(req, res) {
    var idUsuario = req.body.idUsuario
    var pontoDefinitivoAnao = req.body.pontoDefinitivoAnao
    var pontoDefinitivoHalfling = req.body.pontoDefinitivoHalfling
    var pontoDefinitivoHumano = req.body.pontoDefinitivoHumano
    var pontoDefinitivoElfo = req.body.pontoDefinitivoElfo
    var raca = req.body.raca
    
    console.log(idUsuario,
        pontoDefinitivoAnao,
        pontoDefinitivoHalfling,
        pontoDefinitivoHumano,
        pontoDefinitivoElfo,
        raca,)

    if (pontoDefinitivoAnao == undefined) {
        res.status(400).send("ponto Anao está undefined!");
    } else if (pontoDefinitivoHalfling == undefined) {
        res.status(400).send("ponto Halfling está undefined!");
    } else if (pontoDefinitivoHumano == undefined) {
        res.status(400).send("ponto Humano está undefined!");
    } else if (pontoDefinitivoElfo == undefined) {
        res.status(400).send("ponto Elfo está undefined!");
    } else if (raca == undefined) {
        res.status(400).send("raca está undefined!");
    } else {

        quizRacaModel.inserirPontosQuizRacaBanco(
            idUsuario,
            pontoDefinitivoAnao,
            pontoDefinitivoHalfling,
            pontoDefinitivoHumano,
            pontoDefinitivoElfo,
            raca,)
            .then(
                function (resultado) {

                    if (resultado.length >= 1) {
                        console.log(resultado);
                    
                    res.json(resultado)

                    } else {
                        res.status(403).send("Inserção de pontos raça inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro na inserção dos pontos de Raça: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    inserirPontosQuizRacaBanco, 
}