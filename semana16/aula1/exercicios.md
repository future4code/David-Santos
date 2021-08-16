

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor
value(
	"001",
	"Tony Ramos",
    4000,
    "1948-08-25",
    "Male"
);
-- Ex2 A:
INSERT INTO Actor
value(
	"002",
	"Glória Pires",
    1200,
    "1963-08-23",
    "Female"
);

-- EX2 B: Não pode existir duas chaves primarias com o mesmo valor

-- EX2 C: O insert possui parenteses, entao para adicionar o valor de date e gender, a coluna deve ser inserida entre os parenteses
INSERT INTO Actor (id, name, salary)
VALUES(
  "005", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- Ex2 D: O nome não pode ser nulo
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- Ex2 E: O nome não pode ser nulo

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

-- EX3: A:
SELECT * from Actor WHERE gender = "female";

-- EX3: B:
SELECT salary from Actor WHERE name = "Tony Ramos";

-- EX3 c: Não sei
SELECT gender from Actor WHERE gender = "invalid";

-- EX3 D: 
SELECT id, name, salary from Actor WHERE salary <= 500;

-- EX3 E: A coluna nome não existe
SELECT id, name from Actor WHERE id = "002";

-- Ex4 A: A query pega todos os dados dos atores que recebem mais de 300000, se o nome inicar com A ou J

-- EX4 B: 
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

-- EX4 C:
Select * From Actor WHERE name LIKE "%G%" AND name LIKE "%g%";

-- EX4 D: 
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "a%" OR name LIKE "G%" OR name LIKE "g%") AND salary BETWEEN 350000 and 900000;

-- EX5 A:
CREATE TABLE Filmes(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);
-- EX5 B:

INSERT INTO Filmes
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

-- EX5 C:
INSERT INTO Filmes
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

-- EX5 D:
INSERT INTO Filmes
VALUES(
  "003", 
  "Dona Flor e Seus dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

-- EX5 E:
INSERT INTO Filmes
VALUES(
  "004", 
  "O auto da compadecida",
  "As aventuras dos nordestinos João Grilo, um sertanejo pobre e mentiroso, e Chicó, o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora. Adaptação da obra de Ariano Suassuna.",
  "2000-09-10", 
  9
);

-- EX6 A:
SELECT id, name, avaliacao from Filmes WHERE id = "001";

-- EX6 B: 
SELECT * from Filmes WHERE name = "O auto da compadecida";

-- EX6 C: 
SELECT id, name, sinopse from Filmes WHERE avaliacao >= 7;

-- EX7 A:
SELECT * from Filmes WHERE name LIKE "%vida%";

-- EX7 B: 
SELECT * from Filmes WHERE (name LIKE "%nossa%" OR sinopse LIKE "%nossa%");

-- EX8 C:
SELECT * from Filmes WHERE data_de_lancamento <= "2021-08-16";

-- EX8 D:
SELECT * from Filmes WHERE data_de_lancamento <= "2021-08-16" AND (name LIKE "%nossa%" OR sinopse LIKE "%nossa%") AND avaliacao > 7;