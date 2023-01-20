<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sleep;
use App\Models\Weight;
use App\Models\User;

use Carbon\Carbon;


class ListController extends Controller
{
    function index(){
        $sleeps=Sleep::all();
        $meditations=Meditation::all();
        $weights=Weight::all();

        $sleepList=[];
        foreach($sleeps as $sleep){
            $sleepList[]=array(
                'date'=>$sleep[i]->bedInTime,
            );
        }

        $meditationList=[];
        foreach($meditations as $meditation){
            $meditationList[]=array(
                'date'=>$meditation[i]->date,
            );
        }

        $weightList=[];
        foreach($weights as $weight){
            $weightList[]=array(
                'date'=>$weight[i]->date,
                'weight'=>$weight[i]->weight,
            );
        }


        return response()->json([
            '$sleepList'=>$sleepList,
            'meditationList'=>$meditationList,
            'weightList'=>$weightList,
        ]);
    }
}
