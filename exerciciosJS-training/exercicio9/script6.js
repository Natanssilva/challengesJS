let resultado = document.querySelector('#resultado');
let submitado = document.querySelector("#submitado").addEventListener('click', enviar = () =>{

    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)
    let nota3 = Number(document.querySelector('#nota3').value)

    let mediaFInal = (nota1 * 2) + (nota2 * 3) + (nota3 * 5) / 10;
    
    resultado.innerHTML = `A media final de acordo com suas notas são ${mediaFInal}`
})