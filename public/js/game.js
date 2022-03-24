/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/game.js":
/*!******************************!*\
  !*** ./resources/js/game.js ***!
  \******************************/
/***/ (() => {

eval("\n/**\r\n * Funcion para validar que se ingrese correctamente a la partida\r\n */\n\nwindow.validateGame = function () {\n  var codGame = localStorage.getItem(\"game\");\n  var player = localStorage.getItem(\"player\");\n  var typeGame = localStorage.getItem(\"typeGame\");\n  console.log(codGame);\n  console.log(player);\n  console.log(typeGame);\n\n  if (codGame === null || player === null || typeGame === null) {\n    Swal.fire({\n      icon: \"error\",\n      title: \"Oops...\",\n      text: \"Ocurrio un error inesperado al unirse a la partida, sera redireccionado al inicio.\"\n    });\n    setTimeout(function () {\n      location.href = \"/\";\n    }, 2500);\n  }\n};\n/**\r\n * Funcion para marcar el campo en el tablero de juego\r\n * @param {*} this\r\n */\n\n\nwindow.setFrame = function (obj) {\n  console.log(obj.id);\n};\n/**\r\n * Funciones que se inician automaticamente\r\n */\n\n\nwindow.onload = validateGame();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUViO0FBQ0E7QUFDQTs7QUFDQUEsTUFBTSxDQUFDQyxZQUFQLEdBQXNCLFlBQVk7QUFDOUIsTUFBSUMsT0FBTyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBZDtBQUNBLE1BQUlDLE1BQU0sR0FBR0YsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBQWI7QUFDQSxNQUFJRSxRQUFRLEdBQUdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFmO0FBRUFHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixPQUFaO0FBQ0FLLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaOztBQUVBLE1BQUlKLE9BQU8sS0FBSyxJQUFaLElBQW9CRyxNQUFNLEtBQUssSUFBL0IsSUFBdUNDLFFBQVEsS0FBSyxJQUF4RCxFQUE4RDtBQUMxREcsSUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsTUFBQUEsSUFBSSxFQUFFLE9BREE7QUFFTkMsTUFBQUEsS0FBSyxFQUFFLFNBRkQ7QUFHTkMsTUFBQUEsSUFBSSxFQUFFO0FBSEEsS0FBVjtBQUtBQyxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiQyxNQUFBQSxRQUFRLENBQUNDLElBQVQsR0FBZ0IsR0FBaEI7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7QUFDSixDQW5CRDtBQXFCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FoQixNQUFNLENBQUNpQixRQUFQLEdBQWtCLFVBQVVDLEdBQVYsRUFBZTtBQUM3QlgsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQUcsQ0FBQ0MsRUFBaEI7QUFDSCxDQUZEO0FBSUE7QUFDQTtBQUNBOzs7QUFDQW5CLE1BQU0sQ0FBQ29CLE1BQVAsR0FBZ0JuQixZQUFZLEVBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2dhbWUuanM/YTZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBGdW5jaW9uIHBhcmEgdmFsaWRhciBxdWUgc2UgaW5ncmVzZSBjb3JyZWN0YW1lbnRlIGEgbGEgcGFydGlkYVxyXG4gKi9cclxud2luZG93LnZhbGlkYXRlR2FtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBjb2RHYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lXCIpO1xyXG4gICAgbGV0IHBsYXllciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyXCIpO1xyXG4gICAgbGV0IHR5cGVHYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0eXBlR2FtZVwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb2RHYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHBsYXllcik7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlR2FtZSk7XHJcblxyXG4gICAgaWYgKGNvZEdhbWUgPT09IG51bGwgfHwgcGxheWVyID09PSBudWxsIHx8IHR5cGVHYW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJPb3BzLi4uXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiT2N1cnJpbyB1biBlcnJvciBpbmVzcGVyYWRvIGFsIHVuaXJzZSBhIGxhIHBhcnRpZGEsIHNlcmEgcmVkaXJlY2Npb25hZG8gYWwgaW5pY2lvLlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAgICAgfSwgMjUwMCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRnVuY2lvbiBwYXJhIG1hcmNhciBlbCBjYW1wbyBlbiBlbCB0YWJsZXJvIGRlIGp1ZWdvXHJcbiAqIEBwYXJhbSB7Kn0gdGhpc1xyXG4gKi9cclxud2luZG93LnNldEZyYW1lID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgY29uc29sZS5sb2cob2JqLmlkKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGdW5jaW9uZXMgcXVlIHNlIGluaWNpYW4gYXV0b21hdGljYW1lbnRlXHJcbiAqL1xyXG53aW5kb3cub25sb2FkID0gdmFsaWRhdGVHYW1lKCk7XHJcbiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJ2YWxpZGF0ZUdhbWUiLCJjb2RHYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBsYXllciIsInR5cGVHYW1lIiwiY29uc29sZSIsImxvZyIsIlN3YWwiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwidGV4dCIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsImhyZWYiLCJzZXRGcmFtZSIsIm9iaiIsImlkIiwib25sb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/game.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/game.js"]();
/******/ 	
/******/ })()
;