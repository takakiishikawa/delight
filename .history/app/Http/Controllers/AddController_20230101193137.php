<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddController extends Controller
{
    function index(){
        $json = file_get_contents("php://input");
        $data = json_decode($json,true);

        \Log::debug('[AddController,data]',[$data]);


        response()->json();
    }
}




//[meditation,sleep,weightDate,weight
