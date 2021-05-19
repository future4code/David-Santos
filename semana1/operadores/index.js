/*Exercicios interpretação de código
Exercício 1: a. false; b. false; c. true; d. boolean
Exercício 2: O javascript está interpretando como um dado string, os numeros serão impressos um ao lado do outro e não somados
Exercício 3: Ele precisa modificar para Number para realizar o calculo. Ex: let segundoNumero = Number(prompt("Digite outro numero!"))*/

//Exercício de escrita de código

//Exercício 1:
/*const userIdade = Number(prompt("Qual sua idade?")) 
const idadeAmigo = Number(prompt("Qual a idade do seu amigo ou sua melhor amiga?")) 
console.log('Sua idade é maior que a do seu melhor amigo', userIdade > idadeAmigo)
console.log('Diferença de idade', userIdade - idadeAmigo)

//Exercício 2: 
const numero = Number(prompt('Digite um numero par'))
console.log('Resto da divisão', numero % 2)
// Todo numero par tem 0 de resto
// Todo numero impar tem 1 de resto

//Exercício 3:
const idade = Number(prompt('digite sua idade em anos'))
console.log('Sua idade em meses', idade * 12)
console.log('Sua idade em dias', (idade * 12)*30)
console.log('Sua idade em horas', ((idade * 12)*30)*24)*/

// Exercício 4: 
const numero1 = (prompt('Digite um numero qualquer'))
const numero2 = (prompt('Digete outro numero qualquer'))

console.log('O primeiro numero é maior que o segundo?',  numero1 > numero2)
console.log('O primeiro numero é igual ao segundo?',  numero1 === numero2)

const divisao1 = numero1 % numero2
console.log("O primeiro numero é divisivel pelo segundo?", divisao1 === 0)
const divisao2 = numero2 % numero1
console.log("O segundo numero é divisivel pelo primeiro", divisao2 === 0)


