/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Usuario =\n/*#__PURE__*/\nfunction () {\n  function Usuario(email, senha) {\n    _classCallCheck(this, Usuario);\n\n    this.email = email;\n    this.senha = senha;\n  }\n\n  _createClass(Usuario, [{\n    key: \"isAdmin\",\n    value: function isAdmin() {\n      return this.admin;\n    }\n  }]);\n\n  return Usuario;\n}();\n\nvar Admin =\n/*#__PURE__*/\nfunction (_Usuario) {\n  _inherits(Admin, _Usuario);\n\n  function Admin() {\n    var _this;\n\n    _classCallCheck(this, Admin);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));\n    _this.admin = true;\n    return _this;\n  }\n\n  return Admin;\n}(Usuario);\n\nvar adm = new Admin('jp@gmai.com', 1234);\nadm.admin = true;\nconsole.log('ADM', adm.isAdmin());\nvar user = new Usuario('jp@gmail.com', 1234);\nuser.admin = false;\nconsole.log('User', user.isAdmin());\nvar usuarios = [{\n  nome: 'Joao Pedro',\n  idade: 30,\n  empresa: 'Gosat'\n}, {\n  nome: 'Pedro Henrique',\n  idade: 29,\n  empresa: 'Dr suspensao'\n}, {\n  nome: 'Luiz Fernando',\n  idade: 24,\n  empresa: 'Artista'\n}];\nvar idade = usuarios.map(function (usuario) {\n  return usuario.idade;\n});\nconsole.log('map', idade);\nvar workAtGosat = usuarios.filter(function (usuario) {\n  return usuario.idade > 29 && usuario.empresa === 'Gosat';\n});\nconsole.log('filter', workAtGosat);\nvar workAtGoogle = usuarios.find(function (usuario) {\n  return usuario.empresa === 'Google';\n});\nconsole.log('find', workAtGoogle);\nvar maxAge50yearOld = usuarios.filter(function (usuario) {\n  usuario.idade = usuario.idade * 2;\n  return usuario.idade < 49;\n});\nconsole.log('unindo acoes', maxAge50yearOld);\nvar arr = [1, 2, 3, 4, 5];\nvar arrPlus10 = arr.map(function (item) {\n  return item + 10;\n});\nconsole.log(arrPlus10);\nvar usuario = {\n  nome: 'Joao Pedro',\n  idade: 30\n};\n\nvar mostraIdade = function mostraIdade(usuario) {\n  return usuario.idade;\n};\n\nconsole.log(mostraIdade(usuario));\nvar nome = 'Joao Pedro';\nvar age = 30;\n\nvar mostraUsuario = function mostraUsuario() {\n  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'joao';\n  var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;\n  return {\n    nome: nome,\n    age: age\n  };\n};\n\nconsole.log(mostraUsuario('Pedro', 29));\nvar empresa = {\n  name: 'Gosat',\n  endereco: {\n    rua: 'Fernandes Tourinho',\n    numero: 570\n  }\n};\nvar name = empresa.name,\n    _empresa$endereco = empresa.endereco,\n    rua = _empresa$endereco.rua,\n    numero = _empresa$endereco.numero;\nconsole.log(name);\nconsole.log(rua);\nconsole.log(numero);\n\nfunction monstaInfo(_ref) {\n  var nome = _ref.nome,\n      idade = _ref.idade;\n  return \"\".concat(nome, \" tem \").concat(idade, \" anos\");\n}\n\nconsole.log(monstaInfo({\n  nome: 'joao',\n  idade: 30\n}));\nvar arrS = [1, 2, 3, 4, 5, 6];\nvar x = arrS[0],\n    y = arrS.slice(1);\nconsole.log(x);\nconsole.log(y);\n\nfunction soma() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  return params.reduce(function (total, next) {\n    return total + next;\n  });\n}\n\nconsole.log(soma(1, 3));\n\nfunction reName() {\n  var usuariooo = {\n    nome: 'joao',\n    idade: 30,\n    endereco: {\n      cidade: 'BH',\n      uf: 'BH',\n      pais: 'Brasil'\n    }\n  };\n\n  var usuario4 = _objectSpread({}, usuariooo, {\n    nome: 'Pedro'\n  });\n\n  console.log(usuario4);\n}\n\nreName();\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });