
const calculaIMC =  () =>{
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
   
    const recebeEventoFormImc = (evento) =>{
        evento.preventDefault();

        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        const imc = (peso.value / altura.value**2)*10000
        const resultadoImc = imc.toFixed(2)
        const avaliaGrauImc = grauIMC(resultadoImc)

        resultado.innerHTML += `<p>Seu IMC é: ${resultadoImc} e ${avaliaGrauImc}</p>`
        console.log(avaliaGrauImc)

    }

   form.addEventListener('submit', recebeEventoFormImc)

}

function grauIMC(imc){

    if(imc < 18.5) return 'Abaixo do peso'
    if(imc >= 18.5) return 'Peso normal'
    if(imc >= 24.9) return 'Sobrepeso'
    if(imc >= 29.9) return 'Obesidade grau 1'
    if(imc >= 34.9) return 'Obesidade grau 2'
    if(imc >= 40) return 'Obesidade grau 3'

}

calculaIMC();

