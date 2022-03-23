<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_rooms', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('game_id')->unsigned(); //Foranea con la tabla de partidas
            $table->unsignedBigInteger('player_one_id')->unsigned(); //Foranea con la tabla de jugadores  (Jug. 1)
            $table->unsignedBigInteger('player_two_id')->unsigned(); //Foranea con la tabla de jugadores  (Jug. 2)
            $table->tinyInteger('turn')->default(1)->comment('Jugador que tiene el turno de marcar en el tablero - 1 ò 2');
            $table->tinyInteger('status')->default(1)->comment('0 Inactivo | 1 Activo');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

            $table->foreign('game_id')->references('id')->on('games')->nullable(false); 
            $table->foreign('player_one_id')->references('id')->on('players')->nullable(false); 
            $table->foreign('player_two_id')->references('id')->on('players'); 

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_rooms');
    }
};
