<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Game extends Model
{
    use HasFactory;

    public static function registerGame()
    {
        $id = DB::table('games')->insertGetId([]);
        return $id;
    }
}
