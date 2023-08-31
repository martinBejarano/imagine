<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\Member;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

// use Illuminate\Support\Facades\Route;
// use Illuminate\Support\Facades\Route;


class HomeController extends Controller
{
    public function index(Request $req)
    {

        // $allRoutes = Route::getRoutes()->get();
        // echo $allRoutes;

        return Inertia::render('Home', ['features' => Feature::all(), 'members' => Member::all(), 'testimonials' => Testimonial::all()]);
    }
}
