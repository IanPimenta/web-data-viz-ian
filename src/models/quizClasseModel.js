var database = require("../database/config")

function inserirPontosQuizBanco(
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
    pontoDefinitivoPaladino,
    classe) {
        console.log('Tentando inserir pontuação no banco')
        var instrucaoSql = `insert into quizClasse values
(default, ${pontoDefinitivoBarbaro}, ${pontoDefinitivoBardo}, ${pontoDefinitivoBruxo}, ${pontoDefinitivoClerigo}, ${pontoDefinitivoDruida}, ${pontoDefinitivoFeiticeiro}, ${pontoDefinitivoGuerreiro}, ${pontoDefinitivoLadino}, ${pontoDefinitivoMago}, ${pontoDefinitivoMonge}, ${pontoDefinitivoPatrulheiro}, ${pontoDefinitivoPaladino}, '${classe}', ${idUsuario});`

return database.executar(instrucaoSql)
}

module.exports = {inserirPontosQuizBanco}