//Exercícios de interpretação de código

//1)
//a. Testa se um numero é divisivel por 2
//b. Apenas numeros pares
//c. Numeros ímpares

//B)
//a. Para aprensentar o valor das frutas
//b. O preço da fruta maça é R$ 2.25
//c. O conteudo do case pera será apresentado junto ao default

//C)
//a. Avaliando se o numero é maior que 0
//b. Se digitou 10: "Este numero passou no teste" e underfined. Se inseriu -10 : Não há mensagem
// c. Sim a variavel let foi declarada no escopo exclusivo do if, sendo assim, não pode ser chamada pelo console.log no escopo global.

//Exercícios de escrita de código

//1)
//a/b.
const idade = Number(prompt("Qual sua idade?"))
//c.
if (idade >= 18) {
    console.log("Você pode dirigir")
}else{
    console.log("Você nâo pode dirigir")
}

//2)
const pergunta = prompt("Conforme seu turno digite a letra correspondente: M(matutino), V(vespertino) ou N(noturno").toLowerCase()

if (pergunta === "m") {
    console.log("Bom dia!")
}else if (pergunta === "v") {
    console.log("Boa tarde!")
}else if (pergunta === "n") {
    console.log("Boa noite!")
} 

//3)
switch (pergunta) {
    case "m":
        console.log("Bom dia!")
    break
    case "v":
        console.log("Boa tarde!")
    break
    case "n":
        console.log("Boa noite!")
    break
}

//4)
const generoDoFilme = prompt("Insira o genero do filme que quer assistir").toLowerCase()
const preco = Number(prompt("Digite o valor do ingresso"))

if(generoDoFilme === "fantasia" && preco < 15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}
