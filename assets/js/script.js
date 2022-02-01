
function calcEvent(){
    let anoDigitado = document.querySelector('.birth-year')
    let idadeResultado = document.querySelector('.age1')
    let sexoEscolhido = document.getElementsByName('radsex')
    let sexoResultado = document.querySelector('.gender1')
    let faixaEtaria = document.querySelector('.age-range1')
    let imagemPrincipal = document.querySelector('.image1')


    let anoAtual = new Date().getFullYear()
    console.log(anoAtual)

    let minhaIdade = anoAtual - anoDigitado.value

    if(sexoEscolhido[0].checked){
        sexo = "Male"
        id="man"

    } else {
        sexo = "Female"
        id="woman"
    }
    
    if(minhaIdade < 18){
        faixa = "Child/Young"
    } else if(minhaIdade >= 18 && minhaIdade < 60){
        faixa = "Adult"
    }else{
        faixa = "Elderly"
    }


    imagemPrincipal.src= `assets/img/${id}.svg`
    faixaEtaria.innerHTML = `${faixa}`
    sexoResultado.innerHTML = `${sexo}`
    idadeResultado.innerHTML = `${minhaIdade} anos`



}

