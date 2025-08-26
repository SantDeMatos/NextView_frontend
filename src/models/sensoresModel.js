var database = require("../database/config");

function listar(idviveiro, idEmpresa) {
    var instrucao = `
               SELECT 
  s.idSensor,
  s.nomeSensor,
  s.areaSensor,
  r.qtdPpm,
  v.nome AS nomeViveiro,
  v.fkTipoCafe,
  t.nome AS nomeCafe
FROM Sensor s
JOIN (
    SELECT fkSensor, MAX(idRegistros) AS ultimo_registro
    FROM Registros
    GROUP BY fkSensor
) ult ON s.idSensor = ult.fkSensor
JOIN Registros r ON r.idRegistros = ult.ultimo_registro
JOIN Viveiro v ON s.fkViveiro = v.idViveiro
JOIN Tpcafe t ON v.fkTipoCafe = t.idTipo
WHERE v.idViveiro = ${idviveiro} and fkEmpresa = ${idEmpresa};

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDados() {
    var instrucao = `
        select * from Registros order by idregistros desc limit 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    buscarDados
};


