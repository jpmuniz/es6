
class Usuario {
    constructor(senha, email) {
        this.senha = senha
        this.email = email
    }

    mostraUsuarioo() {
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

console.log(adm.mostraUsuarioo())
console.log(adm.idAdmin())

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idade = usuarios.map(usuario => {
    return usuario.idade
})

console.log(idade)



const above18WorkInRocketSeat = usuarios.filter(usuario => {
    return usuario.idade > 18 && usuario.empresa === "Rocketseat"
})

console.log(above18WorkInRocketSeat)


const workAtGoogle = usuarios.find(usuario => {
    return usuario.empresa === "Google"
})

console.log(workAtGoogle)

const ageX2 = usuarios.filter(usuario => {
    usuario.idade = usuario.idade * 2
    return usuario.idade < 49
})

console.log(ageX2)

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => {
    return item + 10;
})

console.log(newArr)

const usuario = { nome: 'Joao Pedro', idade: 30 };

const mostraIdade = ({ idade }) => {
    return idade;
}

console.log(mostraIdade(usuario))

const mostraUsuario = (nome = 'Joao Pedro', idade = 30) => {
    return ({ nome, idade })
}

console.log(mostraUsuario('Joao Pedro', 20))

console.log(mostraUsuario(30))

const promise = () => {
    return new Promise(function (resolve, reject) {
        return resolve();
    })
}

const empresa = {
    nome: 'cranio_developer',
    endereco: {
        cidade: 'Belo Horizonte',
        estado: 'MG',
    }
};

const { nome, endereco: { cidade, estado } } = empresa
console.log(nome)
console.log(cidade)
console.log(estado)

const mostraInfo = ({ nome, idade }) => {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Joao Pedro', idade: 30 }))

const arrayS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const [x, ...y] = arrayS

console.log(x)
console.log(y)

function soma(...params) {
    return params.reduce((total, next) => total + next)
}

console.log(soma(1, 2))

function show() {
    const nome = "Joao Pedro"
    const idade = 30
    const profissao = "developer fullstack javaScript"

    console.log(`${nome} tem ${idade} anos, profissao ${profissao}`)
}

show()

function mudaNome() {

    const usuario = {
        nome: 'Joao Pedro',
        idade: 30,
        endereco: {
            cidade: 'Belo Horizonte',
            uf: 'MG',
            pais: 'Brasil',
        }
    };

    const usuario1 = { ...usuario, nome: 'Pedro' }

    console.log(usuario1)

}

mudaNome()

function shortObject(){
    const nome ="Joao Pedro"
    const idade = 30

    const user ={
        nome,
        idade,
        profissao:"Web developer"
    }

    console.log(user)

}

shortObject()