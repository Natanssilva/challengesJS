let idadeMaisVelho = '';
let nomeMaisVelho = '';

for (let p = 1; p <= 5; p++) {
    let nome = prompt(`Olá Pessoa${p}, digite seu nome:`);
    let idade = Number(prompt(` Pessoa${p}, digite sua idade:`));
    
    if (idade > idadeMaisVelho) {
        idadeMaisVelho = idade;
        nomeMaisVelho = nome;
    }
}

alert (`O mais velho é ${nomeMaisVelho} com ${idadeMaisVelho} anos`);