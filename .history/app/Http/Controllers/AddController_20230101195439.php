<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meditation;
use App\Models\Sleep;
use App\Models\Weight;
use App\Models\User;

use Carbon\Carbon;



class AddController extends Controller
{
    function index(){
        $json = file_get_contents("php://input");
        $data = json_decode($json,true);

        \Log::debug('[AddController,data]',[$data]);
        \Log::debug('[AddController,data]',[$data['sleep']]);

        $user=User::where('id',1)->first();
        $user_id=$user->id;

        if(!$data['sleep']==null){
            Sleep::create([
                'user_id'=>$user_id,
                'bedInTime'=>$data['sleep'],
            ]);
        }







        response()->json();
    }
}




//[meditation,sleep,weightDate,weight
