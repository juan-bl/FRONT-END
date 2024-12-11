const filmes = [
  ['images/saw.png', 'Jogos Mortais', '1º LUGAR',  'Muitos filmes terror lançados antigamanete, se consagraram de alguma forma por trazer coisas novas ao genero do horror, e com Jogos Mortais não foi diferente. Jogos Mortais 1 se tranformou em um classico do terror por seu roteiro intrigante e direção cirurgica de James Wan, que também foi um dos idealizadores do projeto, o filme quase praticamente inaugurou essa tematica de Body Horror, sendo criado até mesmo um novo subgenero do terror especialmente para colocar o filme, seus sucessores e outros com a mesma tematica, o Torture Porn. O filme possui um roteiro muito bom e direto, consegue fazer uma boa dualidade com os personagens presos no jogo do Jonh Cremer (JigSaw), e os detetives tentando desvendar o caso. E o que realmente pega nesse filme é o GRANDE plot twist no final que simplesmente estava na sua cara e não percebemos até o ultimo minuto do filme (literalmente). Até mesmo pro fã de horror que não curte muito filmes sangrentos pode ser indicado, porque de toda a saga, esse continuia sendo o mais "leve".', '5 estrelas', '4 de Fevereiro de 2005', '1h 44min', 'Terror, Suspense', 'Torture Porn, Body Horror', 'James Wan', 'James Wan, Leigh Whannell'],

  ['images/exorcist.png', 'O Exorcista', '2º LUGAR', 'Esse filme pra mim, é o melhor filme de possessão demoniaca que existe atualmente. Acho muito hilario que minha geração praticamente creceu sendo atormentado pela Regan, vulgo menina do exorcista, porque era justamente uma foto dela que tava em todo lugar na internet nos anos 2000, se tinha um vídeo com um jumpscare no meio, pode ter certeza que veriamos ela, inclusive no mais famoso jogo, Labirinto do Terror. Eu nem sempre fui muito fã de filmes longos, mas quando se esta imerso em toda ambientação que o filme traz, você nem percebe a hora passar, e 2 horas passam voando. Graças a essa ambientação que o filme cria, ele fica livre pra seguir o proprio tempo sem parecer chato ou muito longo para o espectador. E então no deccorer do filme vemos simplemte tudo, desde a origem do demonio Pazuzu, como ele chegou até a Regan, o processo da possessão e do exorcismo, o desemrolar da historia, e a credite ou não, temos tempo até mesmo para conhecer cada personagem importante do filme. Umas das muitas coisas memoraveis que esse filme nos trouxe, foi sua musica tema, que apesar de tão iconica, no filme quando é tocada, a mãe da Regan está simplesmente andando pela rua, acho que essa colocação não foi de forma aleatoria, na minha opnião, como leva um certo tempo até os eventos sobrenaturais começarem, o filme nos apresenta essa trilha em uma cena relativamente simples, para dizer que tem algo grande vindo, para não ficarmos muito relaxados enquanto tudo esta normal e propositalemente causar um desconforto.', '5 estrelas', '29 de julho de 1974', '2h 01min', 'Terror', 'Sobrenatural', ' William Friedkin', 'William Peter Blatty'],
  ['images/rec.png', 'REC', '3º LUGAR', 'descrição', 'nota'],
  ['images/blair.png', 'A Bruxa de Blair', '4º LUGAR', 'descrição', 'nota'],
  ['images/coraline.png', 'Coraline', '5º LUGAR', 'descrição', 'nota'],
]
// filmes.forEach(filme => {
//   document.querySelector('#mural').innerHTML += `
//   <div id="par" data-bs-toggle="modal" data-bs-target="#myModal">
//     <img src="${filme[0]}" alt="">
//     <h3>${filme[1]}</h3>
//   </div>
//   `

//   document.querySelector('.modal-body').innerHTML += `
//   <img src="${filme[0]}">
//   `
// })

filmes.forEach(filme => {
  const div = document.createElement('div');
  div.id = 'par'; // Evite duplicar IDs
  div.setAttribute('data-bs-toggle', 'modal');
  div.setAttribute('data-bs-target', '#myModal');

  div.innerHTML = `
      <img src="${filme[0]}" alt="">
      <h3>${filme[1]}</h3>
  `;

  div.addEventListener('click', () => {
    document.querySelector('#exampleModalLabel').innerText = `${filme[1]}`
  })

  div.addEventListener('click', () => {
      document.querySelector('.modal-body').innerHTML = `
          <img src="${filme[0]}" class="w-100">
          <h2>${filme[2]}</h2>
          <p>${filme[3]}</p>
          <strong>NOTA: ${filme[4]}</strong>
          <br><br>
          <h4>Ficha Tecnica:</h4>
          <p>Lançamento: ${filme[5]}</p>
          <p>Duração: ${filme[6]}</p>
          <p>Genero: ${filme[7]}</p>
          <p>Subgenero: ${filme[8]}</p>
          <p>Direção: ${filme[9]}</p>
          <p>Roteiro: ${filme[10]}</p>
          `;
  });

  document.querySelector('#mural').appendChild(div);
});