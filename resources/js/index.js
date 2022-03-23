'use strict'

window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

/**
 * Funcion para mostrar el modal para el tipo de partida que se va a iniciar
 * @param {string} type Tipo de partida
 */
window.game = function (type) {

    // Variables para cambiar el tipo de partida
    let titleModal = '';
    let namePlayer = '';

    //Elementos para ajustar el tipo de partida
    let modalTitle = document.getElementById('gameModalLabel');
    let modalNamePlayer = document.getElementById('namePlayer');
    let modalInputCodGame = document.getElementById('inputCodGame');
    let modalCodGame = document.getElementById('codGame');

    if (type == 'new') {
        //Partida Nueva
        titleModal = 'Nueva Partida';
        namePlayer = 'Jugador 1';

        modalInputCodGame.classList.add("d-none");
        localStorage.setItem('typeGame', 'new');
    }else if('two-player'){
        //Unirse a partida
        titleModal = 'Unirse a partida';
        namePlayer = 'Jugador 2';

        modalInputCodGame.classList.remove("d-none");
        localStorage.setItem('typeGame', 'two-player');
    }

    //Set de los valores en base al tipo de partida
    modalTitle.innerHTML = titleModal;
    modalCodGame.value = '';
    modalNamePlayer.value = namePlayer;

    // Modal
    let myModal = new bootstrap.Modal(document.getElementById('gameModal'), {});
    myModal.show()

}

/**
 * Funcion para iniciar el juego TIC TAC TOE
 */
window.startGame = function () {

    //Elementos
    let inputNamePlayer = document.getElementById('namePlayer');
    let inputCodGame = document.getElementById('codGame');

    //Variables
    let type = localStorage.getItem('typeGame');
    let namePlayer = inputNamePlayer.value;
    let codGame = inputCodGame.value;


    console.log(type);
    console.log(namePlayer);
    console.log(codGame);

    if (namePlayer == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor digita un nombre de jugador para continuar.',
          })
          return;
    }

    if (type == 'two-player' && codGame == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor digita un código de partida para continuar.',
          })
          return;
    }

    console.log('Partida Encontrada');

}