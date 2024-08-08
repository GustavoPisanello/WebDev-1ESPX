const btnCriar = document.querySelector('#btnCriar');
const inputUsuario = document.querySelector("#inputUsuario")
const listaFilmes = document.querySelector("#listaFilmes")
const divAudio = document.getElementById("audio")

btnCriar.addEventListener("click", function(e){
    e.preventDefault();
    console.log(e)

    const novoFilme = document.createElement("li")
    novoFilme.innerText = inputUsuario.value
    listaFilmes.append(novoFilme)

    const btnEditar = document.createElement("button")
    btnEditar.innerText = "Editar"
    novoFilme.append(btnEditar)

    btnEditar.addEventListener("click", function(e){
        novoFilme.classList.add("fundo-preto")
    })

    if (e.altKey == true && e.ctrlKey == true && inputUsuario.value == "Gaiola é o troco"){
        divAudio.innerHTML = "<audio controls><source src='audio/MC Du Black - Gaiola é o Troco.mp3' type='audio/mpeg'></audio>"
        console.log("Teste")
    }

})

