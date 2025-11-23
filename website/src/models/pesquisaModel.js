var database = require("../database/config")

function listarPesquisa(ultimoId,idEmpresa) {
    var instrucao = `

    SELECT 
    c.idConteudo,
    c.tituloConteudo,
    c.dtLancamentoCont,
    c.notaConteudo,
    c.generosConteudo,
    CASE 
        WHEN cf.fkConteudo IS NOT NULL THEN 1 
        ELSE 0 
    END AS favoritado
    FROM Conteudo c
    LEFT JOIN conteudosFavoritos cf
    ON cf.fkConteudo = c.idConteudo
    AND cf.fkEmpresa = ${idEmpresa}
    WHERE c.idConteudo > ${ultimoId}
LIMIT 50;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function favoritar(idFilme, idEmpresa) {
    var instrucao = `
    insert into ConteudosFavoritos (fkEmpresa, fkConteudo) values(${idEmpresa},${idFilme});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listarPesquisa,
    favoritar
};