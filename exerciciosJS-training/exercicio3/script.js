let campo_ano = document.querySelector("#campo_ano");
let campo_mes = document.querySelector("#campo_mes");
let campo_dia = document.querySelector("#campo_dia");
let submitado = document.querySelector("#submitado");
let resultado = document.querySelector("#resultado");



submitado.addEventListener("click", Submitado = () => {
    
    let ano = Number(campo_ano.value)
    let mes = Number(campo_mes.value)
    let dia = Number(campo_dia.value) 
    let idade = (ano * 365) +  (mes * 30) + dia; 
    
    resultado.innerHTML = `Sua idade é ${idade}`
})