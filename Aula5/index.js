const op = ["pedra", "papel", "tesoura"]
let index = Math.floor(Math.random() * (3 - 0) ) + 0
let choose = op[index]
let chooseminus1 = ""

if (choose = "pedra"){
    chooseminus1 = op[2]
}
else{chooseminus1 = op[index - 1]}

let result = document.getElementById("result")


function Jokenpo(x){
    console.log(`Eu ESCOLHI ${x}`)
    console.log(`A MINHA ESCOLHA -1 ${chooseminus1}`)
    console.log(`A ESCOLHA DA MÁQUINA É ${choose}`)
    
    if (x == choose){
       return (`Empate! Você escolheu ${x} e a máquina também!`)
    }
    else{
        if(x == chooseminus1){
            return `Você ganhou! Você escolheu ${x} e a máquina ${choose}`
        }
        else{
            return `Você perdeu! Você escolheu ${x} e a máquina ${choose}`
        }
    }
    
}
result.innerHTML = Jokenpo()

