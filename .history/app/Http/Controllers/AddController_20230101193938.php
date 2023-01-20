<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\Meditation;
use App\Http\Models\Sleep;
use App\Http\Models\Weight;


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
