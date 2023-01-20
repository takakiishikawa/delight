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

        ])
    }
}


function fixList(){
    $fixedArray=WordFix::where('fix_id',1)->get();
    $unfixedArray=WordFix::where('fix_id',2)->get();

    $fixedList=[];
    for($i=0; $i < count($fixedArray);$i++){
        $typeRecord=Type::where('id',$fixedArray[$i]->type_id)->first();
        $type=$typeRecord->type;

        $parseRecord=Parse::where('id',$fixedArray[$i]->parse_id)->first();
        $parse=$parseRecord->parse;

        $fixedList[]=array(
            'id'=>$fixedArray[$i]->id,
            'eng'=>$fixedArray[$i]->eng,
            'jpn1'=>$fixedArray[$i]->jpn1,
            'jpn2'=>$fixedArray[$i]->jpn2,
            'jpn3'=>$fixedArray[$i]->jpn3,
            'type'=>$type,
            'parse'=>$parse,
            'created_at'=>$fixedArray[$i]->created_at->format('y/m/d'),
        );
    }
