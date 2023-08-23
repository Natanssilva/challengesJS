

let resultado = document.querySelector("#resultado");

let submitado = document.querySelector("#submitado").addEventListener('click', exec4 = () => {
    let campo_total = Number(document.querySelector("#campo_total").value)
    let campo_branco = Number(document.querySelector("#campo_branco").value)
    let campo_nulo = Number(document.querySelector("#campo_nulo").value)
    let campo_validos = Number(document.querySelector("#campo_validos").value)

    /*
    let total = Number(campo_total);
    let branco = Number(campo_branco);
    let nulo = Number(campo_nulo);
    let valido = Number(campo_valido); */

    resultado.innerHTML = ` <p>o total de votos é ${campo_total}</p>
    <p>o percentual de votos brancos do total é ${(campo_branco/campo_total) *100 }%</p>
    <p>o percentual de votos nulo do total é ${(campo_nulo/campo_total) *100 }%</p>
    <p>o percentual de votos válidos do total é ${(campo_validos/campo_total) *100 }%</p>
    `    
})
