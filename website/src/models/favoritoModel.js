var database = require("../database/config")

function listarPesquisaGeneros(linhasPassadas, idEmpresa, generosString) {
    var filtroGeneroSQL = "";

    if (generosString) {
        const arrayGeneros = generosString.split(',');
        const condicoes = arrayGeneros.map(g => `C.generosConteudo like '%${g.trim()}%'`).join(' OR ');

        filtroGeneroSQL = `AND (${condicoes})`;
    }

    var instrucao = `
    select
    CF.idContFavoritos,
    CF.fkConteudo,
    C.tituloConteudo,
    C.dtLancamentoCont,
    C.notaConteudo,
    C.generosConteudo
    from
    ConteudosFavoritos CF
    inner join
    Conteudo C on CF.fkConteudo = C.idConteudo
    where 
   CF.fkEmpresa = ${idEmpresa}
    ${filtroGeneroSQL} 
    order by
    C.notaConteudo desc
    limit 50
    offset ${linhasPassadas};
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