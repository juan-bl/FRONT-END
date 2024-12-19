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

// personagens.forEach(personagem => {
//     document.querySelector('#mural').innerHTML += `
//     <div class="card">
//         <img src="${personagem[0]}" alt="">
//         <h3 class="text-light">${personagem[1]}</h3>
//     </div>
    
//     `
// });

// personagens.forEach(personagem => {
//     const div = document.getElementById('mural');
//     div.id = 'par';
//     div.setAttribute('data-bs-toggle', 'modal');
//     div.setAttribute('data-bs-target', '#myModal');
  
//     div.innerHTML = `
//         <img src="${personagem[0]}" alt="">
//         <h3>${personagem[1]}</h3>
//     `;
  
//     div.addEventListener('click', () => {
//       document.querySelector('#exampleModalLabel').innerText = `${personagem[1]}`
//     })
  
//     div.addEventListener('click', () => {
//         document.querySelector('.modal-body').innerHTML = `
            
             
//             `;
//     });
  
//     document.querySelector('#mural').appendChild(div);
//   });

// personagens.forEach((personagem) => {
//     const mural = document.querySelector('#mural');
//     const card = document.createElement('div');
//     card.className = 'card text-light';

//     card.innerHTML = `
//         <img src="${personagem[0]}">
//         <h5 class="card-title">${personagem[1]}</h5>
//     `;

//     card.addEventListener('click', () => {
//         const modalImage = document.getElementById('modalImage');
//         const modalName = document.getElementById('modalName');
//         const modal = new bootstrap.Modal(document.getElementById('personagemModal'));

//         document.querySelector('.modal-title').innerText = `Detalhes do Personagem - ${modalName.textContent = personagem[1]}`

//         modalImage.src = personagem[0];
//         modal.show();
//     });

//     mural.appendChild(card);
// });

personagens.forEach(personagem => {
    const div = document.createElement('div');
    div.className = 'card';
    div.setAttribute('data-bs-toggle', 'modal');
    div.setAttribute('data-bs-target', '#myModal');
  
    div.innerHTML = `
        <img src="${personagem[0]}" alt="">
        <h3 class="text-light">${personagem[1]}</h3>
    `;
  
    div.addEventListener('click', () => {
      document.querySelector('#exampleModalLabel').innerText = `${personagem[1]}`
    })
  
    div.addEventListener('click', () => {
        document.querySelector('.modal-body').innerHTML = `
            
            <h4>Ficha Tecnica:</h4>
            `;
    });
  
    document.querySelector('#mural').appendChild(div);
  });