class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }

    isAdmin() {
        return this.admin
    }
}

class Admin extends Usuario {
    constructor() {
        super()
        this.admin = true
    }
}

const adm = new Admin('jp@gmai.com', 1234)
adm.admin = true
console.log('ADM', adm.isAdmin())

const user = new Usuario('jp@gmail.com', 1234)
user.admin = false
console.log('User', user.isAdmin())

const usuarios = [
    {
        nome: 'Joao Pedro', idade: 30, empresa: 'Gosat'
    },
    {
        nome: 'Pedro Henrique', idade: 29, empresa: 'Dr suspensao'
    },
    {
        nome: 'Luiz Fernando', idade: 24, empresa: 'Artista'
    }
]

const idade = usuarios.map(usuario => {
    return usuario.idade
})

console.log('map', idade)

const workAtGosat = usuarios.filter(usuario => {
    return usuario.idade > 29 && usuario.empresa === 'Gosat'
})

console.log('filter', workAtGosat)

const workAtGoogle = usuarios.find(usuario => {
    return usuario.empresa === 'Google'
})

console.log('find', workAtGoogle)

const maxAge50yearOld = usuarios.filter(usuario => {
    usuario.idade = usuario.idade * 2
    return usuario.idade < 49
})

console.log('unindo acoes', maxAge50yearOld)

const arr = [1, 2, 3, 4, 5];
const arrPlus10 = arr.map(item => {
    return item + 10;
});

console.log(arrPlus10)

const usuario = { nome: 'Joao Pedro', idade: 30 };
const mostraIdade = (usuario) => {
    return usuario.idade;
}

console.log(mostraIdade(usuario));

const nome = 'Joao Pedro'
const age = 30

const mostraUsuario = (nome = 'joao', age = 30) => {
    return { nome, age }
}

console.log(mostraUsuario('Pedro', 29))

const empresa = {
    name: 'Gosat',
    endereco: {
        rua: 'Fernandes Tourinho',
        numero: 570
    }
}

const { name, endereco: { rua, numero } } = empresa

console.log(name)
console.log(rua)
console.log(numero)

function monstaInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos`
}

console.log(monstaInfo({ nome: 'joao', idade: 30 }))

const arrS = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arrS

console.log(x)
console.log(y)


function soma(...params) {
    return params.reduce((total, next) => total + next)
}
console.log(soma(1, 3))

function reName(){
    const usuariooo = {
        nome: 'joao',
        idade: 30,
        endereco: {
            cidade: 'BH',
            uf: 'BH',
            pais: 'Brasil',
        }
    };
    
    
    const usuario4 = {...usuariooo, nome:'Pedro'} 
    console.log(usuario4)
}

reName()