document.querySelector('#cep').addEventListener('focusout', pegarCep)

function pegarCep() {
    cep = document.querySelector('#cep').value

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((info) => {
        return info.json()
    }).then((dados) => {
        document.getElementById('estado').value = dados.estado;
        document.getElementById('logradouro').value = dados.logradouro;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('localidade').value = dados.localidade;
        
    })
}