CREATE DATABASE nextview;

USE nextview;


CREATE TABLE empresa (
  idEmpresa INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nomeEmpresa VARCHAR(50) NOT NULL,
   cnpjEmpresa VARCHAR(18) UNIQUE NOT NULL,
  emailEmpresa VARCHAR(50) NOT NULL, 
  telefoneEmpresa VARCHAR(14) NOT NULL,
  senhaEmpresa VARCHAR(50) NOT NULL
);

CREATE TABLE contato (
  idContato INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nomeContato VARCHAR(45) NOT NULL,
  emailContato VARCHAR(50) NOT NULL,
  mensagemContato VARCHAR(200) NOT NULL,
  telefoneContato VARCHAR(14) NOT NULL
);



select * from contato;

select * from empresa;
