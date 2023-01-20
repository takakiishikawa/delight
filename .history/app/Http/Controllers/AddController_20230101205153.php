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
        \Log::debug('[AddController,data[sleep]]',[$data['sleep']]);

        $carbon = new Carbon('2017-01-01 12:30:30');
        echo $carbon->addSeconds(2) . '<br>';  // 2017-01-01 12:30:32
        echo $carbon->addMinutes(2) . '<br>';  // 2017-01-01 12:32:32
        echo $carbon->addHours(2) . '<br>';    // 2017-01-01 14:32:32

        $sleepUtc=new Carbon($data['sleep']);
        $meditation=new Carbon($data['meditation']);
        $weightDate=new Carbon($data['weightDate']);

        $$sleep=$sleepUtc->addHours(9);
        \Log::debug('[AddController,data[sleep]]',[$sleep]);


        $user=User::where('id',1)->first();
        $user_id=$user->id;

        if(!$data['sleep']==null){
            Sleep::create([
                'user_id'=>$user_id,
                'bedInTime'=>$sleep,
            ]);
        }

        if(!$data['meditation']==null){
            Meditation::create([
                'user_id'=>$user_id,
                'date'=>$meditation,
            ]);
        }

        if(!$data['weightDate']==null){
            Weight::create([
                'user_id'=>$user_id,
                'date'=>$weightDate,
                'weight'=>$data['weight'],
            ]);
        }







        response()->json();
    }
}




//[meditation,sleep,weightDate,weight
