let result = document.getElementById("result")

function Jokenpo(x){
    const op = ["pedra", "papel", "tesoura"]
    let index = Math.floor(Math.random() * (3 - 0) ) + 0
    let choose = op[index]
    let chooseminus1 = ""

    if (choose == "pedra"){
        chooseminus1 = op[2]
    }

    else {
        chooseminus1 = op[index - 1]
    }
    result.innerHTML = calculo(x, choose, chooseminus1)
}

function calculo(x, choose, chooseminus1){
    console.log(`Eu ESCOLHI ${x}`)
    console.log(`A ESCOLHA DA MÁQUINA É ${choose}`)
    console.log(`A ESCOLHA DA MAQUINA -1 ${chooseminus1}`)
    result.classList.remove("cinza")
    result.classList.remove("vermelho")
    result.classList.remove("verde")

    if (x == choose){
        result.classList.add("cinza")
        return `Empate! Você escolheu ${x} e a máquina também!`
    }
    else{
        if (x == chooseminus1){
            result.classList.add("vermelho")
            return `Você perdeu! Escolhestes ${x} e a máquina ${choose}`
        }
        else{
            result.classList.add("verde")
            return `Você venceu! Escolhestes ${x} e a máquina ${choose}`
        }
    }
}
