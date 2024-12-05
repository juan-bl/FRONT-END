lista_categorias = []

class Categoria {
    constructor(titulo, img, desc, marca) {
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca
    }
}

lista_categorias.push(new Categoria('ARVORES DE NATAL', 'images/pexels-juanpphotoandvideo-1686975.jpg', 'AS MAIS BONITAS ARVORES DE NATAL PARA SUAS CELEBRAÇÕES DE FIM DE ANO.', 'Arvores de natal originais'))

lista_categorias.push(new Categoria('Enfeites de arvores', 'images/christmas-balls-8449616_1280.jpg', 'Confira nossa coleção de enfeites para arvores de natal exclusivas e personalizados.', 'enfeites de natal originais'))

lista_categorias.push(new Categoria('Enfeites gerais', 'images/pexels-jasper-kortmann-757707790-29625562.jpg', 'Confira nossa coleção de enfeites gerais de natal exclusivas e personalizados.', 'enfeites de natal originais'))

lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${categoria.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${categoria.titulo}</h5>
                    <p class="card-text">${categoria.desc}</p>
                    <p class="card-text"><small class="text-body-secondary">${categoria.marca}</small></p>
                </div>
            </div>
        </div>
    </div>
    `
});