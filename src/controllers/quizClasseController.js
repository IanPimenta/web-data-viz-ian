var quizClasseModel = require("../models/quizClasseModel");

function inserirPontosQuizBanco(req, res) {
    var idUsuario = req.body.idUsuario
    var pontoDefinitivoBarbaro = req.body.pontoDefinitivoBarbaro
    var pontoDefinitivoBardo = req.body.pontoDefinitivoBardo
    var pontoDefinitivoBruxo = req.body.pontoDefinitivoBruxo
    var pontoDefinitivoClerigo = req.body.pontoDefinitivoClerigo
    var pontoDefinitivoDruida = req.body.pontoDefinitivoDruida
    var pontoDefinitivoFeiticeiro = req.body.pontoDefinitivoFeiticeiro
    var pontoDefinitivoGuerreiro = req.body.pontoDefinitivoGuerreiro
    var pontoDefinitivoLadino = req.body.pontoDefinitivoLadino
    var pontoDefinitivoMago = req.body.pontoDefinitivoMago
    var pontoDefinitivoMonge = req.body.pontoDefinitivoMonge
    var pontoDefinitivoPatrulheiro = req.body.pontoDefinitivoPatrulheiro
    var pontoDefinitivoPaladino = req.body.pontoDefinitivoPaladino
    console.log(idUsuario,
        pontoDefinitivoBarbaro,
        pontoDefinitivoBardo,
        pontoDefinitivoBruxo,
        pontoDefinitivoClerigo,
        pontoDefinitivoDruida,
        pontoDefinitivoFeiticeiro,
        pontoDefinitivoGuerreiro,
        pontoDefinitivoLadino,
        pontoDefinitivoMago,
        pontoDefinitivoMonge,
        pontoDefinitivoPatrulheiro,
        pontoDefinitivoPaladino,)

    if (pontoDefinitivoBarbaro == undefined) {
        res.status(400).send("ponto barbaro está undefined!");
    } else if (pontoDefinitivoBardo == undefined) {
        res.status(400).send("ponto bardo está undefined!");
    } else if (pontoDefinitivoBruxo == undefined) {
        res.status(400).send("ponto bruxo está undefined!");
    } else if (pontoDefinitivoClerigo == undefined) {
        res.status(400).send("ponto clerigo está undefined!");
    } else if (pontoDefinitivoDruida == undefined) {
        res.status(400).send("ponto druida está undefined!");
    } else if (pontoDefinitivoFeiticeiro == undefined) {
        res.status(400).send("ponto feiticeiro está undefined!");
    } else if (pontoDefinitivoGuerreiro == undefined) {
        res.status(400).send("ponto guerreiro está undefined!");
    } else if (pontoDefinitivoLadino == undefined) {
        res.status(400).send("ponto ladino está undefined!");
    } else if (pontoDefinitivoMago == undefined) {
        res.status(400).send("ponto mago está undefined!");
    } else if (pontoDefinitivoMonge == undefined) {
        res.status(400).send("ponto monge está undefined!");
    } else if (pontoDefinitivoPatrulheiro == undefined) {
        res.status(400).send("ponto patrulheiro está undefined!");
    } else if (pontoDefinitivoPaladino == undefined) {
        res.status(400).send("ponto paladino está undefined!");
    } else {

        quizClasseModel.inserirPontosQuizBanco(
            idUsuario,
            pontoDefinitivoBarbaro,
            pontoDefinitivoBardo,
            pontoDefinitivoBruxo,
            pontoDefinitivoClerigo,
            pontoDefinitivoDruida,
            pontoDefinitivoFeiticeiro,
            pontoDefinitivoGuerreiro,
            pontoDefinitivoLadino,
            pontoDefinitivoMago,
            pontoDefinitivoMonge,
            pontoDefinitivoPatrulheiro,
            pontoDefinitivoPaladino,)
            .then(
                function (resultado) {

                    if (resultado.length >= 1) {
                        console.log(resultado);
                    
                    res.json(resultado)

                    } else {
                        res.status(403).send("Inserção de pontos inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro na inserção dos pontos: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    inserirPontosQuizBanco, 
}