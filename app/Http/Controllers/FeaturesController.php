<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\Image;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeaturesController extends Controller
{
    //
    public function index(Request $req)
    {
        return Inertia::render('Features/Edit', ['features' => Feature::all(), 'images' => Image::all()]);
    }

    public function store(Request $req)
    {
        $validatedData = $req->validate([
            'image_id' => 'required|numeric',
            'title' => 'required|string',
            'description' => 'required|string',
            'link_url' => 'required|url'
        ]);

        $feature = Feature::create($validatedData);

        return to_route('features');
    }

    public function update(Request $req)
    {
        $validatedData = $req->validate([
            'id' => 'required|numeric|exists:features,id',
            'image_id' => 'numeric|exists:images,id',
            'title' => 'string',
            'description' => 'string',
            'link_url' => 'url'
        ]);

        Feature::where('id', $req->id)->update($validatedData);

        // $feature = Feature::create($validatedData);

        // return response()->json(['ok' => true], 200);
        return to_route('features');
    }

    public function destroy(Request $req)
    {
        $validatedData = $req->validate([
            'id' => 'required|numeric|exists:features,id'
        ]);

        // Feature::find($req->id)->delete();
        Feature::destroy($req->id);

        return to_route('features');
    }
}
