var database = require("../database/config")

function listarGeneros() {
    var instrucao = `

    select generosConteudo from Conteudo where  dtLancamentoCont > '2023-01-01' and numVotosCont > 200 order by notaConteudo;;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarFilmesTop() {
    var instrucao = `
        select tituloConteudo, notaConteudo from Conteudo where tipoConteudo = "Movie" and dtLancamentoCont > '2023-01-01' and numVotosCont > 200 and tituloConteudo != 'Squid Game: Making Season 2' order by notaConteudo desc limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarGeneros,
    listarFilmesTop
};