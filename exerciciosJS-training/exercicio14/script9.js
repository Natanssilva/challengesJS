let resultado = document.querySelector('#resultado');

let data =  new Date()

let data_atual = data.getFullYear()




let submitado = document.querySelector('#submitado').addEventListener('click',function clicou(){
    let ano_nascimento = Number(document.querySelector('#ano_nascimento').value);
    let idade = data_atual - ano_nascimento;


    if ( idade >= 16) {
        resultado.innerHTML += ` Pode votar`;
    }else if (idade <16) {
        resultado.innerHTML += ` nao pode votar`;
    }
        
})