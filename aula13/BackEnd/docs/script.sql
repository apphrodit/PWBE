DROP DATABASE IF EXISTS avaliacao;
CREATE DATABASE avaliacao;

USE avaliacao;

CREATE TABLE pacientes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(153) NOT NULL,
    data_nascimento DATE NOT NULL,
    peso FLOAT NOT NULL,
    altura FLOAT NOT NULL
);

INSERT INTO pacientes(nome, data_nascimento, peso, altura) 
VALUES ("Jair Rodrigues", "1981-01-03", 85.5, 1.75),
       ("Marieta Severo", "1995-03-04", 44.3, 1.55),
       ("Karina Silva", "2002-05-13", 88, 1.73),
       ("Solange Nascimento", "2005-12-01", 95, 1.58),
       ("Marcos Pontes", "2001-12-03", 60, 1.98);


 SELECT * FROM pacientes