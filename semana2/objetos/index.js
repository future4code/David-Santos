// Exercícios de interpretação de código:

//1)
// a. Matheus Nachtergaele
// Virginia Cavendish
// undefined

//2)
// a. nome: Juca idade: 3 raca: SRD
//nome: Juba idade: 3 raca: SRD
//nome: Juco idade: 3 raca: SRD

//b. Os três pontos copiam os dados do objeto anterior no atual

//3)
//a. undefined

//b. Porque a função procura por um elemento na string, é a unica string no objeto não tem o conteudo procurado.

// Exercícios de escrita de código

//1)
//a.
/*const pessoa = {
  nome: "David", 
  apelidos: ["D", "David", "deividão"]
}
console.log(`Eu sou o ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

//b.
const pessoa02 = {
  ...pessoa
}
pessoa02.apelidos = ["du", "dudu", "edu"]

//2)
//a.
const ser = {
  nome: "Andre",
  idade: 26,
  profissao: "advogado"
}

const ser2 = {
  nome: "Anna",
  idade: "19",
  profissao: "Estudante"
}
//b.
function contar(ser) {
  const array = [ser.nome, ser.nome.length, ser.idade, ser.profissao, ser.profissao.length]
  return array
}
console.log(contar(ser2))*/

//3)
//a.
let carrinho = []

//b.
const fruta1 = {
  nome: "melancia",
  disponibilidade: true
}

const fruta2 = {
  nome: "Uva",
  disponibilidade: true
}

const fruta3 = {
  nome: "Banana",
  disponibilidade: true
}

//c.
function frutas(fruta) {
  carrinho.push(fruta)
  return fruta
}

frutas(fruta1)
frutas(fruta2)
frutas(fruta3)

//d.
console.log(carrinho)















