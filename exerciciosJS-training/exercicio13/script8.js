let resultado = document.querySelector('#resultado');

let submitado = document.querySelector('#submitado').addEventListener('click',function clicou(){
    let nota1 = Number(document.querySelector('#nota1').value);
    let nota2 = Number(document.querySelector('#nota2').value);

    let media = nota1 + nota2 / 2


    if (media >= 6) {
        resultado.innerHTML += ` Vc foi aprovado . Sua media final foi ${media}`;
    }else if (media <6) {
        resultado.innerHTML += ` Vc foi reprovado . Sua media final foi ${media}`;
    }
        
})