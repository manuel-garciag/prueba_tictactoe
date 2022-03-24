<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Game extends Model
{
    use HasFactory;

    /**
     * Registramos una nueva partida
     */
    public static function registerGame()
    {
        $id = DB::table('games')->insertGetId([]);
        return $id;
    }

    /**
     * Consultamos si existe una partida
     */
    public static function getGame(int $id = null)
    {
        $result = DB::table('games')
            ->where('id', $id)
            ->where('status', 1)
            ->get();
        return $result;
    }
}
