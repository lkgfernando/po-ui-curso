function showContent(conteudo){
    switch(conteudo){
        case 'home':
            document.getElementById('home').className = ''
            document.getElementById('clientes').className = 'hidden'
            document.getElementById('orcamentos').className = 'hidden'
            
            document.getElementById('lihome').className = ''
            document.getElementById('liclientes').className = 'hidden'
            document.getElementById('liorcamentos').className = 'hidden'
            break
        case 'clientes':
            document.getElementById('home').className = 'hidden'
            document.getElementById('clientes').className = ''
            document.getElementById('orcamentos').className = 'hidden'
            
            document.getElementById('lihome').className = 'hidden'
            document.getElementById('liclientes').className = ''
            document.getElementById('liorcamentos').className = 'hidden'
            break
        case 'orcamentos':
            document.getElementById('home').className = 'hidden'
            document.getElementById('clientes').className = 'hidden'
            document.getElementById('orcamentos').className = ''

            document.getElementById('lihome').className = 'hidden'
            document.getElementById('liclientes').className = 'hidden'
            document.getElementById('liorcamentos').className = ''
            break
    }
}

const showMenu = () => {
    let url = document.URL
    let home = document.getElementById('lihome')
    let cliente = document.getElementById('liclientes')
    let orcamentos = document.getElementById('liorcamentos')

    if(url.endsWith('#clientes')){
        home.className === 'hidden-mob' ? home.className = '' : home.className = 'hidden-mob'
        cliente.className = ''
        orcamentos.className === 'hidden-mob' ? orcamentos.className = '' : orcamentos.className = 'hidden-mob'
    } else if(url.endsWith('#orcamentos')) {
        home.className === 'hidden-mob' ? home.className = '' : home.className = 'hidden-mob'
        cliente.className === 'hidden-mob' ? cliente.className = '' : cliente.className = 'hidden-mob'
        orcamentos.className = ''

    }else {
        home.className = ''
        cliente.className === 'hidden-mob' ? cliente.className = '' : cliente.className = 'hidden-mob'
        orcamentos.className === 'hidden-mob' ? orcamentos.className = '' : orcamentos.className = 'hidden-mob'
    }



}