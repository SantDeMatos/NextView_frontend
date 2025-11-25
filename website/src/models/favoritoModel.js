var database = require("../database/config")

function listarPesquisaGeneros(linhasPassadas, idEmpresa, generosString) {
    var filtroGeneroSQL = "";

    // 1. Constrói a condição de filtro de gênero se generosString não estiver vazia
    if (generosString) {
        const arrayGeneros = generosString.split(',');
        // Usa C.generosConteudo, que é a coluna na tabela Conteudo
        const condicoes = arrayGeneros.map(g => `C.generosConteudo like '%${g.trim()}%'`).join(' OR ');

        // Note: O 'AND' será colocado DIRETAMENTE na cláusula WHERE abaixo.
        // Se houver condições, a string de filtro fica assim: "AND (condicao1 OR condicao2...)"
        filtroGeneroSQL = `AND (${condicoes})`;
    }

    // 2. Monta a instrução SQL
    var instrucao = `
    SELECT
        CF.idContFavoritos,
        CF.fkConteudo,
        C.tituloConteudo,
        C.dtLancamentoCont,
        C.notaConteudo,
        C.generosConteudo
    FROM
        ConteudosFavoritos CF
    INNER JOIN
        Conteudo C ON CF.fkConteudo = C.idConteudo
    WHERE 
        CF.fkEmpresa = ${idEmpresa}
        ${filtroGeneroSQL} 
    ORDER BY 
        C.notaConteudo DESC
    LIMIT 50
    OFFSET ${linhasPassadas};
    `;

    console.log("Executando a instrução SQL de favoritos por gênero: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPesquisaData(linhasPassadasData, idEmpresa, de, ate) {
    var instrucao = `
    select
	idContFavoritos, fkConteudo,
    C.tituloConteudo, C.dtLancamentoCont, C.notaConteudo ,C.generosConteudo
    from
    ConteudosFavoritos CF
    inner join
    Conteudo C on CF.fkConteudo = C.idConteudo
    where CF.fkEmpresa = ${idEmpresa} and
    dtLancamentoCont >= '${de}-01-01' and dtLancamentoCont < '${parseInt(ate) + 1}-01-01'
    order by dtLancamentoCont, notaConteudo desc
    limit 50
    offset ${linhasPassadasData};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function desfavoritar(idFilme, idEmpresa) {
    var instrucao = `
    delete from ConteudosFavoritos where fkConteudo = ${idFilme} and fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPesquisa(linhasPassadas, idEmpresa) {
    var instrucao = `
    select
	idContFavoritos, fkConteudo,
    C.tituloConteudo, C.dtLancamentoCont, C.notaConteudo ,C.generosConteudo
from
    ConteudosFavoritos CF
inner join
    Conteudo C on CF.fkConteudo = C.idConteudo
where CF.fkEmpresa = ${idEmpresa}
limit 50
    offset ${linhasPassadas};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listarPesquisa,
    listarPesquisaGeneros,
    desfavoritar,
    listarPesquisaData
};