var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    res.json({
                        idEmpresa: resultadoAutenticar[0].idEmpresa,
                        emailEmpresa: resultadoAutenticar[0].emailEmpresa,
                        nomeEmpresa: resultadoAutenticar[0].nomeEmpresa,
                        cnpjEmpresa: resultadoAutenticar[0].cnpjEmpresa,
                        telefoneEmpresa: resultadoAutenticar[0].telefoneEmpresa
                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cnpj = req.body.cnpjServer;
    var telefone = req.body.telefoneServer

    // Faça as validações dos valores
    if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nomeEmpresa == undefined) {
        res.status(400).send("Seu nome Fantasia está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    }
    else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeEmpresa, cnpj, email, senha, telefone)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// function cadastrarFunc(req, res) {
//     var fkEmpresa = req.body.idUsuarioServer;
//     var nome = req.body.nomeServer;
//     var email = req.body.emailServer;
//     var cargo = req.body.cargoServer;
//     var cpf = req.body.cpfServer;

//     if (nome == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     } else if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (cargo == undefined) {
//         res.status(400).send("Seu cargo está undefined!");
//     } else if (cpf == undefined) {
//         res.status(400).send("Seu cpf está undefined!");
//     } else if (fkEmpresa == undefined) {
//         res.status(400).send("ID da empresa (fkEmpresa) está undefined!");
//     } else {
//         usuarioModel.cadastrarFunc(fkEmpresa, nome, email, cargo, cpf)
//             .then(function (resultado) {
//                 res.json(resultado);
//             }).catch(function (erro) {
//                 console.log(erro);
//                 console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             });
//     }
// }


function contato(req, res) {
    var nome = req.body.nome
    var email = req.body.email
    var telefone = req.body.telefone
    var mensagem = req.body.mensagem


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else if (mensagem == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else {
        usuarioModel.contato(nome, email, telefone, mensagem)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function atualizar(req, res) {
    var empresa = req.body.empresaServer
    var email = req.body.emailServer
    var telefone = req.body.telefoneServer
    var cnpj = req.body.cnpjServer
    var id = req.body.idServer

    usuarioModel.atualizar(empresa, email, telefone, cnpj, id)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });

}


module.exports = {
    autenticar,
    cadastrar,
    contato,
    atualizar
}