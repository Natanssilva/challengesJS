let resultado_pares = document.querySelector("#resultado_pares");
let resultado_impar = document.querySelector("#resultado_impar");

let submitado_par = document.querySelector("#submitado_par").addEventListener("click", enviadoPares = () =>{
    let numero_final = Number(document.querySelector("#numero_final").value)
    let numeros_pares = " ";

    for (let contador = 0; contador < numero_final; contador++) {
        if (contador % 2 == 0) {
            numeros_pares += contador;
        }
        resultado_pares.innerHTML = `Os numeros pares são : ${numeros_pares}`;
    }
})

let submitado_impar = document.querySelector("#submitado_impar").addEventListener("click", enviadoImpares = () =>{
    let numero_final = Number(document.querySelector("#numero_final").value);
    let numeros_impares = " ";

    for (let contador = 0; contador < numero_final; contador++) {
        if (contador % 2 !== 0) {
            numeros_impares += contador;
        }
        resultado_impar.innerHTML = `Os numeros impares são : ${numeros_impares}`;
    }
})

