var database = require("../database/config")

function listarPesquisaGeneros(linhasPassadas, idEmpresa, generosString) {
    var filtroGeneroSQL = "";
    if (generosString) {
        const arrayGeneros = generosString.split(',');

        const condicoes = arrayGeneros.map(g => `c.generosConteudo like '%${g}%'`).join(' OR ');

        filtroGeneroSQL = `AND (${condicoes})`;
    }

    var instrucao = `
    select
    c.idConteudo,
    c.tituloConteudo,
    c.dtLancamentoCont,
    c.notaConteudo,
    c.generosConteudo,
    case 
        when cf.fkConteudo is not null then 1 
        else 0 
    end as favoritado
    from Conteudo c
    left join ConteudosFavoritos cf
        on cf.fkConteudo = c.idConteudo
        and cf.fkEmpresa = ${idEmpresa}
    where c.numVotosCont > 200
        ${filtroGeneroSQL} 
    order by c.notaConteudo desc
    limit 50
    offset ${linhasPassadas};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPesquisaData(linhasPassadasData, idEmpresa, de, ate) {
    var instrucao = `
    select
    c.idConteudo,
    c.tituloConteudo,
    c.dtLancamentoCont,
    c.notaConteudo,
    c.generosConteudo,
    case 
        when cf.fkConteudo is not null then 1 
        else 0 
    end as favoritado
    from Conteudo c
    left join ConteudosFavoritos cf
    on cf.fkConteudo = c.idConteudo
    and cf.fkEmpresa = ${idEmpresa}
    where numVotosCont > 200 and
    dtLancamentoCont >= '${de}-01-01' and dtLancamentoCont < '${parseInt(ate) + 1}-01-01'
    order by dtLancamentoCont, notaConteudo desc
    limit 50
    offset ${linhasPassadasData};
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

function listarPesquisa(linhasPassadas, idEmpresa) {
    var instrucao = `
    select
    c.idConteudo,
    c.tituloConteudo,
    c.dtLancamentoCont,
    c.notaConteudo,
    c.generosConteudo,
    case 
        when cf.fkConteudo is not null then 1 
        else 0 
    end as favoritado
    from Conteudo c
    left join ConteudosFavoritos cf
    on cf.fkConteudo = c.idConteudo
    and cf.fkEmpresa = ${idEmpresa}
    where numVotosCont > 200
    order by notaConteudo desc
    limit 50
    offset ${linhasPassadas};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarResultado(linhasPassadasResultado, idEmpresa, busca) {
    var instrucao = `
    select
    c.idConteudo,
    c.tituloConteudo,
    c.dtLancamentoCont,
    c.notaConteudo,
    c.generosConteudo,
    case 
        when cf.fkConteudo is not null then 1 
        else 0 
    end as favoritado
    from Conteudo c
    left join ConteudosFavoritos cf
    on cf.fkConteudo = c.idConteudo
    and cf.fkEmpresa = 1 -- ${idEmpresa}
    where c.tituloConteudo like '%${busca}%'
    order by notaConteudo desc
    limit 50
    offset ${linhasPassadasResultado};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarPesquisa,
    listarPesquisaGeneros,
    favoritar,
    desfavoritar,
    listarPesquisaData,
    listarResultado
};