let resultado = document.querySelector('#resultado')
let submitado = document.querySelector('#submitado').addEventListener('click', enviado = () =>{

    let valor = Number(document.querySelector('#valor1').value);

    if (valor > 10) {
        resultado.innerHTML = `maior que 10`
    }else if (valor === 10) {
        resultado.innerHTML = `igual a 10`
    }
    else{
        resultado.innerHTML = `menor que 10`
    }

})