DROP DATABASE IF EXISTS bonificacao;
CREATE DATABASE bonificacao;

USE bonificacao;

CREATE TABLE funcionarios(
    matricula INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(255) NOT NULL,
    admissao DATE NOT NULL,
    salario FLOAT (4,2) NOT NULL,
    data_pagamento DATE NOT NULL,
    desempenho FLOAT (2,1) NOT NULL 
);

INSERT INTO funcionarios(nome_completo, admissao, salario, data_pagamento, desempenho)
VALUES ("José Rodrigues", "2018-01-06", 1300.00, CURDATE(), 7),
       ("Maria Severo",	"2018-03-04", 2200.00, CURDATE(), 10),
       ("Silvia Silva",	"2019-05-20", 3200.00, CURDATE(), 10),
       ("Solange Oliveira", "2020-12-11", 5500.00, CURDATE(), 8.5),
       ("Mariana Pontes", "2021-12-13", 2350.00, CURDATE(), 6);
       
SELECT * FROM funcionarios