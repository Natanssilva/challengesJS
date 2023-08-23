
let resultado = document.querySelector('#resultado');

let submitado = document.querySelector('#submitado').addEventListener('click', enviado = () =>{
    let valor1 = Number(document.querySelector('#valor1').value);
    let valor2 = Number(document.querySelector('#valor2').value);

   /* if (valor1 > valor2) {
        resultado.innerHTML = `Maior valor: ${valor1}`;
    } */

    /* valor1 > valor2  ? resultado.innerHTML = `${valor1}` : resultado.innerHTML = ` ${valor2} `;
    if (valor1 === valor2) {
        window.alert('Valores iguais. Digite um diferente')
        
    } */
    
    valor1 === valor2 ? resultado.innerHTML = `valores iguais` : valor1 > valor2  ? resultado.innerHTML = `${valor1}` : resultado.innerHTML = ` ${valor2} `;
   
})