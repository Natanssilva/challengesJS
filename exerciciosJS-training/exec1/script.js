let result = document.querySelector('#resultado');
let submitado = document.querySelector('#submitado');
let input_numero = document.querySelector('#campo_numero');

submitado.addEventListener('click', function irineu(){ 
    let resultado_input = input_numero.value;
    resultado_input--;
    result.innerHTML+= `O resultado é ${resultado_input}`;
})