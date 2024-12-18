const personagens = [
    ['../images/personagens/1.png', 'Frisk'],
    ['../images/personagens/2.png', 'Flowey'],
    ['../images/personagens/3.png', 'Toriel'],
    ['../images/personagens/4.png', 'Sans'],
    ['../images/personagens/5.png', 'Papyrus'],
    ['../images/personagens/6.png', 'Undyne'],
    ['../images/personagens/7.png', 'Muffet'],
    ['../images/personagens/8.png', 'Mettaton'],
    ['../images/personagens/9.png', 'Asgore'],
    ['../images/personagens/10.png', 'Asriel'],
]

personagens.forEach(personagem => {
    document.querySelector('#mural').innerHTML += `
    <div class="card">
        <img src="${personagem[0]}" alt="">
        <h3 class="text-light">${personagem[1]}</h3>
    </div>
    
    `
});