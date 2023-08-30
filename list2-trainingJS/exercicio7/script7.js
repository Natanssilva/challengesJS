
let resultado = document.querySelector('#resultado');
let valores = ''; //declarando uma variavel string vazia pra ir acumulando os números

let submitado = document.querySelector('#submitado').addEventListener('click', enviado = () =>{
    for (let cont = 1; cont <= 100; cont++) { // criando um loop que declara contador como 1 e enquanto o cont for menor ou igual a 100, ele vai iterar e validar antes de fazer a condição novamente, assim incrementando 1 no valor do cont
        if (cont % 3 === 0 || cont % 5 === 0) { // dentro do loop vai abrir uma condição onde vai verificar se o RESTO da divisão do cont por 3 ou por 5 é 0, oq significa que é divisivel (multiplo), se uma ou outra for true
            valores += cont;       // vai pegar o valores e atribuir e adicionar valores ao contador que vai concatenar com uma string vazia
        }
    }
    resultado.innerHTML = valores;
    
})






