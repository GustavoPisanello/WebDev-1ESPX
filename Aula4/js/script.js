let resultPlaceholder = document.getElementById("resultPlaceholder")

function Tabuada(){
    let results = []
    let num = prompt("Digite um número para fazer a tabuada: ")
    let result
    for (i = 1; i<=10; i++){
        result = num * i;
        results.push(`| ${num} * ${i} = ${result} <br>`)
    }
    results = results.toString()
    results = results.replaceAll(",", "")
    resultPlaceholder.innerHTML = `${results}`
    
}