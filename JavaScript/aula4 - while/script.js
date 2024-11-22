function testes() {

    // contador = 0

    // while (contador < 3) {
    //     alert(`QUE MANEIRO!!! FIZ ${contador+1} vezes`)
    //     contador++
    // }

    // for(var i = 0; i < 3; i++) {
    //     alert(`QUE MANEIRO!!! FIZ ${i+1} vezes`)
    // }
}

// testes()

function carregarCatalago() {
var livros = [
    ['images/agentesevenaparada.jpg', 'A Gente Se Ve Na Parada'],
    ['images/cujo.jpg', 'Cujo'],
    ['images/vhs.jpg', 'VHS'],
    ['images/dvd.png', 'DVD'],
    ['images/enquantoeunaoteencontro.jpg', 'Enquanto Eu Não Te Encontro'],
    ['images/espressofantasma.jpg', 'Espresso Fantasmas'],
    ['images/it.jpg', 'It - A Coisa'],
    ['images/jantarsecreto.jpg', 'Jantar Secreto'],
    ['images/ninguemsaivivodaqui.jpg', 'Ninguem Sai Vivo Daqui'],
    ['images/ninguemvaiteouvirgritar.jpg', 'Ninguem Vai Te Ouvir Gritar'],
    ['images/oexorcista.jpg', 'O Exorcista'],
    ['images/olivrodahistorialgbtqiapn+.jpg', 'O Livro Da Historia LGBTQIAPN+'],
    ['images/quinzedias.jpg', 'Quinze Dias'],
    ['images/saborosocadaver.jpg', 'Saboroso Cadaver'],
    ['images/semanticerror.jpg', 'Semantic Error'],
    ['images/umlivroparaserentendido.jpg', 'Um Livro Para Ser Entendido']
]

livros.forEach(cadaLivro => {
    document.getElementById('catalogo').innerHTML += `
    <div class="livro">
            <img src="${cadaLivro[0]}" alt="">
            <h4>${cadaLivro[1]}</h4>

            <button>
                <p>Adicionar</p>
                <img src="images/plus.svg" alt="">
            </button>
        </div>
    `
})
}

carregarCatalago()