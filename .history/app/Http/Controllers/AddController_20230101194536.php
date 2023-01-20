<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meditation;
use App\Models\Sleep;
use App\Models\Weight;
use App\Models\User;



class AddController extends Controller
{
    function index(){
        $json = file_get_contents("php://input");
        $data = json_decode($json,true);

        \Log::debug('[AddController,data]',[$data]);
        \Log::debug('[AddController,data]',[$data['meditation']]);

        $user=User::where('id',1)->first();
        $user_id=$user->id;

        if(!$data['meditation']==null){
            Meditation::create([
                'user_id'=>$user_id,
                'date'=>$data['meditation'],
            ]);
        }







        response()->json();
    }
}




//[meditation,sleep,weightDate,weight
