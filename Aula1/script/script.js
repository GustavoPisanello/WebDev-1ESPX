/* let age = prompt("Quantos anos você tem?")

message = `Você tem ${age} anos! `

alert(message)
 */

var nome = prompt("Digite seu nome: ")
var idade = prompt("Digite sua idade: ")
var profissao = prompt("Digite sua profissão: ") 
var ano = "anos"

if (idade == 1) {
    ano = "ano"
}

console.log(`Olá ${nome}, você tem ${idade} ${ano} e trabalha como ${profissao}!`)

