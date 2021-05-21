//Exercícios de escrita de código

//1)O index, objeto correspondete ao index e a array

//2)Os nomes das intrutoras

//3)As informações da chijo contidas na array

//Exercícios de escrita de código

//1)
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]
//a.
/*const nomePets = pets.map((dog) =>{
  return dog.nome
})
console.log(nomePets)
//b.
const salsichas = pets.filter((dog) =>{
  return dog.raca === "Salsicha"})
console.log(salsichas)
//c.
const mensagens = pets.filter((dog) => {
  return dog.raca === "Poodle"
}).map((dog) =>{
  console.log(`Você ganhou um cupom de 10% para tosar o/a ${dog.nome}`)
})*/

//2)
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a. 
/*const nomeProdutos = produtos.map((produto)=>{
  return produto.nome
})
console.log(nomeProdutos)
//b.
const nomeProdutos = produtos.map((produto)=>{
  return produto.nome
})
//c.
const categoriaProdutos = produtos.filter((produto)=>{
  return produto.categoria === "Bebidas"
})
console.log(categoriaProdutos)
//d. 
const buscaPalavra = produtos.filter((produto) => { 
  return produto.nome.includes("Ypê") 
})
console.log(buscaPalavra)
 //e.
 const buscaPalavra = produtos.filter((produto) => { 
  return produto.nome.includes("Ypê") 
})
const Mensagem = buscaPalavra.map((arvore)=>{
  console.log(`Compre ${arvore.nome} por ${arvore.preco}`)
})*/





