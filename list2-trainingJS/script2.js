let resultado = document.querySelector("#resultado");

let submitado = document.querySelector("#submitado").addEventListener("click", enviado = () =>{
    let numero_final = Number( document.querySelector("#numero_final").value)
     let numeros = " ";

    for (let contador = 0; contador < numero_final; contador++) {
        if (contador % 2 ==0) {
            numeros += contador;
        }
    }

    resultado.innerHTML = `${numeros}`
})

