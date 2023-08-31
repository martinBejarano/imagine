<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_id',
        'name',
        'testimonial',
    ];

    protected $appends = ['image'];
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
}
