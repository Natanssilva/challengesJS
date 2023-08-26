
let resultado = document.querySelector('#resultado');
let submitado = document.querySelector('#submitado').addEventListener('click', enviado = () =>{

    let macas_compradas = parseFloat(document.querySelector('#campo_maca').value);

    if (macas_compradas <12) {
        resultado.innerHTML = `o Custo da compra de maçãs que custam 1,30 cada é : ${macas_compradas * 1.30}`
    }else if (macas_compradas >= 12) {
        resultado.innerHTML = `o Custo da compra de maçãs que custam 1,00 cada é : ${macas_compradas * 1.00}`
    }
})