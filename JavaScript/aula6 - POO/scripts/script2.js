class Usuario {
    // id, @, nome, email, bio, genero
    constructor(id, apelido, nome, email, bio, genero) {
        this.id = id;
        this.apelido = apelido;
        this.nome = nome;
        this.email = email;
        this.bio = bio;
        this.genero = genero
        this.postar = function(pensamento) {
            document.querySelector('#resposta').innerHTML += `
            <div class="post">
                <h3>${this.apelido}</h3>
                <p>${pensamento}</p>
            </div>
            `
        }
    }
}

var user1 = new Usuario(1,'Juan5051', 'Juan', 'juan@email.com', 'Desenvolvedor Java', 'Masculino')
var user2 = new Usuario(2,'Naruto', 'Juan', 'juan@email.com', 'Desenvolvedor Java', 'Masculino')

function postarFeed() {
    alert('POSTADO COM SUCESSO!')
    pensamento = document.querySelector('#pensamento').value

    user1.postar(pensamento)
}

document.querySelector('#perfil').innerHTML = `
<img src="hq720.jpg" alt="">
<h2>${user1.apelido}</h2>
<h3>${user1.nome}</h3>
`