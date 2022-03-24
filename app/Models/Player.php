<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Player extends Model
{
    use HasFactory;

    public static function registerPlayer($name = null)
    {
        $id = DB::table('players')->insertGetId([
            'name' => $name
        ]);
        return $id;
    }
}
