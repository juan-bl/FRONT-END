// promisse é uma promessa!
// resolve -cumprimos a promessa
// Reject - 'Rejeitamos' a promessa, ou não cumpriu!
// trabalhar c/ promessas tbm tem q trabalhar com 'porque'
// FULLFILLED - 'Promessa cumprida!'
// REJECTED - 'promessa rejeitada!'
// PROMISERESULT - o motivo do status
// PROMISESTATE - estado da promessa

const promessa = new Promise((resolve, reject) => {
    // => signifiva que é uma função anônima
    let nome = 'Milena'

    if(nome == 'Milena'){
        // resolve('Usuário é Milena')
        resolve({'adm':'Milena'})
        // function alert(){
        //         alert()oi
        // }
        // resolve (alert)())
    }else{
        reject('Porque o usuárionão é a MIlena')
    }    
})

//  then - espera o resolve e retorna o que o resolve tiver,
// caso reject acusa um erro
//  'THEN ESPERA QUE DÊ CERTO'
promessa.then((dadosDoResolve) =>{
    console.log(dadosDoResolve)
})

// catch - espera o reject e retorna o que o reject tiver, caso
//  resolve ele não executa 
// 'CATCH ESPERA QUE DÊ ERRRADO!'
promessa.catch((infoDoErro) => {
    console.log(indoDoErro)
})

function sujeitoDemorado(){
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log('Rodando')
            resolve()
        },2000)
    })
}

async function carregandoConteudo(){
    console.log('oi')
    await sujeitoDemorado()
    console.log('TERMINEI')
}

carregandoConteudo()


Código - ObjectEntries



// OBJECT ENTRIES 
const filmes = {
    'Nome' :'Sociedade da Neve',
    'Desc' : 'Lorem',
    'Genêro' : 'Drama'
}

console.log(filmes)
console.log(filmes.Nome)
// keys - retorna os atriburos (nomes)
const filmesKey = Object.keys(filmes)
console.log(filmesKey)

//  entries - retorna em listas os valores (valor)
const filmesEntries = Object.entries(filmes)
console.log(filmesEntries)

// map
const nomesFilmes = ['Ilha do medo', 'Bruxa de Blair', 'Interestelar', 'Velozes e Furiosos']

const lista = {
   'filmes' : [
        {
            'nome' : 'Ilha do medo',
            'Desc' : 'Lorem'
        },
        {
            'nome' : 'Bruxa de blair',
            'Desc' : 'lorem'
        },
    ],
    'jogos' : [
        {
            'nome' : 'Roblox',
            'Desc' : 'lorem'
        },
        {
            'nome' : 'The last of us',
            'Desc' : 'lorem'
        }    
    ]
}

const resultado = lista.jogos.map((elemento) => {
    document.querySelector('body').innerHTML += `
        <h3> ${elemento.nome}</h3>
    `
})
