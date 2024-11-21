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
    for (let i = 0; i < 4; i++) {
        document.getElementById('catalogo').innerHTML += `
        <div class="livro">
                <img src="images/quinzedias.jpg" alt="">
                <h4>Quinze Dias</h4>
                <button>
                    Adicionar
                    <img src="images/plus.svg" alt="">
                </button>
            </div>
        `
    }
}

carregarCatalago()