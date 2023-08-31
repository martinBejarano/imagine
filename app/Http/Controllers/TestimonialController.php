<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use App\Models\Testimonial;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    //
    public function index(Request $req)
    {
        return Inertia::render('Testimonials/Edit', ['testimonials' => Testimonial::all(), 'images' => Image::all()]);
    }

    public function store(Request $req)
    {
        $validatedData = $req->validate([
            'image_id' => 'required|numeric',
            'name' => 'required|string',
            'testimonial' => 'required|string',
        ]);

        $testimonial = Testimonial::create($validatedData);
        return to_route('testimonials');
    }

    public function update(Request $req)
    {
        $validatedData = $req->validate([
            'id' => 'required|numeric|exists:features,id',
            'image_id' => 'numeric|exists:images,id',
            'name' => 'string',
            'testimonial' => 'string',
        ]);

        Testimonial::where('id', $req->id)->update($validatedData);

        return to_route('testimonials');
    }

    public function destroy(Request $req)
    {
        $validatedData = $req->validate([
            'id' => 'required|numeric|exists:testimonials,id'
        ]);

        Testimonial::destroy($req->id);

        return to_route('testimonials');
    }
}
