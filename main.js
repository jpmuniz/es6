
class Usuario {
    constructor(senha, email) {
        this.senha = senha
        this.email = email
    }

    mostraUsuario() {
        return this.email + this.senha
    }
}


class Admin extends Usuario {

    idAdmin() {
        const isAdmin = true
        return isAdmin
    }
}

const adm = new Admin(12345, "jpmuniz88@gmail.com")

console.log(adm.mostraUsuario())
console.log(adm.idAdmin())

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idade = usuarios.map(usuario =>{
    return usuario.idade 
})

console.log(idade)



const acima18WorkInRocketSeat = usuarios.filter(usuario=>{
    return usuario.idade >18 && usuario.empresa ==="Rocketseat"
})

console.log(acima18WorkInRocketSeat)