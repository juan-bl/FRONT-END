function explicacao1() {
    var escolha = confirm("DESEJA RODAR TRUE OU FALSE?")

    if (escolha) {
        // console.log("FIZ O SE")
        alert('VOCÊ ESCOLHEU TRUE')
    } else {
        // console.log("SENAO");
        alert('VOCÊ ESCOLHEU FALSE')
    }
}

function explicacao2() {
    alert('SEJA BEM VINDO A LOJINHA!')
    escolha = prompt("A) Bolo no Pote R$ 10, B) Açai R$ 20, C) TORTA R$ 15")

    switch(escolha) {
        case 'A':
            alert('Você escolheu bolo no pote')
            break
        case 'B':
            alert('Você escolheu açai')
            break
        case 'C':
            alert('Você escolheu torta')
            break
    }
}

function explicacao3() {
    idade = Number(prompt('Digite a sua idade:'))

    if (idade >= 18) {
        alert('Seja bem vindo(a) ao website!')
        // DOCUMENT = DOCUMENTO HTML
        // QUERYSELECTOR - "BUSCADOR"
        // INNERHTML = "DENTRO DO ELEMENTO"
        document.querySelector('body').innerHTML = 'VIVA!!!!'
    } else {
        alert('Idade inválida!')
        // WINDOW - JANELA
        // LOCATION - "URL"
        window.location('https://www.google.com')
    }
}