var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                    
                    res.json(resultadoAutenticar)

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeCompleto = req.body.nomeCompletoServer;
    var nomeUsuario = req.body.nomeUsuarioServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nomeCompleto == undefined) {
        res.status(400).send("Seu nome completo está undefined!");
    } else if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome usuario está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeCompleto, nomeUsuario, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
// aqui
function puxarClasseUsuario(req, res) {
    var idUsuario = req.params.idUsuario

    if (idUsuario == undefined) {
        res.status(400).send("id usuario está undefined!");
    } else {

        usuarioModel.puxarClasseUsuario(idUsuario)
            .then(
                function (resultado) {

                    if (resultado.length >= 1) {
                        console.log(resultado);

                        res.json(resultado)

                    } else {
                        res.status(403).send("Puxar Classe Usuario inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro no select de classe usuario: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function puxarRacaUsuario(req, res) {
    var idUsuario = req.params.idUsuario

    if (idUsuario == undefined) {
        res.status(400).send("id usuario está undefined!");
    } else {

        usuarioModel.puxarRacaUsuario(idUsuario)
            .then(
                function (resultado) {

                    if (resultado.length >= 1) {
                        console.log(resultado);

                        res.json(resultado)

                    } else {
                        res.status(403).send("Puxar Raca Usuario inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro no select de Raca usuario: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
// aqui

module.exports = {
    autenticar,
    cadastrar,
    puxarClasseUsuario,
    puxarRacaUsuario
}