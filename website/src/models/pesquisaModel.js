var database = require("../database/config")

function listarPesquisa(linhasPassadas, idEmpresa) {
    var instrucao = `

    select
    c.idConteudo,
    c.tituloConteudo,
    c.dtLancamentoCont,
    c.notaConteudo,
    c.generosConteudo,
    case 
        when cf.fkConteudo IS NOT NULL THEN 1 
        else 0 
    end as favoritado
    from Conteudo c
    left join ConteudosFavoritos cf
    on cf.fkConteudo = c.idConteudo
    and cf.fkEmpresa = ${idEmpresa}
    where numVotosCont > 200
    order by notaConteudo desc
    limit 75
    offset ${linhasPassadas};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPesquisaData(linhasPassadas, idEmpresa, de,ate) {
    var instrucao = `

    select
    c.idConteudo,
    c.tituloConteudo,
    c.dtLancamentoCont,
    c.notaConteudo,
    c.generosConteudo,
    case 
        when cf.fkConteudo IS NOT NULL THEN 1 
        else 0 
    end as favoritado
    from Conteudo c
    left join ConteudosFavoritos cf
    on cf.fkConteudo = c.idConteudo
    and cf.fkEmpresa = ${idEmpresa}
    where numVotosCont > 200 and
    dtLancamentoCont >= '${de}-01-01' and dtLancamentoCont <= '${ate}-01-01'
    order by notaConteudo desc
    limit 75
    offset ${linhasPassadas};
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

function desfavoritar(idFilme, idEmpresa) {
    var instrucao = `
    delete from ConteudosFavoritos where fkConteudo = ${idFilme} and fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    listarPesquisa,
    favoritar,
    desfavoritar,
    listarPesquisaData
};