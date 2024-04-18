
function BooksValue(){
    let qty_books = document.getElementById("qty_books").value;
    console.log(qty_books)

    if (qty_books < 7){
        livro = 22
    }
    else{
        livro = 15
    }

    result = livro * qty_books

    resultInput = document.getElementById("resultado")
    document.getElementById("resultado").innerHTML = `O valor que deverá ser pago é de: R$ ${result},00`;
}

function Payment(){
    let role = document.getElementById("role").value;
    let payment = 3000

    switch(role){
        case "Júnior":
            document.getElementById("resultadoPayment").innerHTML = `Seu cargo é ${role}. O salário correspondente é de R$${payment}`
        break;

        case "Pleno":
            payment = payment * 2
            document.getElementById("resultadoPayment").innerHTML = `Seu cargo é ${role}. O salário correspondente é de R$${payment},00`
        break

        case "Sênior":
            payment = payment * 4
            document.getElementById("resultadoPayment").innerHTML = `Seu cargo é ${role}. O salário correspondente é de R$${payment},00`
        break

        case "TechLead":
            payment = payment * 8
            document.getElementById("resultadoPayment").innerHTML = `Seu cargo é ${role}. O salário correspondente é de R$${payment},00`
        break

        case "Diretor":
            payment = payment * 16
            document.getElementById("resultadoPayment").innerHTML = `Seu cargo é ${role}. O salário correspondente é de R$${payment},00`
        break

        default:
            document.getElementById("resultadoPayment").innerHTML = `Escolha um cargo válido`

    }
}