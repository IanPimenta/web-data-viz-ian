var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nomeCompleto, nomeUsuario, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nomeCompleto, nomeUsuario, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeCompleto, nomeUsuario, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nomeCompleto, nomeUsuario, email, senha) VALUES ('${nomeCompleto}', '${nomeUsuario}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//aqui
function puxarClasseUsuario(
    idUsuario) {
    console.log('Tentando puxar classe usuario no banco')
    var instrucaoSql = `select classe from quizClasse
	where fkUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}

function puxarRacaUsuario(
    idUsuario) {
    console.log('Tentando puxar Raca usuario no banco')
    var instrucaoSql = `select raca from quizRaca
	where fkUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}
//aqui

module.exports = {
    autenticar,
    cadastrar,
    puxarClasseUsuario,
    puxarRacaUsuario
};