class Usuario {
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }

    isAdmin(){
        return 
    }
}

class Admin extends Usuario{
    this.admin = true
}

const adm = new Admin('jp@gmai.com', 1234)

console.log(adm)

console.log('function')