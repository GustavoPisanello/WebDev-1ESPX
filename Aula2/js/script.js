function PegaDados(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    let op = document.getElementsByName("op")
op_checked = ""

for(i = 0; i < op; i++){
    if (op[i].ch){
        op_checked = op[i].value
    }
}
console.log(op_checked)




    
 
    
} 

function Sum(){

}

    