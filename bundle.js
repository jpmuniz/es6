"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(senha, email) {
    _classCallCheck(this, Usuario);

    this.senha = senha;
    this.email = email;
  }

  _createClass(Usuario, [{
    key: "mostraUsuarioo",
    value: function mostraUsuarioo() {
      return this.email + this.senha;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin() {
    _classCallCheck(this, Admin);

    return _possibleConstructorReturn(this, _getPrototypeOf(Admin).apply(this, arguments));
  }

  _createClass(Admin, [{
    key: "idAdmin",
    value: function idAdmin() {
      var isAdmin = true;
      return isAdmin;
    }
  }]);

  return Admin;
}(Usuario);

var adm = new Admin(12345, "jpmuniz88@gmail.com");
console.log(adm.mostraUsuarioo());
console.log(adm.idAdmin());
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idade = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idade);
var above18WorkInRocketSeat = usuarios.filter(function (usuario) {
  return usuario.idade > 18 && usuario.empresa === "Rocketseat";
});
console.log(above18WorkInRocketSeat);
var workAtGoogle = usuarios.find(function (usuario) {
  return usuario.empresa === "Google";
});
console.log(workAtGoogle);
var ageX2 = usuarios.filter(function (usuario) {
  usuario.idade = usuario.idade * 2;
  return usuario.idade < 49;
});
console.log(ageX2);
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr);
var usuario = {
  nome: 'Joao Pedro',
  idade: 30
};

var mostraIdade = function mostraIdade(_ref) {
  var idade = _ref.idade;
  return idade;
};

console.log(mostraIdade(usuario));

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Joao Pedro';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario('Joao Pedro', 20));
console.log(mostraUsuario(30));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var empresa = {
  nome: 'cranio_developer',
  endereco: {
    cidade: 'Belo Horizonte',
    estado: 'MG'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado);

var mostraInfo = function mostraInfo(_ref2) {
  var nome = _ref2.nome,
      idade = _ref2.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

console.log(mostraInfo({
  nome: 'Joao Pedro',
  idade: 30
}));
var arrayS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var x = arrayS[0],
    y = arrayS.slice(1);
console.log(x);
console.log(y);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2));

function show() {
  var nome = "Joao Pedro";
  var idade = 30;
  var profissao = "developer fullstack javaScript";
  console.log("".concat(nome, " tem ").concat(idade, " anos, profissao ").concat(profissao));
}

show();

function mudaNome() {
  var usuario = {
    nome: 'Joao Pedro',
    idade: 30,
    endereco: {
      cidade: 'Belo Horizonte',
      uf: 'MG',
      pais: 'Brasil'
    }
  };

  var usuario1 = _objectSpread({}, usuario, {
    nome: 'Pedro'
  });

  console.log(usuario1);
}

mudaNome();

function shortObject() {
  var nome = "Joao Pedro";
  var idade = 30;
  var user = {
    nome: nome,
    idade: idade,
    profissao: "Web developer"
  };
  console.log(user);
}

shortObject();
