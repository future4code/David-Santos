-- 1 A: É a chave primaria proveniente de outra tabela

-- 1 B:
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (id) REFERENCES Filmes(id)
);

INSERT INTO Rating
VALUES(
	"002",
    "Legal",
    9,
    "002"
);

-- 1 C: O sql não consegue encontrar o id solicitado
INSERT INTO Rating
VALUES(
	"001",
    "Legal",
    9,
    "001"
);

-- 1 D:
Alter table Filmes drop column avalicao;

-- 1 E: O filme não pode ser apagado pois esta sendo utilizado em outra tabela
delete from Filmes
where id = "002";

-- 2 A: A tabela recebe as chaves estrangeiras da tabela Filmes e Actor

-- 2 B:
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

insert into MovieCast
values(
	"002",
	"001"
);

insert into MovieCast
values(
	"002",
	"002"
);

insert into MovieCast
values(
	"002",
	"003"
);

insert into MovieCast
values(
	"002",
	"004"
);

insert into MovieCast
values(
	"003",
	"001"
);

insert into MovieCast
values(
	"003",
	"002"
);

insert into MovieCast
values(
	"003",
	"003"
);

-- 2 C: Os dados não foram inseridos porque a chave estrangeira não foi encontrada
insert into MovieCast
values(
	"001",
	"003"
);

-- 2 D: O ator não pode ser apagado pois esta sendo utilizado em outra tabela
delete from Actor
where id = "001";

-- 3 A: On é a condição