console.log("Bem vindo ao jogo de blackjack!")

const carta = comprarCarta()
const cartaA = comprarCarta()
const cartaB = comprarCarta()
const cartaC = comprarCarta()
const resultadoUsuario = carta.valor + cartaA.valor
const resultadoComputador = cartaB.valor + cartaC.valor

function jogo (){
if(confirm("Deseja iniciar uma nova rodada?")) {
console.log(`Usuario - cartas: ${carta.texto} ${cartaA.texto} - pontuação ${resultadoUsuario}`)
console.log(`Computador - cartas: ${cartaB.texto} ${cartaC.texto} - pontuação ${resultadoComputador}`)
if(resultadoUsuario > resultadoComputador) {
  console.log("O usuário ganhou!")
}else if(resultadoComputador > resultadoUsuario){
  console.log("O computador ganhou")
}else {
  console.log("Empate!")
}
}else {
console.log("O jogo acabou")
}
}
jogo()  

if (resultadoUsuario === 22 || resultadoComputador === 22){
   if(confirm("Deseja iniciar uma nova rodada?")) {
      jogo()
   }
}
function addcartas(){
if(resultadoUsuario <21 && resultadoComputador <21){
   if(confirm("Deseja iniciar uma nova rodada?")){
    
      
   }
} 
}

