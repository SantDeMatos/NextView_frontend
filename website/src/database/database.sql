CREATE DATABASE nextview;
USE nextview;

CREATE TABLE empresa (
  idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
  nomeEmpresa VARCHAR(50) NOT NULL,
  emailEmpresa VARCHAR(50) NOT NULL,
  cnpjEmpresa VARCHAR(14) UNIQUE NOT NULL,
  telefoneEmpresa VARCHAR(11) NOT NULL,
  senhaEmpresa VARCHAR(128) NOT NULL
);
CREATE TABLE contato (
    idContato INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nomeContato VARCHAR(45) NOT NULL,
    emailContato VARCHAR(50) NOT NULL,
    mensagemContato VARCHAR(200) NOT NULL,
    telefoneContato VARCHAR(14) NOT NULL
);

CREATE TABLE log(

idLog INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
dtLog DATETIME NOT NULL,
descLog VARCHAR(255) NOT NULL,
qtdErro INT NOT NULL,
tipo VARCHAR(50)
);

describe log;



select * from contato;

select * from empresa;