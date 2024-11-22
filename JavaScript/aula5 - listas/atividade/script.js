const filmes = ['Jogos Mortais', 'O Exorcista', 'REC', 'A Bruxa de Blair', 'Janela Indiscreta', "Five Nights at Freddy's"]

filmes.forEach(filme => {
    document.getElementById('filmes').innerHTML += `
    <p>${filme}</p> <br>
    `
});