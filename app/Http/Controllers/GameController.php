<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\Player;
use Illuminate\Http\Request;

class GameController extends Controller
{
    /**
     *  Metodo para crear una nueva partida
     * @param string $name - Nombre del jugador que registra la partida
     */
    public static function registerGame(string $name = null)
    {

        $data = ['error' => 'Ocurrio un error al registrar la partida, por favor actualice e intente nuevamente.'];

        if (!empty($name)) {
            $game = Game::registerGame();
            
            if (!empty($game)) {

                $player = Player::registerPlayer($name);
                
                if (!empty($player)) {
                    $data = [
                        'game' => $game,
                        'player' => $player,
                        'error' => ''
                    ];
                }
            }
        } else {
            $data = ['error' => 'Por favor digite un nombre de usuario'];
        }

        return $data;
    }

    /**
     *  Metodo para unirse a una nueva partida existente
     * @param string $name - Nombre del jugador que registra la partida
     * @param int $idRoom - Id de la sala a la que nos queremos conectar
     */
    public function joinGame(string $name = null, int $idRoom = null)
    {
        if (!empty($name)) {
            return 'Nombre: ' . $name . ' y Sala:' . $idRoom;
        } else {
            return 'Por favor digite un nombre de usuario.';
        }
    }
}
