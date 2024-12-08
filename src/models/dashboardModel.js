var database = require("../database/config")

function puxarPontosQuizClasse(
    idUsuario) {
    console.log('Tentando puxar pontuação no banco')
    var instrucaoSql = `select pontoBarbaro,
pontoBardo,
pontoBruxo,
pontoClerigo,
pontoDruida,
pontoFeiticeiro,
pontoGuerreiro,
pontoLadino,
pontoMago,
pontoMonge,
pontoPatrulheiro,
pontoPaladino from quizClasse
	where fkUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}

function puxarPontosQuizRaca(
    idUsuario) {
    console.log('Tentando puxar pontuação no banco')
    var instrucaoSql = `select pontoAnao,
pontoHalfling,
pontoHumano,
pontoElfo
from quizRaca
	where fkUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}

function puxarQtdClasse() {
    console.log('Tentando puxar pontuação qtdClasse no banco')
    var instrucaoSql = `select count(classe) as qtdClasse, classe from quizClasse group by classe order by qtdClasse desc;`

    return database.executar(instrucaoSql)
}

function puxarQtdRaca() {
    console.log('Tentando puxar pontuação qtdRaca no banco')
    var instrucaoSql = `select count(raca) as qtdRaca, raca from quizRaca group by raca order by qtdRaca desc;`

    return database.executar(instrucaoSql)
}

module.exports = { puxarPontosQuizClasse,
    puxarPontosQuizRaca,
    puxarQtdClasse,
    puxarQtdRaca
}