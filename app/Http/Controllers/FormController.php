<?php

namespace App\Http\Controllers;

use App\Mail\FormMail;
use App\Rules\Recaptcha;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FormController extends Controller
{
    //
    public function send(Request $req)
    {
        $validatedData = $req->validate([
            'first_name' => 'required|string|min:1',
            'last_name' => 'required|string|min:1',
            'email' => 'required|string|email|min:1',
            'message' => 'required|string|min:1',
            'g-recaptcha-response' => [
                'required',
                new Recaptcha()
            ]
        ]);

        // return response()->json($validatedData, 200);

        Mail::to('contact@martinbejarano.me')->send(new FormMail($validatedData));


        return to_route('home');
    }
}
