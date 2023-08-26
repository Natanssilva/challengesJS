
let resultado = document.querySelector("#resultado");

let submitado = document.querySelector("#submitado").addEventListener("click", clicado = () =>{
    let atual_estoque = Number(document.querySelector("#atual_estoque").value);
    let maximo_estoque = Number(document.querySelector("#maximo_estoque").value);
    let minimo_estoque = Number(document.querySelector("#minimo_estoque").value);

    let quantidade_media = (maximo_estoque + minimo_estoque) / 2;

   /* if (atual_estoque >= quantidade_media ) {
        resultado.innerHTML ``
    } */

    atual_estoque >= quantidade_media ? resultado.innerHTML = `Não efetuar compra` : resultado.innerHTML = ` efetuar compra`
})