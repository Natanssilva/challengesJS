let resultado = document.querySelector('#resultado');
let numerosTabuada =''; //atribui uma string vazia

let submitado = document.querySelector('#submitado').addEventListener('click', enviado = () =>{ //pego o id do botao atraves do dom e atribuo um ouvinte de evento de click nele, e chamo uma função
    for (let cont = 1; cont <= 10; cont++){                                                   // dentro da função faço um looping com um contador que começa em 1 e conta até ser menor ou igual a 10, e incrementa +1
        let numero = Number(document.querySelector('#campo_numero').value);             //pego o valor do input do numero q vai ser calculado a tabuada
        numerosTabuada += numero * cont;                                                //atribuo e adiciono a string vazia com o valor pego do input * o contador, assim calculando a tabuada
                                                                                    //ex: numero input (X) / numerosTabuada == X * 1      x * 2 e assim por diante
    }

    resultado.innerHTML = `${numerosTabuada}`;                      //aqui mostro o resultado desse calculo                          
})