var database = require("../database/config")

function cadastrar(nomeAlerta, nomeSensor, ppmAlerta_min, ppmAlerta_max, nomeViveiro, areaSensor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeSensor, ppmAlerta_min, ppmAlerta_max);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into Alerta (nomeSensor, nomeAlerta, ppmdealerta, ppmateAlerta, fkSensor)
            select '${nomeSensor}','${nomeAlerta}', ${ppmAlerta_min}, ${ppmAlerta_max}, idSensor
            from Sensor
                where nomeSensor = '${nomeSensor}' and fkViveiro =
                    (select fkViveiro 
                        from Sensor
                            join Viveiro v
                                on fkViveiro = idViveiro
                                where v.nome = '${nomeViveiro}'
                                and nomeSensor = '${nomeSensor}')
                    and areaSensor = '${areaSensor}'


            `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarViveiros() {
    var instrucao = ` 
        select nome from Viveiro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarAlertas(id) {
    var instrucao = ` 
        select *, v.nome, concat( ppmdealerta , ' - ' , ppmatealerta) as ppmAlerta from Alerta
            join Sensor on fkSensor = idSensor
                join Viveiro v on fkViveiro = idViveiro
                join Empresa    
                where idEmpresa = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarSensores(nomeViveiro, areaSensor) {
    var instrucao = ` 
        select nomeSensor from Sensor
        where fkViveiro = (select idViveiro from Viveiro where nome = '${nomeViveiro}')
        and areaSensor = '${areaSensor}'; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarAreas(nomeViveiro) {
    var instrucao = ` 
        select areaSensor from Sensor
        where fkViveiro = (select idViveiro from Viveiro where nome = '${nomeViveiro}'); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listarViveiros,
    listarSensores,
    listarAreas,
    listarAlertas
};