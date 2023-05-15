function retornaInteiro() {
    return 0
}

const arrowRetornaInteiro = () =>{
    return 0
}
function retornaString() {
    return 'oi'
}

function retornaParametro(param) {
    return param
}

function procedimento(param) {
    setTimeout(() => console.log(param), 1000);
}

//Chamadas das funções
console.log(retornaInteiro())
console.log(retornaString())
console.log(retornaParametro(10 + 10))
console.log(procedimento('teste'))