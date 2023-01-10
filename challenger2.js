
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



