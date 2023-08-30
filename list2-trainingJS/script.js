let resultado = document.querySelector("#resultado");

let submitado = document.querySelector("#submitado").addEventListener("click", enviado = () =>{
    let numero_final = Number(document.querySelector("#numero_final").value);
    let contador = 0;
    let numero_par = " "
    while (contador < numero_final) {
        
        if (contador % 2 == 0) {
            numero_par += contador;
            
        }
        contador++;
        
        resultado.innerHTML = `${numero_par}`;
    }
})