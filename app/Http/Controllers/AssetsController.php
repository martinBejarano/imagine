<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AssetsController extends Controller
{
    public function index(Request $req)
    {
        return Inertia::render('Assets/Edit', ['images' => Image::all()]);
    }
    public function store(Request $req)
    {
        $validatedData = $req->validate([
            'title' => 'required|string',
            'image' => 'required|image',
            'alt' => 'required|string'
        ]);


        $path = public_path('images/');
        $imageName = time() . '.' . $req->image->extension();
        $req->image->move($path, $imageName);

        Image::create([
            'title' => $req->title,
            'name' => $imageName,
            'alt' => $req->alt
        ]);

        return to_route('assets');
    }

    public function update(Request $req)
    {
    }

    public function destroy(Request $req)
    {
        $validatedData = $req->validate([
            'id' => 'required|numeric|exists:images,id'
        ]);


        $image = Image::find($req->id);
        $filePath = 'images/' . $image->name;
        File::delete($filePath);
        $image->delete();
        return redirect()->route('assets');
    }
}
