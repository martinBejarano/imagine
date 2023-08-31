<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MembersController extends Controller
{
    public function index(Request $req)
    {
        return Inertia::render('Members/Edit', ['members' => Member::all(), 'images' => Image::all()]);
    }

    public function store(Request $req)
    {
        $validatedData = $req->validate([
            'image_id' => 'required|numeric|exists:images,id',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'role' => 'required|string',
            'description' => 'required|string',
            'linkedin_url' => 'required|url',
            'twitter_url' => 'required|url',
            'facebook_url' => 'required|url'
        ]);

        $feature = Member::create($validatedData);

        return to_route('members');
    }

    public function update(Request $req)
    {

        $validatedData = $req->validate([
            'id' => 'required|numeric|exists:features,id',
            'image_id' => 'required|numeric|exists:images,id',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'role' => 'required|string',
            'description' => 'required|string',
            'linkedin_url' => 'required|url',
            'twitter_url' => 'required|url',
            'facebook_url' => 'required|url'
        ]);

        Member::where('id', $req->id)->update($validatedData);

        return to_route('members');
    }

    public function destroy(Request $req)
    {
        $validatedData = $req->validate([
            'id' => 'required|numeric|exists:members,id'
        ]);

        // Feature::find($req->id)->delete();
        Member::destroy($req->id);

        return to_route('members');
    }
}
