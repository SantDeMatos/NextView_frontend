
var database = require("../database/config")

function listar(id) {
    var instrucao = `
    select 
    reg.qtdPpm, 
    reg.dtRegistro, 
    al.fkSensor,
    viv.nome, 
    reg.horaRegistro, 
    sen.areaSensor, 
    al.nomeAlerta 
    from 
    Registros 
    as reg join Alerta as al on 
    reg.fkalerta = al.idalerta 
    join Sensor as sen on reg.fksensor = sen.idSensor 
    join Viveiro as viv on  
    sen.fkViveiro = viv.idViveiro 
    join Empresa as emp on viv.fkEmpresa = emp.idEmpresa 
    where idEmpresa = ${id} order by dtRegistro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao + id);
    return database.executar(instrucao);
}


function alertas(id) {
    var instrucao = `

select * from Alerta as al join Sensor as s on s.idSensor = al.fkSensor
 join Viveiro as viv on viv.idViveiro = s.fkViveiro
join Empresa as emp on emp.idEmpresa = viv.fkEmpresa where emp.idEmpresa = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao + id);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    alertas
};


