function verificaSeOChutePossuiUmValorValido (chute) {
    const numero = +chute

    if (gameOver(chute)) {
        document.body.innerHTML = `
        <h2>Fim de Jogo!</h2>
        <button id="jogar-novamente" class="btn-jogar ">Jogar Novamente</button>`
        return
    }else if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: Diga apenas números.</div>`
        return
    }

    if (numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: o valor precisar ser entre ${menorValor} e ${maiorValor}.</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou! <i class="fa-solid fa-crown"></i></h2>
        <h3>O número secreto era: ${numeroSecreto }</h3>
        
        <button id="jogar-novamente" class="btn-jogar ">Jogar Novamente</button>`

        
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor (numero) {
    return numero > maiorValor || numero < menorValor
}

function gameOver(resposta) {
    return resposta === "game over" || resposta === "Fim de jogo"
}
document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})