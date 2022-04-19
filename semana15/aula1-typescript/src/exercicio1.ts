type pessoa = {
    nome: string,
    idade: number,
    corFavorita: COR_DO_ARCO_IRIS,
}

enum COR_DO_ARCO_IRIS {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const primeira: pessoa = {
    nome: "Juliana",
    idade: 20,
    corFavorita: COR_DO_ARCO_IRIS.VERMELHO
}

const Segunda: pessoa = {
    nome: "Rosa",
    idade: 40,
    corFavorita: COR_DO_ARCO_IRIS.VERDE
}

const Terceira: pessoa = {
    nome: "leticia",
    idade: 25,
    corFavorita: COR_DO_ARCO_IRIS.VIOLETA
}