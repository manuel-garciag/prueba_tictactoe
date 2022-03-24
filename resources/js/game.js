"use strict";

/**
 * Funcion para validar que se ingrese correctamente a la partida
 */
window.validateGame = function () {
    let codGame = localStorage.getItem("game");
    let player = localStorage.getItem("player");
    let typeGame = localStorage.getItem("typeGame");

    console.log(codGame);
    console.log(player);
    console.log(typeGame);

    if (codGame === null || player === null || typeGame === null) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrio un error inesperado al unirse a la partida, sera redireccionado al inicio.",
        });
        setTimeout(() => {
            location.href = "/";
        }, 2500);
    }
};

/**
 * Funcion para marcar el campo en el tablero de juego
 * @param {*} this
 */
window.setFrame = function (obj) {
    console.log(obj.id);
};

/**
 * Funciones que se inician automaticamente
 */
window.onload = validateGame();
