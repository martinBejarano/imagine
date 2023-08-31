<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('image_id')->nullable(false);
            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');
            $table->string('first_name')->nullable(false);
            $table->string('last_name')->nullable(false);
            $table->string('role')->nullable(false);
            $table->string('description')->nullable(false);
            $table->string('linkedin_url')->nullable(false);
            $table->string('twitter_url')->nullable(false);
            $table->string('facebook_url')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
