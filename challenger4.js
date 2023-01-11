
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