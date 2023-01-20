<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sleep;
use App\Models\Weight;
use App\Models\Meditation;

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
                'date'=>$sleep->bedInTime->format('m/d/h/i'),
            );
        }

        $meditationList=[];
        foreach($meditations as $meditation){
            $meditationList[]=array(
                'date'=>$meditation->date,
            );
        }

        $weightList=[];
        foreach($weights as $weight){
            $weightList[]=array(
                'date'=>$weight->date,
                'weight'=>$weight->weight,
            );
        }


        return response()->json([
            '$sleepList'=>$sleepList,
            'meditationList'=>$meditationList,
            'weightList'=>$weightList,
        ]);
    }
}


'created_at'=>$fixedArray[$i]->created_at->format('y/m/d'),
