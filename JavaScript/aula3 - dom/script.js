// DOM

// URL - LOCATION

// "BOTÃO DE VOLTAR" - HISTORY

// "SETE / CONTEUDO" - DOCUMENT

// window.location.reload()
// window.location = 'https://www.google.com'

// document - documento
// getElementById = busca o sujeito pelo id
// inner... = coloca um elemento dentro
// se innerText - apenas texto
// se innerHTML - texto e codigo

document.getElementById('catalogo').innerHTML = '<h3>OI<h3>'
document.querySelector('#catalogo').innerHTML = 'Olá'

function registrarNome() {
    nome = document.querySelector("#inputNome").value

    document.querySelector('#catalogo').innerHTML = `
        <div id="nomeDiv">
            Eu ${nome} sou muito top e programador!
        </div>
    `

    alert('O seu nome é ' + nome)
}