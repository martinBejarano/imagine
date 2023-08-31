<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_id',
        'first_name',
        'last_name',
        'role',
        'description',
        'linkedin_url',
        'twitter_url',
        'facebook_url'
    ];

    protected $appends = ['image', 'full_name'];

    protected $hidden = [
        'image_id'
    ];
    public function imageObj(): HasMany
    {
        return $this->hasMany(Image::class);
    }

    protected function image(): Attribute
    {
        return new Attribute(
            get: function () {
                return Image::Find($this->attributes['image_id']);
            },
        );
    }

    protected function fullName(): Attribute
    {
        return new Attribute(
            get: function () {
                return $this->attributes['first_name'] . ' ' . $this->attributes['last_name'];
            },
        );
    }
}
