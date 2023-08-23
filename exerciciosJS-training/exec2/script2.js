let campo_base = document.querySelector('#campo_base');
let campo_altura = document.querySelector('#campo_altura');
let submitado = document.querySelector('#submitado')
let resultado = document.querySelector('#resultado')

Number(campo_altura)
Number(campo_base)

submitado.addEventListener('click', function clicou(){
    let resultado_base = campo_base.value;
    let resultado_altura = campo_altura.value;

    let dimensao = resultado_altura * resultado_base;
    resultado.innerHTML += `O resultado da dimensão do seu triangulo é ${dimensao}`;
})