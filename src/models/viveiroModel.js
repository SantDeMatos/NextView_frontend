var database = require("../database/config");

function vizualizarViveiros(id) {
    const instrucaoSql = `
         SELECT 
            v.idViveiro,
            e.nomeFantasia,
            v.nome AS nomeViveiro,
            MAX(r.qtdPpm) AS maior,
            MIN(r.qtdPpm) AS menor,
            t.nome AS tipoCafe
        FROM Viveiro v
        JOIN Sensor s ON s.fkViveiro = v.idViveiro
        JOIN (
            SELECT fkSensor, MAX(idRegistros) AS ultimoRegistro
            FROM Registros
            GROUP BY fkSensor
        ) ult ON ult.fkSensor = s.idSensor
        JOIN Registros r ON r.idRegistros = ult.ultimoRegistro
        JOIN Tpcafe t ON v.fkTipoCafe = t.idTipo
        JOIN Empresa e ON e.idEmpresa = v.fkEmpresa
        WHERE e.idEmpresa = ${id}
        GROUP BY v.idViveiro, v.nome, t.nome
        ORDER BY v.idViveiro ASC;

    `;
    console.log(id + "Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function kpi(id) {

    const instrucaoSql = `
  SELECT 
  r.qtdPpm, v.nome
FROM Sensor s
JOIN (
    SELECT fkSensor, MAX(idRegistros) AS ultimo_registro
    FROM Registros
    GROUP BY fkSensor
) ult ON s.idSensor = ult.fkSensor
JOIN Registros r ON r.idRegistros = ult.ultimo_registro
JOIN Viveiro v ON s.fkViveiro = v.idViveiro
JOIN Tpcafe t ON v.fkTipoCafe = t.idTipo
WHERE fkEmpresa = ${id};
    `;
    console.log(id + "Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


function kpi2(id) {

    const instrucaoSql = `
     
 SELECT 
  r.qtdPpm, s.areaSensor
FROM Sensor s
JOIN (
    SELECT fkSensor, MAX(idRegistros) AS ultimo_registro
    FROM Registros
    GROUP BY fkSensor
) ult ON s.idSensor = ult.fkSensor
JOIN Registros r ON r.idRegistros = ult.ultimo_registro
JOIN Viveiro v ON s.fkViveiro = v.idViveiro
JOIN Tpcafe t ON v.fkTipoCafe = t.idTipo
WHERE fkEmpresa = ${id};
    `;
    console.log(id + "Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


function kpi3(id) {

    const instrucaoSql = `
    select 
    count(reg.qtdPPM) as contalert 
    from Registros as reg 
    join Sensor 
    as sen on sen.idSensor = reg.fkSensor 
    join Viveiro as viv on viv.idViveiro = sen.fkViveiro 
    join Empresa as emp on emp.idEmpresa = viv.fkEmpresa
    where reg.dtRegistro >= DATE_SUB(CURDATE(), INTERVAL 30 DAY) 
    and 
    ( reg.qtdPPM > 800 or reg.qtdPPM < 500) and emp.idEmpresa = ${id} `;
    console.log(id + "Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);

}



function kpiviv_1(id, idviv) {

    const instrucaoSql = `

    SELECT 
  r.qtdPpm
FROM Sensor s
JOIN (
    SELECT fkSensor, MAX(idRegistros) AS ultimo_registro
    FROM Registros
    GROUP BY fkSensor
) ult ON s.idSensor = ult.fkSensor
JOIN Registros r ON r.idRegistros = ult.ultimo_registro
JOIN Viveiro v ON s.fkViveiro = v.idViveiro
JOIN Tpcafe t ON v.fkTipoCafe = t.idTipo
WHERE v.idViveiro = ${idviv} and fkEmpresa = ${id};
`;

    console.log(id + "Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);

}




function kpiviv_2(id, idviv) {

    const instrucaoSql = `
    SELECT 
  r.qtdPpm, s.areaSensor
FROM Sensor s
JOIN (
    SELECT fkSensor, MAX(idRegistros) AS ultimo_registro
    FROM Registros
    GROUP BY fkSensor
) ult ON s.idSensor = ult.fkSensor
JOIN Registros r ON r.idRegistros = ult.ultimo_registro
JOIN Viveiro v ON s.fkViveiro = v.idViveiro
JOIN Tpcafe t ON v.fkTipoCafe = t.idTipo
WHERE v.idViveiro = ${idviv} and fkEmpresa = ${id};

`;

    console.log(id + "Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function kpiviv_3(id, idviv) {

    const instrucaoSql = `
SELECT 
  r.qtdPpm
FROM Sensor s
JOIN (
    SELECT fkSensor, MAX(idRegistros) AS ultimo_registro
    FROM Registros
    GROUP BY fkSensor
) ult ON s.idSensor = ult.fkSensor
JOIN Registros r ON r.idRegistros = ult.ultimo_registro
JOIN Viveiro v ON s.fkViveiro = v.idViveiro
JOIN Tpcafe t ON v.fkTipoCafe = t.idTipo
WHERE v.idViveiro = ${idviv} and fkEmpresa = ${id};`;

    console.log(id + "Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


function kpiviv_4(id, idviv) {

    const instrucaoSql = `
SELECT 
  r.qtdPpm
FROM Sensor s
JOIN (
    SELECT fkSensor, MAX(idRegistros) AS ultimo_registro
    FROM Registros
    GROUP BY fkSensor
) ult ON s.idSensor = ult.fkSensor
JOIN Registros r ON r.idRegistros = ult.ultimo_registro
JOIN Viveiro v ON s.fkViveiro = v.idViveiro
JOIN Tpcafe t ON v.fkTipoCafe = t.idTipo
WHERE v.idViveiro = ${idviv} and fkEmpresa = ${id};`;

    console.log(id + "Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);

}



module.exports = {
    vizualizarViveiros,
    kpi,
    kpi2,
    kpi3,
    kpiviv_1,
    kpiviv_2,
    kpiviv_3,
    kpiviv_4
}