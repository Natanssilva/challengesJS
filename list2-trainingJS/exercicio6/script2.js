
let resultado = document.querySelector("#resultado");

let submitado = document.querySelector("#submitado").addEventListener("click", enviado = () =>{


    let numero1= Number(document.querySelector("#numero1").value);
    let numero2= Number(document.querySelector("#numero2").value);
    let numero3= Number(document.querySelector("#numero3").value);
    let numero4= Number(document.querySelector("#numero4").value);
    let numero5= Number(document.querySelector("#numero5").value);
    
    let menorNumero = Math.min(numero1, numero2, numero3, numero4, numero5);
    let maiorNumero = Math.max(numero1, numero2, numero3, numero4, numero5);

    let MediaValores = (numero1 + numero2 + numero3 + numero4 + numero5 - maiorNumero - menorNumero) / 3;

    
})