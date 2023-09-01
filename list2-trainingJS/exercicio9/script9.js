let resultado = document.querySelector('#resultado');
let numerosTabuada =''; //atribui uma string vazia

let submitado = document.querySelector('#submitado').addEventListener('click', enviado = () =>{
    for (let cont = 1; cont <= 10; cont++){
        let numero = Number(document.querySelector('#campo_numero').value);
        numerosTabuada += numero * cont;
1       
    }

    resultado.innerHTML = `${numerosTabuada}`;
})