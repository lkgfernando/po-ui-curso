function showContent(conteudo){
    switch(conteudo){
        case 'home':
            document.getElementById('home').className = ''
            document.getElementById('clientes').className = 'hidden'
            document.getElementById('orcamentos').className = 'hidden'
            break
        case 'clientes':
            document.getElementById('home').className = 'hidden'
            document.getElementById('clientes').className = ''
            document.getElementById('orcamentos').className = 'hidden'
            break
        case 'orcamentos':
            document.getElementById('home').className = 'hidden'
            document.getElementById('clientes').className = 'hidden'
            document.getElementById('orcamentos').className = ''
            break
    }
}