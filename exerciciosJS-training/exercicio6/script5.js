let resultado = document.querySelector('#resultado')

let submitado = document.querySelector('#submitado').addEventListener('click', clicado = () =>{
    let custo_fabrica = parseFloat(document.querySelector('#campo_custo').value);
    
    let  custo_carro = ((custo_fabrica * 28) / 100) +  ((custo_fabrica * 45) / 100)  ;
    let custo_final = custo_carro + custo_fabrica;

    resultado.innerHTML = `O custo final ficou :  ${custo_final}`

})