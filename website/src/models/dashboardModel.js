var database = require("../database/config")

function listarGeneros() {
    var instrucao = `

    select generosConteudo from Conteudo where  dtLancamentoCont > '2023-01-01' and numVotosCont > 200 order by notaConteudo;

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

function listarSeriesTop() {
    var instrucao = `
        select tituloConteudo, notaConteudo from conteudo where tipoConteudo = "Tv Show" and dtLancamentoCont > '2023-01-01' and numVotosCont > 200 order by notaConteudo desc limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function diretorDoMomento() {
    var instrucao = `
   select
    diretorConteudo,
    COUNT(*) as total,
    (
        (avg(numVotosCont) / (avg(numVotosCont) + 1000)) * avg(notaConteudo) +
        (1000 / (avg(numVotosCont) + 1000)) * (select avg(notaConteudo) from Conteudo)
    ) as notaPonderada
from Conteudo
where dtLancamentoCont > '2020-01-01' 
  and numVotosCont >= 200
  and diretorConteudo != ''
group by diretorConteudo
order by total desc limit 1;

    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atorDoMomento() {
    var instrucao = ` 
        select atoresConteudo from Conteudo where  atoresConteudo != '' and dtLancamentoCont > '2023-01-01' and numVotosCont > 200 order by notaConteudo;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarGeneros,
    listarFilmesTop,
    listarSeriesTop,
    diretorDoMomento,
    atorDoMomento
};