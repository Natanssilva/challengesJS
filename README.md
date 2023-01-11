# challengesJS
Repositório com desafios de lógica em Javascript

-Alguns exercícios de lógica que resolvi fazer recentemente:

/*função que retorna nome */

const HiName = (name) =>{
    console.log(`Hello ${name}`);
};

HiName('natan');
------------------------------

/*caça letras 
    -> uma função que recebe uma letra e uma frase. Ela deve dizer quantas vezes essa letra aparece na frase 
        ex: funcaoLetras ('a', 'natan')
            resultado terá de ser 2
    */


const letterAttack = (letter, string) =>{
    console.log(letter.includes('a'))
    console.log(string)

    let cont = 0 
    for (let i = 0; i < string.length; i++) {
        let result = string[i];
        console.log(result)
        if (letter == result) {
            cont++
        }
    }
    console.log(`A quantidade de vezes que a letra ${letter} aparece no nome ${string} é ${cont}`)
}

letterAttack('b', 'bernardo') 
--------------------------------

/* 
    criar uma função para ver a porcentagem em relacao a outra
    ex: funcaoDIVISAO (100,50) a e b
*/ 

let porcentagem = (nominador, denominator) =>{
        let result = nominador / denominator;
        console.log(`O ${nominador} equivale ${result * 100}% do ${denominator} `)
}

porcentagem(100,100);
----------------------------------

/* Uma função que recebe objeto com atributos nome, sobrenomes, e idade e que ela delete algum deles que estejam vazio no caso *null* */

const cleanningObject = (object) =>{
    if (object.surname === null || object.surname === ' ' ) { /* se for null(vazio ou strings vazia deleta) */
        delete object.surname;
    }else if(object.name === null || object.name === ' '){
        delete object.name
    }else if(object.age === null || object.age === ' '){
        delete object.age 
    }else{
        console.log('Nenhum objeto a deletar ou seja, nada vazio')
    }
    console.log(object)
} 

cleanningObject({name: " neitans", surname:"silva", age:19});
----------------------------------
