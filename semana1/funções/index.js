//Exercícios de interpretação de código

//Exercício 1: A. 10 50; B. Apareceria nada, somente terá resultado se o console.log estiver dentro da função
//Exercício 2: A. Recebe a resposta do usuario, aplica caixa baixa na string e verifica se foi escrito cenoura na string
// 2) B. i eu gosto de cenoura true; ii cenoura é bom pra vista true; iii cenouras crescem na terra true

// Exercícios de escrita de código

//Exercício 1:
//A:
/*function eu(){
    console.log(`Eu sou David, tenho 19 anos, moro em Santana de parnaíba - SP e sou Estudante.`)
}

eu()

//B:
function eu(nome, idade, endereco, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
}

eu("David", "19", "Santana de parnaíba - SP", "Estudante")

//Exercício 2:

//A.
function numeros(num1, num2){
    numeros = num1 * num2
    return numeros
}
console.log(numeros(2,2))

//b.
function numeros(num1, num2){
    numeros = num1 >= num2
    return numeros
}
console.log(numeros(10,11))

//c.
function numero(num){
    numero = num % 2 === 0
    return numero
}
console.log(numero(10))

//d.
function mensagem(string){
    const tamanho = string.length
    mensagem = string.toUpperCase() + " " + tamanho
    return  mensagem
}
 console.log(mensagem("Qualquer coisa"))*/


 //Exercício 3:
 function numeros(num1, num2){
 numeros = soma, subtracao, multiplicacao, divisao
     function soma(){
         soma = num1 + num2
         console.log(`soma: ${soma}`)
     }
     function subtracao(){
         subtracao = num1 - num2
         console.log(`diferença: ${subtracao}`)
     }
     function multiplicacao(){
         multiplicacao = num1 * num2
         console.log(`Multiplicação: ${multiplicacao}`)
     }
     function divisao(){
         divisao = num1 / num2
         console.log(`divisao: ${divisao}`)
     }
     console.log(`numeros inseridos: ${num1} e ${num2}`)
    numeros(prompt(`Escolha um numero`), prompt(`Escolha mais um numero`))
 }
