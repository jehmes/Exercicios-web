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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/modulos/moduloA.js
var moduloA = __webpack_require__(6);

// CONCATENATED MODULE: ./src/pessoa.js


class Pessoa {
    cumprimentar() {
        return 'Bom dia'
    }
}
// EXTERNAL MODULE: ./src/assets/css/estilo.css
var estilo = __webpack_require__(4);

// EXTERNAL MODULE: ./src/assets/scss/index.scss
var scss = __webpack_require__(2);

// CONCATENATED MODULE: ./src/assets/index.js


// CONCATENATED MODULE: ./src/principal.js
//A sequencia de chamadas no webpack ta assim: 1-principal.js 2-pessoa.js 3-moduloA  4-moduloB
//tanto faz usar o module.exports ou export default, qlqr um dos exports e imports do node ou ecma pode ser usado juntos, mas é boa pratica



  //esse comentario na direta sao exemplos                             //import './assets/css/estilo.css'    //o 1° comentario tbm funciona se vc colocar em sequencia os imports. Mas dessse jeito que esta escrito neessa linha de comnentario tbm funciona
 //aqui foi criado um index.js com os arquivos css e scss                                                                                        //pq no arquivo webpack está esse arquivo como principal, então ele consegue mapear todos os imports que estiverem nele

const atendente = new Pessoa
console.log(atendente.cumprimentar())

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

//Aqui é o ultimo arquivo q vai ser chamado la no webpack
module.exports = {
    saudacao() { return 'ola eu sou o modulo b' }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const moduloB = __webpack_require__(5) 
console.log(moduloB.saudacao())

/***/ })
/******/ ]);