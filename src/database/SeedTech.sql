CREATE DATABASE seedTech;
USE seedTech;


CREATE TABLE Empresa (
  idEmpresa INT PRIMARY KEY auto_increment,
  razaoSocial VARCHAR(45),
  nomeFantasia VARCHAR(45),
  cnpj VARCHAR(20),
  email VARCHAR(45),
  senha VARCHAR(45),
  telefone CHAR(15)
);

CREATE TABLE Endereco (
  idEndereco INT PRIMARY KEY auto_increment,
  logradouro VARCHAR(45),
  bairro VARCHAR(45),
  numero VARCHAR(45),
  fkEmpresa INT,
  FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Funcionario (
  idFuncionario INT auto_increment,
  fkEmpresa INT,
  nome VARCHAR(45),
  cargo VARCHAR(45),
  cpf CHAR(14),
	senha varchar(45),
  email varchar(255) unique,
  FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa),
  PRIMARY KEY (idFuncionario, fkEmpresa)
);


CREATE TABLE Tpcafe (
  idTipo INT PRIMARY KEY auto_increment,
  nome VARCHAR(60),
  ppmMin INT,
  ppmMax INT
);

CREATE TABLE Viveiro (
  idViveiro INT PRIMARY KEY auto_increment,
  nome VARCHAR(45),
  tamanho FLOAT,
  fkTipoCafe INT,
  fkEmpresa INT,
  FOREIGN KEY (fkTipoCafe) REFERENCES Tpcafe(idTipo),
  FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Cultivo (
idCultivo int primary key auto_increment,
statusCultivo varchar(45),
fkViveiro int,
fkTipo int,
check (statusCultivo in ('Ativo', 'Suspenso', 'Finalizado')),
foreign key (fkViveiro) references Viveiro(idViveiro),
foreign key (fkTipo) references Tpcafe(idTipo)
);

CREATE TABLE sensor (
  idSensor INT PRIMARY KEY auto_increment,
  statusSensor VARCHAR(30),
  dtInstalacao DATE,
  numSerie char(13),
  nomeSensor varchar(45),
  areaSensor varchar(45),
  check (areaSensor in ('Norte', 'Sul', 'Leste', 'Oeste')),
  fkViveiro INT,
  FOREIGN KEY (fkViveiro) REFERENCES Viveiro(idViveiro)
);


create table Alerta(
idAlerta int primary key auto_increment ,
nomeSensor varchar(45),
nomeAlerta varchar(45),
ppmdealerta int,
ppmatealerta int,
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor)
);


CREATE TABLE Registros (
  idRegistros INT auto_increment unique,
  qtdPpm INT,
  dtRegistro DATE,
  horaRegistro TIME,
  fkSensor INT,
  fkalerta int,
  FOREIGN KEY (fkSensor) REFERENCES Sensor(idSensor),
  FOREIGN KEY (fkalerta) REFERENCES Alerta(idAlerta),
  PRIMARY KEY (fkSensor, idRegistros)
);

CREATE TABLE Contato (
  idContato INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  email VARCHAR(45),
  telefone CHAR(11),
  mensagem VARCHAR(500)
);


-- Inserts do projeto


insert into Empresa (razaoSocial,nomeFantasia, cnpj,email,senha) values 
	("Teste", "Fanstasdasdama", "12345674321234","teste@teste.com","teste123"),
	('SeedTech Ltda', 'SeedTech', '12345678000100', 'contato@seedtech.com', 'senha123');

INSERT INTO Endereco (logradouro, bairro, numero, fkEmpresa) VALUES
	('Rua das Palmeiras', 'Centro', '100', 1);
    
INSERT INTO Funcionario (fkEmpresa, nome, cargo, cpf) VALUES
	(1, 'João da Silva', 'Gerente', '12345678901');
    
insert into Tpcafe VALUES
	(DEFAULT, "canilon",800,1200),
	(DEFAULT, "arabica",200,900);

insert into Viveiro(nome, tamanho, fkTipoCafe,fkEmpresa) VALUES
	("Viveiro Bananinha", 1002,1,1),
	("Viveiro Testando", 1112,2,1),
	("Viveiro Testei", 1122,2,2),
	("Viveiro Testado", 1512,2,1),
	('Santa Maria', 1025, 1,1),
	("Viveiro Azulao", 101232,1,2);

INSERT INTO Cultivo (statusCultivo, fkViveiro, fkTipo) VALUES
	('Ativo', 1, 1),
	('Ativo', 2, 2),
	('Finalizado', 3, 2),
	('Suspenso', 4, 2),
	('Ativo', 5, 1);



INSERT INTO Sensor (statusSensor, dtInstalacao, numSerie, nomeSensor, areaSensor, fkViveiro) VALUES
	('Funcionando', '2025-01-01', 'SN0011223344', 'Norte', 1),
	('Funcionando', '2025-01-02', 'SN0022334455', 'Sul', 2),
	('Funcionando', '2025-01-03', 'SN0033445566', 'Leste', 3),
	('Funcionando', '2025-01-04', 'SN0044556677', 'Oeste', 4),
	('Funcionando', '2025-01-05', 'SN0055667788', 'Norte', 5);

INSERT INTO Sensor (statusSensor, dtInstalacao, numSerie , nomeSensor, areaSensor, fkViveiro) VALUES
	('Funcionando', '2025-01-01', 'SN0011223344','E. Sup', 'Norte', 1),
	('Funcionando', '2025-01-02', 'SN0022334455','E. Inf', 'Sul', 2),
	('Funcionando', '2025-01-03', 'SN0033445566','D.Sup', 'Leste', 3),
	('Funcionando', '2025-01-04', 'SN0044556677','D. Inf', 'Oeste', 4),
	('Funcionando', '2025-01-05', 'SN0055667788','AOBA', 'Norte', 5);

INSERT INTO Sensor (statusSensor, dtInstalacao, numSerie, nomeSensor, areaSensor, fkViveiro) VALUES
	('Funcionando', '2025-01-01', 'SN0011223344','E. Sup', 'Norte', 1),
	('Funcionando', '2025-01-02', 'SN0022334455','E. Inf', 'Sul', 2),
	('Funcionando', '2025-01-03', 'SN0033445566','D.Sup' ,'Leste', 3),
	('Funcionando', '2025-01-04', 'SN0044556677','D. Inf','Oeste', 4),
	('Funcionando', '2025-01-05', 'SN0055667788','D. Inf','Norte', 5);


INSERT INTO Alerta (nomeSensor, nomeAlerta, ppmdealerta, ppmatealerta, fkSensor) VALUES
('Sensor Norte', 'Crítico', 800, 1200, 1),
('Sensor Sul', 'Cauteloso', 150, 500, 2);


INSERT INTO Registros VALUES 
	(DEFAULT, 850, curdate(), CURRENT_TIME(), 1, 1),
	 (DEFAULT, 700, curdate(),CURRENT_TIME(), 1, 1),
	 (DEFAULT, 1300, curdate(), CURRENT_TIME(), 1, 1), 
	 (DEFAULT, 300, curdate(),CURRENT_TIME(), 2, 2), 
	 (DEFAULT, 150, curdate(), CURRENT_TIME(), 2, 2), 
	 (DEFAULT, 950, curdate(), CURRENT_TIME(), 2, 2), 
	 (DEFAULT, 250, curdate(), CURRENT_TIME(), 3, 2),
	(DEFAULT, 180, curdate(), CURRENT_TIME(), 4, 2),
	(DEFAULT, 1250, curdate(), CURRENT_TIME(), 5, 1);
    
select * from sensor;

-- Insert de suporte da SeedTech

insert into Empresa (razaoSocial,nomeFantasia,email,senha) values ('Suporte', 'Suporte', 'seedtech@suporte.com', 'suporte474@');

select * from registros order by idRegistros desc;
 
  