
let resultado = document.querySelector("#resultado");
let submitado = document.querySelector("#submitado").addEventListener("click", enviou = () =>{

    let numero1 = Number(document.querySelector("#numero1").value);
    let numero2 = Number(document.querySelector("#numero2").value);
    let numero3 = Number(document.querySelector("#numero3").value);
    let numero4 = Number(document.querySelector("#numero4").value);

    let valores = Math.min(numero1, numero2, numero3, numero4) ;
     let media = (numero1 + numero2 + numero3 + numero4 - valores) / 3;

    resultado.innerHTML = `Média ${media}`;

})