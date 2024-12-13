const receitas = {
    salgado : {
        nome : 'Pão com Manteiga',
        ingredientes : 'Pão (da sua preferencia) e manteiga',
        preparo : 'Com uma faca, pegue a quantidade de manteiga da sua preferencia, em seguida passe no pão.'
    },
    
    doce : {
        nome : 'Brigadeiro de Microondas',
        ingredientes: '1 leite condensado, chocolate em pó, 4 colheres (sopa) de chocolate em pó ou achocolatado, margarina, 1 colher (sopa) de manteiga, chocolate granulado, chocolate granulado ou granulado colorido.',
        preparo : 'Em um recipiente próprio para microondas, de preferência redondo e de borda alta, misture todos os ingredientes. Leve ao microondas por 6 minutos em potência alta ou na tecla brigadeiro do próprio microondas. Mexendo a mistura na metade do tempo. Depois de pronto, retire do forno e mexa até ficar uma massa lisa e brilhante. Leve à geladeira para esfriar, depois enrole os docinhos, passe no granulado e coloque nas forminhas.'
    },

    suco : {
        nome : 'Suco de Laranja',
        ingredientes : 'Água, laranja e açucar (opnional)',
        preparo : 'Enchar uma jarra de água gelada. Com um espremedor, esprema todas as laranjas para extrair o suco, em seguida, coloque na jarra com água e mexa bem, dinalize com açucar se desejar.'
    }
}

const x = Object.entries(receitas.salgado)
const y = Object.entries(receitas.doce)
const z = Object.entries(receitas.suco)

document.querySelector('main').innerHTML += `
    <h1>${x}</h1>
    <h1>${y}</h1>
    <h1>${z}</h1>
`

// const resultado = lista.jogos.map((elemento) => {
//     document.querySelector('body').innerHTML += `
//         <h3> ${elemento.nome}</h3>