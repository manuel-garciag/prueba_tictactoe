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
    }else if('two-player'){
        //Unirse a partida
        titleModal = 'Unirse a partida';
        namePlayer = 'Jugador 2';

        modalInputCodGame.classList.remove("d-none");
    }

    //Set de los valores en base al tipo de partida
    modalTitle.innerHTML = titleModal;
    modalCodGame.value = '';
    modalNamePlayer.value = namePlayer;

    // Modal
    let myModal = new bootstrap.Modal(document.getElementById('gameModal'), {});
    myModal.show()

}