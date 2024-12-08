var dashboardModel = require("../models/dashboardModel");

function puxarPontosQuizClasse(req, res) {
    var idUsuario = req.params.idUsuario

    if (idUsuario == undefined) {
        res.status(400).send("id usuario está undefined!");
    } else {

        dashboardModel.puxarPontosQuizClasse(idUsuario)
            .then(
                function (resultado) {

                    if (resultado.length >= 1) {
                        console.log(resultado);

                        res.json(resultado)

                    } else {
                        res.status(403).send("Puxar pontos Classe inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro no select de pontosQuizClasse: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function puxarPontosQuizRaca(req, res) {
    var idUsuario = req.params.idUsuario

    if (idUsuario == undefined) {
        res.status(400).send("id usuario está undefined!");
    } else {

        dashboardModel.puxarPontosQuizRaca(idUsuario)
            .then(
                function (resultado) {

                    if (resultado.length >= 1) {
                        console.log(resultado);

                        res.json(resultado)

                    } else {
                        res.status(403).send("Puxar pontos Raça inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro no select de pontosQuizRaca: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function puxarQtdClasse(req, res) {

    dashboardModel.puxarQtdClasse()
        .then(
            function (resultado) {

                if (resultado.length >= 1) {
                    console.log(resultado);

                    res.json(resultado)

                } else {
                    res.status(403).send("Puxar qtd classe inválido(s)");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro no select de qtdClasse: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function puxarQtdRaca(req, res) {

    dashboardModel.puxarQtdRaca()
        .then(
            function (resultado) {

                if (resultado.length >= 1) {
                    console.log(resultado);

                    res.json(resultado)

                } else {
                    res.status(403).send("Puxar qtd Raca inválido(s)");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro no select de qtdRaca: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    puxarPontosQuizClasse, 
    puxarPontosQuizRaca, 
    puxarQtdClasse,
    puxarQtdRaca
}