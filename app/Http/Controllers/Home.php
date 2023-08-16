<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// use Illuminate\Support\Facades\Route;


class Home extends Controller
{
    public function index(Request $req)
    {

        // $allRoutes = Route::getRoutes()->get();
        // echo $allRoutes;

        return Inertia::render('Home');
    }
}