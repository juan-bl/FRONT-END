/* <div class="modal" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div> */

const filmes = [
  ['images/saw.png', 'Jogos Mortais', 'descrição', 'nota'],
  ['images/exorcist.png', 'O Exorcista', 'descrição', 'nota'],
  ['images/rec.png', 'REC', 'descrição', 'nota'],
  ['images/blair.png', 'A Bruxa de Blair', 'descrição', 'nota'],
  ['images/coraline.png', 'Coraline', 'descrição', 'nota'],
]

// filmes.forEach(filme => {
//   document.getElementById('#mural').innerHTML =
// });

filmes.forEach(filme => {
  document.querySelector('#mural').innerHTML += `
  <div id="par">
    <img src="${filme[0]}" alt="">
    <h3>${filme[1]}</h3>
  </div>
  `
})