var database = require("../database/config")

function inserirPontosQuizRacaBanco(
    idUsuario,            
    pontoDefinitivoAnao,
    pontoDefinitivoHalfling,
    pontoDefinitivoHumano,
    pontoDefinitivoElfo,
    raca) {
        console.log('Tentando inserir pontuação no banco')
        var instrucaoSql = `insert into quizRaca values
(default, ${pontoDefinitivoAnao}, ${pontoDefinitivoHalfling}, ${pontoDefinitivoHumano}, ${pontoDefinitivoElfo}, '${raca}', ${idUsuario});`

return database.executar(instrucaoSql)
}

module.exports = {inserirPontosQuizRacaBanco}