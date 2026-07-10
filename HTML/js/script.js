console.log('Hello Word!!!')



function start() {

    console.log(mostraDiaNascimento('2014/02/29'))

}

const mostraDiaNascimento = (data) => {
    
    let dataNascimento = new Date(data)
    let numeroDiaNasc  = dataNascimento.getDay()
    let nomeDiaNasc    = ''


    switch(numeroDiaNasc){
        case 0:
            nomeDiaNasc = 'Domingo'
            break
        case 1:
            nomeDiaNasc = 'Segunda-Feira'
            break
        case 2:
            nomeDiaNasc = 'Terça-Feira'
            break
        case 3:
            nomeDiaNasc = 'Quarta-Feira'
            break        
        case 4:
            nomeDiaNasc = 'Quinta-Feira'
            break        
        case 5:
            nomeDiaNasc = 'Sexta-Feira'
            break
        case 6:
            nomeDiaNasc = 'Sábado'
            break
        default:
            isNaN(numeroDiaNasc) ? nomeDiaNasc = 'Dia não existe' : null
    }

    // if(numeroDiaNasc === 0) {
    //     nomeDiaNasc = 'Domingo'
    // } else if(numeroDiaNasc === 1) {
    //     nomeDiaNasc = 'Segunda-Feira'
    // } else if(numeroDiaNasc === 2) {
    //     nomeDiaNasc = 'Terça-Feira'
    // }else if(numeroDiaNasc === 3) {
    //     nomeDiaNasc = 'Quarta-Feira'
    // }else if(numeroDiaNasc === 4) {
    //     nomeDiaNasc = 'Quinta-Feira'
    // }else if(numeroDiaNasc === 5) {
    //     nomeDiaNasc = 'Sexta-Feira'
    // }else {
    //     nomeDiaNasc = 'Sabádo'
    // }

    return nomeDiaNasc
}

start()