"use strict";

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
    key: "mostraUsuario",
    value: function mostraUsuario() {
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
console.log(adm.mostraUsuario());
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
var acima18WorkInRocketSeat = usuarios.filter(function (usuario) {
  return usuario.idade > 18 && usuario.empresa === "Rocketseat";
});
console.log(acima18WorkInRocketSeat);
