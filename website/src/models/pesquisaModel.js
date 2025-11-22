var database = require("../database/config")

function listarPesquisa(ultimoId) {
    var instrucao = `

    select idConteudo, tituloConteudo, dtLancamentoCont, notaConteudo, generosConteudo from Conteudo where idConteudo > ${ultimoId} limit 50;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listarPesquisa
};