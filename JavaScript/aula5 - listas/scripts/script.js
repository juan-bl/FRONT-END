const fruta = ['Melancia', 'Mexerica', 'Tomate', 'Melão', 'Maracuja', ]

teste = Array()
teste[0] = 'olha'
teste[1] = 'que'
teste[2] = 'top'

console.log(fruta);
console.log(fruta[1]);

// PUSH 'EMPURRAR' - ADICINAR NA LISTA
fruta.push('uva')
console.log(fruta);


// UNSHIFT - ADICIONAR NO COMEÇO DA LISTA
fruta.unshift('Abacate')
console.log(fruta);


// POP - REMOVER O ULTIMO
fruta.pop()
console.log(fruta);


// SHIFT - REMOVE O PRIMEIRO
fruta.shift()
console.log(fruta);


// SPLICE - REMOVE, ADICIONA E ATUALIZA
// ONDE?? (INDICE), QUANTOS VOU DELETAR??
// SE NENHUM O QUE VOU ADICIONAR??
fruta.splice(2, 3)
fruta.splice(2, 0, 'Morango')
fruta.splice(1, 1, 'Maracuja')
console.log(fruta);

fruta.push('Abacaxi')

fruta.forEach(cadaFruta => {
    document.getElementById('resposta').innerHTML += `${cadaFruta} <br>`
})