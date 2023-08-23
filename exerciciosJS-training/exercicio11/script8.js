let resultado = document.querySelector('#resultado')
let submitado = document.querySelector('#submitado').addEventListener('click', enviado = () =>{

    let valor = Number(document.querySelector('#valor1').value);

    if (valor >= 0) {
        resultado.innerHTML = `numero é positivo`
    }
    else{
        resultado.innerHTML = `numero é negativo`
    }

})