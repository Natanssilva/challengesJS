let resultado = document.querySelector('#resultado');
let submitado = document.querySelector('#submitado').addEventListener('click', vendas = () =>{

    let campo_vendidos =Number(document.querySelector('#campo_vendidos').value)
    let total_vendas =Number(document.querySelector('#total_vendas').value)
    let campo_fixo =Number(document.querySelector('#campo_fixo').value)
    let campo_custo =Number(document.querySelector('#campo_custo').value)

    let valor_comissao = campo_custo * campo_vendidos;
    let salario_final = campo_fixo + valor_comissao + ((total_vendas * 5 ) / 100)

    resultado.innerHTML = `O salario final com base nas informações é ${salario_final}`
});