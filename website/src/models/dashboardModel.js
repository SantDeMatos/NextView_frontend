var database = require("../database/config")

function listarGeneros() {
  var instrucao = `

    select generosConteudo from conteudo where  dtLancamentoCont > '2023-01-01' and numVotosCont > 200 order by notaConteudo;;

    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listarGeneros
};