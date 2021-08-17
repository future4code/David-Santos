SET SQL_SAFE_UPDATES = 0;
-- 1 A: Removeria a tabela coluna salary
-- 2 B: Altera o nome da coluna gender para sex e limita o campo a 6 caracteres
-- 3 C: Altera o nome da coluna sex para gender e extende o limite do campo

-- 1 D:
ALTER TABLE Actor 
CHANGE gender gender varchar(100);

-- 2 A:
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1936-10-05"
WHERE id="3";

-- 2 B: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Juliana Paes",
  400000,
  "1979-03-26", 
  "Female"
);

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

-- 2 C:

UPDATE Actor
SET name = "Fernanda Montenegro", Salary = 700000, birth_date = "1929-10-16", gender = "FEMALE"
WHERE id = "005";

-- 2 D: Segundo o mysql é um erro de sintaxe, mas na pratica ele não pode atualizar uma informação se a referencia estiver errada
UPDATE Actor
SET name = "Mariana Ximenes",
WHERE id = "007";

-- 3 A:
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";

 -- 3 B: 
 DELETE FROM Actor 
 WHERE salary > 1000000 AND gender = "MALE";

-- 4 A: 
SELECT MAX(salary) 
FROM Actor;

-- 4 B: 
SELECT MIN(salary) 
FROM Actor;

-- 4 C: 
SELECT COUNT(*) 
FROM Actor 
WHERE gender = "female";

-- 4 D:
SELECT SUM(salary) 
From Actor;

-- 5 A: O sql somou o genero dos 4 atores presentes na tabela
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- 5 B:
SELECT id, name
FROM Actor
ORDER BY name DESC;

-- 5 C:
SELECT *
FROM Actor
ORDER BY salary;

-- 5 D: 
SELECT *
FROM Actor
ORDER BY salary DESC;

-- 5 E:
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

-- 6 A: 
ALTER TABLE Filmes 
ADD playing_limit_date DATE;

-- 6 B:
ALTER TABLE Filmes
CHANGE avaliacao avalicao FLOAT;

-- 6 C:
UPDATE Filmes
SET playing_limit_date = "2021-10-21"
WHERE id = "001";

UPDATE Filmes
SET playing_limit_date = "2021-11-22"
WHERE id = "002";

-- 6 D:
DELETE FROM Filmes 
WHERE id="001";

-- 7 A:
SELECT COUNT(*)
FROM Filmes 
WHERE avalicao > 7.5;
-- 7 B:
SELECT AVG(avalicao) 
FROM Filmes;