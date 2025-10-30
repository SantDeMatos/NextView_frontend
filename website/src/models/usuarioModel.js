var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idEmpresa, nomeEmpresa, emailEmpresa,cnpjEmpresa FROM Empresa WHERE emailEmpresa = '${email}' AND senhaEmpresa = SHA2('${senha}',256);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nomeEmpresa, cnpj, email, senha, telefone) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nomeEmpresa, cnpj, email, senha, telefone);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Empresa (nomeEmpresa, cnpjEmpresa, emailEmpresa, senhaEmpresa, telefoneEmpresa) VALUES ( '${nomeEmpresa}', '${cnpj}', '${email}',SHA2('${senha}',256), '${telefone}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contato(nome, email, telefone, mensagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, telefone, mensagem);
    
    var instrucaoSql = `
        INSERT INTO Contato (nomeContato, emailContato, telefoneContato, mensagemContato) VALUES 
        ('${nome}', '${email}', '${telefone}', '${mensagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    contato
};