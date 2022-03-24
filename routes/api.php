<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Ruta para crear una nueva partida
Route::post('/game', function (Request $request) {

    $objGame = new GameController();

    $name = $request['name'];
    $code = $request['code'];
    $type = $request['type'];

    if ($type == 'new') {
        $game = $objGame->registerGame($name);
    }elseif ($type == 'two-player') {
        $game = $objGame->joinGame($name, $code);
    }else{
        $game = 'Ocurrió un error inesperado, por favor actualice e intente nuevamente.';
    }

    
    return json_encode($game);
});