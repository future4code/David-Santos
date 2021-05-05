//Exercício de interpletação de codigo
//Ex1:
/*a. undefined;
 b. null;
 c. 11;
 d. 3
 e. 3, 4, 19;
 f. 3, 9*/ 
 //Ex2:
 //SUBI NUM ÔNIBUS EM MIRROCOS

 //Exercícios de escrita de código
 //EX1:
 const email = prompt("Digite seu email")
 const nome = prompt('Digite seu nome')

 console.log(`O e-mail ${email} foi cadastrado com sucesso.seja bem-vinda(o) ${nome}`)

 //EX2:
let array = ["Lasanha", "Bolo De Cenoura", "Doce de leite","churros", "Bolinha de queijo"]
console.log(array)
console.log("Essas são as minhas comidas preferidas")
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
const userFood = prompt("Fala sua comida favorita, meu bom")
array[1] = userFood
console.log(array)

//EX3:
 let listaDeTarefas = []
 listaDeTarefas.push(prompt("Escreva uma tarefa que você precisa realizar hoje"), prompt("Escreva mais uma tarefa"),prompt("E mais uma, pfv"))
let remover = prompt("Digite o indice da tarefa que você realizou")
listaDeTarefas.splice(remover, remover)
console.log(listaDeTarefas)

 



