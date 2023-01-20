<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meditation;
use App\Models\Sleep;
use App\Http\Middleware\Models\Weight;


class AddController extends Controller
{
    function index(){
        $json = file_get_contents("php://input");
        $data = json_decode($json,true);

        \Log::debug('[AddController,data]',[$data]);
        \Log::debug('[AddController,data]',[$data['meditation']]);

        if(!$data['meditation']==null){
            Meditation::create([
                'date'=>$data['meditation'],
            ]);
        }







        response()->json();
    }
}




//[meditation,sleep,weightDate,weight
