// Promise é uma promessa!
// Resolve - Cumprimos a promessa
// Reject - 'Rejeitamos' a promessa, ou não cumpriu!
// REJECTED - 'promessa quebrada!'
PROMISSED

const promessa = new Promise((resolve, reject) => {
    let nome = 'Victor'

    if (nome == 'Victor') {
        resolve('Usuario é Victor!')
    } else {
        reject('Porque o usuario não pe Victor!')
    }
})

promessa.then((dadosDoResolve) => {
    console.log(dadosDoResolve);
    
})

promessa.catch((infoDoErro) => {
    console.log(infoDoErro);
    
})