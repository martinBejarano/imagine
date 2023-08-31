<?php

use App\Http\Controllers\FeaturesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AssetsController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\MembersController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestimonialController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::post('/form', [FormController::class, 'send']);

Route::middleware('auth')->group(function () {
    Route::get('/features', [FeaturesController::class, 'index'])->name('features');
    Route::post('/features/create', [FeaturesController::class, 'store'])->name('features.create');
    Route::post('/features/update', [FeaturesController::class, 'update'])->name('features.update');
    Route::post('/features/delete', [FeaturesController::class, 'destroy'])->name('features.delete');
});

Route::middleware('auth')->group(function () {
    Route::get('/assets', [AssetsController::class, 'index'])->name('assets');
    Route::post('/assets/store', [AssetsController::class, 'store'])->name('assets.store');
    Route::post('/assets/update', [AssetsController::class, 'update'])->name('assets.update');
    Route::post('/assets/delete', [AssetsController::class, 'destroy'])->name('assets.delete');
});

Route::middleware('auth')->group(function () {
    Route::get('/members', [MembersController::class, 'index'])->name('members');
    Route::post('/members/create', [MembersController::class, 'store'])->name('members.create');
    Route::post('/members/update', [MembersController::class, 'update'])->name('members.update');
    Route::post('/members/delete', [MembersController::class, 'destroy'])->name('members.delete');
});

Route::middleware('auth')->group(function () {
    Route::get('/testimonials', [TestimonialController::class, 'index'])->name('testimonials');
    Route::post('/testimonials/create', [TestimonialController::class, 'store'])->name('testimonials.create');
    Route::post('/testimonials/update', [TestimonialController::class, 'update'])->name('testimonials.update');
    Route::post('/testimonials/delete', [TestimonialController::class, 'destroy'])->name('testimonials.delete');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
