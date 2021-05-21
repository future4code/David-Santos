//Exercícios de interpretação de código:

//1)

//2)
//a. 19, 21,23, 25, 27, 30
//b. Não, precisa ser feito com o laço for comun junto ao .length

//3)

//Exercícios de escrita de código

//1)
/*const numPets = Number(prompt("Quantos bichinhos de estimação você tem"))
let nomeDosBichos = []
let i

if(numPets === 0) {
  console.log("Que pena! Você devia adotar um pet!")
}else {
  for(i = 0; numPets > i; i++){
    nomeDosBichos = prompt("Qual o nome dos bichinhos?")
    console.log(nomeDosBichos)
  }
}*/

//2)
let arrayOriginal = [2,4,6,8,10]

//a.
/*for(let imprime of arrayOriginal){
  console.log(imprime)
}

//b.
for(let imprime of arrayOriginal){
  console.log(imprime / 10)
}

//c.
let trueArray = []

for(let i of arrayOriginal){
  if(arrayOriginal[i] % 2 === 0) {
    trueArray = arrayOriginal
}
}
console.log(trueArray)

//d.
let newArray = []

for(let i of arrayOriginal){
newArray = `O elemento do index ${arrayOriginal.indexOf(i)} é ${i}`
console.log(newArray)
}*/

//e.
const menorNumero = arrayOriginal[1]
const maiorNumero = arrayOriginal[arrayOriginal.length-1]

console.log(` O maior numero é ${maiorNumero} e o menor é ${menorNumero}`)