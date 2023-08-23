

let resultado = document.querySelector("#resultado");

let submitado = document.querySelector("#submitado").addEventListener('click', exec5 = () => {
    let campo_salario = Number(document.querySelector("#campo_salario").value); 
    let campo_reajuste = Number(document.querySelector("#campo_reajuste").value); 

    resultado.innerHTML = ` <p>o valor do salario é ${campo_salario}</p>
    p>o valor do novo salario com reajuste é de   ${campo_salario + (campo_salario * campo_reajuste / 100)}</p>
   
    `    
})
