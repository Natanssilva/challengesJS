/* 
    criar uma função para ver a porcentagem em relacao a outra
    ex: funcaoDIVISAO (100,50) a e b
*/ 

let porcentagem = (nominador, denominator) =>{
        let result = nominador / denominator;
        console.log(`O ${nominador} equivale ${result * 100}% do ${denominator} `)
}

porcentagem(100,100);