// CRUD
// CREATE - CRIAR
// READ - LER
// UPDATE - ATUALIZAR
// DELETE - DELETAR

// site com os possiveis codigos
// https://http.cat/
document.querySelector('#logar').addEventListener('click', logar)

function logar() {
    let nome_digitado = document.querySelector('#nome').value
    let nome_salvo = ''
    let senha_digitado = document.querySelector('#senha').value
    let senha_salvo = ''
    let login = false

    fetch('dados.json').then((response) => {
        return response.json()
    }).then((dados) => {
        dados.usuarios.map((informacoes) => {
            nome_salvo = informacoes.nome
            senha_salvo = informacoes.senha
            
            if (nome_digitado == nome_salvo && senha_digitado == senha_salvo) {
                login = true
            }

            if (login) {
                alert('Login efetuado')
                localStorage.setItem('nome',nome_digitado)
                window.location = 'home.html'
            } else {
                document.querySelector("#resposta").innerHTML = "Usuario e senha incorreto"
            }
        })
    })
}

