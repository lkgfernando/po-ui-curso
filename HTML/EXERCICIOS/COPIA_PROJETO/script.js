console.log('------INICIO------')

let table = document.getElementById('tableclientes');
let buttons = document.getElementsByTagName('button');

const clickButtons = ($event) => {
    console.log($event);
}

for(let x = 0; x < buttons.length; x++){
    buttons[x].addEventListener('click',clickButtons)
}

function click_a(){
    table.innerHTML += `
                 <tr>
                     <td>5</td>
                     <td>João da silve</td>
                     <td>testeclieck@gmail.com</td>
                 </tr> 
    `
}

table.innerHTML += `
                 <tr>
                     <td>4</td>
                     <td>Glacieli Sabaini Rodrigues</td>
                     <td>glacieli@gmail.com</td>
                 </tr> 
`

// console.log(table.innerHTML);

class Pessoa {
    nome
    idade
    endereco
    email

    constructor(nome,idade,endereco,email){
        this.nome;
        this.idade;
        this.endereco;
        this.email;
    }
    //Metodos da classe
    retornaNome(){
        return this.nome
    }

    alteraNome(){

    }


}