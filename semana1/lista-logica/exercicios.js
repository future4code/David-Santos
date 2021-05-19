// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
     let altura = prompt("Insira a altura")
     let largura = prompt("Insira a largura")
     console.log(altura*largura)
   }

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   const anoAtual = prompt("Insira o ano Atual")
   const anoNacimento = prompt("Insira seu ano de nascimento")
   console.log(anoAtual-anoNacimento)
}

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   return peso/(altura*altura)
}

//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   const nome = prompt("Insira seu nome")
   const idade = prompt("Insira sua idade")
   const email = prompt("Digite seu email")
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   const cor1 = prompt("Insira sua cor favorita")
   const cor2 = prompt("Insira sua segunda cor favorita")
   const cor3 = prompt("Insira sua terceira cor favorita")
   const cores = [cor1,cor2,cor3]
   console.log(cores)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   const maiuscula = string.toUpperCase()
   return maiuscula

}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   return custo/valorIngresso
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 return string1.length === string2.length
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   return array[array.length-1]
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   const muda = array[0]
   array[0] = array[array.length-1]
   array[array.length-1] = muda
   return array
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
   const caso = string1.toUpperCase()
   const case1 = string2.toUpperCase()
   return caso === case1

}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
   const anoAtual = prompt("Insira o ano atual")
   const anoDeNascimento = prompt("Insira o seu ano de nascimento")
   const anoCarteira = prompt("Insira o numero da sua carteira")
   const idade = anoAtual - anoDeNascimento
   const renovacao = anoAtual - anoCarteira
   const criterio1 = idade <= 20 && renovacao >= 5
   const criterio2 = idade > 20 && idade <= 50 && renovacao >= 10
   const criterio3 = idade > 50 && renovacao >=15
   console.log(criterio1 || criterio2 || criterio3)
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
   const conta1 = ano % 400
   const conta2 = ano % 4  
   const conta3 = ano % 100 
   const verifica = conta1 === 0
   const verifica1 = conta2 === 0
   const verifica2 = conta3 === 0
   const criterio1 = verifica1 !== verifica2
   const criterio2 = verifica
   console.log(criterio1 || criterio2)
   
}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
      // implemente sua lógica aqui
      const maior = prompt("Tem mais de 18?")
      const ensino = prompt("Tem ensino médio completo?")
      const horario = prompt("Possui disponibilidade de horários?")
      const c1 = maior === "sim"
      const c2 = ensino === "sim"
      const c3 = horario === "sim"
      pessoa = c1 && c2 && c3
      return pessoa
}
